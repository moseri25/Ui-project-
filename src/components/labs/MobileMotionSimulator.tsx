import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodePanel } from '../code-preview/CodePanel';
import { Smartphone, Menu, X, ChevronRight, Search, Bell, Home, User, Settings } from 'lucide-react';
import { cn } from '@/src/utils/cn';

export function MobileMotionSimulator() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', icon: Home, label: 'ראשי' },
    { id: 'search', icon: Search, label: 'חיפוש' },
    { id: 'notifications', icon: Bell, label: 'התראות' },
    { id: 'profile', icon: User, label: 'פרופיל' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <Smartphone size={20} />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">סימולטור מובייל</h2>
          <p className="text-muted-foreground">אנימציות מותאמות למסכים קטנים, תפריטי צד וניווט תחתון.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Mobile Simulator */}
        <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between">
          <div className="mb-6">
            <h3 className="font-semibold flex items-center gap-2 mb-1">
              <Menu size={16} className="text-primary" />
              תפריט צד וניווט
            </h3>
            <p className="text-xs text-muted-foreground">אנימציית כניסה לתפריט צד ומעבר בין מסכים.</p>
          </div>

          <div className="flex-1 flex items-center justify-center p-4 sm:p-8 bg-muted/30 rounded-xl border border-border/50 relative overflow-hidden min-h-[500px]">
            
            {/* Phone Frame */}
            <div className="w-full max-w-[320px] h-[600px] bg-black rounded-[40px] p-3 shadow-2xl relative overflow-hidden border-4 border-muted">
              
              {/* Screen Content */}
              <div className="w-full h-full bg-background rounded-[28px] overflow-hidden relative flex flex-col">
                
                {/* Header */}
                <header className="h-14 flex items-center justify-between px-4 border-b border-border/50 bg-card/80 backdrop-blur-md z-20 relative">
                  <button 
                    onClick={() => setIsMenuOpen(true)}
                    className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors"
                  >
                    <Menu size={20} />
                  </button>
                  <span className="font-semibold text-sm">אפליקציה</span>
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <User size={14} className="text-primary" />
                  </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 relative overflow-hidden bg-muted/20 p-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="absolute inset-0 p-4"
                    >
                      <h4 className="text-xl font-bold mb-4">{tabs.find(t => t.id === activeTab)?.label}</h4>
                      
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-card p-4 rounded-xl shadow-sm border border-border/50 flex gap-3"
                          >
                            <div className="w-12 h-12 rounded-lg bg-muted shrink-0" />
                            <div className="flex-1 space-y-2 py-1">
                              <div className="h-3 bg-muted rounded w-3/4" />
                              <div className="h-2 bg-muted/50 rounded w-1/2" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </main>

                {/* Bottom Navigation */}
                <nav className="h-16 bg-card border-t border-border/50 flex items-center justify-around px-2 relative z-20">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className="flex flex-col items-center justify-center w-16 h-full relative"
                      >
                        {isActive && (
                          <motion.div
                            layoutId="bottom-nav-indicator"
                            className="absolute top-0 w-8 h-1 bg-primary rounded-b-full"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                        <Icon 
                          size={20} 
                          className={cn(
                            "mb-1 transition-colors",
                            isActive ? "text-primary" : "text-muted-foreground"
                          )} 
                        />
                        <span className={cn(
                          "text-[10px] font-medium transition-colors",
                          isActive ? "text-primary" : "text-muted-foreground"
                        )}>
                          {tab.label}
                        </span>
                      </button>
                    );
                  })}
                </nav>

                {/* Side Menu Overlay */}
                <AnimatePresence>
                  {isMenuOpen && (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm z-40"
                      />
                      <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", stiffness: 400, damping: 40 }}
                        className="absolute top-0 right-0 bottom-0 w-3/4 bg-card z-50 shadow-2xl flex flex-col"
                      >
                        <div className="p-6 border-b border-border/50 flex items-center justify-between">
                          <span className="font-bold text-lg">תפריט</span>
                          <button 
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 rounded-full hover:bg-muted transition-colors"
                          >
                            <X size={20} />
                          </button>
                        </div>
                        <div className="flex-1 p-4 space-y-2 overflow-y-auto">
                          {['הגדרות', 'עזרה ותמיכה', 'אודות', 'התנתקות'].map((item, i) => (
                            <motion.button
                              key={item}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + i * 0.05 }}
                              className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-muted transition-colors text-right"
                            >
                              <span className="font-medium">{item}</span>
                              <ChevronRight size={16} className="text-muted-foreground" />
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>

          <CodePanel 
            structureCode={"<AnimatePresence>\n  {isOpen && (\n    <motion.div className=\"sidebar\" />\n  )}\n</AnimatePresence>"}
            styleCode={".sidebar {\n  position: absolute;\n  right: 0;\n  width: 75%;\n}"}
            motionCode={"<motion.div\n  initial={{ x: '100%' }}\n  animate={{ x: 0 }}\n  exit={{ x: '100%' }}\n  transition={{ type: \"spring\", stiffness: 400, damping: 40 }}\n/>"}
          />
        </div>

      </div>
    </div>
  );
}
