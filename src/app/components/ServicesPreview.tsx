import { Calculator, TrendingUp, FileText, Users, PieChart, Shield, Sparkles, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const services = [
  {
    icon: Calculator,
    title: 'مشاوره مالیاتی',
    description: 'خدمات جامع برنامه‌ریزی و تنظیم اظهارنامه مالیاتی برای اشخاص و شرکت‌ها.'
  },
  {
    icon: FileText,
    title: 'حسابداری و دفترداری',
    description: 'ثبت دقیق و به‌موقع سوابق مالی برای نظم‌دهی به حساب‌های شما.'
  },
  {
    icon: TrendingUp,
    title: 'برنامه‌ریزی مالی',
    description: 'مشاوره مالی استراتژیک برای دستیابی به اهداف بلندمدت شما.'
  },
  {
    icon: PieChart,
    title: 'مشاوره کسب و کار',
    description: 'راهنمایی تخصصی برای بهینه‌سازی عملیات و سودآوری کسب و کار.'
  },
  {
    icon: Shield,
    title: 'حسابرسی و تضمین',
    description: 'خدمات حسابرسی کامل برای اطمینان از انطباق و دقت مالی.'
  },
  {
    icon: Users,
    title: 'خدمات حقوق و دستمزد',
    description: 'پردازش و مدیریت کارآمد حقوق و دستمزد برای کسب‌وکارها.'
  }
];

export function ServicesPreview() {
  return (
    <section id="services" className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration with animated elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm mb-3 md:mb-4">
            <Sparkles size={14} className="md:w-4 md:h-4" />
            <span>خدمات تخصصی</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4 text-gray-900 px-4">خدمات ما</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            خدمات حسابداری و مالی جامع متناسب با نیازهای شما
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 md:mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isAccentCard = index === 2 || index === 4;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Glassmorphism card */}
                <div className={`relative p-5 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl backdrop-blur-xl bg-white/80 border transition-all duration-500 h-full ${
                  isAccentCard 
                    ? 'border-green-200/50 hover:border-green-400/70 shadow-lg shadow-green-100/50' 
                    : 'border-blue-200/50 hover:border-blue-400/70 shadow-lg shadow-blue-100/50'
                } hover:shadow-2xl hover:-translate-y-2`}>
                  
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isAccentCard 
                      ? 'from-green-400/10 via-green-300/5 to-transparent' 
                      : 'from-blue-400/10 via-blue-300/5 to-transparent'
                  }`}></div>

                  {/* Glow effect */}
                  <div className={`absolute -inset-0.5 rounded-2xl lg:rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
                    isAccentCard ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-blue-400 to-blue-600'
                  }`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon with animated ring */}
                    <div className="relative inline-block mb-4 md:mb-6">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 ${
                        isAccentCard ? 'from-green-500 to-green-600' : 'from-blue-500 to-blue-600'
                      }`}>
                        <Icon className="text-white w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      
                      {/* Animated ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-xl lg:rounded-2xl border-2 ${
                          isAccentCard ? 'border-green-400' : 'border-blue-400'
                        }`}
                        initial={{ scale: 1, opacity: 0 }}
                        whileInView={{ scale: 1.3, opacity: 0 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                        viewport={{ once: false }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex items-start justify-between gap-2 mb-2 md:mb-3">
                      <h3 className={`text-lg sm:text-xl lg:text-2xl text-gray-900 transition-colors duration-300 ${
                        isAccentCard ? 'group-hover:text-green-600' : 'group-hover:text-blue-600'
                      }`}>{service.title}</h3>
                      
                      {/* Arrow icon */}
                      <ArrowUpRight className={`w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] ${
                        isAccentCard ? 'text-green-600' : 'text-blue-600'
                      }`} />
                    </div>
                    
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link 
            to="/services"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-2xl overflow-hidden"
          >
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            
            <span className="relative z-10 text-sm sm:text-base">مشاهده تمام خدمات</span>
            <Sparkles size={16} className="relative z-10 sm:w-[18px] sm:h-[18px] group-hover:rotate-12 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}