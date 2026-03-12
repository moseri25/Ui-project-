import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodePanel } from '../code-preview/CodePanel';
import { Type, Play, RotateCcw, Search, Grid, List } from 'lucide-react';
import { kineticAnimations, KineticAnimation } from './KineticTypographyData';

export function TextMotionLab() {
  const [activeAnimId, setActiveAnimId] = useState(kineticAnimations[0].id);
  const [key, setKey] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'single' | 'grid'>('single');

  const activeAnim = useMemo(() => 
    kineticAnimations.find(a => a.id === activeAnimId) || kineticAnimations[0],
    [activeAnimId]
  );

  const filteredAnimations = useMemo(() => 
    kineticAnimations.filter(a => 
      a.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    [searchQuery]
  );

  const text = "העתיד של ממשקי המשתמש";
  const words = text.split(" ");
  const chars = text.split("");

  const renderAnimation = (anim: KineticAnimation, isGrid = false) => {
    const fontSize = isGrid ? "text-xl" : "text-4xl md:text-6xl";
    
    if (anim.customRender) {
      if (anim.id === 'glitch-text') {
        return (
          <div className="relative inline-block">
            <motion.h2 
              key={`${key}-glitch`}
              className={`${fontSize} font-bold tracking-tight relative z-10`}
              animate={{
                x: [0, -2, 2, -1, 1, 0],
                y: [0, 1, -1, 2, -2, 0],
              }}
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2 }}
            >
              {text}
            </motion.h2>
            <motion.div 
              className={`absolute inset-0 ${fontSize} font-bold tracking-tight text-red-500/50 -z-10`}
              animate={{ x: [-2, 2, -2], opacity: [0, 1, 0] }}
              transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 1.5 }}
            >
              {text}
            </motion.div>
            <motion.div 
              className={`absolute inset-0 ${fontSize} font-bold tracking-tight text-blue-500/50 -z-20`}
              animate={{ x: [2, -2, 2], opacity: [0, 1, 0] }}
              transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 1.8 }}
            >
              {text}
            </motion.div>
          </div>
        );
      }
      if (anim.id === 'mask-reveal') {
        return (
          <div className="overflow-hidden">
            <motion.h2 
              key={`${key}-mask`}
              className={`${fontSize} font-bold tracking-tight`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {text}
            </motion.h2>
          </div>
        );
      }
    }

    if (anim.type === 'char') {
      return (
        <h2 className={`${fontSize} font-bold tracking-tight flex flex-wrap justify-center overflow-hidden py-4`}>
          {chars.map((char, index) => (
            <motion.span
              key={`${key}-${index}`}
              variants={anim.variants}
              initial="initial"
              animate="animate"
              custom={index}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
                ease: [0.33, 1, 0.68, 1],
                ...((anim.variants?.animate as any)?.transition || {})
              }}
              className="inline-block whitespace-pre"
              style={{
                display: 'inline-block',
                backgroundClip: (anim.variants?.animate as any)?.WebkitBackgroundClip || 'unset',
                WebkitBackgroundClip: (anim.variants?.animate as any)?.WebkitBackgroundClip || 'unset',
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>
      );
    }

    if (anim.type === 'word') {
      return (
        <h2 className={`${fontSize} font-bold tracking-tight flex flex-wrap justify-center gap-x-4 overflow-hidden py-4`}>
          {words.map((word, index) => (
            <motion.span
              key={`${key}-${index}`}
              variants={anim.variants}
              initial="initial"
              animate="animate"
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.33, 1, 0.68, 1],
                ...((anim.variants?.animate as any)?.transition || {})
              }}
              className="inline-block"
              style={{
                backgroundClip: (anim.variants?.animate as any)?.WebkitBackgroundClip || 'unset',
                WebkitBackgroundClip: (anim.variants?.animate as any)?.WebkitBackgroundClip || 'unset',
              }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
      );
    }

    return (
      <motion.h2 
        key={key}
        className={`${fontSize} font-bold tracking-tight py-4`}
        variants={anim.variants}
        initial="initial"
        animate="animate"
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1],
          ...((anim.variants?.animate as any)?.transition || {})
        }}
        style={{
          backgroundClip: (anim.variants?.animate as any)?.WebkitBackgroundClip || 'unset',
          WebkitBackgroundClip: (anim.variants?.animate as any)?.WebkitBackgroundClip || 'unset',
        }}
      >
        {text}
      </motion.h2>
    );
  };

  const getCodeSnippet = () => {
    if (activeAnim.customRender) return "// Custom implementation required for this effect";
    
    const variantsStr = JSON.stringify(activeAnim.variants, null, 2);
    
    if (activeAnim.type === 'char') {
      return `{chars.map((char, index) => (\n  <motion.span\n    variants={${variantsStr}}\n    initial="initial"\n    animate="animate"\n    transition={{ delay: index * 0.03 }}\n  >\n    {char}\n  </motion.span>\n))}`;
    }
    
    return `<motion.h2\n  variants={${variantsStr}}\n  initial="initial"\n  animate="animate"\n>\n  {text}\n</motion.h2>`;
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Type size={20} />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">מעבדת טיפוגרפיה קינטית</h2>
            <p className="text-muted-foreground">מעל 100 דוגמאות של אנימציות טקסט מתקדמות.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <input 
              type="text"
              placeholder="חפש אנימציה..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10 pl-4 py-2 rounded-xl bg-card border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-full md:w-64"
            />
          </div>
          <div className="flex bg-card border border-border/50 rounded-xl p-1">
            <button 
              onClick={() => setViewMode('single')}
              className={`p-1.5 rounded-lg transition-colors ${viewMode === 'single' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              <List size={18} />
            </button>
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              <Grid size={18} />
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'single' ? (
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls Sidebar */}
          <div className="lg:col-span-3 space-y-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredAnimations.map((anim) => (
              <button
                key={anim.id}
                onClick={() => {
                  setActiveAnimId(anim.id);
                  setKey(prev => prev + 1);
                }}
                className={`w-full text-right px-4 py-3 rounded-xl text-sm font-medium transition-all flex flex-col gap-1 group ${
                  activeAnimId === anim.id 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "bg-card hover:bg-muted border border-border/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{anim.label}</span>
                  {activeAnimId === anim.id && (
                    <motion.div layoutId="activeTextAnim" className="w-2 h-2 rounded-full bg-primary-foreground/50" />
                  )}
                </div>
                <span className={`text-[10px] opacity-70 line-clamp-1 ${activeAnimId === anim.id ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                  {anim.description}
                </span>
              </button>
            ))}
            {filteredAnimations.length === 0 && (
              <div className="text-center py-8 text-muted-foreground text-sm">
                לא נמצאו אנימציות תואמות
              </div>
            )}
          </div>

          {/* Display Area */}
          <div className="lg:col-span-9 min-w-0">
            <div className="glass-panel rounded-2xl p-4 sm:p-8 min-h-[500px] flex flex-col relative overflow-hidden w-full">
              {/* Toolbar */}
              <div className="absolute top-4 left-4 flex gap-2 z-10">
                <button 
                  onClick={() => setKey(prev => prev + 1)}
                  className="p-2 rounded-lg bg-background/50 backdrop-blur-md border border-border/50 text-muted-foreground hover:text-foreground transition-colors"
                  title="נגן שוב"
                >
                  <RotateCcw size={16} />
                </button>
              </div>

              {/* Canvas */}
              <div className="flex-1 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                
                <div className="relative z-10 text-center w-full px-4" dir="rtl">
                  <AnimatePresence mode="wait">
                    <div key={`${activeAnimId}-${key}`}>
                      {renderAnimation(activeAnim)}
                    </div>
                  </AnimatePresence>
                  <motion.div 
                    key={`meta-${activeAnimId}-${key}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 space-y-2"
                  >
                    <h3 className="text-lg font-semibold">{activeAnim.label}</h3>
                    <p className="text-muted-foreground text-sm max-w-md mx-auto">
                      {activeAnim.description}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Code Panel */}
              <CodePanel 
                structureCode={"<div className=\"text-center\">\n  <h2>{text}</h2>\n</div>"}
                styleCode={".text-kinetic {\n  /* Advanced CSS properties */\n}"}
                motionCode={getCodeSnippet()}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredAnimations.map((anim) => (
            <motion.div
              key={anim.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card border border-border/50 rounded-2xl p-6 h-48 flex flex-col items-center justify-center relative group cursor-pointer hover:border-primary/50 transition-colors overflow-hidden"
              onClick={() => {
                setActiveAnimId(anim.id);
                setViewMode('single');
                setKey(prev => prev + 1);
              }}
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 text-center scale-75 transform-gpu">
                {renderAnimation(anim, true)}
              </div>
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {anim.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

