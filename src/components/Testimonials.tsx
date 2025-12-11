import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "陳先生",
    company: "電商平台負責人",
    content: "智信團隊的AI SEO服務讓我們網站流量在半年內成長了150%，非常專業！",
    rating: 5,
  },
  {
    name: "林小姐",
    company: "美妝品牌行銷總監",
    content: "社群行銷成效超出預期，粉絲互動率提升3倍，合作非常愉快。",
    rating: 5,
  },
  {
    name: "王經理",
    company: "傳直銷公司",
    content: "客製化的傳直銷系統完全符合我們的需求，售後服務也很到位。",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            客戶見證
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            聽聽我們的客戶怎麼說
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative border-border/50">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  「{testimonial.content}」
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
