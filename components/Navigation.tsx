'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart } from 'lucide-react'
import { smoothScrollTo, getAnimationProps } from '@/lib/utils'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: 'hero' },
    { name: 'Our Story', href: 'story' },
    { name: 'Impact', href: 'impact' },
    { name: 'Events', href: 'events' },
    { name: 'Team', href: 'team' },
    { name: 'Contact', href: 'contact' },
  ]

  const handleNavClick = (href: string) => {
    smoothScrollTo(href)
    setIsOpen(false)
  }

  return (
    <motion.nav
      {...getAnimationProps({
        initial: { y: -100 },
        animate: { y: 0 },
        transition: { duration: 0.6, ease: 'easeOut' }
      })}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            {...getAnimationProps({
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 }
            })}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick('hero')}
          >
            <Heart className="h-8 w-8 text-primary-500 fill-current" />
            <span className="text-xl font-light text-white glow-text">
              Hope Foundation
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                {...getAnimationProps({
                  whileHover: { y: -2 },
                  whileTap: { y: 0 }
                })}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-light"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              {...getAnimationProps({
                whileTap: { scale: 0.95 }
              })}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-primary-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            {...getAnimationProps({
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: 'auto' },
              exit: { opacity: 0, height: 0 },
              transition: { duration: 0.3 }
            })}
            className="md:hidden glass backdrop-blur-md border-t border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  {...getAnimationProps({
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: index * 0.1 }
                  })}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-primary-400 transition-colors font-light"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation 