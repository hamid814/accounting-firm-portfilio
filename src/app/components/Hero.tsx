import { ArrowLeft, TrendingUp, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section
      id="home"
      className="pt-16 sm:pt-20 pb-12 sm:pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-green-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-green-500/30 to-blue-500/30 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 border border-green-400/30"
            >
              ✨ پیشرو در خدمات مالی و حسابداری
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-white leading-tight">
              راهکارهای حسابداری تخصصی برای کسب و کار شما
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              مشاوره مالی مطمئن و خدمات حسابداری جامع برای رشد پایدار و موفقیت
              کسب و کار شما.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Link
                to="/#contact"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                تماس بگیرید
                <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
              </Link>
              <Link
                to="tel:02136285624"
                className="bg-blue-500/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-500/30 transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                ۳۶۲۸۵۶۲۴ - ۰۲۱
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-300 mb-1">
                  ۱۰+
                </div>
                <div className="text-xs sm:text-sm text-blue-200">
                  سال تجربه
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-300 mb-1">
                  ۳۶+
                </div>
                <div className="text-xs sm:text-sm text-blue-200">
                  مشتری راضی
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative px-4 sm:px-0">
              {/* SVG Illustration */}
              <div className="rounded-2xl shadow-2xl w-full bg-white/10 backdrop-blur-sm p-8 sm:p-12">
                <svg viewBox="0 0 500 400" className="w-full h-auto">
                  {/* Background elements */}
                  <rect
                    x="0"
                    y="0"
                    width="500"
                    height="400"
                    fill="url(#heroGradient)"
                    opacity="0.1"
                    rx="20"
                  />

                  {/* Desk */}
                  <rect
                    x="50"
                    y="280"
                    width="400"
                    height="100"
                    fill="#1e40af"
                    rx="4"
                  />
                  <rect
                    x="40"
                    y="370"
                    width="420"
                    height="20"
                    fill="#1e3a8a"
                    rx="4"
                  />

                  {/* Computer monitor */}
                  <rect
                    x="180"
                    y="180"
                    width="140"
                    height="100"
                    fill="#dbeafe"
                    rx="4"
                  />
                  <rect
                    x="185"
                    y="185"
                    width="130"
                    height="85"
                    fill="#3b82f6"
                    rx="2"
                  />

                  {/* Screen content - charts */}
                  <polyline
                    points="200,230 220,220 240,225 260,210 280,215 300,205"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <rect x="200" y="245" width="12" height="20" fill="#60a5fa" />
                  <rect x="220" y="240" width="12" height="25" fill="#34d399" />
                  <rect x="240" y="235" width="12" height="30" fill="#60a5fa" />
                  <rect x="260" y="250" width="12" height="15" fill="#34d399" />
                  <rect x="280" y="245" width="12" height="20" fill="#60a5fa" />

                  {/* Monitor stand */}
                  <rect
                    x="230"
                    y="280"
                    width="40"
                    height="5"
                    fill="#93c5fd"
                    rx="2"
                  />
                  <rect
                    x="240"
                    y="285"
                    width="20"
                    height="15"
                    fill="#60a5fa"
                    rx="2"
                  />

                  {/* Documents */}
                  <rect
                    x="80"
                    y="240"
                    width="60"
                    height="40"
                    fill="#ffffff"
                    rx="2"
                  />
                  <line
                    x1="90"
                    y1="250"
                    x2="130"
                    y2="250"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <line
                    x1="90"
                    y1="260"
                    x2="125"
                    y2="260"
                    stroke="#10b981"
                    strokeWidth="2"
                  />
                  <line
                    x1="90"
                    y1="270"
                    x2="130"
                    y2="270"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />

                  {/* Calculator */}
                  <rect
                    x="360"
                    y="240"
                    width="50"
                    height="70"
                    fill="#1e40af"
                    rx="3"
                  />
                  <rect
                    x="365"
                    y="245"
                    width="40"
                    height="15"
                    fill="#dbeafe"
                    rx="2"
                  />
                  {[0, 1, 2].map((row) =>
                    [0, 1, 2].map((col) => (
                      <rect
                        key={`${row}-${col}`}
                        x={370 + col * 12}
                        y={265 + row * 12}
                        width="8"
                        height="8"
                        fill="#60a5fa"
                        rx="1"
                      />
                    )),
                  )}

                  {/* Coffee cup */}
                  <ellipse
                    cx="320"
                    cy="260"
                    rx="15"
                    ry="5"
                    fill="#10b981"
                    opacity="0.3"
                  />
                  <path
                    d="M 310 260 Q 310 245 320 240 Q 330 245 330 260 Z"
                    fill="#10b981"
                  />
                  <path
                    d="M 332 250 Q 340 250 340 255 Q 340 260 332 260"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                  />

                  {/* Floating icons */}
                  <g opacity="0.8">
                    {/* Dollar sign */}
                    <circle
                      cx="100"
                      cy="120"
                      r="25"
                      fill="#10b981"
                      opacity="0.2"
                    />
                    <text
                      x="100"
                      y="130"
                      fontSize="30"
                      fill="#10b981"
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      $
                    </text>

                    {/* Pie chart */}
                    <circle
                      cx="400"
                      cy="100"
                      r="30"
                      fill="#3b82f6"
                      opacity="0.2"
                    />
                    <path d="M 400 70 L 400 100 L 415 85 Z" fill="#3b82f6" />
                    <path
                      d="M 400 100 L 415 85 A 30 30 0 0 1 425 115 Z"
                      fill="#10b981"
                    />
                    <path
                      d="M 400 100 L 425 115 A 30 30 0 1 1 400 70 Z"
                      fill="#60a5fa"
                    />
                  </g>

                  {/* Definitions */}
                  <defs>
                    <linearGradient
                      id="heroGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-3 sm:-bottom-6 -left-2 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-xl w-[140px] sm:w-[180px] md:max-w-[200px]"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-green-600">
                      ۳۵٪
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600">
                      افزایش سود
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-3 sm:-top-6 -right-2 sm:-right-6 bg-white p-3 sm:p-4 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-gray-900 whitespace-nowrap">
                      تضمین کیفیت
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600">
                      ۱۰۰٪ مطمئن
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
