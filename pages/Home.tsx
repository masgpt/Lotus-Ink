
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BookOpen, Quote, Star } from 'lucide-react';
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
    <section className="py-24 bg-stone-900 text-white rounded-[3rem] mx-4 my-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-800/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-900/40 text-amber-200 border border-amber-800/50 mb-8">
          <Sparkles size={16} />
          <span className="text-sm font-medium">AI Book Concierge</span>
        </div>
        <h2 className="serif text-4xl md:text-5xl mb-6">What are you in the mood for?</h2>
        <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto">
          Tell us a theme, a feeling, or a topic you love. Our resident AI bibliophile will find the perfect Asian American voice for you.
        </p>

        <form onSubmit={handleSearch} className="relative max-w-xl mx-auto mb-12">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. A coming of age story set in California..."
            className="w-full bg-stone-800 border-2 border-stone-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amber-700 transition-all pr-32 shadow-xl"
          />
          <button 
            disabled={loading}
            className="absolute right-2 top-2 bottom-2 bg-amber-700 hover:bg-amber-600 px-6 rounded-xl font-semibold transition-colors disabled:opacity-50"
          >
            {loading ? 'Thinking...' : 'Curate'}
          </button>
        </form>

        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left bg-stone-800/50 border border-stone-700 p-8 rounded-3xl"
          >
            <p className="text-amber-200 italic mb-6 leading-relaxed">"{result.intro}"</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {result.books.map((book: any, i: number) => (
                <div key={i} className="bg-stone-900/80 p-5 rounded-2xl border border-stone-800 hover:border-amber-700 transition-all">
                  <h4 className="serif text-lg text-white mb-1">{book.title}</h4>
                  <p className="text-xs text-amber-500 font-bold uppercase tracking-wider mb-3">{book.author}</p>
                  <p className="text-sm text-stone-400 leading-snug">{book.reason}</p>
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
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20"
            alt="Bookshelves"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fcfaf7] via-transparent to-[#fcfaf7]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-sm font-semibold mb-6 uppercase tracking-widest">
              Est. 2012 • Los Angeles
            </span>
            <h1 className="serif text-7xl md:text-8xl leading-none text-stone-900 mb-8">
              Stories that <br />
              <span className="italic text-amber-900">Bridge Worlds.</span>
            </h1>
            <p className="text-xl text-stone-600 mb-10 max-w-xl leading-relaxed">
              Los Angeles' premier independent bookstore specializing in curated used books by Asian American authors. We bring heritage to your hands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-stone-900 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center hover:bg-stone-800 transition-all group">
                Browse Collection <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border border-stone-200 px-8 py-4 rounded-xl font-semibold hover:border-stone-900 transition-all">
                Our Story
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="serif text-5xl text-stone-900 mb-4">The Curator's Choice</h2>
              <p className="text-stone-500 max-w-md text-lg">Rare and pre-loved editions that defined a generation of Asian American literature.</p>
            </div>
            <button className="hidden md:flex items-center text-amber-900 font-bold hover:underline">
              View All used books <ArrowRight size={20} className="ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {FEATURED_BOOKS.map((book, idx) => (
              <motion.div 
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[2/3] mb-6 overflow-hidden rounded-2xl shadow-xl">
                  <img src={book.coverImage} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={book.title} />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-stone-900 px-6 py-3 rounded-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform">
                      View Details
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {book.tag}
                  </div>
                </div>
                <h3 className="serif text-2xl text-stone-900 mb-1">{book.title}</h3>
                <p className="text-stone-500 mb-2">{book.author}</p>
                <p className="text-amber-900 font-bold text-lg">{book.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-50" />
              <img 
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-3xl shadow-2xl relative z-10"
                alt="Bookstore Interior"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl z-20 max-w-xs">
                <Quote className="text-amber-900 mb-4" />
                <p className="serif text-lg leading-relaxed italic mb-4">
                  "The best curated collection of AAPI literature I've found in all of California."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="flex text-amber-500"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                  <span className="text-xs font-bold text-stone-400">— LA Review</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="serif text-5xl text-stone-900 mb-8">Why we are the best in LA.</h2>
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-amber-900 shrink-0 mr-6">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Heritage First</h4>
                    <p className="text-stone-500 leading-relaxed">Every book on our shelf is personally vetted to ensure authentic representation of the Asian American experience.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-amber-900 shrink-0 mr-6">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Sustainable Reading</h4>
                    <p className="text-stone-500 leading-relaxed">Our focus on used books reduces waste and keeps historical narratives affordable and accessible to everyone.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-amber-900 shrink-0 mr-6">
                    <Quote size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Community Space</h4>
                    <p className="text-stone-500 leading-relaxed">More than a store, we are a sanctuary for discussion, local poetry slams, and AAPI writer workshops.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Concierge Component */}
      <BookConcierge />
      
      {/* Call to Action */}
      <section className="py-24 text-center">
        <h2 className="serif text-5xl text-stone-900 mb-8">Visit us in Onizuka Plaza.</h2>
        <p className="text-xl text-stone-500 mb-10">Come find your next favorite story today.</p>
        <button className="bg-amber-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-amber-800 transition-all shadow-xl shadow-amber-900/20">
          Get Directions
        </button>
      </section>
    </div>
  );
};
