import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodePanel } from '../code-preview/CodePanel';
import { Palette, Droplet, Check } from 'lucide-react';
import { cn } from '@/src/utils/cn';

export function ColorPaletteLab() {
  const [activePalette, setActivePalette] = useState('ocean');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const palettes = {
    ocean: [
      { name: 'Deep', hex: '#0ea5e9', class: 'bg-sky-500' },
      { name: 'Wave', hex: '#38bdf8', class: 'bg-sky-400' },
      { name: 'Surf', hex: '#7dd3fc', class: 'bg-sky-300' },
      { name: 'Foam', hex: '#bae6fd', class: 'bg-sky-200' },
    ],
    sunset: [
      { name: 'Dusk', hex: '#f97316', class: 'bg-orange-500' },
      { name: 'Glow', hex: '#fb923c', class: 'bg-orange-400' },
      { name: 'Haze', hex: '#fdba74', class: 'bg-orange-300' },
      { name: 'Dawn', hex: '#fed7aa', class: 'bg-orange-200' },
    ],
    forest: [
      { name: 'Pine', hex: '#10b981', class: 'bg-emerald-500' },
      { name: 'Moss', hex: '#34d399', class: 'bg-emerald-400' },
      { name: 'Fern', hex: '#6ee7b7', class: 'bg-emerald-300' },
      { name: 'Leaf', hex: '#a7f3d0', class: 'bg-emerald-200' },
    ],
  };

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <Palette size={20} />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">מעברי צבע דינמיים</h2>
          <p className="text-muted-foreground">אנימציית צבעים, גרדיאנטים וטקסטורות מבוססות מצב.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Palette Selector */}
        <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between">
          <div className="mb-6">
            <h3 className="font-semibold flex items-center gap-2 mb-1">
              <Droplet size={16} className="text-primary" />
              בחירת פלטה
            </h3>
            <p className="text-xs text-muted-foreground">מעבר חלק בין ערכות צבעים עם אנימציית Layout.</p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 bg-muted/30 rounded-xl border border-border/50 relative overflow-hidden min-h-[300px] gap-8">
            
            <div className="flex flex-wrap justify-center gap-2 bg-card p-1 rounded-xl border border-border shadow-sm">
              {Object.keys(palettes).map((key) => (
                <button
                  key={key}
                  onClick={() => setActivePalette(key)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors relative",
                    activePalette === key ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {activePalette === key && (
                    <motion.div
                      layoutId="active-palette-tab"
                      className="absolute inset-0 bg-muted rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="capitalize">{key}</span>
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 w-full max-w-sm justify-center">
              <AnimatePresence mode="popLayout">
                {palettes[activePalette as keyof typeof palettes].map((color, index) => (
                  <motion.div
                    key={`${activePalette}-${color.hex}`}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 25,
                      delay: index * 0.05 
                    }}
                    className="flex flex-col items-center gap-2"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleCopy(color.hex)}
                      className={cn(
                        "w-16 h-24 rounded-2xl shadow-sm border border-black/5 relative overflow-hidden group",
                        color.class
                      )}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <AnimatePresence>
                          {copiedColor === color.hex && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              className="bg-white/90 text-black p-1.5 rounded-full shadow-sm"
                            >
                              <Check size={14} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.button>
                    <div className="text-center">
                      <p className="text-xs font-medium">{color.name}</p>
                      <p className="text-[10px] text-muted-foreground font-mono">{color.hex}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>

          <CodePanel 
            structureCode={"<div className=\"flex gap-4\">\n  {colors.map(c => <ColorSwatch key={c.id} />)}\n</div>"}
            styleCode={".swatch {\n  transition: background-color 0.3s;\n}"}
            motionCode={"<AnimatePresence mode=\"popLayout\">\n  <motion.div\n    key={color.id}\n    initial={{ opacity: 0, y: 20 }}\n    animate={{ opacity: 1, y: 0 }}\n    exit={{ opacity: 0, y: -20 }}\n  />\n</AnimatePresence>"}
          />
        </div>

        {/* Gradient Mesh */}
        <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between">
          <div className="mb-6">
            <h3 className="font-semibold flex items-center gap-2 mb-1">
              <Palette size={16} className="text-primary" />
              גרדיאנט חי
            </h3>
            <p className="text-xs text-muted-foreground">אנימציית רקע מתמשכת ליצירת עומק ותנועה.</p>
          </div>

          <div className="flex-1 flex items-center justify-center p-4 sm:p-8 bg-muted/30 rounded-xl border border-border/50 relative overflow-hidden min-h-[300px]">
            <div className="w-full max-w-sm aspect-video rounded-2xl relative overflow-hidden shadow-lg border border-border/50">
              <motion.div 
                className="absolute inset-[-50%] opacity-80"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 100%', '100% 0%', '0% 0%'],
                }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{
                  backgroundImage: `radial-gradient(circle at center, ${palettes[activePalette as keyof typeof palettes][0].hex} 0%, transparent 50%), 
                                    radial-gradient(circle at bottom right, ${palettes[activePalette as keyof typeof palettes][1].hex} 0%, transparent 50%), 
                                    radial-gradient(circle at top left, ${palettes[activePalette as keyof typeof palettes][2].hex} 0%, transparent 50%)`,
                  backgroundSize: '200% 200%',
                  filter: 'blur(40px)',
                }}
              />
              <div className="absolute inset-0 bg-card/20 backdrop-blur-[2px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-panel px-6 py-3 rounded-xl shadow-xl border-white/20">
                  <span className="font-semibold tracking-wide mix-blend-overlay text-white">
                    {activePalette.toUpperCase()} MESH
                  </span>
                </div>
              </div>
            </div>
          </div>

          <CodePanel 
            structureCode={"<div className=\"mesh-container\">\n  <div className=\"mesh-gradient\" />\n  <div className=\"glass-overlay\" />\n</div>"}
            styleCode={".mesh-gradient {\n  filter: blur(40px);\n  background-size: 200% 200%;\n}"}
            motionCode={"<motion.div\n  animate={{\n    backgroundPosition: ['0% 0%', '100% 100%']\n  }}\n  transition={{\n    duration: 20,\n    repeat: Infinity\n  }}\n/>"}
          />
        </div>

      </div>
    </div>
  );
}
