import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodePanel } from '../code-preview/CodePanel';
import { PenTool, Heart, Star, Zap, Settings, Shield } from 'lucide-react';
import { cn } from '@/src/utils/cn';

import { useSound } from '@/src/hooks/useSound';

export function SvgMotionLab() {
  const [activeIcon, setActiveIcon] = useState<string>('heart');
  const { playSound } = useSound();

  const icons = [
    { id: 'heart', icon: Heart, label: 'לייק', color: 'text-rose-500' },
    { id: 'star', icon: Star, label: 'מועדף', color: 'text-amber-400' },
    { id: 'zap', icon: Zap, label: 'מהיר', color: 'text-yellow-500' },
    { id: 'settings', icon: Settings, label: 'הגדרות', color: 'text-slate-500' },
    { id: 'shield', icon: Shield, label: 'מאובטח', color: 'text-emerald-500' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <PenTool size={20} />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">אנימציית אייקונים (SVG)</h2>
          <p className="text-muted-foreground">הנפשת נתיבים וצורות וקטוריות לחוויה אינטראקטיבית עשירה.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Path Drawing */}
        <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between">
          <div className="mb-6">
            <h3 className="font-semibold flex items-center gap-2 mb-1">
              <PenTool size={16} className="text-primary" />
              ציור נתיבים
            </h3>
            <p className="text-xs text-muted-foreground">אנימציית stroke-dashoffset לחשיפת צורה.</p>
          </div>

          <div className="flex-1 flex items-center justify-center p-4 sm:p-8 bg-muted/30 rounded-xl border border-border/50 relative overflow-hidden min-h-[300px]">
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
            >
              <motion.path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { 
                    pathLength: 1, 
                    opacity: 1,
                    transition: { 
                      pathLength: { type: "spring", duration: 2, bounce: 0 },
                      opacity: { duration: 0.1 }
                    }
                  }
                }}
              />
            </motion.svg>
          </div>

          <CodePanel 
            structureCode={"<svg>\n  <path d=\"...\" />\n</svg>"}
            styleCode={".path {\n  stroke-dasharray: 1000;\n  stroke-dashoffset: 1000;\n}"}
            motionCode={"<motion.path\n  initial={{ pathLength: 0 }}\n  animate={{ pathLength: 1 }}\n  transition={{ duration: 2 }}\n/>"}
          />
        </div>

        {/* Interactive Icons */}
        <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between">
          <div className="mb-6">
            <h3 className="font-semibold flex items-center gap-2 mb-1">
              <Star size={16} className="text-primary" />
              אייקונים אינטראקטיביים
            </h3>
            <p className="text-xs text-muted-foreground">תגובות מורכבות ללחיצה וריחוף על אייקונים.</p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 bg-muted/30 rounded-xl border border-border/50 relative overflow-hidden min-h-[300px] gap-8">
            <div className="flex flex-wrap justify-center gap-4">
              {icons.map((item) => {
                const Icon = item.icon;
                const isActive = activeIcon === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      setActiveIcon(item.id);
                      playSound('pop');
                    }}
                    onMouseEnter={() => playSound('hover')}
                    className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center border transition-colors relative overflow-hidden",
                      isActive ? "bg-card border-border shadow-sm" : "bg-transparent border-transparent hover:bg-muted"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="active-icon-bg"
                        className="absolute inset-0 bg-card border border-border rounded-2xl"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className="relative z-10">
                      <Icon 
                        size={24} 
                        className={cn(
                          "transition-colors duration-300",
                          isActive ? item.color : "text-muted-foreground"
                        )} 
                        fill={isActive && item.id !== 'settings' ? "currentColor" : "none"}
                      />
                    </div>
                    
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={cn("absolute inset-0 rounded-full opacity-0", item.color.replace('text-', 'bg-'))}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
            
            <div className="text-center h-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIcon}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm font-medium text-muted-foreground"
                >
                  {icons.find(i => i.id === activeIcon)?.label}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <CodePanel 
            structureCode={"<button>\n  <Icon />\n</button>"}
            styleCode={".icon-active {\n  fill: currentColor;\n}"}
            motionCode={"<motion.button\n  whileHover={{ scale: 1.05 }}\n  whileTap={{ scale: 0.95 }}\n>\n  <motion.div layoutId=\"active-bg\" />\n  <Icon />\n</motion.button>"}
          />
        </div>

      </div>
    </div>
  );
}
