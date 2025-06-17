'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Users, Heart, Target } from 'lucide-react'
import { gsap } from 'gsap'
import { getAnimationProps, smoothScrollTo } from '@/lib/utils'
import DonateButton from './DonateButton'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const shapesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Animate floating shapes
      if (shapesRef.current) {
        const shapes = shapesRef.current.children
        Array.from(shapes).forEach((shape, index) => {
          gsap.to(shape, {
            y: '+=30',
            rotation: '+=45',
            duration: 3 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2,
          })
        })
      }
    }
  }, [])

  const stats = [
    { icon: Users, value: '50K+', label: 'Lives Changed' },
    { icon: Heart, value: '$2M+', label: 'Funds Raised' },
    { icon: Target, value: '25+', label: 'Countries Reached' },
  ]

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 to-blue-100"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Floating 3D Shapes */}
      <div
        ref={shapesRef}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-300 rounded-full opacity-20 blur-sm" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-primary-300 to-primary-500 rotate-45 opacity-15 blur-sm" />
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-25 blur-sm" />
        <div className="absolute bottom-20 right-20 w-32 h-8 bg-gradient-to-r from-primary-200 to-primary-400 rotate-12 opacity-10 blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          {...getAnimationProps({
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, ease: 'easeOut' }
          })}
        >
          <h1 className="text-5xl md:text-7xl font-thin text-slate-800 mb-6 leading-tight">
            Empowering Communities,
            <br />
            <span className="glow-text bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              One Life at a Time
            </span>
          </h1>
        </motion.div>

        <motion.p
          {...getAnimationProps({
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' }
          })}
          className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Join our mission to create lasting impact in communities worldwide. 
          Every donation, every volunteer hour, every shared story brings us closer 
          to a world where hope thrives.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...getAnimationProps({
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' }
          })}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <DonateButton sticky={false} className="text-lg px-8 py-4" />
          <motion.button
            {...getAnimationProps({
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 }
            })}
            onClick={() => smoothScrollTo('story')}
            className="glass border border-primary-500 text-primary-600 hover:text-white hover:bg-primary-500 transition-all duration-300 font-medium py-4 px-8 rounded-full text-lg btn-hover"
          >
            Learn Our Story
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...getAnimationProps({
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.6, ease: 'easeOut' }
          })}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              {...getAnimationProps({
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.6, delay: 0.8 + index * 0.1 }
              })}
              className="glass p-6 rounded-xl text-center"
            >
              <stat.icon className="h-8 w-8 text-primary-500 mx-auto mb-3" />
              <div className="text-3xl font-extralight text-slate-800 glow-text mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 font-light">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        {...getAnimationProps({
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 1.2 }
        })}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          {...getAnimationProps({
            animate: { y: [0, 10, 0] },
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          })}
          onClick={() => smoothScrollTo('story')}
          className="text-slate-500 hover:text-primary-500 transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero 