"use client";

import { useState, useEffect } from "react";
import ShadowLogo from "./components/ShadowLogo";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShadowLogo className="w-10 h-10" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Shadow
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
            style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <ShadowLogo className="w-32 h-32 md:w-40 md:h-40 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Welcome to Shadow
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of AI technology. Powerful, intuitive, and designed for the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
              Start Exploring
            </button>
            <button className="px-8 py-4 border-2 border-purple-500/50 rounded-full text-white font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-purple-500 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Everything you need to harness the power of AI
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Lightning Fast",
                description: "Experience unprecedented speed with our optimized AI engine that delivers results in milliseconds.",
              },
              {
                title: "Intelligent Processing",
                description: "Advanced algorithms that understand context and deliver accurate, relevant responses every time.",
              },
              {
                title: "Seamless Integration",
                description: "Easy to integrate with your existing workflow and tools. Get started in minutes, not hours.",
              },
              {
                title: "Secure & Private",
                description: "Your data is encrypted and protected with enterprise-grade security measures.",
              },
              {
                title: "24/7 Availability",
                description: "Always online, always ready. Access Shadow whenever you need it, from anywhere in the world.",
              },
              {
                title: "Continuous Learning",
                description: "Our AI evolves and improves over time, learning from interactions to serve you better.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105"
              >
                <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 backdrop-blur-sm">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-600/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600/30 rounded-full blur-2xl" />
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Shadow
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Shadow represents the cutting edge of artificial intelligence technology. Built from the ground up with a focus on performance, reliability, and user experience, Shadow is designed to be your intelligent companion in the digital age.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our mission is to make advanced AI accessible to everyone, breaking down barriers and empowering users to achieve more than they ever thought possible.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you're a developer, creator, or innovator, Shadow adapts to your needs and grows with you, providing intelligent assistance that feels natural and intuitive.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-xl mb-12">
            Join thousands of users who are already experiencing the future of AI
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110">
            Launch Shadow Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <ShadowLogo className="w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Shadow
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Shadow. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
