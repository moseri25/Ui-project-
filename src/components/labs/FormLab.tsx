import { useState } from 'react';
import { PremiumInput } from '../premium/PremiumInput';
import { PremiumButton } from '../premium/PremiumButton';
import { Mail, Lock, User, Search } from 'lucide-react';

export function FormLab() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = () => {
    if (!email.includes('@')) {
      setError('כתובת אימייל לא תקינה');
    } else {
      setError('');
    }
  };

  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold tracking-tight">מערכת טפסים ואינפוטים</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <section className="space-y-6">
          <h3 className="text-xl font-semibold">אינפוטים בסיסיים</h3>
          <PremiumInput 
            label="שם מלא" 
            placeholder="ישראל ישראלי" 
            icon={<User size={18} />} 
          />
          <PremiumInput 
            label="אימייל" 
            type="email"
            placeholder="name@example.com" 
            icon={<Mail size={18} />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            error={error}
            success={email.includes('@') && !error}
          />
          <PremiumInput 
            label="סיסמה" 
            type="password"
            placeholder="••••••••" 
            icon={<Lock size={18} />} 
          />
        </section>

        <section className="space-y-6">
          <h3 className="text-xl font-semibold">מצבים מיוחדים</h3>
          <PremiumInput 
            label="חיפוש מהיר" 
            placeholder="חפש רכיבים..." 
            icon={<Search size={18} />}
            className="rounded-full"
          />
          <div className="p-6 rounded-2xl bg-muted/30 border border-border/50 space-y-4">
            <p className="text-sm text-muted-foreground">טופס התחברות מהיר</p>
            <PremiumInput placeholder="שם משתמש" />
            <PremiumInput type="password" placeholder="סיסמה" />
            <PremiumButton className="w-full">התחברות</PremiumButton>
          </div>
        </section>
      </div>
    </div>
  );
}
