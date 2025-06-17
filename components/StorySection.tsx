'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, Globe, BookOpen } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { getAnimationProps } from '@/lib/utils'

const StorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.registerPlugin(ScrollTrigger)
      
      const ctx = gsap.context(() => {
        // Parallax effect for the background image
        gsap.to(imageRef.current, {
          yPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [])

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Every action we take is driven by genuine care for the communities we serve.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in the power of collective action to create lasting change.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our reach extends across continents, but our focus remains deeply local.'
    },
    {
      icon: BookOpen,
      title: 'Education',
      description: 'Knowledge empowers communities to build sustainable futures.'
    }
  ]

  return (
    <section 
      id="story" 
      ref={sectionRef}
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Background with parallax */}
      <div className="absolute inset-0">
        <div className="grid-bg opacity-10 absolute inset-0" />
        <div 
          ref={imageRef}
          className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-primary-500/10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story content */}
          <motion.div
            {...getAnimationProps({
              initial: { opacity: 0, x: -50 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.8 }
            })}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 leading-tight">
                Our Story of
                <span className="block glow-text bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  Hope & Change
                </span>
              </h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                What started as a small group of volunteers in 2018 has grown into a 
                global movement touching lives across five continents. Our journey began 
                with a simple belief: every person deserves access to clean water, 
                education, and opportunity.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                From our first water well in rural Kenya to our latest digital literacy 
                program in Peru, we've learned that sustainable change happens when 
                communities are empowered to lead their own transformation. We don't just 
                provide aid—we build partnerships.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Today, our network includes over 200 volunteers, 50 partner organizations, 
                and thousands of beneficiaries who have become advocates for change in 
                their own communities. Every story of transformation fuels our mission 
                to create a world where hope thrives.
              </p>
            </div>

            <motion.div
              {...getAnimationProps({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { delay: 0.3, duration: 0.6 }
              })}
              className="glass p-6 rounded-xl border border-primary-500/30"
            >
              <blockquote className="text-gray-200 text-lg italic leading-relaxed">
                "The Hope Foundation didn't just bring us clean water—they brought us 
                dignity, health, and the foundation for our children's future."
              </blockquote>
              <cite className="block mt-4 text-primary-400 font-medium">
                — Maria Santos, Community Leader, Guatemala
              </cite>
            </motion.div>
          </motion.div>

          {/* Right side - Values grid */}
          <motion.div
            {...getAnimationProps({
              initial: { opacity: 0, x: 50 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.8, delay: 0.2 }
            })}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                {...getAnimationProps({
                  initial: { opacity: 0, scale: 0.8 },
                  whileInView: { opacity: 1, scale: 1 },
                  transition: { duration: 0.6, delay: 0.4 + index * 0.1 }
                })}
                className="glass p-6 rounded-xl text-center hover:border-primary-500/50 transition-all duration-300"
              >
                <value.icon className="h-8 w-8 text-primary-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Impact numbers */}
        <motion.div
          {...getAnimationProps({
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.6 }
          })}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '50K+', label: 'Lives Impacted' },
            { number: '25', label: 'Countries' },
            { number: '200+', label: 'Volunteers' },
            { number: '$2M+', label: 'Funds Raised' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              {...getAnimationProps({
                initial: { opacity: 0, scale: 0.5 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { duration: 0.6, delay: 0.8 + index * 0.1 }
              })}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-thin text-primary-400 glow-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-light">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default StorySection 