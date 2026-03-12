import React from 'react';
import { motion } from 'framer-motion';
import { InteractionStyle } from '../../data/interactionStyles';

interface InteractionCardProps {
  style: InteractionStyle;
}

export const InteractionCard: React.FC<InteractionCardProps> = ({ style }) => {
  const Icon = style.icon;

  return (
    <motion.div
      className={`glass-panel rounded-2xl p-6 flex flex-col justify-between ${style.tailwindClasses}`}
      {...style.motionProps}
    >
      <div className="mb-6">
        <h3 className="font-semibold flex items-center gap-2 mb-1">
          <Icon size={16} className="text-primary" />
          {style.name}
        </h3>
        <p className="text-xs text-muted-foreground">{style.description}</p>
      </div>
      <div className="flex-1 flex items-center justify-center p-8 bg-muted/30 rounded-xl border border-border/50">
        <div className="text-sm text-muted-foreground">Hover to see effect</div>
      </div>
    </motion.div>
  );
};
