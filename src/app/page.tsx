'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  Shield,
  Package,
  Settings,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Factory,
  Layers,
  CheckCircle,
  FlaskConical,
  Gauge,
  Atom,
  Zap,
  Menu,
  X,
} from 'lucide-react'

// Navigation Component
function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: 'PRODUCTS', id: 'products' },
    { label: 'SPECS', id: 'specs' },
    { label: 'INQUIRY', id: 'inquiry' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/steel-logo.png"
              alt="Excellent Steels and Alloys"
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-white tracking-wider">
                EXCELLENT STEELS
              </h1>
              <p className="text-xs text-[#a0a0a0] tracking-widest">& ALLOYS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-[#c17b39] transition-colors font-medium tracking-wide text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] border-t border-[#2a2a2a] py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-[#c17b39] transition-colors font-medium tracking-wide text-sm text-left px-4"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

// Hero Section
function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-steel.jpg)',
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/80 to-[#0a0a0a]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Premium Steel Solutions
        </h1>
        <p className="text-xl sm:text-2xl text-[#a0a0a0] mb-8 max-w-2xl mx-auto">
          Small quantities. Big quality. Competitive rates.
        </p>

        {/* CTA Button */}
        <Button
          onClick={() => scrollToSection('products')}
          className="bg-[#c17b39] hover:bg-[#a66a2f] text-white px-8 py-6 text-lg font-semibold rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          VIEW OUR PRODUCTS
          <ChevronDown className="ml-2 w-5 h-5" />
        </Button>

        {/* USPs */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Factory, text: 'LRF + VD Processed' },
            { icon: Atom, text: 'Low Sulfur & Phosphorus' },
            { icon: FlaskConical, text: 'Custom Alloys Available' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 text-white/90 bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/10"
            >
              <item.icon className="w-5 h-5 text-[#c17b39]" />
              <span className="font-medium text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: 'Quality Without Compromise',
      description:
        'Our products go through LRF and VD processes ensuring controlled gases and low sulfur/phosphorus content.',
    },
    {
      icon: Package,
      title: 'No Minimum Quantity Barriers',
      description:
        'From low-volume special grades to large consignments, we support your requirements without compromising on quality.',
    },
    {
      icon: Zap,
      title: 'Competitive Pricing',
      description:
        'Direct from major manufacturers at rates that make sense for your business.',
    },
  ]

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose Us?
          </h2>
          <div className="w-20 h-1 bg-[#c17b39] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 text-center hover:border-[#c17b39]/50 transition-colors"
            >
              <div className="w-16 h-16 bg-[#c17b39]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-[#c17b39]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Product Images Carousel
function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Placeholder images - replace with actual product images later
   const productImages = [
    { id: 1, src: '/products/rounds.png', title: 'Steel Rounds' },
    { id: 2, src: '/products/flats.jpg', title: 'Steel Flats' },
    { id: 3, src: '/products/billets.png', title: 'Steel Billets' },
    { id: 4, src: '/products/channels.webp', title: 'MS Channels' },
    { id: 5, src: '/products/angles.jpg', title: 'MS Angles' },
    { id: 6, src: '/products/pipes.jpg', title: 'MS Pipes' },
    { id: 7, src: '/products/ingots.png', title: 'Steel Ingots' },
    { id: 8, src: '/products/custom-alloys.jpg', title: 'Custom Alloys' },
  ]

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused, productImages.length])

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % productImages.length)
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h3 className="text-xl font-semibold text-white mb-6 text-center">Product Gallery</h3>

      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg">
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#0a0a0a]/80 hover:bg-[#c17b39] text-white p-2 rounded-full transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#0a0a0a]/80 hover:bg-[#c17b39] text-white p-2 rounded-full transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Images Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {productImages.map((image) => (
            <div
              key={image.id}
              className="w-full flex-shrink-0"
            >
              <div
                className="aspect-[16/9] md:aspect-[21/9] relative border border-[#2a2a2a] rounded-lg overflow-hidden"
            
              >
                <img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-cover"
        />
                <div className="text-center">
                  <Factory className="w-16 h-16 text-[#c17b39] mx-auto mb-4" />
                  <p className="text-white text-lg font-medium">{image.placeholder}</p>
                  <p className="text-[#a0a0a0] text-sm mt-1">Placeholder Image</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {productImages.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? 'bg-[#c17b39]' : 'bg-[#2a2a2a] hover:bg-[#4a4a4a]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// Products Section
function ProductsSection() {
  const products = [
    {
      category: 'Alloy Steels',
      description: 'High-quality grades for demanding applications',
      items: ['Rounds', 'Flats', 'Billets'],
      grades: ['SAE8120', 'EN 353', '20MnCr5', 'SCM420', 'Custom alloys'],
      icon: Layers,
    },
    {
      category: 'MS Products',
      description: 'Mild Steel products for general construction',
      items: ['Steel Ingots', 'Channels', 'Angles', 'Pipes', 'MS Rounds & Flats'],
      grades: ['Various grades available'],
      icon: Factory,
    },
  ]

  return (
    <section id="products" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Products
          </h2>
          <div className="w-20 h-1 bg-[#c17b39] mx-auto mb-6" />
          <p className="text-[#a0a0a0] max-w-2xl mx-auto">
            We offer a comprehensive range of steel products to meet diverse industrial needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden hover:border-[#c17b39]/50 transition-colors"
            >
              <div className="p-6 border-b border-[#2a2a2a]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#c17b39]/10 rounded-lg flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-[#c17b39]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {product.category}
                    </h3>
                    <p className="text-sm text-[#a0a0a0]">{product.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-[#c17b39] mb-2">Product Types</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.items.map((item, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-[#2a2a2a] text-white"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#c17b39] mb-2">Grades</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.grades.map((grade, i) => (
                      <Badge
                        key={i}
                        className="bg-[#c17b39]/20 text-[#c17b39] border-0"
                      >
                        {grade}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Image Carousel */}
        <div className="mt-16">
          <ProductCarousel />
        </div>
      </div>
    </section>
  )
}

// Specifications Section
function SpecsSection() {
  const specs = [
    {
      icon: Factory,
      title: 'LRF Treatment',
      description: 'Ladle Refining Furnace treatment for superior steel quality',
    },
    {
      icon: Gauge,
      title: 'VD Process',
      description: 'Vacuum Degassing for controlled gas content',
    },
    {
      icon: Atom,
      title: 'Low Sulfur & Phosphorus',
      description: 'Precise control of harmful elements',
    },
    {
      icon: CheckCircle,
      title: 'Ultrasonic Testing',
      description: 'Non-destructive testing available on request',
    },
    {
      icon: FlaskConical,
      title: 'Custom Alloys',
      description: 'Tailor-made grades to meet specific requirements',
    },
    {
      icon: Settings,
      title: 'Quality Control',
      description: 'Rigorous testing at every stage of production',
    },
  ]

  return (
    <section id="specs" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Specifications & Capabilities
          </h2>
          <div className="w-20 h-1 bg-[#c17b39] mx-auto mb-6" />
          <p className="text-[#a0a0a0] max-w-2xl mx-auto">
            Our advanced processing capabilities ensure the highest quality standards
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 flex items-start gap-4 hover:border-[#c17b39]/50 transition-colors"
            >
              <div className="w-12 h-12 bg-[#c17b39]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <spec.icon className="w-6 h-6 text-[#c17b39]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {spec.title}
                </h3>
                <p className="text-[#a0a0a0] text-sm">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Inquiry Form Section
function InquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          product: '',
          quantity: '',
          message: '',
        })
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="inquiry" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-[#c17b39] mx-auto mb-6" />
          <p className="text-[#a0a0a0] max-w-2xl mx-auto">
            Have a specific requirement? Send us an inquiry and we&apos;ll get back to you promptly.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {isSuccess ? (
            <div className="bg-[#1a1a1a] border border-green-500/30 rounded-lg p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Inquiry Submitted!
              </h3>
              <p className="text-[#a0a0a0] mb-6">
                Thank you for your interest. We&apos;ll get back to you within 24 hours.
              </p>
              <Button
                onClick={() => setIsSuccess(false)}
                className="bg-[#c17b39] hover:bg-[#a66a2f] text-white"
              >
                Submit Another Inquiry
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#c17b39]"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#c17b39]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#c17b39]"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">
                    Company
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#c17b39]"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="product" className="text-white">
                    Product Interest *
                  </Label>
                  <Input
                    id="product"
                    required
                    value={formData.product}
                    onChange={(e) =>
                      setFormData({ ...formData, product: e.target.value })
                    }
                    className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#c17b39]"
                    placeholder="e.g., Alloy Steel Rounds"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-white">
                    Quantity Required
                  </Label>
                  <Input
                    id="quantity"
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#c17b39]"
                    placeholder="e.g., 5 tons"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-[#0a0a0a] border-[#2a2a2a] text-white focus:border-[#c17b39] resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#c17b39] hover:bg-[#a66a2f] text-white py-6 text-lg font-semibold"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/steel-logo.png"
                alt="Excellent Steels and Alloys"
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold text-white">EXCELLENT STEELS</h3>
                <p className="text-xs text-[#a0a0a0] tracking-widest">& ALLOYS</p>
              </div>
            </div>
            <p className="text-[#a0a0a0] text-sm leading-relaxed">
              Premium steel solutions for industries that demand quality. Small quantities,
              big quality, competitive rates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                  { label: 'Products', id: 'products' },
                  { label: 'Specifications', id: 'specs' },
                  { label: 'Contact', id: 'inquiry' },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.id)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="text-[#a0a0a0] hover:text-[#c17b39] transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#a0a0a0] text-sm">
                <Mail className="w-4 h-4 text-[#c17b39]" />
                data.excellentsteels@gmail.com
              </li>
              <li className="flex items-start gap-3 text-[#a0a0a0] text-sm">
                <Phone className="w-4 h-4 text-[#c17b39] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>+91 9501018800</span>
                  <span>+91 7814300919</span>
                  <span>+91 9810374289</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-[#a0a0a0] text-sm">
                <MapPin className="w-4 h-4 text-[#c17b39] flex-shrink-0 mt-0.5" />
                Mandigobindgarh, Punjab
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2a2a2a] pt-8 text-center">
          <p className="text-[#a0a0a0] text-sm">
            © {new Date().getFullYear()} Excellent Steels and Alloys. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <SpecsSection />
      <InquirySection />
      <Footer />
    </main>
  )
}
