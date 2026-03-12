import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/src/utils/cn';
import { Loader2, Check, X } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive' | 'ai' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonState = 'default' | 'loading' | 'success' | 'destructive';

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function PremiumButton({ 
  variant = 'primary', 
  size = 'md',
  state = 'default', 
  className, 
  children, 
  icon,
  ...props 
}: PremiumButtonProps) {
  
  const variants = {
    primary: "bg-foreground text-background hover:opacity-90",
    secondary: "bg-card border border-border hover:bg-muted",
    ghost: "hover:bg-muted text-muted-foreground hover:text-foreground",
    destructive: "bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20",
    ai: "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90 shadow-[0_0_20px_rgba(99,102,241,0.3)]",
    outline: "bg-transparent border border-border hover:bg-muted text-foreground"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs rounded-lg",
    md: "px-4 py-2 text-sm rounded-xl",
    lg: "px-6 py-3 text-base rounded-2xl"
  };

  return (
    <motion.button
      whileTap={{ scale: state === 'default' ? 0.97 : 1 }}
      className={cn(
        "relative font-medium transition-all duration-200 flex items-center justify-center gap-2",
        variants[variant],
        sizes[size],
        state === 'loading' && "cursor-wait opacity-70",
        className
      )}
      disabled={state === 'loading'}
      {...props}
    >
      {state === 'loading' && <Loader2 size={16} className="animate-spin" />}
      {state === 'success' && <Check size={16} />}
      {state === 'destructive' && <X size={16} />}
      {state === 'default' && icon}
      {children}
    </motion.button>
  );
}
