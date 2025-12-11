import { Check, Zap, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "快速響應",
    description: "24小時內回覆您的需求",
  },
  {
    icon: Shield,
    title: "品質保證",
    description: "嚴格把關每個專案細節",
  },
  {
    icon: Clock,
    title: "準時交付",
    description: "承諾時間內完成任務",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden" aria-labelledby="about-heading">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" aria-hidden="true" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <article>
            <h2 id="about-heading" className="font-display text-3xl md:text-5xl font-bold mb-6">
              關於
              <span className="gradient-text"> 智信網路科技</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              <strong>智信網路科技有限公司</strong>成立以來，專注於為台灣企業提供最前沿的數位解決方案。
              從傳統 SEO 優化到最新的 AI SEO 技術，從社群行銷到 AI 數字人應用，
              我們始終走在數位科技的最前端。
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              我們相信，科技應該為人服務。無論您是想提升網站在 Google 的搜尋排名，
              還是希望在 ChatGPT、Perplexity 等 AI 搜尋引擎中獲得曝光，
              智信的專業團隊都能為您量身打造最適合的優化策略。
            </p>

            {/* Checklist */}
            <ul className="space-y-4" aria-label="我們的優勢">
              {[
                "10年以上數位行銷經驗",
                "專精傳統SEO與AI SEO雙軌優化",
                "客製化解決方案，不做罐頭服務",
                "透明報價，完善售後支援",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Right Content - Feature Cards */}
          <aside className="grid gap-4" aria-label="服務特色">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass-card p-6 flex items-center gap-4 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Stats Card */}
            <div className="glass-card p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="font-display text-4xl font-bold glow-text">1000+</div>
                  <div className="text-sm text-muted-foreground mt-1">完成專案</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl font-bold glow-text">24/7</div>
                  <div className="text-sm text-muted-foreground mt-1">技術支援</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
