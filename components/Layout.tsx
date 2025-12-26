
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen, MapPin, Mail, Clock, Info } from 'lucide-react';
import { STORE_NAME } from '../constants';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`relative px-4 py-2 transition-colors duration-200 ${isActive ? 'text-amber-800 font-semibold' : 'text-stone-600 hover:text-stone-900'}`}
    >
      {children}
      {isActive && (
        <motion.div 
          layoutId="nav-underline"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-700/50"
          initial={false}
        />
      )}
    </Link>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      <header className="sticky top-0 z-50 bg-[#fcfaf7]/80 backdrop-blur-md border-b border-stone-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-amber-900 rounded-lg flex items-center justify-center text-white">
              <BookOpen size={24} />
            </div>
            <span className="serif text-2xl font-bold tracking-tight text-stone-900 uppercase">{STORE_NAME}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-stone-600">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-b border-stone-200"
            >
              <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl serif py-2 border-b border-stone-100">Home</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl serif py-2 border-b border-stone-100">About Us</Link>
                <Link to="/locations" onClick={() => setIsMobileMenuOpen(false)} className="text-xl serif py-2 border-b border-stone-100">Locations</Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-xl serif py-2">Contact</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-stone-900 text-stone-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="serif text-3xl text-white mb-4">{STORE_NAME}</h3>
              <p className="max-w-md text-stone-400 leading-relaxed mb-6">
                Specializing in used books by Asian American authors. We believe every book has a story to tell, and every voice deserves to be heard. Based in the heart of Los Angeles.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-800 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">IG</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-800 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">TW</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-800 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">FB</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white uppercase tracking-wider mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="hover:text-amber-500 transition-colors">Our Team</Link></li>
                <li><Link to="/locations" className="hover:text-amber-500 transition-colors">Find a Store</Link></li>
                <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Get in Touch</Link></li>
                <li><Link to="/hours" className="hover:text-amber-500 transition-colors">Store Hours</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white uppercase tracking-wider mb-6">Support</h4>
              <ul className="space-y-4">
                <li><a href="mailto:info@lotusandink.com" className="hover:text-amber-500 transition-colors">Email Support</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
            <p>&copy; {new Date().getFullYear()} {STORE_NAME}. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Designed for the Asian American Literary Community in Los Angeles.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
