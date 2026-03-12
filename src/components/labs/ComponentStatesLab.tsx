import { useState } from 'react';
import { motion } from 'framer-motion';
import { CodePanel } from '../code-preview/CodePanel';
import { Box, Check, Loader2, AlertCircle } from 'lucide-react';
import { cn } from '@/src/utils/cn';

type ButtonState = 'default' | 'hover' | 'active' | 'loading' | 'success' | 'error';

export function ComponentStatesLab() {
  const [btnState, setBtnState] = useState<ButtonState>('default');

  const handleSimulate = () => {
    setBtnState('loading');
    setTimeout(() => {
      setBtnState(Math.random() > 0.5 ? 'success' : 'error');
      setTimeout(() => setBtnState('default'), 2000);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <Box size={20} />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">מצבי רכיב פרימיום</h2>
          <p className="text-muted-foreground">תקשורת חזותית ברורה של מצבי מערכת דרך אנימציה.</p>
        </div>
      </div>

      <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between">
        <div className="mb-6">
          <h3 className="font-semibold flex items-center gap-2 mb-1">
            <Check size={16} className="text-primary" />
            כפתור פעולה חכם
          </h3>
          <p className="text-xs text-muted-foreground">מעבר חלק בין מצבי טעינה, הצלחה ושגיאה.</p>
        </div>

        <div className="flex-1 p-4 sm:p-8 bg-muted/30 rounded-xl border border-border/50 relative min-h-[300px] flex flex-col items-center justify-center gap-8">
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(['default', 'loading', 'success', 'error'] as ButtonState[]).map(s => (
              <button
                key={s}
                onClick={() => setBtnState(s)}
                className={cn(
                  "px-3 py-1 text-xs rounded-full border transition-colors",
                  btnState === s ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:bg-muted"
                )}
              >
                {s}
              </button>
            ))}
          </div>

          <motion.button
            onClick={handleSimulate}
            disabled={btnState === 'loading'}
            className={cn(
              "relative h-12 rounded-xl font-medium text-sm flex items-center justify-center overflow-hidden transition-colors",
              btnState === 'default' && "bg-primary text-primary-foreground w-40 hover:opacity-90",
              btnState === 'loading' && "bg-primary/80 text-primary-foreground w-40 cursor-not-allowed",
              btnState === 'success' && "bg-green-500 text-white w-40",
              btnState === 'error' && "bg-destructive text-destructive-foreground w-40"
            )}
            whileTap={btnState === 'default' ? { scale: 0.95 } : {}}
            layout
          >
            <motion.div
              initial={false}
              animate={{
                y: btnState === 'default' ? 0 : -40,
                opacity: btnState === 'default' ? 1 : 0
              }}
              className="absolute flex items-center gap-2"
            >
              שמור שינויים
            </motion.div>

            <motion.div
              initial={false}
              animate={{
                y: btnState === 'loading' ? 0 : 40,
                opacity: btnState === 'loading' ? 1 : 0
              }}
              className="absolute flex items-center gap-2"
            >
              <Loader2 size={18} className="animate-spin" />
              מעבד...
            </motion.div>

            <motion.div
              initial={false}
              animate={{
                scale: btnState === 'success' ? 1 : 0,
                opacity: btnState === 'success' ? 1 : 0
              }}
              className="absolute flex items-center gap-2"
            >
              <Check size={18} />
              נשמר בהצלחה
            </motion.div>

            <motion.div
              initial={false}
              animate={{
                x: btnState === 'error' ? [-5, 5, -5, 5, 0] : 0,
                opacity: btnState === 'error' ? 1 : 0
              }}
              transition={{ duration: 0.4 }}
              className="absolute flex items-center gap-2"
            >
              <AlertCircle size={18} />
              שגיאת שרת
            </motion.div>
          </motion.button>

        </div>
        <CodePanel 
          structureCode={"<Button state={state} onClick={handleSimulate}>\n  <StateContent />\n</Button>"}
          styleCode={".btn-success { background: #22c55e; }\n.btn-error { background: #ef4444; }"}
          motionCode={"<motion.button\n  layout\n  whileTap={{ scale: 0.95 }}\n>\n  <motion.div\n    animate={{ y: state === 'loading' ? 0 : 40, opacity: state === 'loading' ? 1 : 0 }}\n  >\n    <Loader2 className=\"animate-spin\" />\n  </motion.div>\n</motion.button>"}
        />
      </div>
    </div>
  );
}
