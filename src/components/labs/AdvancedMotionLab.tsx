import * as React from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { 
  Sparkles, 
  LayoutGrid, 
  Layers, 
  Maximize2, 
  MousePointer2, 
  ScrollText, 
  Image as ImageIcon, 
  Zap,
  ArrowRight,
  Type,
  Move,
  Code2
} from 'lucide-react';
import { cn } from '@/src/utils/cn';
import { PremiumButton } from '../premium/PremiumButton';
import { CodePanel } from '../code-preview/CodePanel';
import { useToast } from '../premium/PremiumToast';

// --- Specialized Animation Components ---

// 1. Hover: Magnetic & Tilt
function MagneticCard({ children, title, description, icon: Icon, color }: any) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
      className="relative p-8 rounded-3xl bg-card border border-border/50 shadow-xl cursor-pointer group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className={cn("w-12 h-12 rounded-2xl mb-4 flex items-center justify-center", color)}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}

// 2. Scroll: Parallax Reveal
function ScrollRevealSection({ index, title, description, scrollYProgress }: any) {
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -100 : 100]);
  const { addToast } = useToast();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex flex-col md:flex-row gap-12 items-center py-20 relative",
        index % 2 === 0 && "md:flex-row-reverse"
      )}
    >
      <div className="flex-1 space-y-6 relative z-10">
        <div className="text-7xl font-black text-primary/10">0{index}</div>
        <h3 className="text-4xl font-bold tracking-tighter">{title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
        <PremiumButton 
          variant="secondary" 
          icon={<ArrowRight size={16} />}
          onClick={() => addToast(`מנווט לפרטים נוספים על: ${title}`, 'זהו קישור לדוגמה', 'info')}
        >
          למידה נוספת
        </PremiumButton>
      </div>
      
      <div className="flex-1 w-full aspect-video rounded-[2.5rem] bg-muted/30 border border-border/50 relative overflow-hidden group z-10">
        <motion.div
          style={{ y: yParallax }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-violet-500/20"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold">
            View Project
          </div>
        </div>
      </div>

      {/* Floating Section-Specific Decoration */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, index * 50]) }}
        className="absolute -top-10 -right-10 opacity-20 text-primary pointer-events-none"
      >
        <Sparkles size={120} />
      </motion.div>
    </motion.div>
  );
}

// 3. Background: Live Mesh with Parallax
function LiveBackground({ scrollYProgress }: { scrollYProgress: any }) {
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 opacity-50">
      {/* Primary Blob */}
      <motion.div
        style={{ y: y1, rotate: rotate1, scale: scale1 }}
        animate={{
          x: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full"
      />
      
      {/* Secondary Blob */}
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        animate={{
          x: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-violet-500/20 blur-[120px] rounded-full"
      />

      {/* Floating Decorative Elements */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -400]) }}
        className="absolute top-1/4 right-10 w-24 h-24 border-2 border-primary/20 rounded-full blur-sm"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 300]), rotate: 120 }}
        className="absolute top-3/4 left-20 w-32 h-32 border-2 border-violet-500/20 rounded-3xl blur-sm"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-500/10 rounded-full blur-md"
      />
    </div>
  );
}

export function AdvancedMotionLab() {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [showCode, setShowCode] = React.useState(false);
  const [showGalleryCode, setShowGalleryCode] = React.useState(false);
  const [showScrollCode, setShowScrollCode] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const scrollStructureCode = `
<motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
  className="flex flex-col md:flex-row gap-12 items-center py-20 relative"
>
  {/* ... content ... */}
</motion.div>
`;

  const scrollStyleCode = `
/* Tailwind classes for layout */
`;

  const scrollMotionCode = `
viewport={{ once: false, amount: 0.3 }}
`;

  const structureCode = `
<div className="relative p-8 rounded-3xl bg-card border border-border/50 shadow-xl cursor-pointer group overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  <div className={cn("w-12 h-12 rounded-2xl mb-4 flex items-center justify-center", color)}>
    <Icon size={24} />
  </div>
  <h3 className="text-xl font-bold mb-2">{title}</h3>
  <p className="text-sm text-muted-foreground">{description}</p>
</div>
`;

  const styleCode = `
/* Tailwind classes are applied directly to the structure */
`;

  const motionCode = `
const ref = React.useRef<HTMLDivElement>(null);
const [position, setPosition] = React.useState({ x: 0, y: 0 });

const handleMouseMove = (e: React.MouseEvent) => {
  if (!ref.current) return;
  const { clientX, clientY } = e;
  const { left, top, width, height } = ref.current.getBoundingClientRect();
  const x = clientX - (left + width / 2);
  const y = clientY - (top + height / 2);
  setPosition({ x: x * 0.2, y: y * 0.2 });
};

<motion.div
  ref={ref}
  onMouseMove={handleMouseMove}
  onMouseLeave={() => setPosition({ x: 0, y: 0 })}
  animate={{ x: position.x, y: position.y }}
  whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
  className="relative p-8 rounded-3xl bg-card border border-border/50 shadow-xl cursor-pointer group overflow-hidden"
>
  {/* ... */}
</motion.div>
`;

  const galleryStructureCode = `
<motion.div
  layoutId={\`card-\${item.id}\`}
  onClick={() => setSelectedId(item.id)}
  className="bg-card border border-border/50 rounded-3xl p-8 cursor-pointer hover:shadow-2xl transition-all group"
>
  <motion.div layoutId={\`icon-\${item.id}\`} className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", item.color)}>
    <Layers size={28} />
  </motion.div>
  <motion.h4 layoutId={\`title-\${item.id}\`} className="text-xl font-bold mb-2">{item.title}</motion.h4>
  <motion.p layoutId={\`subtitle-\${item.id}\`} className="text-sm text-muted-foreground">{item.subtitle}</motion.p>
</motion.div>
`;

  const galleryStyleCode = `
/* Tailwind classes for card styling */
`;

  const galleryMotionCode = `
<motion.div
  layoutId={\`card-\${item.id}\`}
  onClick={() => setSelectedId(item.id)}
  // ...
/>
// Shared layout transition magic
`;

  const galleryItems = [
    { id: '1', title: 'עיצוב ממשק', subtitle: 'חוויית משתמש', color: 'bg-blue-500/10 text-blue-500' },
    { id: '2', title: 'פיתוח קצה', subtitle: 'ביצועים גבוהים', color: 'bg-purple-500/10 text-purple-500' },
    { id: '3', title: 'בינה מלאכותית', subtitle: 'אוטומציה חכמה', color: 'bg-emerald-500/10 text-emerald-500' },
  ];

  return (
    <div className="relative space-y-32">
      {/* Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[100] origin-left" style={{ scaleX }} />
      
      <LiveBackground scrollYProgress={scrollYProgress} />

      {/* Floating Background Text */}
      <motion.div
        style={{ x: useTransform(scrollYProgress, [0, 1], [-100, 100]), opacity: 0.05 }}
        className="absolute top-40 left-0 text-[20vw] font-black pointer-events-none select-none whitespace-nowrap"
      >
        MOTION DESIGN
      </motion.div>

      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto pt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-3 rounded-2xl bg-primary/10 text-primary"
        >
          <Sparkles size={32} />
        </motion.div>
        <h2 className="text-5xl font-black tracking-tighter sm:text-7xl">
          מעבדת <span className="text-primary">תנועה</span> מתקדמת
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          כל סוגי האנימציות, האפקטים והתנהגויות ה-UI במקום אחד. חוויה שמרגישה חיה, מגיבה ומקצועית.
        </p>
      </div>

      {/* 1. Hover & Interaction Section */}
      <section className="space-y-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/20 text-violet-500 flex items-center justify-center">
              <MousePointer2 size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-bold">ריחוף ואינטראקציה</h3>
              <p className="text-muted-foreground">אפקטים מגנטיים, הטיה תלת-ממדית ומיקרו-פידבק.</p>
            </div>
          </div>
          <button 
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm font-medium"
          >
            <Code2 size={16} />
            {showCode ? 'הסתר קוד' : 'הצג קוד'}
          </button>
        </div>

        {showCode && (
          <CodePanel 
            structureCode={structureCode}
            styleCode={styleCode}
            motionCode={motionCode}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MagneticCard 
            title="כרטיס מגנטי" 
            description="האלמנט נמשך לכיוון העכבר בצורה אורגנית." 
            icon={Zap} 
            color="bg-amber-500/10 text-amber-500"
          />
          <MagneticCard 
            title="הטיה (Tilt)" 
            description="תחושת עומק תלת-ממדית בזמן ריחוף." 
            icon={Move} 
            color="bg-blue-500/10 text-blue-500"
          />
          <div className="flex items-center justify-center p-8 rounded-3xl border border-dashed border-border/50">
            <PremiumButton variant="ai" size="lg" className="px-12">הקלקת פרימיום</PremiumButton>
          </div>
        </div>
      </section>

      {/* 2. Shared Layout Gallery */}
      <section className="space-y-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-500 flex items-center justify-center">
              <LayoutGrid size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-bold">גלריה ופריסה דינמית</h3>
              <p className="text-muted-foreground">מעברים חלקים בין מצבים (Shared Layout Transitions).</p>
            </div>
          </div>
          <button 
            onClick={() => setShowGalleryCode(!showGalleryCode)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm font-medium"
          >
            <Code2 size={16} />
            {showGalleryCode ? 'הסתר קוד' : 'הצג קוד'}
          </button>
        </div>

        {showGalleryCode && (
          <CodePanel 
            structureCode={galleryStructureCode}
            styleCode={galleryStyleCode}
            motionCode={galleryMotionCode}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map(item => (
            <motion.div
              key={item.id}
              layoutId={`card-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              className="bg-card border border-border/50 rounded-3xl p-8 cursor-pointer hover:shadow-2xl transition-all group"
            >
              <motion.div layoutId={`icon-${item.id}`} className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", item.color)}>
                <Layers size={28} />
              </motion.div>
              <motion.h4 layoutId={`title-${item.id}`} className="text-xl font-bold mb-2">{item.title}</motion.h4>
              <motion.p layoutId={`subtitle-${item.id}`} className="text-sm text-muted-foreground">{item.subtitle}</motion.p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
              onClick={() => setSelectedId(null)}
            >
              {galleryItems.filter(item => item.id === selectedId).map(item => (
                <motion.div
                  key={item.id}
                  layoutId={`card-${item.id}`}
                  className="bg-card border border-border rounded-[2.5rem] p-12 w-full max-w-2xl shadow-2xl cursor-default relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute top-8 left-8 p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-all"
                  >
                    <Maximize2 size={20} className="rotate-45" />
                  </button>
                  
                  <div className="flex items-center gap-6 mb-8">
                    <motion.div layoutId={`icon-${item.id}`} className={cn("w-20 h-20 rounded-3xl flex items-center justify-center", item.color)}>
                      <Layers size={40} />
                    </motion.div>
                    <div>
                      <motion.h4 layoutId={`title-${item.id}`} className="text-3xl font-black">{item.title}</motion.h4>
                      <motion.p layoutId={`subtitle-${item.id}`} className="text-lg text-muted-foreground">{item.subtitle}</motion.p>
                    </div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      זהו מעבר פריסה משותף (Shared Layout Transition). Framer Motion מחשב את המיקום והגודל של האלמנטים ומבצע אינטרפולציה חלקה ביניהם.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 rounded-2xl bg-muted/50 border border-border/50" />
                      <div className="h-32 rounded-2xl bg-muted/50 border border-border/50" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 3. Scroll Reveal Sections */}
      <section className="space-y-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
              <ScrollText size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-bold">אנימציות גלילה</h3>
              <p className="text-muted-foreground">חשיפה הדרגתית, פאראלקס ומחווני התקדמות.</p>
            </div>
          </div>
          <button 
            onClick={() => setShowScrollCode(!showScrollCode)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm font-medium"
          >
            <Code2 size={16} />
            {showScrollCode ? 'הסתר קוד' : 'הצג קוד'}
          </button>
        </div>

        {showScrollCode && (
          <CodePanel 
            structureCode={scrollStructureCode}
            styleCode={scrollStyleCode}
            motionCode={scrollMotionCode}
          />
        )}

        <div className="divide-y divide-border/50">
          <ScrollRevealSection 
            index={1} 
            title="חשיפה חכמה" 
            description="התוכן מופיע רק כשהוא נכנס לטווח הראייה, מה שחוסך משאבים ויוצר חוויה יוקרתית."
            scrollYProgress={scrollYProgress}
          />
          <ScrollRevealSection 
            index={2} 
            title="פאראלקס עדין" 
            description="תמונות ורקעים שזזים במהירות שונה מהטקסט ליצירת תחושת עומק."
            scrollYProgress={scrollYProgress}
          />
        </div>
      </section>

      {/* 4. Typography & Effects */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center">
            <Type size={24} />
          </div>
          <div>
            <h3 className="text-3xl font-bold">טיפוגרפיה ואפקטים</h3>
            <p className="text-muted-foreground">טקסט קינטי, Glassmorphism וגראדיאנטים חיים.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-80 rounded-[2.5rem] bg-card/50 backdrop-blur-2xl border border-border/50 flex items-center justify-center p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-black text-center leading-tight"
            >
              Glassmorphism <br />
              <span className="text-primary">Premium Depth</span>
            </motion.h4>
          </div>

          <div className="h-80 rounded-[2.5rem] bg-black flex items-center justify-center p-12 relative overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-tr from-primary to-violet-600 blur-[80px] opacity-30"
            />
            <h4 className="text-4xl font-black text-white relative z-10">Dynamic Glow</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

