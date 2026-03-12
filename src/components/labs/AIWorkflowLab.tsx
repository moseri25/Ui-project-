import { useState } from 'react';
import { PremiumAIWorkflow } from '../premium/PremiumAIWorkflow';
import { PremiumButton } from '../premium/PremiumButton';

export function AIWorkflowLab() {
  const [state, setState] = useState<'idle' | 'thinking' | 'generating' | 'complete' | 'error'>('idle');

  const runWorkflow = () => {
    setState('thinking');
    setTimeout(() => setState('generating'), 2000);
    setTimeout(() => setState('complete'), 4000);
  };

  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold tracking-tight">ממשקי AI Workflow</h2>
      
      <div className="flex gap-4">
        <PremiumButton onClick={runWorkflow} disabled={state !== 'idle'}>הפעל תהליך</PremiumButton>
        <PremiumButton variant="secondary" onClick={() => setState('idle')}>איפוס</PremiumButton>
      </div>

      <PremiumAIWorkflow 
        state={state}
        prompt="צור לי תיאור של ממשק משתמש עתידני"
        response="ממשק המשתמש העתידני מאופיין בשימוש ב-Glassmorphism, הילות אור דינמיות, וטיפוגרפיה נקייה המעניקה תחושת עומק ויוקרה."
      />
    </div>
  );
}
