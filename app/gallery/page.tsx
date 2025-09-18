'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, Eye } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const GalleryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'Traditional Kerala Dining Set',
      category: 'furniture',
      year: '2024',
      description: 'Handcrafted teak dining table with 6 chairs featuring traditional Kerala woodwork patterns.',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      materials: 'Teak Wood, Traditional Finish',
      duration: '6 weeks',
    },
    {
      id: 2,
      title: 'Ornate Wooden Door',
      category: 'architectural',
      year: '2024',
      description: 'Intricate carved wooden door with traditional motifs and brass fittings.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      materials: 'Rosewood, Brass Hardware',
      duration: '4 weeks',
    },
    {
      id: 3,
      title: 'Decorative Wall Panel',
      category: 'decorative',
      year: '2023',
      description: 'Hand-carved decorative panel showcasing Kerala temple architecture elements.',
      image: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg',
      materials: 'Mahogany Wood',
      duration: '3 weeks',
    },
    {
      id: 4,
      title: 'Custom Bookshelf Unit',
      category: 'furniture',
      year: '2023',
      description: 'Modern bookshelf with traditional wood joining techniques.',
      image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg',
      materials: 'Bamboo, Natural Oil Finish',
      duration: '2 weeks',
    },
    {
      id: 5,
      title: 'Wooden Sculpture',
      category: 'decorative',
      year: '2023',
      description: 'Abstract wooden sculpture representing the harmony of nature.',
      image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg',
      materials: 'Sandalwood',
      duration: '5 weeks',
    },
    {
      id: 6,
      title: 'Heritage Window Frame',
      category: 'architectural',
      year: '2024',
      description: 'Restored heritage window frame with intricate latticework.',
      image: 'https://images.pexels.com/photos/2635817/pexels-photo-2635817.jpeg',
      materials: 'Teak Wood, Traditional Techniques',
      duration: '3 weeks',
    },
    {
      id: 7,
      title: 'Executive Office Desk',
      category: 'furniture',
      year: '2024',
      description: 'Contemporary office desk with hidden compartments and cable management.',
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg',
      materials: 'Oak Wood, Modern Hardware',
      duration: '4 weeks',
    },
    {
      id: 8,
      title: 'Ornamental Ceiling',
      category: 'architectural',
      year: '2023',
      description: 'Coffered ceiling with traditional Kerala architectural patterns.',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      materials: 'Teak Wood, Natural Stain',
      duration: '8 weeks',
    },
    {
      id: 9,
      title: 'Artisan Jewelry Box',
      category: 'decorative',
      year: '2024',
      description: 'Intricately designed jewelry box with velvet interior and multiple compartments.',
      image: 'https://images.pexels.com/photos/3965540/pexels-photo-3965540.jpeg',
      materials: 'Rosewood, Velvet Lining',
      duration: '2 weeks',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'furniture', label: 'Furniture' },
    { value: 'architectural', label: 'Architectural' },
    { value: 'decorative', label: 'Decorative' },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-wood-light">
              Our Gallery
            </h1>
            <p className="text-xl text-wood-light/80 leading-relaxed">
              Explore four decades of masterful woodcraft. Each piece tells a story 
              of dedication, skill, and the timeless beauty of working with wood.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="wood-card p-6 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-wood-light/60" />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-forest-dark/50 border-wood-light/30 text-wood-light placeholder:text-wood-light/60"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-wood-light/60" />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48 bg-forest-dark/50 border-wood-light/30 text-wood-light">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-4 text-sm text-wood-light/70">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="wood-card hover-lift group cursor-pointer" 
                   onClick={() => setSelectedProject(project)}>
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-forest-dark/20 group-hover:bg-forest-dark/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Eye className="w-8 h-8 text-wood-light" />
                  </div>
                  <div className="absolute top-4 right-4 bg-wood-dark/80 text-wood-light px-2 py-1 rounded text-xs">
                    {project.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-wood-light mb-3">
                    {project.title}
                  </h3>
                  <p className="text-wood-light/70 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-wood-dark/30 text-wood-light px-2 py-1 rounded capitalize">
                      {project.category}
                    </span>
                    <span className="text-xs text-wood-light/60">
                      {project.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="wood-card p-12 max-w-md mx-auto">
                <h3 className="text-xl font-bold text-wood-light mb-4">No projects found</h3>
                <p className="text-wood-light/70">
                  Try adjusting your search terms or filter criteria.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-dark/90 backdrop-blur-sm"
             onClick={() => setSelectedProject(null)}>
          <div className="wood-card max-w-4xl max-h-[90vh] overflow-y-auto" 
               onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-80 object-cover rounded-t-xl"
              />
              <Button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-forest-dark/80 hover:bg-forest-dark text-wood-light p-2"
                size="sm"
              >
                ×
              </Button>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-playfair font-bold text-wood-light mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-wood-light/80 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-wood-light mb-2">Materials</h4>
                  <p className="text-wood-light/70 text-sm">{selectedProject.materials}</p>
                </div>
                <div>
                  <h4 className="font-bold text-wood-light mb-2">Duration</h4>
                  <p className="text-wood-light/70 text-sm">{selectedProject.duration}</p>
                </div>
                <div>
                  <h4 className="font-bold text-wood-light mb-2">Year</h4>
                  <p className="text-wood-light/70 text-sm">{selectedProject.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;