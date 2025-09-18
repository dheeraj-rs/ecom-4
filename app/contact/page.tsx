'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Upload, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size should be less than 5MB');
        return;
      }
      
      // Check file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        toast.error('Please upload an image file (JPEG, PNG, WEBP, GIF) or PDF');
        return;
      }

      setUploadedFile(file);
      toast.success('File uploaded successfully');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
      });
      setUploadedFile(null);
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Workshop Location',
      details: [
        'Rajan K K Woodcraft',
        'Koyilandy, Kozhikode District',
        'Kerala, India - 673620'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+91 9876543210 (Rajan K K)',
        '+91 9876543211 (Workshop)',
        'Available: Mon-Sat, 8 AM - 6 PM'
      ]
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: [
        'info@rajankkwoodcraft.com',
        'orders@rajankkwoodcraft.com',
        'We respond within 24 hours'
      ]
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [
        'Monday - Saturday: 8:00 AM - 6:00 PM',
        'Sunday: Closed',
        'Consultations: By Appointment'
      ]
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-wood-light">
              Contact Us
            </h1>
            <p className="text-xl text-wood-light/80 leading-relaxed">
              Ready to bring your vision to life? Get in touch for a consultation 
              and let's create something beautiful together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="wood-card p-6 text-center hover-lift">
                <div className="flex justify-center mb-4">
                  <info.icon className="w-8 h-8 text-wood-light" />
                </div>
                <h3 className="text-lg font-bold text-wood-light mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-wood-light/70 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="wood-card p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-playfair font-bold text-wood-light mb-4">
                Start Your Custom Project
              </h2>
              <p className="text-wood-light/80">
                Fill out the form below and upload any reference images to help us understand your vision.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-wood-light">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-forest-dark/50 border-wood-light/30 text-wood-light placeholder:text-wood-light/60"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-wood-light">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-forest-dark/50 border-wood-light/30 text-wood-light placeholder:text-wood-light/60"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-wood-light">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-forest-dark/50 border-wood-light/30 text-wood-light placeholder:text-wood-light/60"
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-wood-light">Project Type</Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                    <SelectTrigger className="bg-forest-dark/50 border-wood-light/30 text-wood-light">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="furniture">Custom Furniture</SelectItem>
                      <SelectItem value="architectural">Architectural Elements</SelectItem>
                      <SelectItem value="decorative">Decorative Items</SelectItem>
                      <SelectItem value="restoration">Restoration & Repair</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-wood-light">Budget Range</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                    <SelectTrigger className="bg-forest-dark/50 border-wood-light/30 text-wood-light">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-25k">Under ₹25,000</SelectItem>
                      <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                      <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                      <SelectItem value="100k-250k">₹1,00,000 - ₹2,50,000</SelectItem>
                      <SelectItem value="above-250k">Above ₹2,50,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-wood-light">Expected Timeline</Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                    <SelectTrigger className="bg-forest-dark/50 border-wood-light/30 text-wood-light">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Within 1 month</SelectItem>
                      <SelectItem value="normal">1-3 months</SelectItem>
                      <SelectItem value="flexible">3-6 months</SelectItem>
                      <SelectItem value="no-rush">No specific deadline</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-wood-light">Project Details *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-forest-dark/50 border-wood-light/30 text-wood-light placeholder:text-wood-light/60 min-h-[120px]"
                  placeholder="Please describe your project in detail. Include dimensions, style preferences, specific requirements, etc."
                  required
                />
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label className="text-wood-light">Upload Reference Images (Optional)</Label>
                <div className="border-2 border-dashed border-wood-light/30 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    accept="image/*,.pdf"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-wood-light/60 mx-auto mb-2" />
                    <p className="text-wood-light/80 mb-1">Click to upload or drag and drop</p>
                    <p className="text-wood-light/60 text-sm">Images (JPEG, PNG, WEBP, GIF) or PDF • Max 5MB</p>
                  </label>
                  {uploadedFile && (
                    <div className="mt-3 p-2 bg-wood-dark/30 rounded text-wood-light text-sm">
                      ✓ {uploadedFile.name} ({(uploadedFile.size / 1024 / 1024).toFixed(1)} MB)
                    </div>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full wood-button text-lg py-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending Message...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-wood-light mb-4">
              Visit Our Workshop
            </h2>
            <p className="text-wood-light/80 max-w-2xl mx-auto">
              Located in the heart of Koyilandy, our workshop is open for visits and consultations. 
              See our craftsmanship up close and discuss your project in person.
            </p>
          </div>

          <div className="wood-card p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-wood-light mb-4">Workshop Address</h3>
                <div className="space-y-3 text-wood-light/80">
                  <p><strong>Rajan K K Woodcraft</strong></p>
                  <p>Main Workshop & Showroom</p>
                  <p>Koyilandy, Kozhikode District</p>
                  <p>Kerala, India - 673620</p>
                </div>
                
                <div className="mt-6 space-y-2">
                  <p className="text-wood-light"><strong>Landmark:</strong></p>
                  <p className="text-wood-light/70 text-sm">
                    Near Koyilandy Railway Station, opposite to State Bank of India
                  </p>
                </div>

                <div className="mt-6">
                  <Button className="wood-button">
                    Get Directions
                  </Button>
                </div>
              </div>

              <div className="bg-forest-dark/30 rounded-lg p-6 text-center">
                <div className="w-full h-64 bg-wood-dark/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-wood-light/60 mx-auto mb-2" />
                    <p className="text-wood-light/70">Interactive Map</p>
                    <p className="text-wood-light/60 text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;