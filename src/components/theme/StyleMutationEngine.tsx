import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeMode = 
  | 'ai-futuristic'
  | 'saas-modern'
  | 'luxury-finance'
  | 'cyber-neon'
  | 'elegant-minimalist'
  | 'corporate-classic'
  | 'digital-vintage'
  | 'refined-brutalism'
  | 'editorial'
  | 'enterprise-dark'
  | 'holographic-glass'
  | 'warm-luxury';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function StyleMutationEngine({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>('ai-futuristic');

  useEffect(() => {
    const root = document.documentElement;
    // Remove existing theme classes
    const themeClasses = Array.from(root.classList).filter(cls => cls.startsWith('theme-'));
    if (themeClasses.length > 0) {
      root.classList.remove(...themeClasses);
    }
    // Add current theme class
    root.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-500" dir="rtl">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a StyleMutationEngine');
  }
  return context;
}
