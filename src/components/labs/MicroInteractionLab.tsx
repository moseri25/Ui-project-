import { motion } from 'framer-motion';
import { MousePointerClick } from 'lucide-react';
import { interactionStyles } from '../../data/interactionStyles';
import { InteractionCard } from './InteractionCard';

export function MicroInteractionLab() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <MousePointerClick size={20} />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">מאגר אינטראקציות (100+)</h2>
          <p className="text-muted-foreground">אוסף הולך וגדל של אפקטי ריחוף, הטיה ומיקרו-פידבק.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interactionStyles.map((style) => (
          <InteractionCard key={style.id} style={style} />
        ))}
      </div>
    </div>
  );
}
