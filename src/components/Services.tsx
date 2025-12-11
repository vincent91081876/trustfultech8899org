import { 
  Users, 
  TrendingUp, 
  Search, 
  Bot, 
  UserCircle, 
  Wrench,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "社群行銷",
    description: "打造品牌社群影響力，精準觸及目標客群，提升互動與轉換率。專業團隊協助您經營 Facebook、Instagram 等社群平台。",
    features: ["Facebook/IG 經營", "內容策略規劃", "廣告投放優化"],
    keywords: "社群行銷, Facebook行銷, Instagram經營, 社群廣告",
  },
  {
    icon: TrendingUp,
    title: "傳直銷系統",
    description: "客製化傳直銷管理系統開發，包含完整會員管理、獎金自動計算與業績追蹤功能，支援多層次行銷運作。",
    features: ["會員管理系統", "獎金自動計算", "業績報表分析"],
    keywords: "傳直銷系統, MLM系統, 直銷軟體, 會員管理",
  },
  {
    icon: Search,
    title: "網站 SEO 優化",
    description: "提升網站 Google 搜尋排名，增加自然流量。包含技術 SEO、內容優化、關鍵字研究等完整服務。",
    features: ["關鍵字優化", "技術SEO診斷", "內容優化策略"],
    keywords: "SEO優化, 搜尋引擎優化, Google排名, 網站優化",
  },
  {
    icon: Bot,
    title: "AI SEO 智能優化",
    description: "針對 ChatGPT、Perplexity、Google AI Overview 等 AI 搜尋引擎優化。運用 AI 技術自動化分析與優化流程。",
    features: ["AI 內容生成", "智能排名分析", "AI搜尋引擎優化"],
    keywords: "AI SEO, 人工智慧SEO, ChatGPT優化, AI搜尋優化",
  },
  {
    icon: UserCircle,
    title: "AI 數字人",
    description: "打造專屬 AI 數字人虛擬主播，24/7 全天候服務。可用於直播帶貨、AI 客服、品牌代言等多元場景。",
    features: ["虛擬主播", "AI 客服助手", "品牌代言人"],
    keywords: "數字人, AI虛擬人, 虛擬主播, AI客服",
  },
  {
    icon: Wrench,
    title: "軟硬體安裝",
    description: "專業的企業 IT 軟硬體建置服務，從規劃、安裝到維護保養，提供完整的一站式解決方案。",
    features: ["系統安裝設定", "網路架設", "設備維護保養"],
    keywords: "軟硬體安裝, IT服務, 系統建置, 網路架設",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden" aria-labelledby="services-heading">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" aria-hidden="true" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="services-heading" className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">專業服務項目</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            六大核心服務，涵蓋社群行銷、SEO優化、AI應用，全方位滿足您的數位轉型需求
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group glass-card p-6 hover:border-primary/50 transition-all duration-500 hover:glow-box"
              style={{ animationDelay: `${index * 0.1}s` }}
              role="listitem"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" aria-hidden="true" />
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="flex flex-wrap gap-2" aria-label={`${service.title}功能特色`}>
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Hidden keywords for SEO */}
              <meta itemProp="keywords" content={service.keywords} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
