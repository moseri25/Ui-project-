import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/src/utils/cn';
import { Sparkles, Loader2, Brain, CheckCircle2, AlertCircle } from 'lucide-react';

type AIState = 'idle' | 'thinking' | 'generating' | 'complete' | 'error';

interface PremiumAIWorkflowProps {
  state: AIState;
  prompt: string;
  response?: string;
}

export function PremiumAIWorkflow({ state, prompt, response }: PremiumAIWorkflowProps) {
  return (
    <div className="w-full max-w-2xl rounded-3xl border border-border/50 bg-card/20 backdrop-blur-2xl p-6 shadow-xl">
      {/* Prompt Display */}
      <div className="mb-6 p-4 rounded-xl bg-background/50 border border-border/30">
        <p className="text-sm text-muted-foreground">Prompt:</p>
        <p className="text-foreground font-medium">{prompt}</p>
      </div>

      {/* Workflow Status */}
      <div className="flex items-center gap-4 mb-6">
        <div className={cn(
          "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500",
          state === 'thinking' || state === 'generating' ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
        )}>
          {state === 'idle' && <Sparkles size={24} />}
          {state === 'thinking' && <Brain size={24} className="animate-pulse" />}
          {state === 'generating' && <Loader2 size={24} className="animate-spin" />}
          {state === 'complete' && <CheckCircle2 size={24} className="text-green-500" />}
          {state === 'error' && <AlertCircle size={24} className="text-red-500" />}
        </div>
        
        <div className="flex-1">
          <h4 className="font-semibold capitalize">{state}</h4>
          <p className="text-xs text-muted-foreground">
            {state === 'idle' && 'מוכן לעבודה'}
            {state === 'thinking' && 'מנתח את הבקשה שלך...'}
            {state === 'generating' && 'יוצר תוכן חדש...'}
            {state === 'complete' && 'הפעולה הושלמה בהצלחה'}
            {state === 'error' && 'אירעה שגיאה בעיבוד'}
          </p>
        </div>
      </div>

      {/* Response Area */}
      <AnimatePresence mode="wait">
        {(state === 'complete' || state === 'generating') && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-4 rounded-xl bg-background/30 border border-border/30 text-sm leading-relaxed"
          >
            {response || "מייצר תוכן..."}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
