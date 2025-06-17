export interface FundraiserEvent {
  id: string
  title: string
  description: string
  date: string
  location: string
  goal: number
  raised: number
  type: 'past' | 'upcoming'
  image?: string
}

export interface StorySection {
  id: string
  title: string
  content: string
  image?: string
  stats?: {
    number: string
    label: string
  }[]
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image?: string
  social?: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export interface DonationTier {
  id: string
  amount: number
  title: string
  description: string
  perks: string[]
  popular?: boolean
} 