'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Loader } from 'lucide-react'
import { loadStripe } from '@stripe/stripe-js'
import { getAnimationProps } from '@/lib/utils'

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface DonateButtonProps {
  className?: string
  sticky?: boolean
}

const DonateButton: React.FC<DonateButtonProps> = ({ className = '', sticky = true }) => {
  const [loading, setLoading] = useState(false)

  const handleDonate = async () => {
    setLoading(true)
    
    try {
      const stripe = await stripePromise
      
      if (!stripe) {
        throw new Error('Stripe failed to initialize')
      }

      // Create checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 5000, // $50.00 default
          currency: 'usd',
        }),
      })

      const session = await response.json()

      if (!session.id) {
        throw new Error('Failed to create checkout session')
      }

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      })

      if (result.error) {
        console.error(result.error.message)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const buttonContent = (
    <motion.button
      {...getAnimationProps({
        whileHover: { scale: 1.05, y: -2 },
        whileTap: { scale: 0.95 },
        transition: { type: 'spring', stiffness: 400, damping: 17 }
      })}
      onClick={handleDonate}
      disabled={loading}
      className={`
        bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-full
        flex items-center space-x-2 transition-all duration-300 btn-hover
        disabled:opacity-50 disabled:cursor-not-allowed shadow-lg
        ${className}
      `}
    >
      {loading ? (
        <Loader className="h-5 w-5 animate-spin" />
      ) : (
        <Heart className="h-5 w-5 fill-current" />
      )}
      <span>{loading ? 'Processing...' : 'Donate Now'}</span>
    </motion.button>
  )

  if (sticky) {
    return (
      <motion.div
        {...getAnimationProps({
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 1, duration: 0.6 }
        })}
        className="fixed bottom-6 right-6 z-40"
      >
        {buttonContent}
      </motion.div>
    )
  }

  return buttonContent
}

export default DonateButton 