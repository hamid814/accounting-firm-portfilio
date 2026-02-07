import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'سارا احمدی',
    role: 'شریک ارشد، حسابدار رسمی',
    bio: 'متخصص در مالیات شرکتی و مشاوره کسب و کار با بیش از ۱۵ سال تجربه.',
  },
  {
    name: 'محمد رضایی',
    role: 'مدیر مالیاتی، حسابدار رسمی',
    bio: 'کارشناس برنامه‌ریزی مالیاتی و انطباق برای کسب‌وکارهای کوچک و متوسط.',
  },
  {
    name: 'فاطمه کریمی',
    role: 'مدیر حسابرسی، حسابدار رسمی',
    bio: 'تمرکز بر حسابرسی مالی و خدمات تضمین برای صنایع مختلف.',
  },
  {
    name: 'علی حسینی',
    role: 'مشاور مالی',
    bio: 'ارائه برنامه‌ریزی مالی استراتژیک و راهنمایی مدیریت دارایی.',
  },
];

export function TeamPreview() {
  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900">
            تیم ما
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            متخصصان با تجربه متعهد به موفقیت مالی شما
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Background circle */}
                  <circle cx="50" cy="50" r="50" fill="url(#teamGradient)" />

                  {/* Person illustration */}
                  {/* Head */}
                  <circle cx="50" cy="35" r="12" fill="#ffffff" opacity="0.9" />

                  {/* Body */}
                  <path
                    d="M 50 47 Q 35 47 30 70 L 70 70 Q 65 47 50 47 Z"
                    fill="#ffffff"
                    opacity="0.9"
                  />

                  <defs>
                    <linearGradient
                      id="teamGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl mb-1 text-gray-900">{member.name}</h3>
              <p className="text-blue-600 mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
              <div className="flex justify-center gap-3">
                <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={18} />
                </button>
                <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors">
                  <Mail size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/team"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            مشاهده تمام اعضای تیم
          </Link>
        </div>
      </div>
    </section>
  );
}
