'use client';

import React from 'react';
import { Check, ArrowRight, Hammer, Palette, Home, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      icon: Hammer,
      title: 'Custom Furniture',
      description: 'Bespoke furniture pieces designed and crafted to your exact specifications.',
      features: [
        'Personalized design consultation',
        'Premium wood selection',
        'Traditional joinery techniques',
        '5-year craftsmanship warranty',
      ],
      priceRange: '₹15,000 - ₹2,50,000',
      duration: '2-8 weeks',
    },
    {
      icon: Home,
      title: 'Architectural Elements',
      description: 'Traditional and contemporary wooden architectural features for homes and buildings.',
      features: [
        'Doors and window frames',
        'Ceiling work and paneling',
        'Staircases and railings',
        'Heritage restoration',
      ],
      priceRange: '₹25,000 - ₹5,00,000',
      duration: '3-12 weeks',
    },
    {
      icon: Palette,
      title: 'Decorative Items',
      description: 'Artistic wooden pieces that add character and elegance to any space.',
      features: [
        'Wall panels and sculptures',
        'Decorative boxes and organizers',
        'Traditional Kerala artifacts',
        'Contemporary art pieces',
      ],
      priceRange: '₹5,000 - ₹75,000',
      duration: '1-4 weeks',
    },
    {
      icon: RefreshCw,
      title: 'Restoration & Repair',
      description: 'Expert restoration of antique and damaged wooden furniture and artifacts.',
      features: [
        'Antique furniture restoration',
        'Structural repairs',
        'Refinishing services',
        'Historical accuracy maintained',
      ],
      priceRange: '₹8,000 - ₹1,50,000',
      duration: '1-6 weeks',
    },
  ];

  const readyToBuilds = [
    {
      name: 'Traditional Dining Table',
      description: 'Classic Kerala style dining table for 6 people',
      price: '₹45,000',
      dimensions: '6ft x 3ft x 2.5ft',
      wood: 'Teak',
      availability: 'Ready in 3 weeks',
    },
    {
      name: 'Study Desk with Storage',
      description: 'Modern study desk with built-in storage compartments',
      price: '₹25,000',
      dimensions: '4ft x 2ft x 2.5ft',
      wood: 'Mahogany',
      availability: 'Ready in 2 weeks',
    },
    {
      name: 'Decorative Book Shelf',
      description: '5-tier bookshelf with traditional carved details',
      price: '₹18,000',
      dimensions: '6ft x 2ft x 1ft',
      wood: 'Bamboo',
      availability: 'Ready in 1 week',
    },
    {
      name: 'Wooden Storage Chest',
      description: 'Traditional storage chest with brass fittings',
      price: '₹15,000',
      dimensions: '3ft x 1.5ft x 1.5ft',
      wood: 'Rosewood',
      availability: 'Ready in 2 weeks',
    },
    {
      name: 'Wall Mounted Shrine',
      description: 'Traditional pooja mandir with intricate carvings',
      price: '₹35,000',
      dimensions: '2ft x 1ft x 3ft',
      wood: 'Sandalwood',
      availability: 'Ready in 4 weeks',
    },
    {
      name: 'Garden Bench',
      description: 'Weather-resistant outdoor bench with traditional design',
      price: '₹12,000',
      dimensions: '4ft x 1.5ft x 1.5ft',
      wood: 'Teak',
      availability: 'Ready in 1 week',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-wood-light">
              Our Services
            </h1>
            <p className="text-xl text-wood-light/80 leading-relaxed">
              From custom furniture to architectural elements, we offer comprehensive 
              woodworking services backed by four decades of expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="wood-card p-8 hover-lift">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-wood-dark/30 rounded-lg">
                    <service.icon className="w-8 h-8 text-wood-light" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-playfair font-bold text-wood-light mb-2">
                      {service.title}
                    </h3>
                    <p className="text-wood-light/80">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-wood-medium" />
                      <span className="text-wood-light/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-wood-light/20 pt-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-wood-light/70">Price Range:</span>
                    <span className="font-bold text-wood-light">{service.priceRange}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-wood-light/70">Timeline:</span>
                    <span className="text-wood-light">{service.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Build Items */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-wood-light mb-6">
              Ready-to-Build Items
            </h2>
            <p className="text-wood-light/80 max-w-2xl mx-auto">
              Popular items that can be crafted and delivered within our standard timeframes. 
              All pieces can be customized to your preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readyToBuilds.map((item, index) => (
              <div key={index} className="wood-card p-6 hover-lift">
                <h3 className="text-xl font-bold text-wood-light mb-3">{item.name}</h3>
                <p className="text-wood-light/80 text-sm mb-4">{item.description}</p>
                
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-wood-light/70">Dimensions:</span>
                    <span className="text-wood-light">{item.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-wood-light/70">Wood Type:</span>
                    <span className="text-wood-light">{item.wood}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-wood-light/70">Availability:</span>
                    <span className="text-wood-medium">{item.availability}</span>
                  </div>
                </div>

                <div className="border-t border-wood-light/20 pt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-wood-light">{item.price}</span>
                  <Link href="/contact">
                    <Button className="wood-button text-sm px-4 py-2">
                      Order Now
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wood Types & Rates */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-wood-light mb-6">
              Wood Types & Rates
            </h2>
            <p className="text-wood-light/80 max-w-2xl mx-auto">
              We work with premium quality wood sourced from certified suppliers. 
              Rates are per cubic foot and include processing.
            </p>
          </div>

          <div className="wood-card p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-wood-light mb-6">Premium Woods</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-forest-dark/30 rounded">
                    <span className="text-wood-light">Teak Wood</span>
                    <span className="font-bold text-wood-medium">₹8,500 / cu.ft</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-forest-dark/30 rounded">
                    <span className="text-wood-light">Rosewood</span>
                    <span className="font-bold text-wood-medium">₹12,000 / cu.ft</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-forest-dark/30 rounded">
                    <span className="text-wood-light">Sandalwood</span>
                    <span className="font-bold text-wood-medium">₹25,000 / cu.ft</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-forest-dark/30 rounded">
                    <span className="text-wood-light">Mahogany</span>
                    <span className="font-bold text-wood-medium">₹6,500 / cu.ft</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-wood-light mb-6">Standard Woods</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-forest-dark/30 rounded">
                    <span className="text-wood-light">Oak Wood</span>
                    <span className="font-bold text-wood-medium">₹4,500 / cu.ft</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-forest-dark/30 rounded">
                    <span className="text-wood-light">Bamboo</span>
                    <span className="font-bold text-wood-medium">₹2,800 / cu.ft</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-forest-dark/30 rounded">
                    <span className="text-wood-light">Pine Wood</span>
                    <span className="font-bold text-wood-medium">₹3,200 / cu.ft</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-forest-dark/30 rounded">
                    <span className="text-wood-light">Mango Wood</span>
                    <span className="font-bold text-wood-medium">₹3,800 / cu.ft</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-wood-dark/20 rounded text-sm text-wood-light/70">
              <p><strong>Note:</strong> Prices may vary based on wood quality, availability, and market conditions. 
              Includes basic processing. Additional charges may apply for special finishes or treatments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="wood-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-wood-light mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-wood-light/80 mb-8 max-w-2xl mx-auto">
              Whether you need a custom piece or want to order from our ready-to-build collection, 
              we're here to bring your vision to life with expert craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="wood-button text-lg px-8 py-4">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/gallery">
                <Button variant="outline" className="text-lg px-8 py-4 bg-transparent border-2 border-wood-light text-wood-light hover:bg-wood-light hover:text-forest-dark">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;