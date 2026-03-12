import { InteractionLab } from './components/labs/InteractionLab';
import { StyleMutationEngine } from './components/theme/StyleMutationEngine';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/hero/Hero';
import { PremiumSystemLab } from './components/labs/PremiumSystemLab';
import { ComponentShowcaseLab } from './components/labs/ComponentShowcaseLab';
import { AIWorkflowLab } from './components/labs/AIWorkflowLab';
import { FormLab } from './components/labs/FormLab';
import { FeedbackLab } from './components/labs/FeedbackLab';
import { TextMotionLab } from './components/labs/TextMotionLab';
import { ToastProvider } from './components/premium/PremiumToast';
import { MicroInteractionLab } from './components/labs/MicroInteractionLab';
import { AdvancedMotionLab } from './components/labs/AdvancedMotionLab';
import { ComponentStatesLab } from './components/labs/ComponentStatesLab';
import { SvgMotionLab } from './components/labs/SvgMotionLab';
import { ColorPaletteLab } from './components/labs/ColorPaletteLab';
import { MobileMotionSimulator } from './components/labs/MobileMotionSimulator';
import { ThemeCodeLab } from './components/labs/ThemeCodeLab';

export default function App() {
  return (
    <StyleMutationEngine>
      <ToastProvider>
        <Layout>
        <div className="space-y-32 pb-32">
          <section id="interactions" className="scroll-mt-20">
            <InteractionLab />
          </section>

          <section id="hero" className="scroll-mt-20">
            <Hero />
          </section>

          <section id="premium" className="scroll-mt-20">
            <PremiumSystemLab />
          </section>

          <section id="showcase" className="scroll-mt-20">
            <ComponentShowcaseLab />
          </section>

          <section id="ai-workflow" className="scroll-mt-20">
            <AIWorkflowLab />
          </section>

          <section id="forms" className="scroll-mt-20">
            <FormLab />
          </section>

          <section id="feedback" className="scroll-mt-20">
            <FeedbackLab />
          </section>
          
          <section id="text" className="scroll-mt-20">
            <TextMotionLab />
          </section>
          
          <section id="micro" className="scroll-mt-20">
            <MicroInteractionLab />
          </section>

          <section id="advanced" className="scroll-mt-20">
            <AdvancedMotionLab />
          </section>

          <section id="states" className="scroll-mt-20">
            <ComponentStatesLab />
          </section>

          <section id="svg" className="scroll-mt-20">
            <SvgMotionLab />
          </section>

          <section id="colors" className="scroll-mt-20">
            <ColorPaletteLab />
          </section>

          <section id="simulator" className="scroll-mt-20">
            <MobileMotionSimulator />
          </section>

          <section id="theme-code" className="scroll-mt-20">
            <ThemeCodeLab />
          </section>
        </div>
      </Layout>
      </ToastProvider>
    </StyleMutationEngine>
  );
}
