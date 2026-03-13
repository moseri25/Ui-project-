import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  Zap, 
  Wind, 
  Box, 
  Layers, 
  Sparkles, 
  Cpu, 
  Layout, 
  Activity, 
  Eye,
  Search,
  Filter,
  ArrowRight,
  Maximize2,
  Minimize2,
  RefreshCw
} from 'lucide-react';
import { cn } from '@/src/utils/cn';

// --- Types & Definitions ---

type StyleCategory = 
  | 'Neo-Minimalist'
  | 'Cyber-Pulse'
  | 'Organic-Flow'
  | 'Industrial-Brutalist'
  | 'Glass-Ethereal'
  | 'Luxury-Gold'
  | 'Retro-Digital'
  | 'Futuristic-HUD'
  | 'Editorial-Grid'
  | 'Pop-Elastic';

interface MotionStyle {
  id: string;
  name: string;
  category: StyleCategory;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
    border: string;
  };
  motion: {
    transition: any;
    hover: any;
    tap: any;
  };
  visuals: {
    borderRadius: string;
    borderWidth: string;
    shadow: string;
    blur?: string;
    opacity?: number;
  };
}

// --- Style Generator ---

const CATEGORIES: StyleCategory[] = [
  'Neo-Minimalist', 'Cyber-Pulse', 'Organic-Flow', 'Industrial-Brutalist', 
  'Glass-Ethereal', 'Luxury-Gold', 'Retro-Digital', 'Futuristic-HUD', 
  'Editorial-Grid', 'Pop-Elastic'
];

const generateStyles = (): MotionStyle[] => {
  const styles: MotionStyle[] = [];
  
  CATEGORIES.forEach((category, catIdx) => {
    for (let i = 1; i <= 10; i++) {
      const id = `${category.toLowerCase().replace(' ', '-')}-${i}`;
      
      // Base style properties based on category
      let style: Partial<MotionStyle> = {
        id,
        category,
        name: `${category} Var ${i}`,
        description: `וריאציה מספר ${i} בסגנון ${category}.`,
      };

      // Customize based on category
      switch (category) {
        case 'Neo-Minimalist':
          style.colors = {
            primary: 'rgb(0, 0, 0)',
            secondary: 'rgb(115, 115, 115)',
            accent: i % 2 === 0 ? 'rgb(59, 130, 246)' : 'rgb(16, 185, 129)',
            bg: 'rgb(255, 255, 255)',
            border: 'rgba(0, 0, 0, 0.05)',
          };
          style.motion = {
            transition: { type: 'spring', stiffness: 300, damping: 30 },
            hover: { y: -4, scale: 1.01 },
            tap: { scale: 0.98 },
          };
          style.visuals = {
            borderRadius: '12px',
            borderWidth: '1px',
            shadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
          };
          break;

        case 'Cyber-Pulse':
          style.colors = {
            primary: 'rgb(236, 72, 153)',
            secondary: 'rgb(168, 85, 247)',
            accent: 'rgb(34, 211, 238)',
            bg: 'rgb(15, 23, 42)',
            border: 'rgba(236, 72, 153, 0.3)',
          };
          style.motion = {
            transition: { type: 'spring', stiffness: 500, damping: 15 },
            hover: { scale: 1.05, boxShadow: `0 0 20px rgba(236, 72, 153, 0.5)` },
            tap: { scale: 0.95 },
          };
          style.visuals = {
            borderRadius: '4px',
            borderWidth: '2px',
            shadow: '0 0 10px rgba(236, 72, 153, 0.2)',
          };
          break;

        case 'Organic-Flow':
          style.colors = {
            primary: 'rgb(16, 185, 129)',
            secondary: 'rgb(20, 184, 166)',
            accent: 'rgb(245, 158, 11)',
            bg: 'rgb(240, 253, 244)',
            border: 'rgba(16, 185, 129, 0.1)',
          };
          style.motion = {
            transition: { type: 'spring', stiffness: 100, damping: 10, mass: 1 },
            hover: { scale: 1.08, rotate: i % 2 === 0 ? 2 : -2 },
            tap: { scale: 0.9 },
          };
          style.visuals = {
            borderRadius: '32px',
            borderWidth: '0px',
            shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
          };
          break;

        case 'Industrial-Brutalist':
          style.colors = {
            primary: 'rgb(0, 0, 0)',
            secondary: 'rgb(0, 0, 0)',
            accent: 'rgb(255, 255, 0)',
            bg: 'rgb(229, 229, 229)',
            border: 'rgb(0, 0, 0)',
          };
          style.motion = {
            transition: { type: 'tween', ease: 'easeInOut', duration: 0.2 },
            hover: { x: 8, y: -8, boxShadow: '8px 8px 0px rgb(0, 0, 0)' },
            tap: { x: 0, y: 0, boxShadow: '0px 0px 0px rgb(0, 0, 0)' },
          };
          style.visuals = {
            borderRadius: '0px',
            borderWidth: '4px',
            shadow: 'none',
          };
          break;

        case 'Glass-Ethereal':
          style.colors = {
            primary: 'rgba(255, 255, 255, 0.8)',
            secondary: 'rgba(255, 255, 255, 0.4)',
            accent: 'rgba(59, 130, 246, 0.5)',
            bg: 'rgba(255, 255, 255, 0.05)',
            border: 'rgba(255, 255, 255, 0.2)',
          };
          style.motion = {
            transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
            hover: { backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(20px)' },
            tap: { scale: 0.98 },
          };
          style.visuals = {
            borderRadius: '24px',
            borderWidth: '1px',
            shadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            blur: '10px',
          };
          break;

        case 'Luxury-Gold':
          style.colors = {
            primary: 'rgb(212, 175, 55)',
            secondary: 'rgb(184, 134, 11)',
            accent: 'rgb(255, 255, 255)',
            bg: 'rgb(10, 10, 10)',
            border: 'rgba(212, 175, 55, 0.3)',
          };
          style.motion = {
            transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] },
            hover: { scale: 1.03, borderColor: 'rgba(212, 175, 55, 0.8)' },
            tap: { scale: 0.99 },
          };
          style.visuals = {
            borderRadius: '16px',
            borderWidth: '1px',
            shadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)',
          };
          break;

        case 'Retro-Digital':
          style.colors = {
            primary: 'rgb(34, 197, 94)',
            secondary: 'rgb(22, 163, 74)',
            accent: 'rgb(255, 255, 255)',
            bg: 'rgb(0, 0, 0)',
            border: 'rgb(34, 197, 94)',
          };
          style.motion = {
            transition: { type: 'step', duration: 0.1 },
            hover: { x: [0, -2, 2, -2, 0], transition: { repeat: Infinity, duration: 0.2 } },
            tap: { scale: 0.95 },
          };
          style.visuals = {
            borderRadius: '0px',
            borderWidth: '2px',
            shadow: '0 0 15px rgba(34, 197, 94, 0.5)',
          };
          break;

        case 'Futuristic-HUD':
          style.colors = {
            primary: 'rgb(6, 182, 212)',
            secondary: 'rgb(8, 145, 178)',
            accent: 'rgb(248, 250, 252)',
            bg: 'rgba(15, 23, 42, 0.9)',
            border: 'rgba(6, 182, 212, 0.5)',
          };
          style.motion = {
            transition: { type: 'spring', stiffness: 400, damping: 25 },
            hover: { scale: 1.02, rotateX: 10, rotateY: -10 },
            tap: { scale: 0.98 },
          };
          style.visuals = {
            borderRadius: '2px',
            borderWidth: '1px',
            shadow: 'inset 0 0 20px rgba(6, 182, 212, 0.1)',
          };
          break;

        case 'Editorial-Grid':
          style.colors = {
            primary: 'rgb(0, 0, 0)',
            secondary: 'rgb(38, 38, 38)',
            accent: 'rgb(220, 38, 38)',
            bg: 'rgb(250, 250, 250)',
            border: 'rgb(0, 0, 0)',
          };
          style.motion = {
            transition: { duration: 0.6, ease: [0.85, 0, 0.15, 1] },
            hover: { scale: 0.98, opacity: 0.9 },
            tap: { scale: 0.95 },
          };
          style.visuals = {
            borderRadius: '0px',
            borderWidth: '1px',
            shadow: 'none',
          };
          break;

        case 'Pop-Elastic':
          style.colors = {
            primary: 'rgb(244, 63, 94)',
            secondary: 'rgb(249, 115, 22)',
            accent: 'rgb(234, 179, 8)',
            bg: 'rgb(255, 255, 255)',
            border: 'rgb(244, 63, 94)',
          };
          style.motion = {
            transition: { type: 'spring', stiffness: 700, damping: 12 },
            hover: { scale: 1.15, rotate: 5 },
            tap: { scale: 0.8, rotate: -5 },
          };
          style.visuals = {
            borderRadius: '20px',
            borderWidth: '3px',
            shadow: '0 10px 25px -5px rgba(244, 63, 94, 0.3)',
          };
          break;
      }

      styles.push(style as MotionStyle);
    }
  });

  return styles;
};

// --- Components ---

function StyleCard({ style, onClick }: { style: MotionStyle; onClick: () => void; key?: string }) {
  const { playSound } = useSound();
  return (
    <motion.div
      layoutId={`card-${style.id}`}
      onClick={() => {
        onClick();
        playSound('pop');
      }}
      onMouseEnter={() => playSound('hover')}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={style.motion.hover}
      whileTap={style.motion.tap}
      transition={style.motion.transition}
      style={{
        backgroundColor: style.colors.bg,
        borderColor: style.colors.border,
        borderWidth: style.visuals.borderWidth,
        borderRadius: style.visuals.borderRadius,
        boxShadow: style.visuals.shadow,
        backdropFilter: style.visuals.blur ? `blur(${style.visuals.blur})` : 'none',
      }}
      className="p-6 cursor-pointer group relative overflow-hidden h-64 flex flex-col justify-between"
    >
      <div className="space-y-2">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
          style={{ backgroundColor: style.colors.primary, color: style.colors.accent }}
        >
          <Sparkles size={20} />
        </div>
        <h4 className="font-bold text-lg" style={{ color: style.colors.primary }}>{style.name}</h4>
        <p className="text-xs opacity-70" style={{ color: style.colors.secondary }}>{style.category}</p>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex -space-x-2">
          <div className="w-6 h-6 rounded-full border-2 border-white" style={{ backgroundColor: style.colors.primary }} />
          <div className="w-6 h-6 rounded-full border-2 border-white" style={{ backgroundColor: style.colors.secondary }} />
          <div className="w-6 h-6 rounded-full border-2 border-white" style={{ backgroundColor: style.colors.accent }} />
        </div>
        <ArrowRight size={16} style={{ color: style.colors.primary }} />
      </div>

      {/* Category Specific Decorative Elements */}
      {style.category === 'Cyber-Pulse' && (
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/10 to-transparent"
        />
      )}
    </motion.div>
  );
}

import { useSound } from '@/src/hooks/useSound';

export function StyleCatalogLab() {
  const [activeCategory, setActiveCategory] = React.useState<StyleCategory | 'All'>('All');
  const [selectedStyle, setSelectedStyle] = React.useState<MotionStyle | null>(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isGridView, setIsGridView] = React.useState(true);
  const [mutationSeed, setMutationSeed] = React.useState(0);
  const { playSound } = useSound();

  const allStyles = React.useMemo(() => {
    const baseStyles = generateStyles();
    if (mutationSeed === 0) return baseStyles;
    
    // Apply mutation based on seed
    return baseStyles.map(style => ({
      ...style,
      name: `${style.name} (Mutated)`,
      motion: {
        ...style.motion,
        transition: {
          ...style.motion.transition,
          stiffness: (style.motion.transition.stiffness || 100) * (1 + (Math.random() * 0.4 - 0.2)),
          damping: (style.motion.transition.damping || 10) * (1 + (Math.random() * 0.4 - 0.2)),
        }
      }
    }));
  }, [mutationSeed]);
  
  const filteredStyles = React.useMemo(() => {
    return allStyles.filter(style => {
      const matchesCategory = activeCategory === 'All' || style.category === activeCategory;
      const matchesSearch = style.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           style.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allStyles, activeCategory, searchQuery]);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Palette size={14} />
            <span>קטלוג סגנונות תנועה</span>
          </div>
          <h2 className="text-4xl font-black tracking-tighter sm:text-6xl">
            100 <span className="text-primary">וריאציות</span> של תנועה
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            ניתוח מעמיק של מערכות תנועה מתקדמות: 10 קטגוריות, 100 סגנונות ייחודיים המשלבים צבע, אופי, קצב וטעם שונה.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => {
              setIsGridView(!isGridView);
              playSound('switch');
            }}
            className="p-3 rounded-xl bg-muted hover:bg-primary hover:text-white transition-all"
          >
            {isGridView ? <Layout size={20} /> : <Layers size={20} />}
          </button>
          <button 
            onClick={() => {
              setMutationSeed(prev => prev + 1);
              playSound('switch');
            }}
            className="p-3 rounded-xl bg-muted hover:bg-primary hover:text-white transition-all group"
            title="Mutate Styles"
          >
            <Zap size={20} className="group-hover:animate-pulse" />
          </button>
          <button 
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
              setMutationSeed(0);
              playSound('switch');
            }}
            className="p-3 rounded-xl bg-muted hover:bg-primary hover:text-white transition-all"
            title="Reset"
          >
            <RefreshCw size={20} />
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="sticky top-20 z-30 bg-background/80 backdrop-blur-xl p-4 rounded-3xl border border-border/50 shadow-sm space-y-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setActiveCategory('All');
              playSound('switch');
            }}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-medium transition-all",
              activeCategory === 'All' ? "bg-primary text-white" : "bg-muted hover:bg-muted/80"
            )}
          >
            הכל
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                playSound('switch');
              }}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                activeCategory === cat ? "bg-primary text-white" : "bg-muted hover:bg-muted/80"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input 
            type="text"
            placeholder="חפש סגנון, קטגוריה או אופי..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-12 py-3 rounded-2xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
      </div>

      {/* Grid */}
      <div className={cn(
        "grid gap-6",
        isGridView ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5" : "grid-cols-1"
      )}>
        <AnimatePresence mode="popLayout">
          {filteredStyles.map(style => (
            <StyleCard 
              key={style.id} 
              style={style} 
              onClick={() => setSelectedStyle(style)} 
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredStyles.length === 0 && (
        <div className="flex flex-col items-center justify-center py-32 text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
            <Filter size={40} />
          </div>
          <h3 className="text-2xl font-bold">לא נמצאו סגנונות</h3>
          <p className="text-muted-foreground">נסה לשנות את מסנני החיפוש או הקטגוריה.</p>
        </div>
      )}

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedStyle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-background/90 backdrop-blur-2xl"
            onClick={() => setSelectedStyle(null)}
          >
            <motion.div
              layoutId={`card-${selectedStyle.id}`}
              className="w-full max-w-4xl bg-card border border-border rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: selectedStyle.colors.bg,
                borderColor: selectedStyle.colors.border,
                borderWidth: selectedStyle.visuals.borderWidth,
              }}
            >
              {/* Preview Area */}
              <div className="flex-1 p-12 flex flex-col items-center justify-center relative overflow-hidden min-h-[400px]">
                {/* Animated Background for Preview */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="absolute inset-0 blur-[100px]"
                  style={{ backgroundColor: selectedStyle.colors.primary }}
                />

                <motion.div
                  animate={selectedStyle.motion.hover}
                  transition={selectedStyle.motion.transition}
                  style={{
                    backgroundColor: selectedStyle.colors.bg,
                    borderColor: selectedStyle.colors.primary,
                    borderWidth: selectedStyle.visuals.borderWidth,
                    borderRadius: selectedStyle.visuals.borderRadius,
                    boxShadow: selectedStyle.visuals.shadow,
                    width: '240px',
                    height: '240px',
                  }}
                  className="relative z-10 flex flex-col items-center justify-center p-8 text-center"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: selectedStyle.colors.primary, color: selectedStyle.colors.accent }}
                  >
                    <Activity size={32} />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: selectedStyle.colors.primary }}>{selectedStyle.name}</h3>
                  <p className="text-sm opacity-60" style={{ color: selectedStyle.colors.secondary }}>{selectedStyle.category}</p>
                </motion.div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-mono opacity-50">
                  <RefreshCw size={12} className="animate-spin-slow" />
                  <span>LIVE PREVIEW ACTIVE</span>
                </div>
              </div>

              {/* Info Area */}
              <div className="w-full md:w-[400px] bg-muted/30 p-12 border-r border-border/50 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-black tracking-tighter" style={{ color: selectedStyle.colors.primary }}>{selectedStyle.name}</h2>
                  <p className="text-muted-foreground">{selectedStyle.description}</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">פלטת צבעים</h4>
                  <div className="grid grid-cols-5 gap-2">
                    {Object.entries(selectedStyle.colors).map(([key, val]) => (
                      <div key={key} className="space-y-1">
                        <div className="h-10 rounded-lg border border-border/50" style={{ backgroundColor: val }} />
                        <div className="text-[10px] text-center opacity-50 uppercase">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">מאפייני תנועה</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border/50">
                      <span className="text-sm">סוג מעבר</span>
                      <span className="text-xs font-mono font-bold text-primary">{selectedStyle.motion.transition.type || 'tween'}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border/50">
                      <span className="text-sm">קשיחות (Stiffness)</span>
                      <span className="text-xs font-mono font-bold text-primary">{selectedStyle.motion.transition.stiffness || 'N/A'}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border/50">
                      <span className="text-sm">שיכוך (Damping)</span>
                      <span className="text-xs font-mono font-bold text-primary">{selectedStyle.motion.transition.damping || 'N/A'}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setSelectedStyle(null);
                    playSound('switch');
                  }}
                  className="w-full py-4 rounded-2xl bg-primary text-white font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  <Minimize2 size={18} />
                  סגור תצוגה
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
