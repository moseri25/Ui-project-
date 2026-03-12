import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Activity, Users, Zap, BarChart3, Code2 } from 'lucide-react';
import { useTheme } from '../theme/StyleMutationEngine';
import { CodePanel } from '../code-preview/CodePanel';

export function Hero() {
  const { theme } = useTheme();
  const [showCode, setShowCode] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center pt-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Right side (RTL) - Typography & CTA */}
        <div className="space-y-8 text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap size={14} />
              <span>מנוע תנועה מתקדם 2.0</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              עיצוב שמרגיש <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-primary/50">
                חי ונושם.
              </span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-lg text-muted-foreground max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            מעבדת התנועה הפרימיום לממשקי משתמש. חקור, ערוך והטמע אנימציות ברמת מוצר היישר לתוך המערכת שלך.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <button 
              onClick={() => scrollTo('text')}
              className="h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <span>התחל לחקור</span>
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={() => scrollTo('advanced')}
              className="h-12 px-6 rounded-full border border-border bg-card/50 backdrop-blur-sm font-medium hover:bg-muted transition-colors"
            >
              תיעוד המערכת
            </button>
          </motion.div>
        </div>

        {/* Left side (RTL) - Interactive Dashboard Mockup */}
        <motion.div 
          className="relative flex flex-col gap-4 min-w-0 w-full"
          initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: 1000 }}
        >
          <div className="glass-panel-heavy rounded-2xl p-6 relative overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <Activity size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">ניתוח נתונים בזמן אמת</h3>
                  <p className="text-xs text-muted-foreground">עודכן לפני 2 דקות</p>
                </div>
              </div>
              <button 
                onClick={() => setShowCode(!showCode)}
                className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                title="הצג קוד"
              >
                <Code2 size={18} />
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                { label: 'משתמשים פעילים', value: '12,482', icon: Users, trend: '+14%' },
                { label: 'הכנסות החודש', value: '$84,290', icon: BarChart3, trend: '+22%' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  className="p-4 rounded-xl bg-muted/50 border border-border/50"
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <stat.icon size={16} className="text-muted-foreground" />
                    <span className="text-xs font-medium text-green-500" dir="ltr">{stat.trend}</span>
                  </div>
                  <div className="text-2xl font-bold mb-1" dir="ltr">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Chart Area Mock */}
            <div className="h-32 rounded-xl bg-muted/30 border border-border/50 relative overflow-hidden flex items-end p-4 gap-2">
              {[40, 70, 45, 90, 65, 85, 100, 60].map((h, i) => (
                <motion.div 
                  key={i}
                  className="flex-1 bg-primary/20 rounded-t-sm relative group"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
            
            {/* Floating Element */}
            <motion.div 
              className="absolute -right-6 -bottom-6 glass-panel p-4 rounded-xl flex items-center gap-3 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                <Check size={16} />
              </div>
              <div>
                <div className="text-sm font-medium">סנכרון הושלם</div>
                <div className="text-xs text-muted-foreground">כל הנתונים מעודכנים</div>
              </div>
            </motion.div>
          </div>

          {showCode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 w-full min-w-0 overflow-hidden"
            >
              <CodePanel 
                structureCode={`<div className="glass-panel-heavy rounded-2xl p-6">\n  <Header />\n  <StatsGrid />\n  <ChartArea />\n  <FloatingBadge />\n</div>`}
                styleCode={`.glass-panel-heavy {\n  background: rgba(var(--card), 0.8);\n  backdrop-filter: blur(24px);\n  border: 1px solid rgba(var(--border), 0.6);\n}`}
                motionCode={`// Chart Bars Animation\n<motion.div \n  initial={{ height: 0 }}\n  animate={{ height: \`\${h}%\` }}\n  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}\n/>\n\n// Floating Badge Animation\n<motion.div \n  animate={{ y: [0, -10, 0] }}\n  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}\n/>`}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

function Check({ size, className }: { size: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
