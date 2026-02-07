import { CheckCircle, Award, Users, Target } from 'lucide-react';
import { motion } from 'motion/react';

const highlights = [
  'بیش از ۲۵ سال تجربه ترکیبی',
  'حسابداران رسمی دارای پروانه',
  'خدمات شخصی‌سازی شده برای هر مشتری',
  'به‌روز با آخرین مقررات مالیاتی',
];

const stats = [
  { icon: Users, value: '۵۰۰+', label: 'مشتری راضی', color: 'green' },
  { icon: Award, value: '۲۵+', label: 'سال تجربه', color: 'blue' },
  { icon: Target, value: '۹۸٪', label: 'نرخ موفقیت', color: 'green' },
];

export function About() {
  return (
    <section
      id="about"
      className="py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* SVG Illustration */}
              <div className="rounded-2xl shadow-2xl w-full bg-gradient-to-br from-blue-50 to-green-50 p-8 sm:p-12">
                <svg viewBox="0 0 500 400" className="w-full h-auto">
                  {/* Background */}
                  <rect
                    x="0"
                    y="0"
                    width="500"
                    height="400"
                    fill="url(#aboutGradient)"
                    opacity="0.1"
                    rx="20"
                  />

                  {/* Main dashboard panel */}
                  <rect
                    x="50"
                    y="80"
                    width="400"
                    height="280"
                    fill="#ffffff"
                    rx="12"
                    filter="url(#shadow)"
                  />

                  {/* Header */}
                  <rect
                    x="50"
                    y="80"
                    width="400"
                    height="50"
                    fill="#3b82f6"
                    rx="12"
                  />
                  <rect x="50" y="110" width="400" height="20" fill="#3b82f6" />
                  <text
                    x="250"
                    y="110"
                    fontSize="18"
                    fill="#ffffff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    تحلیل مالی
                  </text>

                  {/* Chart area */}
                  <g>
                    {/* Grid lines */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <line
                        key={i}
                        x1="80"
                        y1={160 + i * 40}
                        x2="420"
                        y2={160 + i * 40}
                        stroke="#e5e7eb"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Bar chart */}
                    <g>
                      <rect
                        x="100"
                        y="240"
                        width="35"
                        height="80"
                        fill="#3b82f6"
                        rx="4"
                      />
                      <rect
                        x="150"
                        y="200"
                        width="35"
                        height="120"
                        fill="#10b981"
                        rx="4"
                      />
                      <rect
                        x="200"
                        y="220"
                        width="35"
                        height="100"
                        fill="#3b82f6"
                        rx="4"
                      />
                      <rect
                        x="250"
                        y="180"
                        width="35"
                        height="140"
                        fill="#10b981"
                        rx="4"
                      />
                      <rect
                        x="300"
                        y="190"
                        width="35"
                        height="130"
                        fill="#3b82f6"
                        rx="4"
                      />
                      <rect
                        x="350"
                        y="160"
                        width="35"
                        height="160"
                        fill="#10b981"
                        rx="4"
                      />
                    </g>

                    {/* Line chart overlay */}
                    <polyline
                      points="117,250 167,210 217,230 267,190 317,200 367,170"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="5,5"
                    />

                    {/* Data points */}
                    {[
                      { x: 117, y: 250 },
                      { x: 167, y: 210 },
                      { x: 217, y: 230 },
                      { x: 267, y: 190 },
                      { x: 317, y: 200 },
                      { x: 367, y: 170 },
                    ].map((point, i) => (
                      <circle
                        key={i}
                        cx={point.x}
                        cy={point.y}
                        r="5"
                        fill="#f59e0b"
                      />
                    ))}
                  </g>

                  {/* Stats cards */}
                  <g opacity="0.95">
                    {/* Revenue card */}
                    <rect
                      x="60"
                      y="30"
                      width="120"
                      height="60"
                      fill="#10b981"
                      rx="8"
                      filter="url(#shadow)"
                    />
                    <text
                      x="120"
                      y="55"
                      fontSize="12"
                      fill="#ffffff"
                      textAnchor="middle"
                      opacity="0.9"
                    >
                      درآمد
                    </text>
                    <text
                      x="120"
                      y="75"
                      fontSize="20"
                      fill="#ffffff"
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      ۴۵M
                    </text>

                    {/* Profit card */}
                    <rect
                      x="320"
                      y="30"
                      width="120"
                      height="60"
                      fill="#3b82f6"
                      rx="8"
                      filter="url(#shadow)"
                    />
                    <text
                      x="380"
                      y="55"
                      fontSize="12"
                      fill="#ffffff"
                      textAnchor="middle"
                      opacity="0.9"
                    >
                      سود
                    </text>
                    <text
                      x="380"
                      y="75"
                      fontSize="20"
                      fill="#ffffff"
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      ۱۸M
                    </text>
                  </g>

                  {/* Pie chart */}
                  <g transform="translate(420, 280)">
                    <circle cx="0" cy="0" r="40" fill="#f3f4f6" />
                    <path
                      d="M 0 -40 A 40 40 0 0 1 34.64 20 L 0 0 Z"
                      fill="#3b82f6"
                    />
                    <path
                      d="M 34.64 20 A 40 40 0 0 1 -34.64 20 L 0 0 Z"
                      fill="#10b981"
                    />
                    <path
                      d="M -34.64 20 A 40 40 0 0 1 0 -40 L 0 0 Z"
                      fill="#60a5fa"
                    />
                  </g>

                  {/* Floating elements */}
                  <g opacity="0.7">
                    <circle cx="80" cy="340" r="15" fill="#10b981" />
                    <text
                      x="80"
                      y="347"
                      fontSize="18"
                      fill="#ffffff"
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      ✓
                    </text>

                    <circle cx="430" cy="140" r="12" fill="#3b82f6" />
                    <text
                      x="430"
                      y="145"
                      fontSize="14"
                      fill="#ffffff"
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      %
                    </text>
                  </g>

                  {/* Definitions */}
                  <defs>
                    <linearGradient
                      id="aboutGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <filter id="shadow">
                      <feDropShadow
                        dx="0"
                        dy="4"
                        stdDeviation="4"
                        floodOpacity="0.1"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl -z-10"></div>
              <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-20 sm:w-32 h-20 sm:h-32 bg-blue-100 rounded-2xl -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
              درباره ما
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-gray-900">
              آروین تراز وارنا
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              ما تیمی از متخصصان حسابداری متعهد هستیم که خدمات مالی استثنایی را
              برای کسب‌وکارها و افراد ارائه می‌دهیم.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              شرکت ما ارزش‌های سنتی را با فناوری مدرن ترکیب می‌کند تا راهکارهای
              حسابداری دقیق، کارآمد و شخصی‌سازی شده ارائه دهد.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 bg-gray-50 p-2.5 sm:p-3 rounded-lg hover:bg-green-50 transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5 sm:mt-1 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base text-gray-700">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const colorClass =
                  stat.color === 'green' ? 'text-green-600' : 'text-blue-600';
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <Icon
                      className={`w-6 h-6 sm:w-8 sm:h-8 ${colorClass} mx-auto mb-1 sm:mb-2`}
                    />
                    <div
                      className={`text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1 ${colorClass}`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
