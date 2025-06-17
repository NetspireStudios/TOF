'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { MapPin, Target, CheckCircle } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { getAnimationProps } from '@/lib/utils'
import type { FundraiserEvent } from '@/types'

const EventsTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  const events: FundraiserEvent[] = [
    {
      id: '1',
      title: 'Clean Water Initiative Launch',
      description: 'Started our first major project to bring clean water to remote villages in Kenya.',
      date: '2020-03-15',
      location: 'Kenya, East Africa',
      goal: 100000,
      raised: 100000,
      type: 'past'
    },
    {
      id: '2',
      title: 'Education for All Campaign',
      description: 'Built 3 schools and provided educational materials to children in underserved communities.',
      date: '2021-09-10',
      location: 'Guatemala, Central America',
      goal: 150000,
      raised: 150000,
      type: 'past'
    },
    {
      id: '3',
      title: 'Digital Literacy Program',
      description: 'Bringing technology education to remote communities.',
      date: '2024-04-15',
      location: 'Peru, South America',
      goal: 120000,
      raised: 75000,
      type: 'upcoming'
    }
  ]

  return (
    <section id="events" className="py-20 bg-black relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...getAnimationProps({
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 }
          })}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 glow-text">
            Our Journey of Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            From our first water well to future digital literacy programs, 
            every milestone represents lives transformed and communities empowered.
          </p>
        </motion.div>

        <div ref={timelineRef}>
          <VerticalTimeline
            animate={false}
            lineColor="#536DE2"
          >
            {events.map((event) => (
              <VerticalTimelineElement
                key={event.id}
                className="vertical-timeline-element"
                contentStyle={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(83, 109, 226, 0.3)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  color: '#fff',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid rgba(83, 109, 226, 0.3)',
                }}
                date={new Date(event.date).toLocaleDateString()}
                dateClassName="text-primary-400 font-light"
                iconStyle={{
                  background: event.type === 'past' ? '#536DE2' : 'rgba(83, 109, 226, 0.3)',
                  border: '3px solid #536DE2',
                  color: '#fff',
                }}
                icon={event.type === 'past' ? <CheckCircle /> : <Target />}
              >
                <h3 className="text-xl font-medium text-white mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center text-primary-400 text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {event.location}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
                <div className="text-primary-400 font-medium text-sm">
                  ${event.raised.toLocaleString()} / ${event.goal.toLocaleString()}
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default EventsTimeline 