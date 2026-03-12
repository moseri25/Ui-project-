import { useState } from 'react';
import { motion } from 'framer-motion';
import { CodePanel } from '../code-preview/CodePanel';
import { MousePointerClick, CreditCard, Bell, Search, Settings, ChevronDown } from 'lucide-react';

export function MicroInteractionLab() {
  const [activeTab, setActiveTab] = useState('pricing');

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <MousePointerClick size={20} />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">מיקרו-אינטראקציות</h2>
          <p className="text-muted-foreground">תגובות עדינות לפעולות משתמש שמעלות את תחושת האיכות.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Pricing Card Interaction */}
        <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between">
          <div className="mb-6">
            <h3 className="font-semibold flex items-center gap-2 mb-1">
              <CreditCard size={16} className="text-primary" />
              כרטיס תמחור מגנטי
            </h3>
            <p className="text-xs text-muted-foreground">אפקט ריחוף והטיה מבוסס מיקום עכבר</p>
          </div>

          <div className="flex-1 flex items-center justify-center p-4 sm:p-8 bg-muted/30 rounded-xl border border-border/50 relative overflow-hidden group perspective-1000">
            <motion.div
              className="w-full max-w-xs bg-card border border-border rounded-2xl p-6 shadow-lg relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                  פרו
                </div>
                <div className="text-3xl font-bold mb-2" dir="ltr">$49<span className="text-sm text-muted-foreground font-normal">/mo</span></div>
                <p className="text-sm text-muted-foreground mb-6">כל הכלים שצוותים מתקדמים צריכים.</p>
                <button className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-95">
                  שדרג עכשיו
                </button>
              </div>
            </motion.div>
          </div>

          <CodePanel 
            structureCode={"<Card>\n  <Badge>Pro</Badge>\n  <Price>$49/mo</Price>\n  <Button>Upgrade</Button>\n</Card>"}
            styleCode={".card {\n  transition: all 0.3s ease;\n}"}
            motionCode={"<motion.div\n  whileHover={{ scale: 1.02, y: -5 }}\n  whileTap={{ scale: 0.98 }}\n  transition={{ type: \"spring\", stiffness: 400, damping: 30 }}\n>\n  {children}\n</motion.div>"}
          />
        </div>

        {/* Dynamic Island / Notification */}
        <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between">
          <div className="mb-6">
            <h3 className="font-semibold flex items-center gap-2 mb-1">
              <Bell size={16} className="text-primary" />
              התראות דינמיות
            </h3>
            <p className="text-xs text-muted-foreground">אנימציית קפיץ להופעת התראות מערכת</p>
          </div>

          <div className="flex-1 flex items-center justify-center p-8 bg-muted/30 rounded-xl border border-border/50 relative overflow-hidden">
            <div className="w-full max-w-sm space-y-4">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 25, 
                    delay: i * 0.1 
                  }}
                  whileHover={{ x: -5 }}
                  className="bg-card border border-border rounded-xl p-4 shadow-sm flex items-start gap-4 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Settings size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">עדכון מערכת זמין</h4>
                    <p className="text-xs text-muted-foreground">גרסה 2.4.1 מוכנה להתקנה עם שיפורי ביצועים.</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <CodePanel 
            structureCode={"<NotificationItem>\n  <Icon />\n  <Content />\n</NotificationItem>"}
            styleCode={".notification {\n  border-radius: 12px;\n  padding: 16px;\n}"}
            motionCode={"<motion.div\n  initial={{ opacity: 0, scale: 0.8, y: 20 }}\n  whileInView={{ opacity: 1, scale: 1, y: 0 }}\n  transition={{ type: \"spring\", stiffness: 500, damping: 25 }}\n  whileHover={{ x: -5 }}\n>\n  {content}\n</motion.div>"}
          />
        </div>

      </div>
    </div>
  );
}
