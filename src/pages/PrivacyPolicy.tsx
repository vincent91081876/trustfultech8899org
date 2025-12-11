import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            返回首頁
          </Link>
        </Button>

        <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto">
          <h1>隱私權政策</h1>
          <p className="text-muted-foreground">最後更新日期：{new Date().toLocaleDateString('zh-TW')}</p>

          <h2>一、隱私權政策聲明</h2>
          <p>
            智信網路科技有限公司（以下簡稱「本公司」）非常重視您的隱私權保護。
            本隱私權政策說明本公司如何蒐集、處理及利用您的個人資料。
          </p>

          <h2>二、個人資料的蒐集</h2>
          <p>本公司可能蒐集的個人資料包括但不限於：</p>
          <ul>
            <li>姓名、電子郵件地址、電話號碼</li>
            <li>公司名稱及職稱</li>
            <li>透過網站表單提交的諮詢內容</li>
            <li>瀏覽器類型、IP位址等技術資訊</li>
          </ul>

          <h2>三、個人資料的使用目的</h2>
          <p>本公司蒐集您的個人資料，用於以下目的：</p>
          <ul>
            <li>回覆您的諮詢與服務請求</li>
            <li>提供報價及服務說明</li>
            <li>寄送服務相關通知及行銷資訊（經您同意）</li>
            <li>改善網站服務品質</li>
          </ul>

          <h2>四、個人資料的保護</h2>
          <p>
            本公司採取適當的安全措施，以保護您的個人資料免於未經授權的存取、
            使用或洩露。我們的員工均受過資料保護相關訓練。
          </p>

          <h2>五、Cookie的使用</h2>
          <p>
            本網站使用Cookie技術以提升您的瀏覽體驗。您可以透過瀏覽器設定
            選擇接受或拒絕Cookie。
          </p>

          <h2>六、您的權利</h2>
          <p>依據個人資料保護法，您享有以下權利：</p>
          <ul>
            <li>查詢或請求閱覽您的個人資料</li>
            <li>請求製給複本</li>
            <li>請求補充或更正</li>
            <li>請求停止蒐集、處理或利用</li>
            <li>請求刪除</li>
          </ul>

          <h2>七、隱私權政策的修訂</h2>
          <p>
            本公司保留隨時修訂本隱私權政策的權利。修訂後的政策將公布於本網站，
            請您定期查閱。
          </p>

          <h2>八、聯絡我們</h2>
          <p>
            如您對本隱私權政策有任何疑問，歡迎透過以下方式聯繫我們：
          </p>
          <ul>
            <li>電子郵件：contact@zhixin.com.tw</li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
