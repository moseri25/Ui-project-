import { useToast } from '../premium/PremiumToast';
import { PremiumButton } from '../premium/PremiumButton';
import { Bell, CheckCircle2, AlertCircle, Info } from 'lucide-react';

export function FeedbackLab() {
  const { addToast } = useToast();

  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold tracking-tight">מערכת פידבקים והתראות</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <section className="space-y-6 p-8 rounded-3xl bg-card/20 border border-border/50 backdrop-blur-xl">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Bell className="text-primary" size={20} />
            התראות Toast
          </h3>
          <p className="text-sm text-muted-foreground">
            מערכת התראות צפה עם אנימציות כניסה ויציאה, תמיכה ב-Progress Bar וסוגי תוכן שונים.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <PremiumButton 
              variant="secondary" 
              icon={<CheckCircle2 size={16} />}
              soundType="success"
              onClick={() => addToast('הפעולה הצליחה', 'הנתונים נשמרו בהצלחה במערכת', 'success')}
            >
              הצלחה
            </PremiumButton>
            
            <PremiumButton 
              variant="destructive" 
              icon={<AlertCircle size={16} />}
              soundType="error"
              onClick={() => addToast('שגיאת מערכת', 'לא ניתן היה להתחבר לשרת הנתונים', 'error')}
            >
              שגיאה
            </PremiumButton>
            
            <PremiumButton 
              variant="secondary" 
              icon={<Info size={16} />}
              soundType="pop"
              onClick={() => addToast('עדכון חדש', 'גרסה 2.0 זמינה כעת להורדה', 'info')}
            >
              מידע
            </PremiumButton>
            
            <PremiumButton 
              variant="secondary" 
              icon={<Bell size={16} />}
              soundType="switch"
              onClick={() => addToast('אזהרת אבטחה', 'זוהתה כניסה ממכשיר לא מוכר', 'warning')}
            >
              אזהרה
            </PremiumButton>
          </div>
        </section>

        <section className="space-y-6 p-8 rounded-3xl bg-card/20 border border-border/50 backdrop-blur-xl">
          <h3 className="text-xl font-semibold">מצבי טעינה ואישור</h3>
          <p className="text-sm text-muted-foreground">
            שילוב של כפתורי פרימיום עם מצבי טעינה מובנים.
          </p>
          
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <PremiumButton state="loading">מעבד נתונים...</PremiumButton>
              <PremiumButton state="success">הושלם</PremiumButton>
            </div>
            <div className="flex gap-3">
              <PremiumButton state="destructive" variant="destructive">נכשל</PremiumButton>
              <PremiumButton variant="ai" icon={<Bell size={16} />}>AI Action</PremiumButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
