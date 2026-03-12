import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Command, ArrowRight, Layers, Cpu, Shield, Zap, Search, Bell, Settings, ChevronRight } from 'lucide-react';
import { cn } from '@/src/utils/cn';

export function PremiumSystemLab() {
  const [aiState, setAiState] = useState<'idle' | 'generating' | 'complete'>('idle');
  const [activeTab, setActiveTab] = useState('overview');

  const simulateAI = () => {
    if (aiState !== 'idle') return;
    setAiState('generating');
    setTimeout(() => setAiState('complete'), 3000);
    setTimeout(() => setAiState('idle'), 6000);
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit border border-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.2)]">
          <Sparkles size={14} />
          <span>Premium UI Architecture</span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-l from-foreground to-foreground/50">
          מערכת פרימיום מורחבת
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          תצוגת תכלית של ארכיטקטורת ממשק עילית. שילוב של עיצוב זכוכית (Glassmorphism), עומק קולנועי, ואינטראקציות AI מתקדמות.
        </p>
      </div>

      {/* Bento Grid Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
        
        {/* 1. AI Prompt Box (Span 2) */}
        <motion.div 
          className="md:col-span-2 relative rounded-3xl overflow-hidden border border-border/50 bg-card/20 backdrop-blur-2xl p-8 flex flex-col justify-between group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors duration-700" />
          
          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Cpu className="text-primary" size={20} />
              AI Workflow State
            </h3>
            <p className="text-sm text-muted-foreground">מצב המתנה, יצירה, והשלמה של מודל שפה.</p>
          </div>

          <div className="relative z-10 w-full max-w-lg mx-auto mt-8">
            <div className={cn(
              "relative rounded-2xl border transition-all duration-500 overflow-hidden",
              aiState === 'generating' ? "border-primary/50 shadow-[0_0_30px_rgba(var(--primary),0.15)]" : "border-border/50 bg-background/50"
            )}>
              {aiState === 'generating' && (
                <motion.div 
                  className="absolute bottom-0 left-0 h-[2px] bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "linear" }}
                />
              )}
              <div className="p-4 flex gap-4 items-center">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500",
                  aiState === 'generating' ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}>
                  <Sparkles size={20} className={cn(aiState === 'generating' && "animate-pulse")} />
                </div>
                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    {aiState === 'idle' && (
                      <motion.p key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm text-muted-foreground">
                        הזן פקודה ליצירת ממשק...
                      </motion.p>
                    )}
                    {aiState === 'generating' && (
                      <motion.p key="gen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm font-medium text-primary flex items-center gap-2">
                        מנתח ארכיטקטורה ויוצר קומפוננטות...
                      </motion.p>
                    )}
                    {aiState === 'complete' && (
                      <motion.p key="comp" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm font-medium text-green-500">
                        הממשק נוצר בהצלחה!
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <button 
                  onClick={simulateAI}
                  disabled={aiState !== 'idle'}
                  className="h-10 px-4 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {aiState === 'idle' ? 'צור' : 'ממתין...'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Premium Card State */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden border border-border/50 bg-card/20 backdrop-blur-2xl p-6 group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
            <Layers className="text-blue-500" size={24} />
          </div>
          
          <h3 className="text-lg font-semibold mb-2">Card System</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Hover states, active states, and cinematic glow effects for premium data display.
          </p>
          
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-sm font-medium text-primary opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <span>חקור קומפוננטה</span>
            <ArrowRight size={16} />
          </div>
        </motion.div>

        {/* 3. Navigation & Command */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden border border-border/50 bg-card/20 backdrop-blur-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <Command size={18} className="text-muted-foreground" />
            Command Surface
          </h3>
          
          <div className="space-y-2">
            {['Overview', 'Integrations', 'Security', 'Settings'].map((item, i) => (
              <button 
                key={item}
                onClick={() => setActiveTab(item.toLowerCase())}
                className={cn(
                  "w-full flex items-center justify-between p-3 rounded-xl text-sm transition-all duration-300",
                  activeTab === item.toLowerCase() 
                    ? "bg-primary/10 text-primary font-medium pl-4" 
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  {i === 0 && <Layers size={16} />}
                  {i === 1 && <Zap size={16} />}
                  {i === 2 && <Shield size={16} />}
                  {i === 3 && <Settings size={16} />}
                  <span>{item}</span>
                </div>
                {activeTab === item.toLowerCase() && (
                  <motion.div layoutId="activeNavIndicator">
                    <ChevronRight size={16} />
                  </motion.div>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 4. Dashboard Metrics (Span 2) */}
        <motion.div 
          className="md:col-span-2 relative rounded-3xl overflow-hidden border border-border/50 bg-card/20 backdrop-blur-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-semibold">Enterprise Dashboard States</h3>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Search size={14} />
              </button>
              <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors relative">
                <Bell size={14} />
                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-red-500" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Total Revenue', value: '$2.4M', trend: '+14.5%', color: 'text-green-500' },
              { label: 'Active Users', value: '84.2K', trend: '+2.1%', color: 'text-green-500' },
              { label: 'Churn Rate', value: '1.2%', trend: '-0.4%', color: 'text-green-500' },
            ].map((stat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/30 transition-colors group">
                <p className="text-xs text-muted-foreground mb-2">{stat.label}</p>
                <p className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors" dir="ltr">{stat.value}</p>
                <div className="flex items-center gap-1">
                  <span className={cn("text-xs font-medium", stat.color)} dir="ltr">{stat.trend}</span>
                  <span className="text-xs text-muted-foreground">vs last month</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
