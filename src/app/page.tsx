'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Home() {
  // Start with null to avoid hydration mismatch
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);
  const [mounted, setMounted] = useState(false);

  // Effect to run once after component mounts
  useEffect(() => {
    // Check if dark mode is set in localStorage
    const storedMode = localStorage.getItem('darkMode');
    // Default to true if not set, otherwise parse the value
    const initialDarkMode = storedMode === null ? true : storedMode === 'true';
    
    setIsDarkMode(initialDarkMode);
    setMounted(true);

    // Set the initial class on document
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    // Toggle the current state
    const newDarkMode = !isDarkMode;
    
    // Update state
    setIsDarkMode(newDarkMode);
    
    // Update DOM directly for immediate effect
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('darkMode', String(newDarkMode));
  };

  // Prevent hydration issues
  if (!mounted || isDarkMode === null) {
    return <div className="min-h-screen bg-black"></div>;
  }

  // Define color scheme based on mode - inspired by Linear's clean aesthetic with slate greys
  const bgColor = isDarkMode ? 'bg-[#0a0a0a]' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-slate-900';
  const secondaryText = isDarkMode ? 'text-slate-400' : 'text-slate-600';
  const borderColor = isDarkMode ? 'border-slate-800' : 'border-slate-200';
  const cardBg = isDarkMode ? 'bg-slate-900' : 'bg-white';
  const accentColor = isDarkMode ? 'text-white' : 'text-slate-900';
  const buttonBg = isDarkMode ? 'bg-white' : 'bg-slate-900';
  const buttonText = isDarkMode ? 'text-slate-900' : 'text-white';
  const buttonHover = isDarkMode ? 'hover:bg-slate-100' : 'hover:bg-slate-800';
  const sectionBg = isDarkMode ? 'bg-slate-900' : 'bg-slate-50';
  const toggleBg = isDarkMode ? 'bg-slate-800' : 'bg-slate-100';
  const toggleHover = isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-200';
  
  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-200`}>
      {/* Grid Background - Linear inspired subtle grid */}
      <div className={`
        fixed inset-0 z-0 pointer-events-none
        ${isDarkMode 
          ? 'opacity-[0.03]' 
          : 'opacity-[0.03]'
        }
      `}>
        <div className="absolute inset-0 grid grid-cols-12 h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={`border-r ${isDarkMode ? 'border-slate-700' : 'border-slate-300'} h-full`}></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={`border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-300'} w-full`}></div>
          ))}
        </div>
      </div>

      {/* Navigation - Linear inspired minimal header */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-transparent">
        <div className={`max-w-7xl mx-auto px-6 py-4 flex justify-between items-center ${bgColor}`}>
          <div className="flex items-center space-x-10">
            <Link href="/" className={`text-xl font-semibold ${textColor}`}>
              Firebase Next.js
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/dashboard" className={`text-sm ${secondaryText} hover:${textColor} transition-colors`}>
                Dashboard
              </Link>
              <Link href="#features" className={`text-sm ${secondaryText} hover:${textColor} transition-colors`}>
                Features
              </Link>
              <Link href="/pricing" className={`text-sm ${secondaryText} hover:${textColor} transition-colors`}>
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            {/* Theme toggle button - moved to navbar */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${toggleBg} ${isDarkMode ? 'text-white' : 'text-slate-900'} ${toggleHover} transition-colors`}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link href="/login" className={`text-sm ${secondaryText} hover:${textColor} transition-colors`}>
              Log in
            </Link>
            <Link 
              href="/register" 
              className={`text-sm px-4 py-2 rounded-md ${buttonBg} ${buttonText} ${buttonHover} transition-colors`}
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Linear inspired clean layout */}
      <div className="pt-36 pb-20 md:pt-44 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] ${textColor}`}>
              Firebase + Next.js starter
              <span className="block">for building products</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-12 max-w-2xl ${secondaryText}`}>
              Meet the system for modern web application development.
              Authentication, database, and deployment all set up.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/register"
                className={`px-6 py-3 rounded-md ${buttonBg} ${buttonText} ${buttonHover} transition-colors inline-flex items-center font-medium`}
              >
                Start building
              </Link>
              <Link 
                href="#features" 
                className={`px-6 py-3 text-sm font-medium ${secondaryText} hover:${textColor} transition-colors inline-flex items-center`}
              >
                Learn about features
                <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 12.5L11 8L6.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </motion.div>
          
          {/* Product screenshot - Linear inspired UI */}
          <motion.div 
            className="mt-24 relative rounded-lg overflow-hidden border"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={`${borderColor}`}>
              <Image
                src="/app-screenshot.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-full h-auto rounded-md"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section - Linear inspired minimal sections */}
      <section id="features" className={`py-24 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl font-bold tracking-tight mb-4 ${textColor}`}>Built for developers</h2>
            <p className={`text-lg max-w-2xl ${secondaryText}`}>
              Everything you need to build modern web applications with 
              Firebase authentication and database integration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentication",
                description: "Complete auth flow with email/password and social sign-in options. Protected routes included."
              },
              {
                title: "Firestore Database",
                description: "Database integration with utility functions for CRUD operations and TypeScript types."
              },
              {
                title: "Modern Stack",
                description: "Built with Next.js App Router, React 19, TypeScript, and TailwindCSS for rapid development."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className={`p-6 rounded-lg ${cardBg} border ${borderColor}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className={`text-lg font-semibold mb-3 ${textColor}`}>{feature.title}</h3>
                <p className={`${secondaryText}`}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Linear inspired minimal CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl font-bold mb-6 ${textColor}`}>Ready to get started?</h2>
            <p className={`text-lg mb-8 ${secondaryText}`}>
              Start building your application today with this complete starter template.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/register"
                className={`px-8 py-3 rounded-md ${buttonBg} ${buttonText} ${buttonHover} transition-colors font-medium`}
              >
                Create an account
              </Link>
              <Link
                href="/login"
                className={`px-8 py-3 rounded-md border ${borderColor} ${textColor} hover:bg-slate-100 dark:hover:bg-slate-800 hover:bg-opacity-30 transition-colors font-medium`}
              >
                Log in
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Linear inspired minimal footer */}
      <footer className={`py-16 border-t ${borderColor}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <Link href="/" className={`text-xl font-semibold ${textColor}`}>
                Firebase Next.js
              </Link>
              <p className={`mt-2 text-sm ${secondaryText}`}>A complete starter template</p>
            </div>
            <div className="flex space-x-8 text-sm">
              <Link href="/login" className={`${secondaryText} hover:${textColor} transition-colors`}>
                Log in
              </Link>
              <Link href="/register" className={`${secondaryText} hover:${textColor} transition-colors`}>
                Sign up
              </Link>
              <Link href="/dashboard" className={`${secondaryText} hover:${textColor} transition-colors`}>
                Dashboard
              </Link>
            </div>
          </div>
          <div className={`mt-16 border-t ${borderColor} pt-8 text-center text-sm ${secondaryText}`}>
            © {new Date().getFullYear()} Firebase Next.js App. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
