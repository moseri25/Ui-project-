import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Paintbrush, Zap, Check, Copy } from 'lucide-react';
import { cn } from '@/src/utils/cn';

interface CodePanelProps {
  structureCode: string;
  styleCode: string;
  motionCode: string;
  className?: string;
}

type Tab = 'structure' | 'style' | 'motion';

export function CodePanel({ structureCode, styleCode, motionCode, className }: CodePanelProps) {
  const [activeTab, setActiveTab] = useState<Tab>('motion');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = activeTab === 'structure' ? structureCode : activeTab === 'style' ? styleCode : motionCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { id: 'structure', label: 'מבנה', icon: Code2, code: structureCode },
    { id: 'style', label: 'עיצוב', icon: Paintbrush, code: styleCode },
    { id: 'motion', label: 'תנועה', icon: Zap, code: motionCode },
  ] as const;

  return (
    <div className={cn("mt-6 w-full max-w-full rounded-xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-md", className)}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-2 border-b border-border/50 bg-muted/30 gap-2">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all",
                  activeTab === tab.id 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            );
          })}
        </div>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          title="העתק קוד"
        >
          {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto bg-[#0d1117] text-[#c9d1d9] font-mono text-xs leading-relaxed" dir="ltr">
        <AnimatePresence mode="wait">
          <motion.pre
            key={activeTab}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <code>{tabs.find(t => t.id === activeTab)?.code}</code>
          </motion.pre>
        </AnimatePresence>
      </div>
    </div>
  );
}
