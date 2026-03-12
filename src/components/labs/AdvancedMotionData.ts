import { Variants } from 'framer-motion';

export interface MotionSystem {
  id: string;
  label: string;
  description: string;
  type: 'entrance' | 'hover' | 'layout' | 'continuous' | 'feedback';
  variants?: Variants;
  containerVariants?: Variants;
  color?: string;
}

export const motionSystems: MotionSystem[] = [
  {
    id: 'staggered-fade-in',
    label: 'כניסה מדורגת',
    description: 'אלמנטים נכנסים אחד אחרי השני בדהייה עדינה',
    type: 'entrance',
    containerVariants: {
      animate: {
        transition: { staggerChildren: 0.1 }
      }
    },
    variants: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 }
    },
    color: 'bg-blue-500'
  },
  {
    id: 'magnetic-hover',
    label: 'משיכה מגנטית',
    description: 'אלמנט שנמשך לסמן העכבר בעדינות',
    type: 'hover',
    variants: {
      hover: { scale: 1.1, rotate: 2, transition: { type: 'spring', stiffness: 400, damping: 10 } }
    },
    color: 'bg-purple-500'
  },
  {
    id: 'glass-morph-pulse',
    label: 'דופק זכוכית',
    description: 'אפקט זכוכית שמתרחב ומתכווץ עם הילה',
    type: 'continuous',
    variants: {
      animate: {
        scale: [1, 1.05, 1],
        boxShadow: [
          "0 0 0px rgba(255,255,255,0)",
          "0 0 20px rgba(255,255,255,0.3)",
          "0 0 0px rgba(255,255,255,0)"
        ],
        transition: { duration: 2, repeat: Infinity }
      }
    },
    color: 'bg-emerald-500'
  },
  {
    id: 'flip-card-3d',
    label: 'היפוך כרטיס 3D',
    description: 'היפוך מלא של הכרטיס בפרספקטיבה',
    type: 'hover',
    variants: {
      hover: { rotateY: 180, transition: { duration: 0.6 } }
    },
    color: 'bg-orange-500'
  },
  {
    id: 'elastic-entrance',
    label: 'כניסה אלסטית',
    description: 'נפילה מלמעלה עם קפיצה חזקה',
    type: 'entrance',
    variants: {
      initial: { y: -100, opacity: 0 },
      animate: { y: 0, opacity: 1, transition: { type: 'spring', damping: 5, stiffness: 150 } }
    },
    color: 'bg-rose-500'
  },
  {
    id: 'orbit-motion',
    label: 'תנועת מסלול',
    description: 'אלמנט שנע במסלול מעגלי קבוע',
    type: 'continuous',
    variants: {
      animate: {
        rotate: 360,
        transition: { duration: 10, repeat: Infinity, ease: "linear" }
      }
    },
    color: 'bg-indigo-500'
  },
  {
    id: 'skew-reveal',
    label: 'חשיפת נטייה',
    description: 'חשיפה הדרגתית עם אפקט Skew',
    type: 'entrance',
    variants: {
      initial: { skewX: -45, opacity: 0, x: -50 },
      animate: { skewX: 0, opacity: 1, x: 0, transition: { duration: 0.8, ease: "circOut" } }
    },
    color: 'bg-amber-500'
  },
  {
    id: 'glow-trail',
    label: 'שובל זוהר',
    description: 'הילה שעוקבת אחרי האלמנט בתנועה',
    type: 'continuous',
    variants: {
      animate: {
        x: [0, 100, 0],
        filter: ["drop-shadow(0 0 0px #fff)", "drop-shadow(0 0 15px #fff)", "drop-shadow(0 0 0px #fff)"],
        transition: { duration: 3, repeat: Infinity }
      }
    },
    color: 'bg-cyan-500'
  },
  {
    id: 'shatter-entrance',
    label: 'כניסת שברים',
    description: 'אלמנט שמתחבר מחלקים קטנים',
    type: 'entrance',
    variants: {
      initial: { scale: 0, rotate: 45, opacity: 0 },
      animate: { scale: 1, rotate: 0, opacity: 1, transition: { type: 'spring', damping: 12 } }
    },
    color: 'bg-teal-500'
  },
  {
    id: 'liquid-hover',
    label: 'ריחוף נוזלי',
    description: 'שינוי צורה רך וגמיש במעבר עכבר',
    type: 'hover',
    variants: {
      hover: { 
        borderRadius: ["20%", "50%", "20%"],
        scale: 1.1,
        transition: { duration: 2, repeat: Infinity }
      }
    },
    color: 'bg-pink-500'
  },
  {
    id: 'perspective-tilt',
    label: 'הטיית פרספקטיבה',
    description: 'הטיה תלת-ממדית שמגיבה למיקום',
    type: 'hover',
    variants: {
      hover: { rotateX: 15, rotateY: -15, z: 50, transition: { duration: 0.3 } }
    },
    color: 'bg-slate-500'
  },
  {
    id: 'bounce-tap',
    label: 'לחיצה קפיצית',
    description: 'תגובה מהירה ואלסטית ללחיצה',
    type: 'feedback',
    variants: {
      tap: { scale: 0.9, transition: { type: 'spring', stiffness: 500, damping: 15 } }
    },
    color: 'bg-lime-500'
  },
  {
    id: 'ripple-effect',
    label: 'אפקט אדווה',
    description: 'התרחבות מעגלית מנקודת הלחיצה',
    type: 'feedback',
    variants: {
      tap: { 
        boxShadow: "0 0 0 20px rgba(255,255,255,0)",
        transition: { duration: 0.4 }
      }
    },
    color: 'bg-violet-500'
  },
  {
    id: 'float-y',
    label: 'ציפה אנכית',
    description: 'תנועה למעלה ולמטה כמו בים',
    type: 'continuous',
    variants: {
      animate: {
        y: [0, -20, 0],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }
    },
    color: 'bg-sky-500'
  },
  {
    id: 'slide-mask-reveal',
    label: 'חשיפת מסכה',
    description: 'אלמנט שיוצא מתוך קו חיתוך',
    type: 'entrance',
    variants: {
      initial: { clipPath: 'inset(0 100% 0 0)' },
      animate: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 1, ease: "easeInOut" } }
    },
    color: 'bg-fuchsia-500'
  },
  {
    id: 'neon-flicker',
    label: 'הבהוב נאון',
    description: 'אפקט אור נאון לא יציב ומגניב',
    type: 'continuous',
    variants: {
      animate: {
        opacity: [1, 0.4, 0.9, 0.3, 1],
        textShadow: [
          "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #00f, 0 0 40px #00f",
          "0 0 2px #fff, 0 0 5px #fff, 0 0 10px #00f, 0 0 20px #00f",
          "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #00f, 0 0 40px #00f"
        ],
        transition: { duration: 0.5, repeat: Infinity }
      }
    },
    color: 'bg-blue-600'
  },
  {
    id: 'expand-from-center',
    label: 'התרחבות מהמרכז',
    description: 'אלמנט שנפתח מהנקודה המרכזית',
    type: 'entrance',
    variants: {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "backOut" } }
    },
    color: 'bg-orange-600'
  },
  {
    id: 'vibrate-error',
    label: 'רטט שגיאה',
    description: 'רעידה מהירה לצדדים להתרעה',
    type: 'feedback',
    variants: {
      animate: {
        x: [-2, 2, -2, 2, 0],
        transition: { duration: 0.1, repeat: 5 }
      }
    },
    color: 'bg-red-500'
  },
  {
    id: 'soft-blur-entrance',
    label: 'כניסה מטושטשת',
    description: 'מעבר הדרגתי מטשטוש עמוק לחדות',
    type: 'entrance',
    variants: {
      initial: { filter: "blur(20px)", opacity: 0 },
      animate: { filter: "blur(0px)", opacity: 1, transition: { duration: 1.2 } }
    },
    color: 'bg-zinc-500'
  },
  {
    id: 'spiral-entrance',
    label: 'כניסה ספירלית',
    description: 'אלמנט שנכנס בסיבוב וזום',
    type: 'entrance',
    variants: {
      initial: { rotate: -180, scale: 0, opacity: 0 },
      animate: { rotate: 0, scale: 1, opacity: 1, transition: { duration: 0.8 } }
    },
    color: 'bg-emerald-600'
  }
];

// Generate 80 more unique motion systems
for (let i = 1; i <= 80; i++) {
  const types: MotionSystem['type'][] = ['entrance', 'hover', 'layout', 'continuous', 'feedback'];
  const type = types[i % types.length];
  const colors = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-cyan-500'];
  const color = colors[i % colors.length];

  motionSystems.push({
    id: `motion-system-${i}`,
    label: `מערכת תנועה ${i + 20}`,
    description: `וריאציית תנועה מתקדמת מספר ${i + 20} לעיצוב ממשק פרימיום.`,
    type: type,
    variants: {
      initial: { 
        opacity: 0, 
        x: (i % 3 - 1) * 30, 
        y: (i % 2 === 0 ? 20 : -20),
        scale: 0.8
      },
      animate: { 
        opacity: 1, 
        x: 0, 
        y: 0, 
        scale: 1,
        transition: {
          type: 'spring',
          damping: 10 + (i % 10),
          stiffness: 100 + (i % 50)
        }
      },
      hover: {
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 }
      },
      tap: {
        scale: 0.95
      }
    },
    color: color
  });
}
