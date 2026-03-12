import { PremiumButton } from '../premium/PremiumButton';
import { PremiumCard } from '../premium/PremiumCard';
import { CodePanel } from '../code-preview/CodePanel';
import { Sparkles, Zap, Shield } from 'lucide-react';

export function ComponentShowcaseLab() {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold tracking-tight">ספריית רכיבי פרימיום</h2>
      
      {/* Buttons Showcase */}
      <section className="space-y-6">
        <h3 className="text-xl font-semibold">מערכת כפתורים (Premium Buttons)</h3>
        <div className="flex flex-wrap gap-4">
          <PremiumButton variant="primary">Primary</PremiumButton>
          <PremiumButton variant="secondary">Secondary</PremiumButton>
          <PremiumButton variant="ai" icon={<Sparkles size={16} />}>AI Action</PremiumButton>
          <PremiumButton variant="destructive" state="destructive">Destructive</PremiumButton>
        </div>
        <CodePanel 
          structureCode={`<PremiumButton variant="ai" icon={<Sparkles />}>AI Action</PremiumButton>`}
          styleCode={`.btn-ai { background: linear-gradient(to right, #6366f1, #4f46e5); }`}
          motionCode={`<motion.button whileTap={{ scale: 0.97 }} />`}
        />
      </section>

      {/* Cards Showcase */}
      <section className="space-y-6">
        <h3 className="text-xl font-semibold">מערכת כרטיסיות (Premium Cards)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PremiumCard 
            title="Glass Card" 
            description="כרטיס עם אפקט זכוכית מטושטשת ועומק קולנועי."
            icon={<Zap size={24} />}
          />
          <PremiumCard 
            title="Neon Card" 
            description="כרטיס עם גבול מואר ואפקט ניאון טכנולוגי."
            variant="neon"
            icon={<Shield size={24} />}
          />
        </div>
        <CodePanel 
          structureCode={`<PremiumCard title="Glass Card" variant="glass" />`}
          styleCode={`.card { backdrop-filter: blur(24px); }`}
          motionCode={`<motion.div whileHover={{ y: -5 }} />`}
        />
      </section>
    </div>
  );
}
