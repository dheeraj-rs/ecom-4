'use client';

import React from 'react';
import { Award, Clock, Heart, Hammer } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Craft',
      description: 'Every piece we create is infused with love and dedication to the art of woodworking.',
    },
    {
      icon: Clock,
      title: 'Time-Tested Quality',
      description: '40 years of experience has taught us the importance of patience and precision.',
    },
    {
      icon: Hammer,
      title: 'Traditional Techniques',
      description: 'We honor age-old methods while embracing modern innovations for the best results.',
    },
    {
      icon: Award,
      title: 'Exceptional Standards',
      description: 'Our commitment to excellence ensures every project meets the highest quality standards.',
    },
  ];

  const team = [
    {
      name: 'Rajan K K',
      role: 'Master Craftsman & Founder',
      experience: '40+ years',
      description: 'The visionary behind our workshop, Rajan has dedicated his life to perfecting the art of woodcraft.',
    },
    {
      name: 'Suresh Kumar',
      role: 'Senior Craftsman',
      experience: '15+ years',
      description: 'Specializes in intricate carvings and traditional Kerala woodwork techniques.',
    },
    {
      name: 'Anand Nair',
      role: 'Design Specialist',
      experience: '12+ years',
      description: 'Combines modern design principles with traditional craftsmanship for contemporary pieces.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-wood-light">
              Our Story
            </h1>
            <p className="text-xl text-wood-light/80 leading-relaxed">
              From humble beginnings in 1984 to becoming Koyilandy's most trusted name in woodcraft, 
              our journey is built on passion, precision, and an unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="wood-card p-8">
              <h2 className="text-3xl font-playfair font-bold text-wood-light mb-6">
                The Legacy of Rajan K K
              </h2>
              <div className="space-y-4 text-wood-light/80">
                <p>
                  Born into a family of traditional craftsmen in Kerala, Rajan K K learned the 
                  fundamentals of woodworking from his father at the age of 12. What started as 
                  childhood curiosity grew into a lifelong passion for creating beautiful, 
                  functional pieces from nature's finest materials.
                </p>
                <p>
                  In 1984, Rajan established his workshop in Koyilandy, starting with just a few 
                  basic tools and an unwavering vision to preserve and evolve traditional Kerala 
                  woodcraft. Over the decades, he has trained numerous apprentices and created 
                  thousands of pieces that grace homes across Kerala and beyond.
                </p>
                <p>
                  Today, our workshop stands as a testament to the perfect blend of traditional 
                  techniques and modern innovation, continuing to create masterpieces that will 
                  be treasured for generations.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="wood-card p-6">
                <h3 className="text-xl font-bold text-wood-light mb-2">Workshop Established</h3>
                <p className="text-wood-light/70">1984 - Koyilandy, Kerala</p>
              </div>
              <div className="wood-card p-6">
                <h3 className="text-xl font-bold text-wood-light mb-2">Projects Completed</h3>
                <p className="text-wood-light/70">500+ Custom Pieces</p>
              </div>
              <div className="wood-card p-6">
                <h3 className="text-xl font-bold text-wood-light mb-2">Specialization</h3>
                <p className="text-wood-light/70">Traditional & Contemporary Woodcraft</p>
              </div>
              <div className="wood-card p-6">
                <h3 className="text-xl font-bold text-wood-light mb-2">Service Area</h3>
                <p className="text-wood-light/70">Kerala & South India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-wood-light mb-6">
              Our Values
            </h2>
            <p className="text-wood-light/80 max-w-2xl mx-auto">
              The principles that guide every decision, every cut, and every creation in our workshop.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="wood-card p-6 text-center hover-lift">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-wood-light" />
                </div>
                <h3 className="text-xl font-bold text-wood-light mb-4">{value.title}</h3>
                <p className="text-wood-light/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-wood-light mb-6">
              Meet Our Team
            </h2>
            <p className="text-wood-light/80 max-w-2xl mx-auto">
              The skilled artisans who bring your vision to life with expertise and passion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="wood-card p-8 text-center hover-lift">
                <div className="w-24 h-24 bg-gradient-to-r from-wood-light to-wood-medium rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-bold text-wood-light mb-2">{member.name}</h3>
                <p className="text-wood-medium font-semibold mb-2">{member.role}</p>
                <p className="text-wood-light/70 text-sm mb-4">{member.experience}</p>
                <p className="text-wood-light/80 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="wood-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-wood-light mb-6">
              Visit Our Workshop
            </h2>
            <p className="text-wood-light/80 mb-8">
              Located in the heart of Koyilandy, Kerala, our workshop is open for visits 
              and consultations. Come see where the magic happens and discuss your next project.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-bold text-wood-light mb-3">Address</h3>
                <p className="text-wood-light/70">
                  Rajan K K Woodcraft Workshop<br />
                  Koyilandy, Kozhikode District<br />
                  Kerala, India - 673620
                </p>
              </div>
              <div>
                <h3 className="font-bold text-wood-light mb-3">Workshop Hours</h3>
                <p className="text-wood-light/70">
                  Monday - Saturday: 8:00 AM - 6:00 PM<br />
                  Sunday: By Appointment<br />
                  Consultations: Available Daily
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;