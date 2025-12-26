
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone, Mail, ExternalLink } from 'lucide-react';
import { ADDRESS, STORE_HOURS, STORE_NAME } from '../constants';

const MapVisual: React.FC = () => {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
  
  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-2xl" onClick={() => window.open(mapUrl, '_blank')}>
      <div className="aspect-[16/9] w-full bg-stone-200 relative overflow-hidden">
        {/* Placeholder for Map - in a real app would use a static map API or dynamic embed */}
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1500" 
          className="w-full h-full object-cover grayscale brightness-75 transition-all group-hover:grayscale-0 group-hover:scale-105" 
          alt="Map of Little Tokyo"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl flex flex-col items-center max-w-sm text-center">
            <MapPin size={48} className="text-amber-900 mb-4 animate-bounce" />
            <h3 className="serif text-2xl text-stone-900 mb-2">We're right here.</h3>
            <p className="text-stone-500 mb-4">{ADDRESS}</p>
            <div className="flex space-x-3">
              <span className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center">
                Open Maps <ExternalLink size={14} className="ml-2" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
        Little Tokyo, DTLA
      </div>
    </div>
  );
};

export const Locations: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-16 text-center">
        <h1 className="serif text-6xl text-stone-900 mb-6">Find {STORE_NAME}</h1>
        <p className="text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
          Nestled in the historic Onizuka Plaza, we are surrounded by the vibrant culture of Little Tokyo. Stop by and explore our shelves.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
        <div className="lg:col-span-2">
          <MapVisual />
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100">
            <div className="flex items-center space-x-3 text-amber-900 mb-6">
              <Clock size={24} />
              <h3 className="text-xl font-bold uppercase tracking-wider">Store Hours</h3>
            </div>
            <div className="space-y-4">
              {STORE_HOURS.map((h, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-stone-50 last:border-0">
                  <span className="font-medium text-stone-900">{h.day}</span>
                  <span className="text-stone-500 text-sm">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-900 text-white p-8 rounded-3xl shadow-lg">
            <h3 className="serif text-2xl mb-6">Store Contact</h3>
            <div className="space-y-6">
              <a href="tel:+12135550123" className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-amber-800 rounded-lg flex items-center justify-center group-hover:bg-amber-700 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-amber-300 uppercase font-bold">Call Us</p>
                  <p className="font-medium">(213) 555-0123</p>
                </div>
              </a>
              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=info@lotusandink.com&su=Store Inquiry - Find Us`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-4 group"
              >
                <div className="w-10 h-10 bg-amber-800 rounded-lg flex items-center justify-center group-hover:bg-amber-700 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-amber-300 uppercase font-bold">Email Store</p>
                  <p className="font-medium">info@lotusandink.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-stone-50 p-12 rounded-[3rem] border border-stone-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="serif text-4xl text-stone-900 mb-6">Accessibility & Parking</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Onizuka Plaza offers validated parking for up to 2 hours with any purchase. We are fully ADA accessible, with elevators located near the Weller Court entrance.
            </p>
            <div className="flex items-center space-x-4 text-stone-500 font-medium">
              <span className="flex items-center"><Navigation size={18} className="mr-2" /> Metered Street Parking</span>
              <span className="flex items-center"><Navigation size={18} className="mr-2" /> Paid Garage</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/plaza1/400/400" className="rounded-2xl shadow-md" alt="Store Front" />
            <img src="https://picsum.photos/seed/plaza2/400/400" className="rounded-2xl shadow-md translate-y-8" alt="Store Inside" />
          </div>
        </div>
      </section>
    </div>
  );
};
