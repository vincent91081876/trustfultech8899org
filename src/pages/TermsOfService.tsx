import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
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
          <h1>服務條款</h1>
          <p className="text-muted-foreground">最後更新日期：{new Date().toLocaleDateString('zh-TW')}</p>

          <h2>一、服務條款的接受</h2>
          <p>
            歡迎使用智信網路科技有限公司（以下簡稱「本公司」）提供的服務。
            當您使用本網站或本公司的服務時，即表示您已閱讀、瞭解並同意接受本服務條款的所有內容。
          </p>

          <h2>二、服務內容</h2>
          <p>本公司提供的服務包括但不限於：</p>
          <ul>
            <li>社群行銷服務</li>
            <li>網站SEO優化服務</li>
            <li>AI SEO智能優化服務</li>
            <li>AI數字人服務</li>
            <li>傳直銷系統開發</li>
            <li>軟硬體安裝服務</li>
          </ul>

          <h2>三、服務變更</h2>
          <p>
            本公司保留隨時修改或中斷服務的權利，無需事先通知。
            對於服務的修改或中斷，本公司不對您或任何第三方承擔責任。
          </p>

          <h2>四、智慧財產權</h2>
          <p>
            本網站所有內容，包括但不限於文字、圖片、圖形、音訊、影片、軟體、程式碼等，
            均受著作權法及相關智慧財產權法律保護。未經本公司書面同意，
            不得以任何形式複製、傳播、修改或使用。
          </p>

          <h2>五、用戶責任</h2>
          <p>您同意：</p>
          <ul>
            <li>提供真實、準確的個人資料</li>
            <li>不從事任何違法或侵害他人權益的行為</li>
            <li>不干擾或破壞本網站的正常運作</li>
            <li>遵守中華民國相關法律法規</li>
          </ul>

          <h2>六、免責聲明</h2>
          <p>
            本公司對於網站內容的正確性、完整性、即時性不作任何保證。
            您使用本網站所獲得的資訊，應自行判斷其適用性，本公司不承擔任何責任。
          </p>

          <h2>七、服務費用</h2>
          <p>
            各項服務的費用將於雙方簽訂正式合約時確定。
            本公司保留調整服務費用的權利，調整前將提前通知客戶。
          </p>

          <h2>八、準據法與管轄法院</h2>
          <p>
            本服務條款的解釋與適用，以中華民國法律為準據法。
            因本服務條款所生之爭議，雙方同意以台灣台北地方法院為第一審管轄法院。
          </p>

          <h2>九、條款修訂</h2>
          <p>
            本公司保留隨時修訂本服務條款的權利。修訂後的條款將公布於本網站，
            繼續使用本服務即視為同意修訂後的條款。
          </p>

          <h2>十、聯絡方式</h2>
          <p>如您對本服務條款有任何疑問，歡迎聯絡我們：</p>
          <ul>
            <li>電子郵件：contact@zhixin.com.tw</li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default TermsOfService;
