import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <article className="glass-card p-8 md:p-12 text-center glow-box">
            <h2 id="contact-heading" className="font-display text-3xl md:text-5xl font-bold mb-4">
              準備好提升您的數位競爭力了嗎？
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              無論您是想提升 Google 搜尋排名、優化 AI 搜尋引擎曝光，還是導入數字人技術，
              智信網路科技的專業團隊都能為您量身打造最適合的解決方案。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="glow" size="xl" asChild>
                <a href="mailto:trustfultech8899@gmail.com">
                  <Send className="w-5 h-5" aria-hidden="true" />
                  立即聯繫我們
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <address className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border/50 not-italic">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center" aria-hidden="true">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground text-sm">電話諮詢</span>
                <a href="tel:0918953119" className="text-foreground font-medium hover:text-primary transition-colors">
                  0918-953-119
                </a>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center" aria-hidden="true">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground text-sm">電子郵件</span>
                <a href="mailto:trustfultech8899@gmail.com" className="text-foreground font-medium hover:text-primary transition-colors">
                  trustfultech8899@gmail.com
                </a>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center" aria-hidden="true">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground text-sm">服務地區</span>
                <span className="text-foreground font-medium">台灣全區服務</span>
              </div>
            </address>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
