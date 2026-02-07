import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">ح</span>
              </div>
              <span className="font-bold text-xl">حسابداران دقیق</span>
            </div>
            <p className="text-gray-400">
              خدمات حسابداری حرفه‌ای که می‌توانید به آن اعتماد کنید.
            </p>
          </div>

          <div>
            <h3 className="mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">خانه</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">خدمات</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors">تیم ما</Link></li>
              <li><Link to="/#about" className="text-gray-400 hover:text-white transition-colors">درباره ما</Link></li>
              <li><Link to="/#contact" className="text-gray-400 hover:text-white transition-colors">تماس با ما</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">اطلاعات تماس</h3>
            <ul className="space-y-2 text-gray-400">
              <li>۰۲۱-۱۲۳۴۵۶۷۸</li>
              <li>info@accountants.ir</li>
              <li>تهران، خیابان ولیعصر</li>
              <li>برج اداری تجاری، طبقه ۱۰</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} حسابداران دقیق. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
