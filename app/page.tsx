import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import StorySection from '@/components/StorySection'
import EventsTimeline from '@/components/EventsTimeline'
import DonateButton from '@/components/DonateButton'

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navigation />
      <Hero />
      <StorySection />
      <EventsTimeline />
      <DonateButton />
    </main>
  )
} 