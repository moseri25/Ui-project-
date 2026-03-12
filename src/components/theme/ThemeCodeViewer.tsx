import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, X, Check } from 'lucide-react';
import { useTheme, ThemeMode } from './StyleMutationEngine';

const themeCodes: Record<ThemeMode, string> = {
  'saas-modern': `:root.theme-saas-modern {
  --background: #ffffff;
  --foreground: #09090b;
  --card: #ffffff;
  --card-foreground: #09090b;
  --primary: #2563eb;
  --primary-foreground: #ffffff;
  --secondary: #f1f5f9;
  --secondary-foreground: #0f172a;
  --muted: #f8fafc;
  --muted-foreground: #64748b;
  --accent: #eff6ff;
  --accent-foreground: #1d4ed8;
  --border: #e2e8f0;
  --input: #e2e8f0;
  --ring: #3b82f6;
  --radius: 0.75rem;
}`,
  'ai-futuristic': `:root.theme-ai-futuristic {
  --background: #030712;
  --foreground: #f9fafb;
  --card: #111827;
  --card-foreground: #f9fafb;
  --primary: #8b5cf6;
  --primary-foreground: #ffffff;
  --secondary: #1f2937;
  --secondary-foreground: #f3f4f6;
  --muted: #111827;
  --muted-foreground: #9ca3af;
  --accent: #4c1d95;
  --accent-foreground: #ddd6fe;
  --border: #374151;
  --input: #374151;
  --ring: #8b5cf6;
  --radius: 1rem;
}`,
  'luxury-finance': `:root.theme-luxury-finance {
  --background: #0f172a;
  --foreground: #f8fafc;
  --card: #1e293b;
  --card-foreground: #f8fafc;
  --primary: #eab308;
  --primary-foreground: #422006;
  --secondary: #334155;
  --secondary-foreground: #f1f5f9;
  --muted: #0f172a;
  --muted-foreground: #94a3b8;
  --accent: #fef08a;
  --accent-foreground: #713f12;
  --border: #475569;
  --input: #475569;
  --ring: #eab308;
  --radius: 0.5rem;
}`,
  'cyber-neon': `:root.theme-cyber-neon {
  --background: #000000;
  --foreground: #00ff00;
  --card: #0a0a0a;
  --card-foreground: #00ff00;
  --primary: #ff00ff;
  --primary-foreground: #ffffff;
  --secondary: #1a1a1a;
  --secondary-foreground: #00ffff;
  --muted: #111111;
  --muted-foreground: #008800;
  --accent: #00ffff;
  --accent-foreground: #000000;
  --border: #333333;
  --input: #333333;
  --ring: #ff00ff;
  --radius: 0rem;
}`,
  'elegant-minimalist': `:root.theme-elegant-minimalist {
  --background: #fafafa;
  --foreground: #171717;
  --card: #ffffff;
  --card-foreground: #171717;
  --primary: #171717;
  --primary-foreground: #fafafa;
  --secondary: #f5f5f5;
  --secondary-foreground: #262626;
  --muted: #f5f5f5;
  --muted-foreground: #a3a3a3;
  --accent: #e5e5e5;
  --accent-foreground: #171717;
  --border: #e5e5e5;
  --input: #e5e5e5;
  --ring: #171717;
  --radius: 1.5rem;
}`,
  'corporate-classic': `:root.theme-corporate-classic {
  --background: #ffffff;
  --foreground: #1e293b;
  --card: #ffffff;
  --card-foreground: #1e293b;
  --primary: #0f172a;
  --primary-foreground: #ffffff;
  --secondary: #f8fafc;
  --secondary-foreground: #334155;
  --muted: #f1f5f9;
  --muted-foreground: #64748b;
  --accent: #e2e8f0;
  --accent-foreground: #0f172a;
  --border: #cbd5e1;
  --input: #cbd5e1;
  --ring: #0f172a;
  --radius: 0.25rem;
}`,
  'digital-vintage': `:root.theme-digital-vintage {
  --background: #fdf6e3;
  --foreground: #657b83;
  --card: #eee8d5;
  --card-foreground: #586e75;
  --primary: #b58900;
  --primary-foreground: #fdf6e3;
  --secondary: #eaddc5;
  --secondary-foreground: #073642;
  --muted: #eaddc5;
  --muted-foreground: #93a1a1;
  --accent: #cb4b16;
  --accent-foreground: #fdf6e3;
  --border: #d3c6a6;
  --input: #d3c6a6;
  --ring: #b58900;
  --radius: 0.5rem;
}`,
  'refined-brutalism': `:root.theme-refined-brutalism {
  --background: #ffffff;
  --foreground: #000000;
  --card: #ffffff;
  --card-foreground: #000000;
  --primary: #ff3366;
  --primary-foreground: #ffffff;
  --secondary: #e0e0e0;
  --secondary-foreground: #000000;
  --muted: #f0f0f0;
  --muted-foreground: #666666;
  --accent: #000000;
  --accent-foreground: #ffffff;
  --border: #000000;
  --input: #ffffff;
  --ring: #000000;
  --radius: 0px;
}`,
  'editorial': `:root.theme-editorial {
  --background: #f5f5f0;
  --foreground: #2d2d2a;
  --card: #ffffff;
  --card-foreground: #2d2d2a;
  --primary: #5a5a40;
  --primary-foreground: #ffffff;
  --secondary: #e8e8e3;
  --secondary-foreground: #4a4a40;
  --muted: #e8e8e3;
  --muted-foreground: #8a8a80;
  --accent: #d4d4cc;
  --accent-foreground: #2d2d2a;
  --border: #d4d4cc;
  --input: #ffffff;
  --ring: #5a5a40;
  --radius: 0.5rem;
}`,
  'enterprise-dark': `:root.theme-enterprise-dark {
  --background: #0a0a0a;
  --foreground: #ededed;
  --card: #141414;
  --card-foreground: #ededed;
  --primary: #ffffff;
  --primary-foreground: #000000;
  --secondary: #262626;
  --secondary-foreground: #a3a3a3;
  --muted: #1f1f1f;
  --muted-foreground: #737373;
  --accent: #333333;
  --accent-foreground: #ffffff;
  --border: #262626;
  --input: #1f1f1f;
  --ring: #ffffff;
  --radius: 0.375rem;
}`,
  'holographic-glass': `:root.theme-holographic-glass {
  --background: #0f111a;
  --foreground: #e2e8f0;
  --card: rgba(255, 255, 255, 0.03);
  --card-foreground: #e2e8f0;
  --primary: #38bdf8;
  --primary-foreground: #0f111a;
  --secondary: rgba(255, 255, 255, 0.05);
  --secondary-foreground: #94a3b8;
  --muted: rgba(255, 255, 255, 0.02);
  --muted-foreground: #64748b;
  --accent: rgba(56, 189, 248, 0.1);
  --accent-foreground: #38bdf8;
  --border: rgba(255, 255, 255, 0.1);
  --input: rgba(255, 255, 255, 0.05);
  --ring: #38bdf8;
  --radius: 1.5rem;
}`,
  'warm-luxury': `:root.theme-warm-luxury {
  --background: #2a2421;
  --foreground: #f4ece4;
  --card: #362f2b;
  --card-foreground: #f4ece4;
  --primary: #d4af37;
  --primary-foreground: #2a2421;
  --secondary: #4a413c;
  --secondary-foreground: #d8c8b8;
  --muted: #3a322e;
  --muted-foreground: #a89888;
  --accent: #5a4f48;
  --accent-foreground: #f4ece4;
  --border: #4a413c;
  --input: #362f2b;
  --ring: #d4af37;
  --radius: 0.75rem;
}`
};

export function ThemeCodeViewer() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const code = themeCodes[theme] || themeCodes['saas-modern'];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
            dir="ltr"
          >
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-md hover:bg-muted text-muted-foreground transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="p-4 relative group">
              <button
                onClick={copyToClipboard}
                className="absolute top-6 right-6 p-2 rounded-md bg-card/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied ? <Check size={16} className="text-green-500" /> : <Code2 size={16} />}
              </button>
              <pre className="p-4 rounded-xl bg-muted/50 overflow-x-auto text-sm font-mono text-muted-foreground">
                <code>{code}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
      >
        <Code2 size={16} />
        <span>הצג קוד סגנון</span>
      </button>

      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}
