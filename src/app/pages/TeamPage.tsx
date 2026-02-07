import { Linkedin, Mail, Award, GraduationCap, Briefcase } from 'lucide-react';

const teamMembers = [
  {
    name: 'سارا احمدی',
    role: 'شریک ارشد، حسابدار رسمی',
    bio: 'متخصص در مالیات شرکتی و مشاوره کسب و کار با بیش از ۱۵ سال تجربه.',
    education: 'دکتری حسابداری، دانشگاه تهران',
    certifications: ['حسابدار رسمی', 'مشاور مالی معتمد'],
    specialties: ['مالیات شرکتی', 'مشاوره استراتژیک', 'مدیریت مالی']
  },
  {
    name: 'محمد رضایی',
    role: 'مدیر مالیاتی، حسابدار رسمی',
    bio: 'کارشناس برنامه‌ریزی مالیاتی و انطباق برای کسب‌وکارهای کوچک و متوسط.',
    education: 'کارشناسی ارشد حسابداری، دانشگاه شریف',
    certifications: ['حسابدار رسمی', 'مشاور مالیاتی'],
    specialties: ['برنامه‌ریزی مالیاتی', 'مالیات بر ارزش افزوده', 'انطباق مالیاتی']
  },
  {
    name: 'فاطمه کریمی',
    role: 'مدیر حسابرسی، حسابدار رسمی',
    bio: 'تمرکز بر حسابرسی مالی و خدمات تضمین برای صنایع مختلف.',
    education: 'کارشناسی ارشد حسابداری، دانشگاه علامه طباطبایی',
    certifications: ['حسابدار رسمی', 'حسابرس داخلی معتمد'],
    specialties: ['حسابرسی مالی', 'حسابرسی داخلی', 'مدیریت ریسک']
  },
  {
    name: 'علی حسینی',
    role: 'مشاور مالی',
    bio: 'ارائه برنامه‌ریزی مالی استراتژیک و راهنمایی مدیریت دارایی.',
    education: 'کارشناسی ارشد مدیریت مالی، دانشگاه تهران',
    certifications: ['مشاور مالی معتمد', 'تحلیلگر مالی'],
    specialties: ['برنامه‌ریزی مالی', 'مدیریت سرمایه‌گذاری', 'ارزیابی ریسک']
  },
  {
    name: 'زهرا محمدی',
    role: 'مدیر دفترداری',
    bio: 'متخصص در سیستم‌های دفترداری و گزارش‌گیری مالی.',
    education: 'کارشناسی حسابداری، دانشگاه امیرکبیر',
    certifications: ['حسابدار معتمد', 'متخصص نرم‌افزارهای حسابداری'],
    specialties: ['دفترداری جامع', 'گزارش‌گیری مالی', 'اتوماسیون حسابداری']
  },
  {
    name: 'رضا قاسمی',
    role: 'مشاور کسب و کار',
    bio: 'راهنمایی کسب‌وکارها در بهینه‌سازی فرآیندها و افزایش سودآوری.',
    education: 'کارشناسی ارشد مدیریت کسب و کار، دانشگاه شریف',
    certifications: ['مشاور کسب و کار معتمد', 'مربی کسب و کار'],
    specialties: ['استراتژی کسب و کار', 'بهینه‌سازی عملیات', 'تحلیل بازار']
  },
  {
    name: 'مریم صادقی',
    role: 'متخصص حقوق و دستمزد',
    bio: 'مدیریت حرفه‌ای حقوق و دستمزد و انطباق با قوانین کار.',
    education: 'کارشناسی ارشد مدیریت منابع انسانی، دانشگاه تهران',
    certifications: ['متخصص حقوق و دستمزد', 'مشاور منابع انسانی'],
    specialties: ['مدیریت حقوق', 'قوانین کار', 'بیمه و مالیات']
  },
  {
    name: 'حسین نوری',
    role: 'تحلیلگر مالی',
    bio: 'تحلیل داده‌های مالی و ارائه گزارش‌های جامع برای تصمیم‌گیری.',
    education: 'کارشناسی ارشد مدیریت مالی، دانشگاه علامه',
    certifications: ['تحلیلگر مالی معتمد', 'متخصص مدل‌سازی مالی'],
    specialties: ['تحلیل مالی', 'مدل‌سازی مالی', 'ارزش‌گذاری']
  }
];

export function TeamPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
              تیم متخصص ما
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              تیمی از حسابداران و مشاوران با تجربه که متعهد به ارائه بهترین خدمات به شما هستند.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center overflow-hidden">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        {/* Background circle */}
                        <circle cx="50" cy="50" r="50" fill="url(#teamMemberGradient)" />
                        
                        {/* Person illustration */}
                        {/* Head */}
                        <circle cx="50" cy="35" r="12" fill="#ffffff" opacity="0.9" />
                        
                        {/* Body */}
                        <path
                          d="M 50 47 Q 35 47 30 70 L 70 70 Q 65 47 50 47 Z"
                          fill="#ffffff"
                          opacity="0.9"
                        />
                        
                        {/* Shoulders/Arms */}
                        <ellipse cx="50" cy="60" rx="22" ry="15" fill="#ffffff" opacity="0.8" />
                        
                        <defs>
                          <linearGradient id="teamMemberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#60a5fa" />
                            <stop offset="100%" stopColor="#2563eb" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl mb-1 text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-2">
                        <GraduationCap className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm text-gray-700">{member.education}</span>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <Award className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                        <div className="text-sm text-gray-700">
                          {member.certifications.join(' • ')}
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <Briefcase className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                        <div className="text-sm text-gray-700">
                          {member.specialties.join(' • ')}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors">
                        <Linkedin size={18} />
                      </button>
                      <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors">
                        <Mail size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">ارزش‌های ما</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl mb-2 text-gray-900">دقت</h3>
                <p className="text-gray-600">ما با دقت و توجه به جزئیات کار می‌کنیم.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl mb-2 text-gray-900">اعتماد</h3>
                <p className="text-gray-600">اعتماد شما برای ما بسیار ارزشمند است.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-xl mb-2 text-gray-900">نوآوری</h3>
                <p className="text-gray-600">از جدیدترین فناوری‌ها استفاده می‌کنیم.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-white">
            بیایید با هم کار کنیم
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            تیم ما آماده است تا در کنار شما باشد و به موفقیت کسب و کار شما کمک کند.
          </p>
          <a 
            href="/#contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-block"
          >
            تماس با ما
          </a>
        </div>
      </section>
    </div>
  );
}