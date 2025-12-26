
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Book, Heart, Send, CheckCircle } from 'lucide-react';

const ContactOption: React.FC<{
  title: string;
  desc: string;
  email: string;
  subject: string;
  icon: React.ReactNode;
}> = ({ title, desc, email, subject, icon }) => {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100 hover:border-amber-700 transition-all group"
    >
      <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-amber-900 mb-6 group-hover:bg-amber-900 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="serif text-2xl text-stone-900 mb-2">{title}</h3>
      <p className="text-stone-500 mb-8">{desc}</p>
      <a 
        href={gmailUrl} 
        target="_blank" 
        rel="noreferrer"
        className="inline-flex items-center font-bold text-amber-900 hover:text-amber-700 transition-colors uppercase tracking-widest text-sm"
      >
        Send Email <Mail size={16} className="ml-2" />
      </a>
    </motion.div>
  );
};

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h1 className="serif text-6xl text-stone-900 mb-6">Talk to us.</h1>
        <p className="text-xl text-stone-500 max-w-2xl mx-auto">
          Whether you have a book recommendation, a question about an order, or just want to say hello, we're here.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <ContactOption 
          title="Sales & Orders"
          desc="Questions about our current inventory or a used book you've purchased."
          email="sales@lotusandink.com"
          subject="Inquiry regarding book inventory"
          icon={<Book size={28} />}
        />
        <ContactOption 
          title="General Info"
          desc="General questions about store hours, location, or community events."
          email="info@lotusandink.com"
          subject="General Store Question"
          icon={<MessageSquare size={28} />}
        />
        <ContactOption 
          title="Sell Your Books"
          desc="Interested in trading in your used Asian American titles for store credit?"
          email="curator@lotusandink.com"
          subject="Selling Books to Lotus & Ink"
          icon={<Heart size={28} />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-stone-900 text-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-amber-800 rounded-full" />
        </div>
        
        <div className="relative z-10">
          <h2 className="serif text-4xl mb-6">Drop a quick message.</h2>
          <p className="text-stone-400 mb-10 text-lg leading-relaxed">
            Fill out the form below and our team will get back to you within 24 hours. We're also available via phone during business hours.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-stone-300">
                <CheckCircle size={20} className="text-amber-500" />
                <span>24-hour response time</span>
            </div>
            <div className="flex items-center space-x-4 text-stone-300">
                <CheckCircle size={20} className="text-amber-500" />
                <span>Secure data handling</span>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          {!submitted ? (
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onSubmit={handleSubmit} 
              className="bg-stone-800 p-8 rounded-3xl space-y-6"
            >
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Your Name</label>
                <input required type="text" className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 focus:border-amber-500 focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Email Address</label>
                <input required type="email" className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 focus:border-amber-500 focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Message</label>
                <textarea required rows={4} className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 focus:border-amber-500 focus:outline-none transition-colors resize-none" />
              </div>
              <button className="w-full bg-amber-700 hover:bg-amber-600 py-4 rounded-xl font-bold transition-all shadow-xl flex items-center justify-center">
                Send Message <Send size={18} className="ml-2" />
              </button>
            </motion.form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-stone-800 p-12 rounded-3xl text-center space-y-6"
            >
              <div className="w-20 h-20 bg-amber-900/50 rounded-full flex items-center justify-center text-amber-500 mx-auto">
                <CheckCircle size={40} />
              </div>
              <h3 className="serif text-3xl">Message Sent!</h3>
              <p className="text-stone-400">Thank you for reaching out to us. We'll be in touch soon.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-amber-500 font-bold hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
