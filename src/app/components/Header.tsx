import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                <Sparkles size={14} className="md:w-6 md:h-6" />
              </span>
            </div>
            <span className="font-bold text-xl text-gray-900">
              آروین تراز وارنا
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors ${isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              خانه
            </Link>
            <Link
              to="/services"
              className={`transition-colors ${isActive('/services') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              خدمات
            </Link>
            <Link
              to="/team"
              className={`transition-colors ${isActive('/team') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              تیم ما
            </Link>
            <Link
              to="/#about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              درباره ما
            </Link>
            <Link
              to="/#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              تماس با ما
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`transition-colors text-right ${isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              خانه
            </Link>
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`transition-colors text-right ${isActive('/services') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              خدمات
            </Link>
            <Link
              to="/team"
              onClick={() => setMobileMenuOpen(false)}
              className={`transition-colors text-right ${isActive('/team') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              تیم ما
            </Link>
            <Link
              to="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors text-right"
            >
              درباره ما
            </Link>
            <Link
              to="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors text-right"
            >
              تماس با ما
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
