
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  TikTok, 
  CheckCircle, 
  MapPin, 
  Users, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2, 
  DollarSign, 
  Clock, 
  Star, 
  Briefcase, 
  Flag,
  BarChart3
} from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock data for an influencer profile
const mockInfluencer = {
  id: 123,
  name: 'Sophia Reynolds',
  username: '@sophiastyle',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
  backgroundImage: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  bio: 'Lifestyle content creator specializing in sustainable fashion, clean beauty, and mindful living. Helping brands connect with conscious consumers.',
  location: 'Los Angeles, CA',
  categories: ['Fashion', 'Beauty', 'Lifestyle'],
  languages: ['English', 'Spanish'],
  verificationLevel: 'Pro',
  rating: 4.9,
  reviews: 48,
  completedCampaigns: 127,
  joinedDate: 'May 2020',
  priceRange: '$1,500 - $3,000',
  socialMedia: [
    {
      platform: 'Instagram',
      username: '@sophiastyle',
      followers: '1.2M',
      engagement: 4.8,
      link: 'https://instagram.com/sophiastyle',
      icon: <Instagram size={20} />
    },
    {
      platform: 'TikTok',
      username: '@sophiastyle',
      followers: '850K',
      engagement: 6.2,
      link: 'https://tiktok.com/@sophiastyle',
      icon: <TikTok size={20} />
    },
    {
      platform: 'YouTube',
      username: 'Sophia Reynolds',
      followers: '320K',
      engagement: 5.5,
      link: 'https://youtube.com/SophiaReynolds',
      icon: <Youtube size={20} />
    },
    {
      platform: 'Twitter',
      username: '@sophiastyle',
      followers: '95K',
      engagement: 3.2,
      link: 'https://twitter.com/sophiastyle',
      icon: <Twitter size={20} />
    }
  ],
  featuredContent: [
    {
      id: 1,
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Summer Fashion Essentials',
      stats: {
        likes: 24600,
        comments: 342,
        views: 158000
      }
    },
    {
      id: 2,
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1523538290088-012944a0ec0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Sustainable Beauty Routine',
      stats: {
        likes: 18700,
        comments: 245,
        views: 132000
      }
    },
    {
      id: 3,
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Morning Wellness Ritual',
      stats: {
        likes: 31200,
        comments: 486,
        views: 205000
      }
    }
  ],
  brands: [
    'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
    'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
    'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
    'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80'
  ],
  testimonials: [
    {
      id: 1,
      brand: 'Eco Living',
      logo: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80',
      text: 'Sophia created authentic content that resonated perfectly with our target audience. Her approach to showcasing our sustainable products was creative and drove significant engagement.',
      author: 'Michael Chen',
      role: 'Marketing Director'
    },
    {
      id: 2,
      brand: 'Pure Beauty',
      logo: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80',
      text: 'Working with Sophia exceeded our expectations. Her audience is genuinely engaged and the campaign results showed impressive conversion rates. Looking forward to our next collaboration!',
      author: 'Jessica Park',
      role: 'Brand Manager'
    }
  ]
};

const InfluencerProfile: React.FC = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20 pb-16">
        {/* Profile Header/Cover */}
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={mockInfluencer.backgroundImage} 
              alt="Profile cover" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
          </div>
          
          {/* Profile Actions */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/30 transition-colors">
              <Share2 size={18} />
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/30 transition-colors">
              <Flag size={18} />
            </button>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          {/* Profile Info Section */}
          <div className="relative -mt-24 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-card border border-border/30 p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Avatar & Basic Info */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="relative -mt-24 md:-mt-28 mb-4">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white overflow-hidden shadow-lg">
                      <img 
                        src={mockInfluencer.avatar} 
                        alt={mockInfluencer.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-1.5 border-2 border-white">
                      <CheckCircle size={18} className="fill-white" />
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                      <h1 className="text-2xl font-bold">{mockInfluencer.name}</h1>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full font-medium">
                        {mockInfluencer.verificationLevel}
                      </span>
                    </div>
                    <p className="text-foreground/70 mb-3">{mockInfluencer.username}</p>
                    
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                      <div className="flex items-center">
                        <Star size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
                        <span className="font-medium">{mockInfluencer.rating}</span>
                        <span className="text-foreground/60 text-sm ml-1">({mockInfluencer.reviews})</span>
                      </div>
                      <span className="text-foreground/40">•</span>
                      <div className="flex items-center">
                        <Briefcase size={16} className="text-foreground/60 mr-1" />
                        <span>{mockInfluencer.completedCampaigns} campaigns</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start text-foreground/70 mb-4">
                      <MapPin size={16} className="mr-1" />
                      <span>{mockInfluencer.location}</span>
                    </div>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                      {mockInfluencer.categories.map((category, index) => (
                        <span 
                          key={index} 
                          className="bg-secondary text-foreground/80 text-sm px-3 py-1 rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      {mockInfluencer.socialMedia.map((social, index) => (
                        <a 
                          key={index}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/70 hover:text-primary transition-colors"
                          aria-label={social.platform}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Bio & Action Buttons */}
                <div className="flex-grow">
                  <p className="text-foreground/80 mb-6">
                    {mockInfluencer.bio}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-secondary/30 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground/70">Audience Size</span>
                        <span className="font-medium">{mockInfluencer.socialMedia[0].followers}</span>
                      </div>
                    </div>
                    <div className="p-4 bg-secondary/30 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground/70">Avg. Engagement</span>
                        <span className="font-medium">{mockInfluencer.socialMedia[0].engagement}%</span>
                      </div>
                    </div>
                    <div className="p-4 bg-secondary/30 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground/70">Price Range</span>
                        <span className="font-medium">{mockInfluencer.priceRange}</span>
                      </div>
                    </div>
                    <div className="p-4 bg-secondary/30 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground/70">Languages</span>
                        <span className="font-medium">{mockInfluencer.languages.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-primary text-white font-medium py-2.5 px-4 rounded-md hover:bg-primary/90 transition-colors">
                      Contact Influencer
                    </button>
                    <button className="flex-1 border border-border bg-white font-medium py-2.5 px-4 rounded-md hover:bg-secondary/50 transition-colors">
                      Add to Campaign
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Social Platform Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">Social Platforms</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mockInfluencer.socialMedia.map((platform, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-card border border-border/30 p-5 hover:shadow-prominent transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      platform.platform === 'Instagram' ? 'bg-pink-100 text-pink-600' :
                      platform.platform === 'TikTok' ? 'bg-black text-white' :
                      platform.platform === 'YouTube' ? 'bg-red-100 text-red-600' :
                      'bg-blue-100 text-blue-500'
                    }`}>
                      {platform.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{platform.platform}</h3>
                      <p className="text-sm text-foreground/70">{platform.username}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-foreground/70">Followers</span>
                    <span className="text-sm font-medium">{platform.followers}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground/70">Engagement</span>
                    <span className="text-sm font-medium">{platform.engagement}%</span>
                  </div>
                  
                  <a 
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 text-center text-sm text-primary font-medium py-1.5 border border-primary/30 rounded-md hover:bg-primary/5 transition-colors"
                  >
                    View Profile
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Featured Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-2xl font-bold">Featured Content</h2>
              <Link to={`/influencer/${mockInfluencer.id}/content`} className="text-primary text-sm font-medium">
                View all content
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockInfluencer.featuredContent.map((content) => (
                <div 
                  key={content.id}
                  className="bg-white rounded-xl shadow-card border border-border/30 overflow-hidden hover:shadow-prominent transition-all duration-300"
                >
                  <div className="relative aspect-square">
                    <img 
                      src={content.thumbnail} 
                      alt={content.title}
                      className="w-full h-full object-cover"
                    />
                    {content.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play ml-1">
                            <polygon points="5 3 19 12 5 21 5 3" fill="white" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium mb-3">{content.title}</h3>
                    
                    <div className="flex items-center justify-between text-sm text-foreground/70">
                      <div className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        <span>{(content.stats.views / 1000).toFixed(1)}K</span>
                      </div>
                      <div className="flex items-center">
                        <Heart size={14} className="mr-1" />
                        <span>{(content.stats.likes / 1000).toFixed(1)}K</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle size={14} className="mr-1" />
                        <span>{content.stats.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Previous Brand Collaborations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">Previous Brand Collaborations</h2>
            
            <div className="bg-white rounded-xl shadow-card border border-border/30 p-6">
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {mockInfluencer.brands.map((brand, index) => (
                  <div key={index} className="w-16 h-16 rounded-lg overflow-hidden border border-border">
                    <img 
                      src={brand} 
                      alt={`Brand ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockInfluencer.testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="bg-white rounded-xl shadow-card border border-border/30 p-6"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-border flex-shrink-0">
                      <img 
                        src={testimonial.logo} 
                        alt={testimonial.brand}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{testimonial.brand}</h3>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className="text-yellow-400 fill-yellow-400" 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="mb-4 text-foreground/80 italic">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="text-sm text-foreground/70">
                    <p className="font-medium">{testimonial.author}</p>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InfluencerProfile;
