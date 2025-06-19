import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Header from "@/components/layout/Header";
import { ThreeScene } from "@/components/ThreeScene";
import { FloatingModules } from "@/components/ui/floating-modules";
import { SplashCursor } from "@/components/ui/splash-cursor";

export function Hero() {
  const descriptions = [
    "Comprehensive enterprise modules for accounting, inventory, CRM, fleet management, and more in one integrated platform.",
    "Streamline operations with our intelligent business solutions designed for scalability, compliance, and maximum efficiency.",
    "Advanced analytics and reporting tools that provide actionable insights to drive strategic business decisions.",
    "Enterprise-grade security and performance across all modules with seamless integration capabilities.",
  ];

  return (
    <>
      <Header />
      <div className="relative min-h-screen overflow-hidden">
        <div className="relative w-full h-full">
          <SplashCursor color="rgba(99, 102, 241, 0.8)" size={25} opacity={1.0} />
          <HeroGeometric
            badge="Enterprise Solutions"
            title1="Transform Your"
            title2="Business Operations"
            descriptions={descriptions}
          />
          <FloatingModules />
          <div className="absolute top-0 right-0 w-1/4 h-full pointer-events-none">
            <div className="floating w-full h-full">
              <ThreeScene />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
