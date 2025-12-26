import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BookOpen, Quote, Star, ShieldCheck, MapPin, Award } from 'lucide-react';
import { FEATURED_BOOKS, STORE_NAME } from '../constants';
import { getBookRecommendations } from '../services/gemini';

const BookConcierge: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const data = await getBookRecommendations(query);
    setResult(data);
    setLoading(false);
  };

  return (
    <section id="concierge" className="py-24 bg-stone-900 text-white rounded-[3rem] mx-4 my-12 overflow-hidden relative shadow-2xl">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-800/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-900/40 text-amber-200 border border-amber-800/50 mb-8">
          <Sparkles size={16} />
          <span className="text-sm font-medium tracking-wide uppercase">AI Literary Concierge</span>
        </div>
        <h2 className="serif text-4xl md:text-5xl mb-6">Find your next obsession.</h2>
        <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto">
          Not sure where to start? Describe a mood, a setting, or a memory, and we'll suggest three AAPI voices that match your soul.
        </p>

        <form onSubmit={handleSearch} className="relative max-w-xl mx-auto mb-12">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. A haunting memoir about family and food..."
            className="w-full bg-stone-800 border-2 border-stone-700 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-amber-700 transition-all pr-32 shadow-xl text-lg"
          />
          <button 
            disabled={loading}
            className="absolute right-2 top-2 bottom-2 bg-amber-700 hover:bg-amber-600 px-6 rounded-xl font-bold transition-colors disabled:opacity-50"
          >
            {loading ? 'Curating...' : 'Discover'}
          </button>
        </form>

        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left bg-stone-800/30 border border-stone-700 p-8 rounded-3xl backdrop-blur-sm"
          >
            <p className="text-amber-200 italic mb-8 text-xl leading-relaxed font-light border-l-2 border-amber-700/50 pl-6">"{result.intro}"</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {result.books.map((book: any, i: number) => (
                <div key={i} className="bg-stone-900/80 p-6 rounded-2xl border border-stone-800 hover:border-amber-700/50 transition-all group">
                  <h4 className="serif text-xl text-white mb-2 group-hover:text-amber-200 transition-colors">{book.title}</h4>
                  <p className="text-xs text-amber-600 font-black uppercase tracking-widest mb-4">{book.author}</p>
                  <p className="text-sm text-stone-400 leading-relaxed font-light">{book.reason}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-[0.15] scale-105"
            alt="Bookshelves"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fcfaf7] via-transparent to-[#fcfaf7]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center space-x-3 mb-8">
              <span className="w-12 h-[1px] bg-amber-900/30"></span>
              <span className="text-amber-900 text-sm font-bold uppercase tracking-[0.3em]">Downtown Los Angeles</span>
            </div>
            <h1 className="serif text-7xl md:text-9xl leading-[0.9] text-stone-900 mb-8 tracking-tighter">
              A Legacy of <br />
              <span className="italic font-light text-amber-900/80">Asian Voices.</span>
            </h1>
            <p className="text-2xl text-stone-600 mb-12 max-w-xl leading-relaxed font-light">
              We specialize in curated pre-loved books that define the Asian American experience. From rare classics to modern bestsellers, your story starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })} className="bg-stone-900 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center hover:bg-amber-950 transition-all hover:scale-[1.02] shadow-xl shadow-stone-900/20 group">
                Shop the Collection <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => document.getElementById('concierge')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white border-2 border-stone-200 px-10 py-5 rounded-2xl font-bold text-lg hover:border-amber-900 transition-all hover:text-amber-900">
                AI Book Curator
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 border-y border-stone-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-8 opacity-60">
          <div className="flex items-center space-x-2 font-bold uppercase tracking-widest text-xs"><Award size={18} /> <span>Best of DTLA 2023</span></div>
          <div className="flex items-center space-x-2 font-bold uppercase tracking-widest text-xs"><MapPin size={18} /> <span>Little Tokyo's Hidden Gem</span></div>
          <div className="flex items-center space-x-2 font-bold uppercase tracking-widest text-xs"><Star size={18} fill="currentColor" /> <span>5.0 Google Rating</span></div>
          <div className="flex items-center space-x-2 font-bold uppercase tracking-widest text-xs"><ShieldCheck size={18} /> <span>Ethically Curated</span></div>
        </div>
      </section>

      {/* Featured Books */}
      <section id="collection" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-6">
            <div className="max-w-xl">
              <h2 className="serif text-6xl text-stone-900 mb-6 tracking-tight">Hand-Picked for You</h2>
              <p className="text-stone-500 text-xl font-light leading-relaxed">Our curators spend hundreds of hours every month sourcing rare, out-of-print, and well-loved editions from the diaspora.</p>
            </div>
            <button className="flex items-center text-amber-900 font-black text-sm uppercase tracking-widest hover:translate-x-2 transition-transform">
              View Entire Catalog <ArrowRight size={20} className="ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {FEATURED_BOOKS.map((book, idx) => (
              <motion.div 
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] mb-8 overflow-hidden rounded-[2rem] shadow-2xl">
                  <img src={book.coverImage} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={book.title} />
                  <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 text-center">
                    <p className="text-white text-lg font-light italic leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {book.description}
                    </p>
                  </div>
                  <div className="absolute top-6 left-6 bg-amber-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg">
                    {book.tag}
                  </div>
                </div>
                <h3 className="serif text-3xl text-stone-900 mb-2 group-hover:text-amber-900 transition-colors">{book.title}</h3>
                <p className="text-stone-500 text-lg mb-3 font-light tracking-wide">{book.author}</p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-950 font-black text-xl">{book.price}</span>
                  <span className="text-stone-400 text-sm font-bold uppercase tracking-widest">In Stock</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us (Conversion Optimized) */}
      <section className="py-32 bg-stone-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-amber-200/40 rounded-full blur-[80px]" />
              <img 
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white"
                alt="Bookstore Interior"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="absolute -bottom-8 -right-8 bg-amber-900 text-white p-10 rounded-[2.5rem] shadow-2xl z-20 max-w-xs"
              >
                <Quote className="text-amber-400 mb-6" size={40} />
                <p className="serif text-2xl leading-relaxed italic mb-6">
                  "The most intentional collection I've seen. A sanctuary for our stories."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-[2px] bg-amber-500"></div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-200">The LA Times Review</span>
                </div>
              </motion.div>
            </div>

            <div>
              <h2 className="serif text-6xl text-stone-900 mb-12 leading-tight tracking-tighter">Why we're the <br/><span className="italic text-amber-900">Best Bookstore</span> in LA.</h2>
              <div className="space-y-12">
                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-amber-900 shrink-0 mr-8 group-hover:bg-amber-900 group-hover:text-white transition-all duration-300">
                    <BookOpen size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black mb-3 text-stone-900">Authentic Curation</h4>
                    <p className="text-stone-500 text-lg leading-relaxed font-light">We don't just use algorithms. Every book is manually reviewed by our historians to ensure authentic representation of the diaspora experience.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-amber-900 shrink-0 mr-8 group-hover:bg-amber-900 group-hover:text-white transition-all duration-300">
                    <Award size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black mb-3 text-stone-900">Sustainable & Accessible</h4>
                    <p className="text-stone-500 text-lg leading-relaxed font-light">By focusing on pre-loved editions, we preserve history sustainably. We keep prices fair so everyone can own a piece of their heritage.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-amber-900 shrink-0 mr-8 group-hover:bg-amber-900 group-hover:text-white transition-all duration-300">
                    <Sparkles size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black mb-3 text-stone-900">AI Concierge Tech</h4>
                    <p className="text-stone-500 text-lg leading-relaxed font-light">We merge heritage with the future. Our custom AI helps you find books based on emotions and themes, not just genres.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookConcierge />
      
      {/* Final CTA */}
      <section className="py-40 text-center relative">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="serif text-7xl text-stone-900 mb-10 tracking-tighter">Visit the Sanctuary.</h2>
          <p className="text-2xl text-stone-500 mb-12 font-light leading-relaxed">Located in the heart of Little Tokyo. Come browse, drink tea, and discover stories that stay with you forever.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-amber-950 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-black transition-all shadow-2xl shadow-amber-900/20">
              Get Directions
            </button>
            <button className="bg-white border-2 border-stone-100 text-stone-900 px-12 py-6 rounded-3xl font-black text-xl hover:border-amber-900 transition-all">
              Join the Book Club
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};