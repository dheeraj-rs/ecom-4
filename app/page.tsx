'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Users, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Calendar, value: '40+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Projects Completed' },
    { icon: Star, value: '4.9', label: 'Rating' },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto">
          <div className={`text-center space-y-8 ${isVisible ? 'forest-reveal' : ''}`}>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-wood-light leading-tight">
              Master of
              <span className="block text-6xl md:text-8xl bg-gradient-to-r from-wood-light via-wood-medium to-wood-dark bg-clip-text text-transparent">
                Woodcraft
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-black/20 p-6 rounded-2xl">
              Experience four decades of traditional craftsmanship and modern innovation 
              in the heart of Koyilandy, Kerala
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link href="/gallery">
                <Button className="wood-button text-lg px-8 py-4">
                  View Our Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-forest-dark transition-all duration-500">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Forest Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
          <div className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-br from-green-400/40 to-green-600/40 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute top-40 right-16 w-6 h-6 bg-gradient-to-br from-amber-400/40 to-amber-600/40 rounded-full blur-sm animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-60 left-1/4 w-10 h-10 bg-gradient-to-br from-emerald-400/40 to-emerald-600/40 rounded-full blur-sm animate-pulse" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-gradient-to-br from-lime-400/40 to-lime-600/40 rounded-full blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center wood-card p-6 hover-lift">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-wood-light" />
                </div>
                <div className="text-3xl font-bold text-wood-light mb-2">{stat.value}</div>
                <div className="text-wood-light/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-playfair font-bold text-wood-light">
                Four Decades of Excellence
              </h2>
              <p className="text-wood-light/80 leading-relaxed">
                Rajan K K has been crafting exceptional wooden furniture and artifacts 
                for over 40 years in Koyilandy, Kerala. Our workshop combines traditional 
                techniques passed down through generations with modern precision and design.
              </p>
              <p className="text-wood-light/80 leading-relaxed">
                From custom furniture pieces to intricate decorative items, every creation 
                tells a story of dedication, skill, and passion for the craft.
              </p>
              <Link href="/about">
                <Button className="wood-button">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <div className="wood-card p-8 space-y-6">
              <h3 className="text-2xl font-playfair font-bold text-wood-light">Our Specialties</h3>
              <ul className="space-y-3 text-wood-light/80">
                <li className="flex items-center"><Star className="w-4 h-4 mr-3 text-wood-medium" />Custom Furniture Design</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-3 text-wood-medium" />Traditional Kerala Woodwork</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-3 text-wood-medium" />Restoration & Repair</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-3 text-wood-medium" />Architectural Elements</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-3 text-wood-medium" />Decorative Artifacts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="wood-card p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-wood-light mb-6">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-wood-light/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with our master craftsmanship. 
              Contact us for a consultation and discover the art of fine woodworking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="wood-button text-lg px-8 py-4">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/gallery">
                <Button variant="outline" className="text-lg px-8 py-4 bg-transparent border-2 border-wood-light text-wood-light hover:bg-wood-light hover:text-forest-dark">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;