import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/src/utils/cn';
import { CheckCircle2, AlertCircle, Info, X, Bell } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: string;
  title: string;
  description?: string;
  type: ToastType;
}

interface ToastContextType {
  addToast: (title: string, description?: string, type?: ToastType) => void;
  removeToast: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const addToast = (title: string, description?: string, type: ToastType = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => removeToast(id), 5000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 w-80 pointer-events-none">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="pointer-events-auto"
            >
              <PremiumToastItem toast={toast} onRemove={() => removeToast(toast.id)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
}

function PremiumToastItem({ toast, onRemove }: { toast: Toast; onRemove: () => void }) {
  const icons = {
    success: <CheckCircle2 className="text-green-500" size={20} />,
    error: <AlertCircle className="text-red-500" size={20} />,
    info: <Info className="text-blue-500" size={20} />,
    warning: <Bell className="text-amber-500" size={20} />,
  };

  const backgrounds = {
    success: "border-green-500/20 bg-green-500/5",
    error: "border-red-500/20 bg-red-500/5",
    info: "border-blue-500/20 bg-blue-500/5",
    warning: "border-amber-500/20 bg-amber-500/5",
  };

  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl border backdrop-blur-2xl p-4 shadow-lg flex gap-4 items-start group",
      "bg-card/80 border-border/50",
      backgrounds[toast.type]
    )}>
      <div className="mt-0.5">{icons[toast.type]}</div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-foreground leading-tight">{toast.title}</h4>
        {toast.description && (
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{toast.description}</p>
        )}
      </div>
      <button 
        onClick={onRemove}
        className="text-muted-foreground hover:text-foreground transition-colors p-1 -mr-1"
      >
        <X size={14} />
      </button>
      
      {/* Progress Bar */}
      <motion.div 
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 5, ease: "linear" }}
        className={cn(
          "absolute bottom-0 left-0 h-0.5 opacity-30",
          toast.type === 'success' && "bg-green-500",
          toast.type === 'error' && "bg-red-500",
          toast.type === 'info' && "bg-blue-500",
          toast.type === 'warning' && "bg-amber-500"
        )}
      />
    </div>
  );
}
