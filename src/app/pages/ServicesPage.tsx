import {
  Calculator,
  TrendingUp,
  FileText,
  Users,
  PieChart,
  Shield,
  BookOpen,
  BarChart,
  Briefcase,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  Globe,
  DollarSign,
  Building2,
  Target,
  GraduationCap,
  Layers,
} from 'lucide-react';
import { motion } from 'motion/react';

const allServices = [
  {
    icon: Calculator,
    title: 'مشاوره مالیاتی',
    description:
      'خدمات جامع برنامه‌ریزی و تنظیم اظهارنامه مالیاتی برای اشخاص و شرکت‌ها.',
    details: [
      'برنامه‌ریزی مالیاتی',
      'تنظیم اظهارنامه مالیاتی',
      'مشاوره مالیات ارزش افزوده',
      'حل اختلافات مالیاتی',
    ],
  },
  {
    icon: FileText,
    title: 'حسابداری و دفترداری',
    description: 'ثبت دقیق و به‌موقع سوابق مالی برای نظم‌دهی به حساب‌های شما.',
    details: [
      'ثبت دفاتر روزانه',
      'تهیه صورت‌های مالی',
      'تطبیق حساب‌های بانکی',
      'گزارش‌گیری مالی',
    ],
  },
  {
    icon: TrendingUp,
    title: 'برنامه‌ریزی مالی',
    description: 'مشاوره مالی استراتژیک برای دستیابی به اهداف بلندمدت شما.',
    details: [
      'تدوین بودجه',
      'تحلیل جریان نقدی',
      'برنامه‌ریزی سرمایه‌گذاری',
      'مدیریت ریسک مالی',
    ],
  },
  {
    icon: PieChart,
    title: 'مشاوره کسب و کار',
    description: 'راهنمایی تخصصی برای بهینه‌سازی عملیات و سودآوری کسب و کار.',
    details: [
      'تحلیل کسب و کار',
      'بهینه‌سازی هزینه‌ها',
      'استراتژی رشد',
      'ارزیابی عملکرد',
    ],
  },
  {
    icon: Shield,
    title: 'حسابرسی و تضمین',
    description: 'خدمات حسابرسی کامل برای اطمینان از انطباق و دقت مالی.',
    details: [
      'حسابرسی مستقل',
      'حسابرسی داخلی',
      'بررسی انطباق',
      'ارزیابی کنترل‌های داخلی',
    ],
  },
  {
    icon: Users,
    title: 'خدمات حقوق و دستمزد',
    description: 'پردازش و مدیریت کارآمد حقوق و دستمزد برای کسب‌وکارها.',
    details: [
      'محاسبه حقوق و دستمزد',
      'مدیریت لیست حقوق',
      'انطباق با قوانین کار',
      'گزارش‌دهی به سازمان‌ها',
    ],
  },
  {
    icon: BookOpen,
    title: 'مشاوره ثبت شرکت',
    description: 'راهنمایی کامل در فرآیند ثبت و راه‌اندازی شرکت.',
    details: [
      'ثبت شرکت',
      'اخذ مجوزهای لازم',
      'ثبت علائم تجاری',
      'مشاوره انتخاب نوع شرکت',
    ],
  },
  {
    icon: BarChart,
    title: 'تحلیل و گزارش‌گیری',
    description: 'تهیه گزارش‌های تحلیلی جامع برای تصمیم‌گیری بهتر.',
    details: [
      'تحلیل سودآوری',
      'گزارش‌های مدیریتی',
      'تحلیل نقطه سربه‌سر',
      'داشبورد مالی',
    ],
  },
  {
    icon: Briefcase,
    title: 'مشاوره سرمایه‌گذاری',
    description: 'راهنمایی در تصمیمات سرمایه‌گذاری و ارزیابی پروژه‌ها.',
    details: [
      'ارزیابی پروژه‌های سرمایه‌گذاری',
      'تحلیل بازده سرمایه',
      'مطالعات امکان‌سنجی',
      'ارزش‌گذاری کسب و کار',
    ],
  },
  {
    icon: CheckCircle2,
    title: 'خدمات انطباق',
    description: 'اطمینان از رعایت قوانین و مقررات مالی و اداری.',
    details: [
      'بررسی انطباق قوانین',
      'مدیریت ریسک انطباق',
      'آموزش پرسنل',
      'به‌روزرسانی رویه‌ها',
    ],
  },
  {
    icon: ClipboardList,
    title: 'مدیریت اسناد',
    description: 'سازماندهی و مدیریت اسناد و مدارک مالی.',
    details: [
      'بایگانی اسناد',
      'مدیریت دیجیتال اسناد',
      'نگهداری قانونی اسناد',
      'بازیابی اطلاعات',
    ],
  },
  {
    icon: CreditCard,
    title: 'مشاوره اعتباری',
    description: 'راهنمایی در مدیریت اعتبارات و تسهیلات بانکی.',
    details: [
      'درخواست تسهیلات',
      'ارزیابی اعتبار',
      'مذاکره با بانک‌ها',
      'مدیریت بدهی',
    ],
  },
  {
    icon: Globe,
    title: 'مشاوره صادرات و واردات',
    description: 'خدمات تخصصی برای تجارت بین‌المللی و امور گمرکی.',
    details: [
      'مشاوره ترخیص کالا',
      'محاسبه عوارض گمرکی',
      'مدیریت ارز تجاری',
      'قوانین تجارت بین‌الملل',
    ],
  },
  {
    icon: DollarSign,
    title: 'ارزش‌گذاری دارایی',
    description: 'خدمات حرفه‌ای ارزیابی و ارزش‌گذاری دارایی‌ها.',
    details: [
      'ارزیابی دارایی‌های ثابت',
      'ارزش‌گذاری موجودی کالا',
      'ارزیابی املاک',
      'تعیین ارزش منصفانه',
    ],
  },
  {
    icon: Building2,
    title: 'مشاوره ادغام و تملیک',
    description: 'راهنمایی در فرآیند ادغام، تملیک و تجدید ساختار شرکت‌ها.',
    details: [
      'ارزیابی مالی شرکت‌ها',
      'مشاوره در مذاکرات',
      'تحلیل سود و زیان',
      'مدیریت انتقال دارایی',
    ],
  },
  {
    icon: Target,
    title: 'مدیریت هزینه پروژه',
    description: 'کنترل و مدیریت هزینه‌های پروژه‌های بزرگ.',
    details: [
      'برآورد هزینه پروژه',
      'کنترل بودجه پروژه',
      'گزارش پیشرفت مالی',
      'تحلیل انحراف هزینه',
    ],
  },
  {
    icon: GraduationCap,
    title: 'آموزش و مشاوره تخصصی',
    description: 'دوره‌های آموزشی و کارگاه‌های تخصصی مالی و حسابداری.',
    details: [
      'دوره‌های حسابداری',
      'آموزش نرم‌افزارهای مالی',
      'کارگاه برنامه‌ریزی مالی',
      'مشاوره تخصصی حرفه‌ای',
    ],
  },
  {
    icon: Layers,
    title: 'مشاوره مالی بین‌المللی',
    description: 'خدمات مشاوره‌ای برای تجارت و سرمایه‌گذاری بین‌المللی.',
    details: [
      'مشاوره سرمایه‌گذاری خارجی',
      'تحلیل بازارهای جهانی',
      'مدیریت ریسک ارزی',
      'استانداردهای حسابداری بین‌المللی',
    ],
  },
];

export function ServicesPage() {
  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-white leading-tight">
              خدمات حسابداری و مالی
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed px-4">
              ما مجموعه کاملی از خدمات حسابداری، مالی و مشاوره‌ای را برای
              پاسخگویی به تمام نیازهای کسب و کار شما ارائه می‌دهیم.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {allServices.map((service, index) => {
              const Icon = service.icon;
              // Alternate between blue and green accents for visual variety
              const isGreenAccent = index % 2 === 1;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`group p-5 sm:p-6 lg:p-8 rounded-2xl bg-white border transition-all duration-300 relative overflow-hidden ${
                    isGreenAccent
                      ? 'border-gray-100 hover:border-green-200'
                      : 'border-gray-100 hover:border-blue-200'
                  } hover:shadow-2xl`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isGreenAccent
                        ? 'from-green-50 to-transparent'
                        : 'from-blue-50 to-transparent'
                    }`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                        isGreenAccent
                          ? 'from-green-500 to-green-600'
                          : 'from-blue-500 to-blue-600'
                      }`}
                    >
                      <Icon className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <h3
                      className={`text-xl sm:text-2xl mb-2 sm:mb-3 text-gray-900 transition-colors ${
                        isGreenAccent
                          ? 'group-hover:text-green-600'
                          : 'group-hover:text-blue-600'
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {service.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <CheckCircle2
                            size={16}
                            className={`flex-shrink-0 mt-0.5 sm:mt-1 sm:w-[18px] sm:h-[18px] ${
                              isGreenAccent ? 'text-green-600' : 'text-blue-600'
                            }`}
                          />
                          <span className="text-sm sm:text-base">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-white leading-tight px-4">
              آماده شروع کار با ما هستید؟
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              با ما تماس بگیرید تا در مورد نیازهای حسابداری و مالی خود مشاوره
              دریافت کنید.
            </p>
            <a
              href="/#contact"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gray-100 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              تماس با ما
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
