import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/src/utils/cn';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface PremiumInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean;
  icon?: React.ReactNode;
  className?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export function PremiumInput({ 
  label, 
  error, 
  success, 
  icon, 
  className, 
  id,
  ...props 
}: PremiumInputProps) {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div className="w-full space-y-2">
      {label && (
        <label htmlFor={id} className="text-xs font-medium text-muted-foreground uppercase tracking-wider ml-1">
          {label}
        </label>
      )}
      
      <div className="relative group">
        {/* Animated Border/Glow */}
        <motion.div
          initial={false}
          animate={{
            opacity: isFocused ? 1 : 0,
            scale: isFocused ? 1 : 0.98,
          }}
          className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-primary/50 to-violet-500/50 blur-[2px] z-0"
        />

        <div className="relative z-10 flex items-center">
          {icon && (
            <div className="absolute left-3 text-muted-foreground group-focus-within:text-primary transition-colors">
              {icon}
            </div>
          )}
          
          <input
            id={id}
            className={cn(
              "w-full bg-card/50 backdrop-blur-xl border border-border/50 rounded-xl px-4 py-2.5 text-sm transition-all outline-none",
              icon && "pl-10",
              isFocused && "border-transparent bg-card/80",
              error && "border-red-500/50 focus:border-red-500",
              success && "border-green-500/50 focus:border-green-500",
              className
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />

          <div className="absolute right-3 flex items-center gap-2">
            <AnimatePresence>
              {error && (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                  <AlertCircle size={16} className="text-red-500" />
                </motion.div>
              )}
              {success && (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                  <CheckCircle2 size={16} className="text-green-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-[11px] text-red-500 font-medium ml-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
