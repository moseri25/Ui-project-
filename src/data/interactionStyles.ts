import React from 'react';
import { Target, Zap, Rotate3d, Sparkles, Move, MousePointer, Layers, Sun, Moon, Star, Heart, Shield, Smile, ThumbsUp, Coffee, Camera, Music, Video, Book, Pen, Search, Settings, ChevronDown, Bell, CreditCard, User, Mail, Phone, Map, Globe, Wifi, Battery, Lock, Unlock, Key, Cloud, Download, Upload, Share, Trash, Edit, Plus, Minus, Check, X, Info, AlertCircle, HelpCircle, Home, Menu, ArrowRight, Github, Instagram, Linkedin, Facebook, Youtube, Slack, Figma, Code, Terminal, Database, Server, Cpu, Briefcase, Calendar, Clock, DollarSign, File, Folder, Image, Link, MessageSquare, Mic, Paperclip, Printer, Radio, RefreshCw, Rss, Save, Send, ShoppingCart, Tag, ThumbsDown, Umbrella, VideoOff, Volume2, WifiOff, ZapOff } from 'lucide-react';

export interface InteractionStyle {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  motionProps: any;
  tailwindClasses: string;
}

const icons = [Target, Zap, Rotate3d, Sparkles, Move, MousePointer, Layers, Sun, Moon, Star, Heart, Shield, Smile, ThumbsUp, Coffee, Camera, Music, Video, Book, Pen, Search, Settings, ChevronDown, Bell, CreditCard, User, Mail, Phone, Map, Globe, Wifi, Battery, Lock, Unlock, Key, Cloud, Download, Upload, Share, Trash, Edit, Plus, Minus, Check, X, Info, AlertCircle, HelpCircle, Home, Menu, ArrowRight, Github, Instagram, Linkedin, Facebook, Youtube, Slack, Figma, Code, Terminal, Database, Server, Cpu, Briefcase, Calendar, Clock, DollarSign, File, Folder, Image, Link, MessageSquare, Mic, Paperclip, Printer, Radio, RefreshCw, Rss, Save, Send, ShoppingCart, Tag, ThumbsDown, Umbrella, VideoOff, Volume2, WifiOff, ZapOff];

export const interactionStyles: InteractionStyle[] = Array.from({ length: 100 }, (_, i) => {
  const icon = icons[i % icons.length];
  const id = `style-${i + 1}`;
  
  // Generate varied motion props
  const scale = 0.9 + (i % 5) * 0.1;
  const rotate = (i % 4) * 90;
  const x = (i % 3) * 10;
  const y = (i % 3) * 10;
  const opacity = 0.5 + (i % 5) * 0.1;
  
  return {
    id,
    name: `Style ${i + 1}`,
    description: `Interaction style ${i + 1}`,
    icon,
    motionProps: {
      whileHover: { scale, rotate, x, y, opacity },
      transition: { type: 'spring', stiffness: 100 + (i % 3) * 100, damping: 10 + (i % 5) * 5 }
    },
    tailwindClasses: `bg-card border border-border rounded-${i % 2 === 0 ? '2xl' : 'lg'} p-6 shadow-${i % 3 === 0 ? 'lg' : 'sm'}`
  };
});
