import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/src/utils/cn';

interface PremiumCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'neon';
}

export function PremiumCard({ title, description, icon, children, className, variant = 'glass' }: PremiumCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={cn(
        "relative rounded-3xl overflow-hidden border border-border/50 p-6 transition-all duration-300",
        variant === 'glass' && "bg-card/20 backdrop-blur-2xl",
        variant === 'neon' && "bg-black/80 border-primary/20 shadow-[0_0_20px_rgba(var(--primary),0.1)]",
        className
      )}
    >
      {variant === 'glass' && <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />}
      
      <div className="relative z-10">
        {icon && <div className="mb-4 text-primary">{icon}</div>}
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        {children}
      </div>
    </motion.div>
  );
}
