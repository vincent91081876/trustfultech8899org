import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      
      {/* Animated Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} aria-hidden="true" />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <article className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm text-muted-foreground">台灣領先的數位轉型專家</span>
          </div>

          {/* Main Headline - H1 for SEO */}
          <h1 id="hero-heading" className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">智信網路科技</span>
            <br />
            <span className="gradient-text">AI SEO・社群行銷・數字人</span>
          </h1>

          {/* Subheadline with Keywords */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            從傳統 SEO 到 AI 智能優化，從社群經營到數字人打造。
            智信網路科技提供全方位數位解決方案，助您的企業在數位時代脫穎而出。
          </p>

          {/* CTA Buttons */}
          <nav className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }} aria-label="主要行動">
            <Button variant="glow" size="xl" asChild>
              <a href="#contact">
                免費諮詢
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="#services">了解服務項目</a>
            </Button>
          </nav>

          {/* Stats with semantic markup */}
          <aside className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.4s" }} aria-label="公司成就">
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold glow-text">500+</div>
              <div className="text-sm text-muted-foreground mt-1">服務客戶</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold glow-text">98%</div>
              <div className="text-sm text-muted-foreground mt-1">客戶滿意度</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold glow-text">10+</div>
              <div className="text-sm text-muted-foreground mt-1">年專業經驗</div>
            </div>
          </aside>
        </article>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
    </section>
  );
};

export default Hero;
