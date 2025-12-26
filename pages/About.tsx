
import React from 'react';
import { motion } from 'framer-motion';
import { TEAM, STORE_NAME } from '../constants';
import { Heart, Users, Calendar } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-[#fcfaf7]">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="serif text-6xl md:text-7xl text-stone-900 mb-8">Our Journey</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Founded in a small garage in Alhambra and eventually finding our home in Little Tokyo, {STORE_NAME} was built on a simple dream: to provide a home for the stories of the Asian American diaspora.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1000" alt="Founder" className="rounded-3xl shadow-2xl" />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="serif text-4xl text-stone-900">More than just paper and ink.</h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              In Los Angeles, Asian American history is woven into the very pavement. Yet, for years, finding used literature that spoke directly to our experiences required scouring dozens of generic shops. 
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              We decided to change that. By specializing exclusively in used AAPI titles, we ensure that important narratives stay in circulation, passing from one generation to the next.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-100">
              <div>
                <h4 className="text-3xl font-bold text-amber-900 mb-1">15k+</h4>
                <p className="text-sm text-stone-400 uppercase tracking-widest font-bold">Books Rehomed</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-amber-900 mb-1">200+</h4>
                <p className="text-sm text-stone-400 uppercase tracking-widest font-bold">Local Authors Supported</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="serif text-5xl text-stone-900 mb-4">Meet the Curators</h2>
          <p className="text-stone-500">The hearts and hands behind {STORE_NAME}.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TEAM.map((member, idx) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="relative mb-6 inline-block">
                <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg relative z-10 mx-auto">
                  <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-amber-100 rounded-2xl -z-0 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              </div>
              <h3 className="serif text-2xl text-stone-900 mb-1">{member.name}</h3>
              <p className="text-amber-900 font-bold text-sm uppercase tracking-wider mb-4">{member.role}</p>
              <p className="text-stone-500 max-w-xs mx-auto leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-stone-900 text-white rounded-[3rem] mx-4 mb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <Heart size={48} className="mx-auto mb-6 text-amber-500" />
              <h3 className="serif text-2xl mb-4">Curated with Love</h3>
              <p className="text-stone-400">We don't just sell books; we hand-pick stories that matter to our community.</p>
            </div>
            <div className="text-center">
              <Users size={48} className="mx-auto mb-6 text-amber-500" />
              <h3 className="serif text-2xl mb-4">Space for All</h3>
              <p className="text-stone-400">Our Little Tokyo store is a safe haven for marginalized voices and their allies.</p>
            </div>
            <div className="text-center">
              <Calendar size={48} className="mx-auto mb-6 text-amber-500" />
              <h3 className="serif text-2xl mb-4">Preserving History</h3>
              <p className="text-stone-400">Keeping rare AAPI publications alive through dedicated tracking and trading.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
