import { useEffect } from "react";

const SEOHead = () => {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "智信網路科技有限公司",
      "alternateName": "Zhixin Network Technology Co., Ltd.",
      "url": "https://zhixin.com.tw",
      "logo": "https://zhixin.com.tw/logo.png",
      "description": "智信網路科技提供社群行銷、網站SEO、AI SEO優化、數字人、傳直銷系統及軟硬體安裝等全方位數位解決方案。",
      "foundingDate": "2014",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+886-2-XXXX-XXXX",
        "contactType": "customer service",
        "availableLanguage": ["Chinese", "English"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TW",
        "addressLocality": "台灣"
      },
      "sameAs": [],
      "areaServed": {
        "@type": "Country",
        "name": "Taiwan"
      }
    };

    // LocalBusiness Schema for better local SEO
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "智信網路科技有限公司",
      "image": "https://zhixin.com.tw/logo.png",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TW"
      },
      "telephone": "+886-2-XXXX-XXXX",
      "url": "https://zhixin.com.tw",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    };

    // Service Schema for each service
    const servicesSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "智信網路科技服務項目",
      "itemListElement": [
        {
          "@type": "Service",
          "position": 1,
          "name": "社群行銷服務",
          "description": "提供Facebook、Instagram等社群平台經營、內容策略規劃、廣告投放優化，打造品牌社群影響力，精準觸及目標客群，提升互動與轉換率。",
          "provider": { "@type": "Organization", "name": "智信網路科技" },
          "serviceType": "Social Media Marketing",
          "areaServed": "Taiwan"
        },
        {
          "@type": "Service",
          "position": 2,
          "name": "傳直銷系統開發",
          "description": "客製化傳直銷管理系統，包含完整會員管理、獎金自動計算、業績報表分析與追蹤功能。",
          "provider": { "@type": "Organization", "name": "智信網路科技" },
          "serviceType": "MLM System Development",
          "areaServed": "Taiwan"
        },
        {
          "@type": "Service",
          "position": 3,
          "name": "網站SEO優化",
          "description": "提升網站搜尋引擎排名，包含關鍵字優化、技術SEO診斷、內容優化策略，增加自然流量，讓潛在客戶輕鬆找到您。",
          "provider": { "@type": "Organization", "name": "智信網路科技" },
          "serviceType": "Search Engine Optimization",
          "areaServed": "Taiwan"
        },
        {
          "@type": "Service",
          "position": 4,
          "name": "AI SEO智能優化",
          "description": "運用人工智慧技術進行SEO分析與優化，包含AI內容生成、智能排名分析、自動化優化流程，提升效率與成效。",
          "provider": { "@type": "Organization", "name": "智信網路科技" },
          "serviceType": "AI-Powered SEO",
          "areaServed": "Taiwan"
        },
        {
          "@type": "Service",
          "position": 5,
          "name": "AI數字人服務",
          "description": "打造專屬AI數字人，包含虛擬主播、AI客服助手、品牌代言人，提供24/7全天候服務，提升客戶體驗與品牌形象。",
          "provider": { "@type": "Organization", "name": "智信網路科技" },
          "serviceType": "AI Digital Human",
          "areaServed": "Taiwan"
        },
        {
          "@type": "Service",
          "position": 6,
          "name": "軟硬體安裝服務",
          "description": "專業的軟硬體建置服務，從系統安裝設定、網路架設到設備維護保養，提供一站式解決方案。",
          "provider": { "@type": "Organization", "name": "智信網路科技" },
          "serviceType": "IT Installation Services",
          "areaServed": "Taiwan"
        }
      ]
    };

    // FAQ Schema for AI SEO
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "什麼是AI SEO？與傳統SEO有什麼不同？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI SEO是運用人工智慧技術來分析、優化網站搜尋引擎排名的新型態SEO服務。與傳統SEO相比，AI SEO能夠更快速地分析大量數據、自動生成優化內容、預測搜尋趨勢，並針對AI搜尋引擎（如ChatGPT、Perplexity）進行優化，讓您的品牌在新時代搜尋中保持領先。"
          }
        },
        {
          "@type": "Question",
          "name": "什麼是數字人？企業為什麼需要數字人？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "數字人是運用AI技術創造的虛擬人物，可用於虛擬主播、AI客服、品牌代言人等場景。企業使用數字人可以實現24小時不間斷服務、降低人力成本、提供一致的品牌形象，並能快速製作多語言內容，是數位轉型的重要工具。"
          }
        },
        {
          "@type": "Question",
          "name": "智信網路科技的服務範圍包括哪些？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "智信網路科技提供六大核心服務：1. 社群行銷（Facebook/IG經營、廣告投放）2. 傳直銷系統開發 3. 網站SEO優化 4. AI SEO智能優化 5. AI數字人服務 6. 軟硬體安裝與維護。我們提供從諮詢到執行的一站式數位解決方案。"
          }
        },
        {
          "@type": "Question",
          "name": "如何聯繫智信網路科技諮詢服務？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "您可以透過以下方式聯繫我們：電話 02-XXXX-XXXX、Email contact@zhixin.com.tw，或直接透過網站填寫諮詢表單。我們的專業團隊將在24小時內回覆您的需求。"
          }
        },
        {
          "@type": "Question",
          "name": "SEO優化需要多久才能看到成效？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO是長期投資，一般而言，基礎優化後3-6個月可開始看到排名提升，6-12個月可見顯著成效。具體時間取決於競爭程度、網站現況、內容品質等因素。AI SEO可加速部分流程，但仍需持續優化以維持排名。"
          }
        }
      ]
    };

    // WebSite Schema for sitelinks search box
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "智信網路科技",
      "url": "https://zhixin.com.tw",
      "description": "智信網路科技有限公司 - 社群行銷、SEO優化、AI數字人、傳直銷系統開發專家",
      "publisher": {
        "@type": "Organization",
        "name": "智信網路科技有限公司"
      }
    };

    // Add all schemas to head
    const schemas = [organizationSchema, localBusinessSchema, servicesSchema, faqSchema, websiteSchema];
    
    schemas.forEach((schema, index) => {
      const existingScript = document.getElementById(`schema-${index}`);
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement("script");
      script.id = `schema-${index}`;
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`schema-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
};

export default SEOHead;
