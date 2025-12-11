import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "什麼是 AI SEO？與傳統 SEO 有什麼不同？",
    answer: "AI SEO 是運用人工智慧技術來分析、優化網站搜尋引擎排名的新型態 SEO 服務。與傳統 SEO 相比，AI SEO 能夠更快速地分析大量數據、自動生成優化內容、預測搜尋趨勢，並針對 AI 搜尋引擎（如 ChatGPT、Perplexity、Google AI Overview）進行優化，讓您的品牌在新時代搜尋中保持領先。",
  },
  {
    question: "什麼是數字人？企業為什麼需要數字人？",
    answer: "數字人是運用 AI 技術創造的虛擬人物，可用於虛擬主播、AI 客服、品牌代言人等場景。企業使用數字人可以實現 24 小時不間斷服務、降低人力成本、提供一致的品牌形象，並能快速製作多語言內容，是數位轉型的重要工具。",
  },
  {
    question: "智信網路科技的服務範圍包括哪些？",
    answer: "我們提供六大核心服務：1. 社群行銷（Facebook/IG 經營、廣告投放）2. 傳直銷系統開發 3. 網站 SEO 優化 4. AI SEO 智能優化 5. AI 數字人服務 6. 軟硬體安裝與維護。從諮詢到執行，提供一站式數位解決方案。",
  },
  {
    question: "SEO 優化需要多久才能看到成效？",
    answer: "SEO 是長期投資，一般而言，基礎優化後 3-6 個月可開始看到排名提升，6-12 個月可見顯著成效。具體時間取決於競爭程度、網站現況、內容品質等因素。AI SEO 可加速部分流程，但仍需持續優化以維持排名。",
  },
  {
    question: "如何針對 AI 搜尋引擎優化我的網站？",
    answer: "AI 搜尋引擎優化需要：1. 提供清晰、結構化的內容 2. 使用 Schema.org 結構化資料 3. 建立專業且可信的品牌聲譽 4. 確保內容準確且有價值 5. 優化 FAQ 頁面讓 AI 能直接引用回答。我們的 AI SEO 服務會全面協助您完成這些優化。",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden" aria-labelledby="faq-heading">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="faq-heading" className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">常見問題</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            關於我們服務的常見疑問解答
          </p>
        </header>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-border/50 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
