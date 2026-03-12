import { Variants } from 'framer-motion';

export interface KineticAnimation {
  id: string;
  label: string;
  description: string;
  variants?: Variants;
  containerVariants?: Variants;
  type: 'word' | 'char' | 'line' | 'full';
  customRender?: boolean;
}

export const kineticAnimations: KineticAnimation[] = [
  {
    id: 'fade-up',
    label: 'הופעה מעלה',
    description: 'טקסט עולה למעלה תוך כדי דהייה פנימה',
    type: 'full',
    variants: {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 },
    }
  },
  {
    id: 'blur-reveal',
    label: 'חשיפת טשטוש',
    description: 'טקסט נחשף מטשטוש עמוק',
    type: 'full',
    variants: {
      initial: { filter: "blur(20px)", opacity: 0, scale: 0.9 },
      animate: { filter: "blur(0px)", opacity: 1, scale: 1 },
    }
  },
  {
    id: 'char-stagger',
    label: 'דירוג תווים',
    description: 'כל תו מופיע בנפרד בדירוג זמן',
    type: 'char',
    variants: {
      initial: { y: "100%", opacity: 0 },
      animate: { y: 0, opacity: 1 },
    }
  },
  {
    id: 'word-slide',
    label: 'החלקת מילים',
    description: 'מילים מחליקות פנימה אחת אחרי השנייה',
    type: 'word',
    variants: {
      initial: { x: -20, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    }
  },
  {
    id: 'elastic-bounce',
    label: 'קפיצה אלסטית',
    description: 'אפקט קפיצה רך ודינמי',
    type: 'full',
    variants: {
      initial: { scale: 0, opacity: 0 },
      animate: { 
        scale: 1, 
        opacity: 1,
        transition: { type: 'spring', damping: 12, stiffness: 100 }
      },
    }
  },
  {
    id: 'rotate-in',
    label: 'סיבוב פנימה',
    description: 'טקסט מסתובב סביב צירו בזמן ההופעה',
    type: 'full',
    variants: {
      initial: { rotateX: -90, opacity: 0, y: 20 },
      animate: { rotateX: 0, opacity: 1, y: 0 },
    }
  },
  {
    id: 'letter-spacing',
    label: 'מרווח אותיות',
    description: 'שינוי דינמי של המרווח בין האותיות',
    type: 'full',
    variants: {
      initial: { letterSpacing: "1em", opacity: 0 },
      animate: { letterSpacing: "0em", opacity: 1 },
    }
  },
  {
    id: 'skew-reveal',
    label: 'חשיפת נטייה',
    description: 'אפקט נטייה (Skew) בזמן החשיפה',
    type: 'char',
    variants: {
      initial: { skewX: -45, opacity: 0, x: -20 },
      animate: { skewX: 0, opacity: 1, x: 0 },
    }
  },
  {
    id: 'wave-effect',
    label: 'אפקט גל',
    description: 'תנועה גלית של האותיות',
    type: 'char',
    variants: {
      initial: { y: 0 },
      animate: (i: number) => ({
        y: [0, -15, 0],
        transition: {
          delay: i * 0.1,
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }),
    }
  },
  {
    id: 'glitch-text',
    label: 'טקסט גליץ\'',
    description: 'אפקט שיבוש דיגיטלי מהיר',
    type: 'full',
    customRender: true
  },
  {
    id: 'typewriter',
    label: 'מכונת כתיבה',
    description: 'הופעה הדרגתית של אותיות כמו בהקלדה',
    type: 'char',
    variants: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    }
  },
  {
    id: 'flip-up',
    label: 'היפוך מעלה',
    description: 'היפוך תלת-ממדי של המילים',
    type: 'word',
    variants: {
      initial: { rotateX: 90, opacity: 0 },
      animate: { rotateX: 0, opacity: 1 },
    }
  },
  {
    id: 'zoom-out-reveal',
    label: 'חשיפת זום החוצה',
    description: 'טקסט שמתחיל גדול ומתכווץ לגודלו הטבעי',
    type: 'full',
    variants: {
      initial: { scale: 2, opacity: 0, filter: "blur(10px)" },
      animate: { scale: 1, opacity: 1, filter: "blur(0px)" },
    }
  },
  {
    id: 'spiral-in',
    label: 'ספירלה פנימה',
    description: 'אותיות שנכנסות בתנועה סיבובית',
    type: 'char',
    variants: {
      initial: { rotate: 180, scale: 0, opacity: 0 },
      animate: { rotate: 0, scale: 1, opacity: 1 },
    }
  },
  {
    id: 'color-cycle',
    label: 'מחזור צבעים',
    description: 'שינוי צבעים הדרגתי של הטקסט',
    type: 'full',
    variants: {
      animate: {
        color: ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#3b82f6"],
        transition: { duration: 5, repeat: Infinity }
      }
    }
  },
  {
    id: 'float-anim',
    label: 'ציפה עדינה',
    description: 'טקסט שצף בעדינות למעלה ולמטה',
    type: 'full',
    variants: {
      animate: {
        y: [0, -10, 0],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
      }
    }
  },
  {
    id: 'mask-reveal',
    label: 'חשיפת מסכה',
    description: 'טקסט שנחשף מאחורי מסכה בלתי נראית',
    type: 'full',
    customRender: true
  },
  {
    id: 'focus-blur',
    label: 'פוקוס וטשטוש',
    description: 'מעבר בין טשטוש לפוקוס חד',
    type: 'full',
    variants: {
      initial: { filter: "blur(10px)", opacity: 0 },
      animate: { filter: "blur(0px)", opacity: 1 },
    }
  },
  {
    id: 'drop-in',
    label: 'נפילה פנימה',
    description: 'מילים שנופלות מלמעלה עם אפקט קפיצה',
    type: 'word',
    variants: {
      initial: { y: -100, opacity: 0 },
      animate: { 
        y: 0, 
        opacity: 1,
        transition: { type: 'spring', bounce: 0.5 }
      },
    }
  },
  {
    id: 'perspective-rotate',
    label: 'סיבוב פרספקטיבה',
    description: 'סיבוב בפרספקטיבה תלת-ממדית',
    type: 'full',
    variants: {
      initial: { rotateY: 90, opacity: 0 },
      animate: { rotateY: 0, opacity: 1 },
    }
  },
  // --- New Premium Variations (21-100) ---
  {
    id: 'neon-flicker',
    label: 'הבהוב נאון',
    description: 'אפקט אור נאון מהבהב עם צבעים משתנים',
    type: 'full',
    variants: {
      initial: { opacity: 0.3, textShadow: "0 0 0px #fff" },
      animate: { 
        opacity: [0.3, 1, 0.4, 1, 0.8, 1],
        color: ["#fff", "#00f2ff", "#fff", "#00f2ff"],
        textShadow: [
          "0 0 0px #fff",
          "0 0 20px #00f2ff, 0 0 40px #00f2ff",
          "0 0 5px #fff",
          "0 0 30px #00f2ff, 0 0 60px #00f2ff"
        ],
        transition: { duration: 2, repeat: Infinity, repeatType: "mirror" }
      }
    }
  },
  {
    id: 'liquid-flow',
    label: 'זרימה נוזלית',
    description: 'תנועה גלית ורכה המדמה זרימת נוזל',
    type: 'char',
    variants: {
      initial: { y: 10, scaleY: 0.8, opacity: 0 },
      animate: (i: number) => ({
        y: [10, -10, 10],
        scaleY: [0.8, 1.2, 0.8],
        opacity: 1,
        transition: {
          delay: i * 0.1,
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      })
    }
  },
  {
    id: 'cyber-glitch-v2',
    label: 'סייבר גליץ\' מתקדם',
    description: 'שיבוש דיגיטלי עם הסטת צבעים חדה',
    type: 'char',
    variants: {
      initial: { x: 0, opacity: 0 },
      animate: (i: number) => ({
        opacity: 1,
        x: [0, -5, 5, -2, 2, 0],
        color: ["#fff", "#ff00ff", "#00ffff", "#fff"],
        transition: {
          delay: i * 0.05,
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: Math.random() * 5
        }
      })
    }
  },
  {
    id: 'gravity-drop',
    label: 'נפילת כבידה',
    description: 'נפילה חופשית עם אפקט אלסטי בנחיתה',
    type: 'word',
    variants: {
      initial: { y: -200, opacity: 0, rotate: -15 },
      animate: { 
        y: 0, 
        opacity: 1, 
        rotate: 0,
        transition: { type: 'spring', damping: 8, stiffness: 120 }
      }
    }
  },
  {
    id: 'ghost-echo',
    label: 'הד רפאים',
    description: 'שובל של דמויות עוקבות אחרי הטקסט',
    type: 'full',
    variants: {
      initial: { opacity: 0, x: -50 },
      animate: { 
        opacity: 1, 
        x: 0,
        textShadow: "20px 0px 20px rgba(255,255,255,0.2), -20px 0px 20px rgba(255,255,255,0.1)",
        transition: { duration: 1 }
      }
    }
  },
  {
    id: 'staircase-reveal',
    label: 'חשיפת מדרגות',
    description: 'מילים עולות אחת אחרי השנייה כמו במדרגות',
    type: 'word',
    variants: {
      initial: { y: 50, opacity: 0 },
      animate: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" }
      })
    }
  },
  {
    id: 'magnetic-pull',
    label: 'משיכה מגנטית',
    description: 'אותיות שנמשכות למרכז בעוצמה',
    type: 'char',
    variants: {
      initial: { scale: 3, opacity: 0, filter: "blur(10px)" },
      animate: { 
        scale: 1, 
        opacity: 1, 
        filter: "blur(0px)",
        transition: { type: 'spring', damping: 15, stiffness: 200 }
      }
    }
  },
  {
    id: 'smoke-dissolve',
    label: 'התמוססות עשן',
    description: 'טקסט שמתגבש מתוך ענן עשן',
    type: 'full',
    variants: {
      initial: { opacity: 0, filter: "blur(30px)", scale: 1.5, letterSpacing: "1em" },
      animate: { 
        opacity: 1, 
        filter: "blur(0px)", 
        scale: 1, 
        letterSpacing: "0.1em",
        transition: { duration: 2, ease: "easeOut" }
      }
    }
  },
  {
    id: 'rainbow-wave',
    label: 'גל קשת',
    description: 'צבעי הקשת נעים לאורך הטקסט',
    type: 'char',
    variants: {
      animate: (i: number) => ({
        color: ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#8b00ff", "#ff0000"],
        transition: { duration: 4, repeat: Infinity, delay: i * 0.1 }
      })
    }
  },
  {
    id: 'shimmer-gold',
    label: 'נצנוץ זהב',
    description: 'אפקט יוקרתי של זהב מנצנץ',
    type: 'full',
    variants: {
      animate: {
        background: [
          "linear-gradient(90deg, #d4af37 0%, #f9f295 50%, #d4af37 100%)",
          "linear-gradient(90deg, #d4af37 100%, #f9f295 50%, #d4af37 0%)"
        ],
        transition: { duration: 3, repeat: Infinity, repeatType: "mirror" }
      }
    }
  },
  {
    id: 'bounce-pop',
    label: 'פופ קופצני',
    description: 'הופעה מהירה עם קפיצה בסוף',
    type: 'char',
    variants: {
      initial: { scale: 0 },
      animate: (i: number) => ({
        scale: [0, 1.2, 1],
        transition: { delay: i * 0.05, duration: 0.4 }
      })
    }
  },
  {
    id: 'slide-and-skew',
    label: 'החלקה ונטייה',
    description: 'שילוב של תנועה אופקית ונטייה חדה',
    type: 'word',
    variants: {
      initial: { x: 100, skewX: 30, opacity: 0 },
      animate: { 
        x: 0, 
        skewX: 0, 
        opacity: 1,
        transition: { type: 'spring', damping: 12, stiffness: 100 }
      }
    }
  },
  {
    id: 'focus-in-out',
    label: 'פוקוס משתנה',
    description: 'טקסט שיוצא ונכנס מפוקוס באופן מחזורי',
    type: 'full',
    variants: {
      animate: {
        filter: ["blur(0px)", "blur(8px)", "blur(0px)"],
        opacity: [1, 0.5, 1],
        transition: { duration: 4, repeat: Infinity }
      }
    }
  },
  {
    id: 'typewriter-cursor',
    label: 'הקלדה עם סמן',
    description: 'אפקט הקלדה קלאסי עם סמן מהבהב',
    type: 'char',
    variants: {
      initial: { opacity: 0, borderLeft: "2px solid transparent" },
      animate: (i: number) => ({
        opacity: 1,
        borderLeft: ["2px solid #fff", "2px solid transparent"],
        transition: { 
          opacity: { delay: i * 0.1, duration: 0.01 },
          borderLeft: { delay: i * 0.1, duration: 0.5, repeat: 1 }
        }
      })
    }
  },
  {
    id: '3d-flip-vertical',
    label: 'היפוך תלת-ממדי אנכי',
    description: 'סיבוב סביב ציר ה-X',
    type: 'word',
    variants: {
      initial: { rotateX: 180, opacity: 0 },
      animate: { rotateX: 0, opacity: 1, transition: { duration: 0.8 } }
    }
  },
  {
    id: 'pulse-glow',
    label: 'דופק זוהר',
    description: 'הילה זוהרת שמתרחבת ומתכווצת',
    type: 'full',
    variants: {
      animate: {
        textShadow: [
          "0 0 10px rgba(255,255,255,0.5)",
          "0 0 30px rgba(255,255,255,0.8)",
          "0 0 10px rgba(255,255,255,0.5)"
        ],
        scale: [1, 1.05, 1],
        transition: { duration: 2, repeat: Infinity }
      }
    }
  },
  {
    id: 'scatter-gather',
    label: 'פיזור ואיסוף',
    description: 'אותיות שמתפזרות לכל עבר ומתאספות',
    type: 'char',
    variants: {
      initial: { 
        x: -100, 
        y: -100, 
        opacity: 0,
        rotate: 45
      },
      animate: { 
        x: 0, 
        y: 0, 
        opacity: 1, 
        rotate: 0,
        transition: { type: 'spring', damping: 20, stiffness: 100 }
      }
    }
  },
  {
    id: 'reveal-from-line',
    label: 'חשיפה מקו',
    description: 'טקסט שיוצא מתוך קו מרכזי',
    type: 'full',
    variants: {
      initial: { scaleY: 0, opacity: 0 },
      animate: { scaleY: 1, opacity: 1, transition: { duration: 0.5, ease: "circOut" } }
    }
  },
  {
    id: 'hologram-scan',
    label: 'סריקת הולוגרמה',
    description: 'אפקט סריקה כחול כמו בהולוגרמה',
    type: 'full',
    variants: {
      animate: {
        color: ["#00ffff", "#88ffff", "#00ffff"],
        opacity: [0.8, 1, 0.8],
        background: "linear-gradient(transparent 0%, rgba(0,255,255,0.2) 50%, transparent 100%)",
        backgroundSize: "100% 200%",
        backgroundPosition: ["0% 0%", "0% 100%"],
        transition: { duration: 1.5, repeat: Infinity }
      }
    }
  },
  {
    id: 'elastic-stretch',
    label: 'מתיחה אלסטית',
    description: 'מתיחה אופקית חזקה שחוזרת למקום',
    type: 'full',
    variants: {
      initial: { scaleX: 0, opacity: 0 },
      animate: { scaleX: 1, opacity: 1, transition: { type: 'spring', damping: 10, stiffness: 100 } }
    }
  },
  {
    id: 'matrix-rain',
    label: 'גשם מטריקס',
    description: 'אותיות יורדות מלמעלה בסגנון קוד',
    type: 'char',
    variants: {
      initial: { y: -50, opacity: 0, color: "#00ff00" },
      animate: (i: number) => ({
        y: 0,
        opacity: [0, 1, 0.8, 1],
        transition: { delay: i * 0.1, duration: 0.5 }
      })
    }
  },
  {
    id: 'soft-float',
    label: 'ציפה רכה',
    description: 'תנועה מעגלית עדינה באוויר',
    type: 'full',
    variants: {
      animate: {
        y: [0, -15, 0],
        x: [0, 5, 0],
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
      }
    }
  },
  {
    id: 'pixel-reveal',
    label: 'חשיפת פיקסלים',
    description: 'הופעה הדרגתית של קוביות צבע',
    type: 'char',
    variants: {
      initial: { opacity: 0, scale: 0, borderRadius: "0%" },
      animate: (i: number) => ({
        opacity: 1,
        scale: 1,
        borderRadius: "0%",
        transition: { delay: i * 0.02, duration: 0.3 }
      })
    }
  },
  {
    id: 'ink-bleed',
    label: 'דימום דיו',
    description: 'טקסט שמתפשט כמו דיו על נייר',
    type: 'full',
    variants: {
      initial: { filter: "blur(20px)", opacity: 0, scale: 0.8 },
      animate: { filter: "blur(0px)", opacity: 1, scale: 1, transition: { duration: 2 } }
    }
  },
  {
    id: 'glitch-rgb',
    label: 'RGB גליץ\'',
    description: 'הפרדת צבעי יסוד בזמן תנועה',
    type: 'full',
    variants: {
      animate: {
        textShadow: [
          "2px 0 #ff0000, -2px 0 #0000ff",
          "-2px 0 #ff0000, 2px 0 #0000ff",
          "0 0 #ff0000, 0 0 #0000ff"
        ],
        transition: { duration: 0.1, repeat: Infinity, repeatDelay: 2 }
      }
    }
  },
  {
    id: 'wave-sync',
    label: 'גל מסונכרן',
    description: 'תנועה גלית אחידה לכל הטקסט',
    type: 'full',
    variants: {
      animate: {
        y: [0, -20, 0],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }
    }
  },
  {
    id: 'depth-zoom',
    label: 'זום עומק',
    description: 'טקסט שמגיע מרחוק מאוד',
    type: 'full',
    variants: {
      initial: { z: -1000, opacity: 0, scale: 0 },
      animate: { z: 0, opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } }
    }
  },
  {
    id: 'shatter-reveal',
    label: 'חשיפת שברים',
    description: 'חלקי טקסט שמתחברים יחד',
    type: 'char',
    variants: {
      initial: { opacity: 0, rotate: 45, y: 20 },
      animate: (i: number) => ({
        opacity: 1,
        rotate: 0,
        y: 0,
        transition: { delay: i * 0.05, type: 'spring' }
      })
    }
  },
  {
    id: 'neon-pulse-blue',
    label: 'דופק נאון כחול',
    description: 'זוהר כחול עמוק ומהבהב',
    type: 'full',
    variants: {
      animate: {
        color: ["#fff", "#00d2ff", "#fff"],
        textShadow: ["0 0 5px #00d2ff", "0 0 20px #00d2ff", "0 0 5px #00d2ff"],
        transition: { duration: 1.5, repeat: Infinity }
      }
    }
  },
  {
    id: 'slide-up-mask',
    label: 'עליה ממסכה',
    description: 'טקסט שעולה מתוך קו תחתון',
    type: 'word',
    variants: {
      initial: { y: 100 },
      animate: (i: number) => ({
        y: 0,
        transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      })
    }
  },
  {
    id: 'vibrate-heavy',
    label: 'רטט חזק',
    description: 'אפקט רעידה אינטנסיבי',
    type: 'full',
    variants: {
      animate: {
        x: [-2, 2, -2, 2, 0],
        y: [1, -1, 1, -1, 0],
        transition: { duration: 0.1, repeat: Infinity }
      }
    }
  },
  {
    id: 'swing-pendulum',
    label: 'מטוטלת',
    description: 'נדנוד מצד לצד כמו מטוטלת',
    type: 'full',
    variants: {
      animate: {
        rotate: [-10, 10, -10],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
      }
    }
  },
  {
    id: 'blur-slide-right',
    label: 'החלקה מטושטשת',
    description: 'החלקה ימינה עם טשטוש תנועה',
    type: 'word',
    variants: {
      initial: { x: -100, filter: "blur(10px)", opacity: 0 },
      animate: { x: 0, filter: "blur(0px)", opacity: 1, transition: { duration: 0.6 } }
    }
  },
  {
    id: 'expand-center',
    label: 'התרחבות מהמרכז',
    description: 'טקסט שנפתח מהאמצע החוצה',
    type: 'full',
    variants: {
      initial: { scaleX: 0, opacity: 0 },
      animate: { scaleX: 1, opacity: 1, transition: { duration: 1, ease: "anticipate" } }
    }
  },
  {
    id: 'color-shift-dark',
    label: 'שינוי צבע כהה',
    description: 'מעבר בין גוונים כהים ויוקרתיים',
    type: 'full',
    variants: {
      animate: {
        color: ["#1e293b", "#475569", "#1e293b"],
        transition: { duration: 4, repeat: Infinity }
      }
    }
  },
  {
    id: 'bounce-heavy',
    label: 'קפיצה כבדה',
    description: 'נפילה עם משקל רב',
    type: 'full',
    variants: {
      initial: { y: -300 },
      animate: { y: 0, transition: { type: 'spring', damping: 5, stiffness: 150 } }
    }
  },
  {
    id: 'rotate-3d-y',
    label: 'סיבוב Y תלת-ממדי',
    description: 'סיבוב מלא סביב ציר ה-Y',
    type: 'full',
    variants: {
      animate: {
        rotateY: [0, 360],
        transition: { duration: 10, repeat: Infinity, ease: "linear" }
      }
    }
  },
  {
    id: 'fade-in-chars-random',
    label: 'הופעת תווים אקראית',
    description: 'תווים מופיעים בסדר לא צפוי',
    type: 'char',
    variants: {
      initial: { opacity: 0 },
      animate: () => ({
        opacity: 1,
        transition: { delay: Math.random() * 2, duration: 0.5 }
      })
    }
  },
  {
    id: 'skew-vibrate',
    label: 'נטייה רוטטת',
    description: 'שילוב של נטייה ורטט מהיר',
    type: 'full',
    variants: {
      animate: {
        skewX: [-5, 5, -5],
        transition: { duration: 0.2, repeat: Infinity }
      }
    }
  },
  {
    id: 'zoom-bounce',
    label: 'זום קופצני',
    description: 'זום מהיר פנימה עם קפיצה',
    type: 'full',
    variants: {
      initial: { scale: 0 },
      animate: { scale: [0, 1.5, 1], transition: { duration: 0.6 } }
    }
  },
  {
    id: 'letter-by-letter-up',
    label: 'אות אחרי אות למעלה',
    description: 'עליה הדרגתית של כל אות',
    type: 'char',
    variants: {
      initial: { y: 20, opacity: 0 },
      animate: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.05 }
      })
    }
  },
  {
    id: 'shadow-move',
    label: 'צל נע',
    description: 'הצל של הטקסט זז מסביב',
    type: 'full',
    variants: {
      animate: {
        textShadow: [
          "5px 5px 10px rgba(0,0,0,0.5)",
          "-5px 5px 10px rgba(0,0,0,0.5)",
          "5px 5px 10px rgba(0,0,0,0.5)"
        ],
        transition: { duration: 4, repeat: Infinity }
      }
    }
  },
  {
    id: 'spiral-out',
    label: 'ספירלה החוצה',
    description: 'טקסט שיוצא בסיבוב ומתרחב',
    type: 'full',
    variants: {
      initial: { rotate: -180, scale: 0, opacity: 0 },
      animate: { rotate: 0, scale: 1, opacity: 1, transition: { duration: 1 } }
    }
  },
  {
    id: 'glitch-slice',
    label: 'חיתוך גליץ\'',
    description: 'טקסט שנראה חתוך לשניים',
    type: 'full',
    variants: {
      animate: {
        clipPath: [
          "inset(0 0 50% 0)",
          "inset(50% 0 0 0)",
          "inset(0 0 0 0)"
        ],
        transition: { duration: 0.5, repeat: Infinity, repeatDelay: 3 }
      }
    }
  },
  {
    id: 'wave-diagonal',
    label: 'גל אלכסוני',
    description: 'תנועה גלית שעוברת באלכסון',
    type: 'char',
    variants: {
      animate: (i: number) => ({
        y: [0, -20, 0],
        x: [0, 10, 0],
        transition: { delay: i * 0.1, duration: 2, repeat: Infinity }
      })
    }
  },
  {
    id: 'blur-reveal-fast',
    label: 'חשיפת טשטוש מהירה',
    description: 'טשטוש שנעלם במהירות גבוהה',
    type: 'full',
    variants: {
      initial: { filter: "blur(50px)", opacity: 0 },
      animate: { filter: "blur(0px)", opacity: 1, transition: { duration: 0.3 } }
    }
  },
  {
    id: 'perspective-tilt',
    label: 'הטיית פרספקטיבה',
    description: 'הטיה תלת-ממדית קבועה',
    type: 'full',
    variants: {
      animate: {
        rotateX: [10, -10, 10],
        rotateY: [10, -10, 10],
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }
    }
  },
  {
    id: 'color-glow-red',
    label: 'זוהר אדום',
    description: 'הילה אדומה חזקה',
    type: 'full',
    variants: {
      animate: {
        textShadow: ["0 0 10px #ff0000", "0 0 40px #ff0000", "0 0 10px #ff0000"],
        transition: { duration: 2, repeat: Infinity }
      }
    }
  },
  {
    id: 'slide-down-elastic',
    label: 'החלקה אלסטית למטה',
    description: 'ירידה עם אפקט קפיצי חזק',
    type: 'full',
    variants: {
      initial: { y: -100, opacity: 0 },
      animate: { y: 0, opacity: 1, transition: { type: 'spring', damping: 7 } }
    }
  },
  {
    id: 'flip-horizontal-chars',
    label: 'היפוך תווים אופקי',
    description: 'כל תו מתהפך סביב עצמו',
    type: 'char',
    variants: {
      initial: { rotateY: 90, opacity: 0 },
      animate: (i: number) => ({
        rotateY: 0,
        opacity: 1,
        transition: { delay: i * 0.1, duration: 0.5 }
      })
    }
  },
  {
    id: 'soft-scale-pulse',
    label: 'דופק קנה מידה רך',
    description: 'שינוי גודל עדין מאוד',
    type: 'full',
    variants: {
      animate: {
        scale: [1, 1.02, 1],
        transition: { duration: 3, repeat: Infinity }
      }
    }
  },
  {
    id: 'reveal-from-top-mask',
    label: 'חשיפה מלמעלה',
    description: 'טקסט שמופיע מלמעלה מאחורי מסכה',
    type: 'full',
    variants: {
      initial: { y: -50, opacity: 0 },
      animate: { y: 0, opacity: 1, transition: { duration: 0.8 } }
    }
  },
  {
    id: 'jitter-effect',
    label: 'אפקט רעידות',
    description: 'תנועות קטנות ומהירות לכל הכיוונים',
    type: 'full',
    variants: {
      animate: {
        x: [-2, 2, -1, 1, 0],
        y: [1, -1, 2, -2, 0],
        transition: { duration: 0.05, repeat: Infinity }
      }
    }
  },
  {
    id: 'gradient-text-flow',
    label: 'זרימת גרדיאנט בטקסט',
    description: 'צבעים שזורמים בתוך האותיות',
    type: 'full',
    variants: {
      animate: {
        backgroundImage: [
          "linear-gradient(45deg, #ff0000, #00ff00)",
          "linear-gradient(45deg, #00ff00, #0000ff)",
          "linear-gradient(45deg, #0000ff, #ff0000)"
        ],
        transition: { duration: 5, repeat: Infinity }
      }
    }
  },
  {
    id: 'bounce-in-left',
    label: 'קפיצה משמאל',
    description: 'כניסה מהירה משמאל עם קפיצה',
    type: 'full',
    variants: {
      initial: { x: -200, opacity: 0 },
      animate: { x: 0, opacity: 1, transition: { type: 'spring', damping: 12 } }
    }
  },
  {
    id: 'rotate-and-scale',
    label: 'סיבוב ושינוי גודל',
    description: 'שילוב של סיבוב וזום',
    type: 'full',
    variants: {
      initial: { rotate: 90, scale: 0, opacity: 0 },
      animate: { rotate: 0, scale: 1, opacity: 1, transition: { duration: 1 } }
    }
  },
  {
    id: 'blur-out-fade',
    label: 'טשטוש ודהייה',
    description: 'טקסט שנעלם לתוך טשטוש',
    type: 'full',
    variants: {
      animate: {
        filter: ["blur(0px)", "blur(20px)"],
        opacity: [1, 0],
        transition: { duration: 2, repeat: Infinity, repeatDelay: 1 }
      }
    }
  },
  {
    id: 'wave-vertical-stagger',
    label: 'גל אנכי מדורג',
    description: 'תנועה למעלה ולמטה בדירוג',
    type: 'char',
    variants: {
      animate: (i: number) => ({
        y: [0, -30, 0],
        transition: { delay: i * 0.1, duration: 1.5, repeat: Infinity }
      })
    }
  },
  {
    id: 'perspective-zoom-in',
    label: 'זום פרספקטיבה פנימה',
    description: 'טקסט שמתקרב מאוד לעין',
    type: 'full',
    variants: {
      initial: { z: -500, opacity: 0 },
      animate: { z: 500, opacity: [0, 1, 0], transition: { duration: 3, repeat: Infinity } }
    }
  },
  {
    id: 'neon-flicker-green',
    label: 'הבהוב נאון ירוק',
    description: 'נאון ירוק בסגנון רטרו',
    type: 'full',
    variants: {
      animate: {
        color: ["#00ff00", "#aaffaa", "#00ff00"],
        textShadow: ["0 0 5px #00ff00", "0 0 20px #00ff00", "0 0 5px #00ff00"],
        opacity: [1, 0.7, 1, 0.9, 1],
        transition: { duration: 0.5, repeat: Infinity }
      }
    }
  },
  {
    id: 'slide-right-bounce',
    label: 'החלקה ימינה עם קפיצה',
    description: 'כניסה מימין עם אפקט קפיצי',
    type: 'full',
    variants: {
      initial: { x: 200, opacity: 0 },
      animate: { x: 0, opacity: 1, transition: { type: 'spring', damping: 10 } }
    }
  },
  {
    id: 'expand-vertical',
    label: 'התרחבות אנכית',
    description: 'טקסט שנפתח מלמעלה ולמטה',
    type: 'full',
    variants: {
      initial: { scaleY: 0, opacity: 0 },
      animate: { scaleY: 1, opacity: 1, transition: { duration: 0.7 } }
    }
  },
  {
    id: 'color-cycle-fast',
    label: 'מחזור צבעים מהיר',
    description: 'שינוי צבעים אינטנסיבי',
    type: 'full',
    variants: {
      animate: {
        color: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"],
        transition: { duration: 1, repeat: Infinity }
      }
    }
  },
  {
    id: 'blur-reveal-chars',
    label: 'חשיפת תווים מטושטשת',
    description: 'כל תו נחשף מטשטוש בנפרד',
    type: 'char',
    variants: {
      initial: { filter: "blur(10px)", opacity: 0 },
      animate: (i: number) => ({
        filter: "blur(0px)",
        opacity: 1,
        transition: { delay: i * 0.1 }
      })
    }
  },
  {
    id: 'rotate-x-360',
    label: 'סיבוב X מלא',
    description: 'סיבוב מלא סביב ציר ה-X',
    type: 'full',
    variants: {
      animate: {
        rotateX: [0, 360],
        transition: { duration: 5, repeat: Infinity, ease: "linear" }
      }
    }
  },
  {
    id: 'skew-slide-left',
    label: 'החלקה נטויה שמאלה',
    description: 'כניסה משמאל עם נטייה חזקה',
    type: 'full',
    variants: {
      initial: { x: 200, skewX: -30, opacity: 0 },
      animate: { x: 0, skewX: 0, opacity: 1, transition: { duration: 0.8 } }
    }
  },
  {
    id: 'zoom-in-out-loop',
    label: 'זום פנימה והחוצה',
    description: 'תנועת זום מחזורית',
    type: 'full',
    variants: {
      animate: {
        scale: [1, 1.5, 1],
        transition: { duration: 4, repeat: Infinity }
      }
    }
  },
  {
    id: 'fade-in-words-random',
    label: 'הופעת מילים אקראית',
    description: 'מילים מופיעות בסדר אקראי',
    type: 'word',
    variants: {
      initial: { opacity: 0 },
      animate: () => ({
        opacity: 1,
        transition: { delay: Math.random() * 1.5 }
      })
    }
  },
  {
    id: 'glitch-offset',
    label: 'הסטת גליץ\'',
    description: 'הסטה מהירה של הטקסט לצדדים',
    type: 'full',
    variants: {
      animate: {
        x: [0, 10, -10, 5, -5, 0],
        transition: { duration: 0.2, repeat: Infinity, repeatDelay: 4 }
      }
    }
  },
  {
    id: 'wave-horizontal-stagger',
    label: 'גל אופקי מדורג',
    description: 'תנועה ימינה ושמאלה בדירוג',
    type: 'char',
    variants: {
      animate: (i: number) => ({
        x: [0, 20, 0],
        transition: { delay: i * 0.1, duration: 2, repeat: Infinity }
      })
    }
  },
  {
    id: 'perspective-flip-y',
    label: 'היפוך Y פרספקטיבה',
    description: 'היפוך תלת-ממדי סביב ציר ה-Y',
    type: 'full',
    variants: {
      initial: { rotateY: 90, opacity: 0 },
      animate: { rotateY: 0, opacity: 1, transition: { duration: 1 } }
    }
  },
  {
    id: 'neon-glow-purple',
    label: 'זוהר סגול',
    description: 'הילה סגולה עמוקה',
    type: 'full',
    variants: {
      animate: {
        textShadow: ["0 0 10px #ff00ff", "0 0 30px #ff00ff", "0 0 10px #ff00ff"],
        transition: { duration: 2, repeat: Infinity }
      }
    }
  },
  {
    id: 'slide-up-elastic-heavy',
    label: 'עליה אלסטית כבדה',
    description: 'עליה מלמטה עם קפיצה חזקה',
    type: 'full',
    variants: {
      initial: { y: 200, opacity: 0 },
      animate: { y: 0, opacity: 1, transition: { type: 'spring', damping: 5 } }
    }
  },
  {
    id: 'rotate-z-360',
    label: 'סיבוב Z מלא',
    description: 'סיבוב מלא סביב ציר ה-Z',
    type: 'full',
    variants: {
      animate: {
        rotate: [0, 360],
        transition: { duration: 8, repeat: Infinity, ease: "linear" }
      }
    }
  },
  {
    id: 'blur-reveal-words',
    label: 'חשיפת מילים מטושטשת',
    description: 'כל מילה נחשפת מטשטוש בנפרד',
    type: 'word',
    variants: {
      initial: { filter: "blur(15px)", opacity: 0 },
      animate: (i: number) => ({
        filter: "blur(0px)",
        opacity: 1,
        transition: { delay: i * 0.2 }
      })
    }
  },
  {
    id: 'skew-vibrate-fast',
    label: 'נטייה רוטטת מהירה',
    description: 'רטט נטייה אינטנסיבי',
    type: 'full',
    variants: {
      animate: {
        skewX: [-10, 10, -10],
        transition: { duration: 0.1, repeat: Infinity }
      }
    }
  },
  {
    id: 'zoom-in-elastic',
    label: 'זום אלסטי פנימה',
    description: 'זום מהיר עם אפקט קפיצי',
    type: 'full',
    variants: {
      initial: { scale: 0 },
      animate: { scale: 1, transition: { type: 'spring', damping: 8 } }
    }
  },
  {
    id: 'fade-in-chars-sequential',
    label: 'הופעת תווים רציפה',
    description: 'תווים מופיעים אחד אחרי השני',
    type: 'char',
    variants: {
      initial: { opacity: 0 },
      animate: (i: number) => ({
        opacity: 1,
        transition: { delay: i * 0.05 }
      })
    }
  }
];
