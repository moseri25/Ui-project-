import { useTheme, ThemeMode } from '../theme/StyleMutationEngine';
import { motion } from 'framer-motion';
import { Settings2, Layers, Type, MousePointerClick, Sparkles, Box, Palette, Smartphone, Layout as LayoutIcon, Bell } from 'lucide-react';
import { cn } from '@/src/utils/cn';
import { ThemeCodeViewer } from '../theme/ThemeCodeViewer';

const themes: { id: ThemeMode; label: string }[] = [
  { id: 'ai-futuristic', label: 'עתידני AI' },
  { id: 'saas-modern', label: 'SaaS מודרני' },
  { id: 'luxury-finance', label: 'פיננסי יוקרתי' },
  { id: 'cyber-neon', label: 'נאוני סייבר' },
  { id: 'elegant-minimalist', label: 'מינימליסטי אלגנטי' },
  { id: 'corporate-classic', label: 'קלאסי תאגידי' },
  { id: 'digital-vintage', label: 'וינטג\' דיגיטלי' },
  { id: 'refined-brutalism', label: 'ברוטליזם מעודן' },
  { id: 'editorial', label: 'Editorial' },
  { id: 'enterprise-dark', label: 'Enterprise Dark' },
  { id: 'holographic-glass', label: 'Holographic Glass' },
  { id: 'warm-luxury', label: 'Warm Luxury' },
];

const navItems = [
  { id: 'hero', label: 'מבוא', icon: Layers },
  { id: 'premium', label: 'מערכת פרימיום', icon: Sparkles },
  { id: 'showcase', label: 'תצוגת רכיבים', icon: Box },
  { id: 'ai-workflow', label: 'תהליכי AI', icon: Sparkles },
  { id: 'forms', label: 'טפסים ואינפוטים', icon: LayoutIcon },
  { id: 'feedback', label: 'פידבקים והתראות', icon: Bell },
  { id: 'text', label: 'טיפוגרפיה קינטית', icon: Type },
  { id: 'micro', label: 'מיקרו-אינטראקציות', icon: MousePointerClick },
  { id: 'advanced', label: 'מערכות תנועה מתקדמות', icon: Sparkles },
  { id: 'svg', label: 'אנימציית אייקונים', icon: Box },
  { id: 'states', label: 'מצבי רכיב פרימיום', icon: Box },
  { id: 'colors', label: 'מעבדת צבעים', icon: Palette },
  { id: 'simulator', label: 'סימולטור מובייל', icon: Smartphone },
  { id: 'theme-code', label: 'קוד סגנונות', icon: Settings2 },
];

export function Sidebar({ isMobile, onClose }: { isMobile?: boolean; onClose?: () => void }) {
  const { theme, setTheme } = useTheme();

  return (
    <aside className={cn(
      "border-l border-border/40 bg-card/50 backdrop-blur-xl flex flex-col h-full z-20 relative",
      !isMobile && "w-72"
    )}>
      <div className="p-6 border-b border-border/40 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <Sparkles size={18} />
            </div>
            <h1 className="font-bold text-lg tracking-tight">מעבדת תנועה</h1>
          </div>
          <p className="text-xs text-muted-foreground">פרימיום לממשקים</p>
        </div>
        {isMobile && onClose && (
          <button onClick={onClose} className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-8">
        <div className="space-y-2">
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
            <Settings2 size={14} />
            מנוע סגנונות
          </h2>
          <div className="grid grid-cols-1 gap-1">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={cn(
                  "text-right px-3 py-2 rounded-md text-sm transition-all duration-200 flex items-center justify-between group",
                  theme === t.id 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <span>{t.label}</span>
                {theme === t.id && (
                  <motion.div 
                    layoutId="activeTheme" 
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
          <ThemeCodeViewer />
        </div>

        <div className="space-y-2">
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
            מעבדות
          </h2>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(item.id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                    if (isMobile && onClose) onClose();
                  }}
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  <Icon size={16} />
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
