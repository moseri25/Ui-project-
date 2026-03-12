import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodePanel } from '../code-preview/CodePanel';
import { Type, Play, RotateCcw } from 'lucide-react';

const textAnimations = [
  { id: 'fade-up', label: 'הופעה מעלה' },
  { id: 'blur-reveal', label: 'חשיפת טשטוש' },
  { id: 'char-stagger', label: 'דירוג תווים' },
  { id: 'gradient-shimmer', label: 'נצנוץ גרדיאנט' },
];

export function TextMotionLab() {
  const [activeAnim, setActiveAnim] = useState(textAnimations[0].id);
  const [key, setKey] = useState(0); // Used to re-trigger animations

  const text = "העתיד של ממשקי המשתמש";
  const chars = text.split("");

  const renderAnimation = () => {
    switch (activeAnim) {
      case 'fade-up':
        return (
          <motion.h2 
            key={key}
            className="text-4xl md:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {text}
          </motion.h2>
        );
      case 'blur-reveal':
        return (
          <motion.h2 
            key={key}
            className="text-4xl md:text-6xl font-bold tracking-tight"
            initial={{ filter: "blur(20px)", opacity: 0, scale: 0.9 }}
            animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {text}
          </motion.h2>
        );
      case 'char-stagger':
        return (
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight flex flex-wrap justify-center overflow-hidden">
            {chars.map((char, index) => (
              <motion.span
                key={`${key}-${index}`}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
        );
      case 'gradient-shimmer':
        return (
          <motion.h2 
            key={key}
            className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-[linear-gradient(110deg,#9ca3af,45%,#fff,55%,#9ca3af)] bg-[length:200%_100%]"
            initial={{ backgroundPosition: "200% 0" }}
            animate={{ backgroundPosition: "-200% 0" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            {text}
          </motion.h2>
        );
      default:
        return null;
    }
  };

  const getCodeSnippet = () => {
    switch (activeAnim) {
      case 'fade-up':
        return `<motion.h2\n  initial={{ opacity: 0, y: 40 }}\n  animate={{ opacity: 1, y: 0 }}\n  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}\n>\n  {text}\n</motion.h2>`;
      case 'blur-reveal':
        return `<motion.h2\n  initial={{ filter: "blur(20px)", opacity: 0, scale: 0.9 }}\n  animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}\n  transition={{ duration: 1, ease: "easeOut" }}\n>\n  {text}\n</motion.h2>`;
      case 'char-stagger':
        return `{chars.map((char, index) => (\n  <motion.span\n    initial={{ y: "100%", opacity: 0 }}\n    animate={{ y: 0, opacity: 1 }}\n    transition={{ duration: 0.5, delay: index * 0.05 }}\n  >\n    {char}\n  </motion.span>\n))}`;
      case 'gradient-shimmer':
        return `<motion.h2\n  className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#9ca3af,45%,#fff,55%,#9ca3af)] bg-[length:200%_100%]"\n  initial={{ backgroundPosition: "200% 0" }}\n  animate={{ backgroundPosition: "-200% 0" }}\n  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}\n>\n  {text}\n</motion.h2>`;
      default:
        return "";
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <Type size={20} />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">טיפוגרפיה קינטית</h2>
          <p className="text-muted-foreground">אנימציות טקסט מתקדמות להדגשת מסרים מרכזיים.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Controls Sidebar */}
        <div className="lg:col-span-3 space-y-2">
          {textAnimations.map((anim) => (
            <button
              key={anim.id}
              onClick={() => {
                setActiveAnim(anim.id);
                setKey(prev => prev + 1);
              }}
              className={`w-full text-right px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between group ${
                activeAnim === anim.id 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "bg-card hover:bg-muted border border-border/50"
              }`}
            >
              <span>{anim.label}</span>
              {activeAnim === anim.id && (
                <motion.div layoutId="activeTextAnim" className="w-2 h-2 rounded-full bg-primary-foreground/50" />
              )}
            </button>
          ))}
        </div>

        {/* Display Area */}
        <div className="lg:col-span-9 min-w-0">
          <div className="glass-panel rounded-2xl p-4 sm:p-8 min-h-[400px] flex flex-col relative overflow-hidden w-full">
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
              {/* Decorative grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
              
              <div className="relative z-10 text-center" dir="rtl">
                <AnimatePresence mode="wait">
                  {renderAnimation()}
                </AnimatePresence>
                <motion.p 
                  key={`sub-${key}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="mt-6 text-muted-foreground text-lg max-w-md mx-auto"
                >
                  הטמעת תנועה בטקסט יוצרת חוויית קריאה דינמית ומושכת את עין המשתמש למידע החשוב ביותר.
                </motion.p>
              </div>
            </div>

            {/* Code Panel */}
            <CodePanel 
              structureCode={"<div className=\"text-center\">\n  <h2>{text}</h2>\n</div>"}
              styleCode={".text-gradient {\n  background-clip: text;\n  color: transparent;\n}"}
              motionCode={getCodeSnippet()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
