'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Droplet, Bed, ArrowRight, ChevronDown, MapPin, Smartphone, Clock } from 'lucide-react'

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">MediFind</div>
          <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Find Lifesaving Resources <span className="text-blue-600">Instantly</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Locate the nearest available hospital beds and blood banks in real-time. Every second counts when saving lives.
            </p>
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              onClick={() => window.location.href = '/dashboard'}
            >
              Start Searching
              <motion.div
                className="ml-2"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
          </div>
          <div className="lg:w-1/2">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/heroimage.webp" alt="Hospital Finder Illustration" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Search className="text-blue-600" size={32} />}
            title="Quick Search"
            description="Find the nearest medical facilities with just a few clicks."
          />
          <FeatureCard
            icon={<Bed className="text-blue-600" size={32} />}
            title="Real-time Bed Availability"
            description="Get up-to-date information on hospital bed availability."
          />
          <FeatureCard
            icon={<Droplet className="text-blue-600" size={32} />}
            title="Blood Bank Locator"
            description="Easily locate and connect with nearby blood banks."
          />
        </div>

        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HowItWorksCard
              icon={<MapPin className="text-blue-600" size={32} />}
              title="Enter Your Location"
              description="Provide your current location or the area where you need medical assistance."
              step={1}
            />
            <HowItWorksCard
              icon={<Search className="text-blue-600" size={32} />}
              title="Search for Resources"
              description="Specify whether you need a hospital bed or blood bank services."
              step={2}
            />
            <HowItWorksCard
              icon={<Clock className="text-blue-600" size={32} />}
              title="Get Real-time Results"
              description="Receive up-to-date information on availability and location of the nearest resources."
              step={3}
            />
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="MediFind helped me locate an available hospital bed for my father during an emergency. It saved us precious time!"
              author="Sarah Johnson"
              role="Grateful Daughter"
            />
            <TestimonialCard
              quote="As a blood donor, this app makes it incredibly easy to find where my donation is needed most. Brilliant idea!"
              author="Michael Chen"
              role="Regular Blood Donor"
            />
            <TestimonialCard
              quote="The real-time updates on bed availability have been a game-changer for our ambulance service. Highly recommended!"
              author="Dr. Emily Rodriguez"
              role="Emergency Response Team Lead"
            />
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem
              question="How accurate is the bed availability information?"
              answer="Our system updates in real-time, pulling data directly from participating hospitals. While we strive for 100% accuracy, it's always best to confirm with the hospital directly for the most up-to-date information."
              isOpen={openFaqIndex === 0}
              toggleFaq={() => toggleFaq(0)}
            />
            <FaqItem
              question="Is this service available nationwide?"
              answer="We are currently operational in major cities and are rapidly expanding our coverage. Check our 'Coverage' page for the most current list of supported areas."
              isOpen={openFaqIndex === 1}
              toggleFaq={() => toggleFaq(1)}
            />
            <FaqItem
              question="How can hospitals or blood banks join your network?"
              answer="Medical facilities can join our network by registering on our partner portal. We provide easy-to-integrate APIs and dashboard tools to keep the information up-to-date."
              isOpen={openFaqIndex === 2}
              toggleFaq={() => toggleFaq(2)}
            />
            <FaqItem
              question="Is there a mobile app available?"
              answer="Yes, we have mobile apps available for both iOS and Android platforms. You can download them from the respective app stores by searching for 'MediFind'."
              isOpen={openFaqIndex === 3}
              toggleFaq={() => toggleFaq(3)}
            />
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 mt-24 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-600 mb-8">Join us in our mission to connect people with life-saving resources.</p>
          <motion.button
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</a>
          </div>
          <p className="mt-4 text-gray-600">&copy; 2023 MediFind. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

function HowItWorksCard({ icon, title, description, step }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-blue-100 rounded-full p-6 mb-4">
        {icon}
      </div>
      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mb-4">
        {step}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, author, role }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <p className="text-gray-600 italic mb-4">"{quote}"</p>
      <div>
        <p className="font-semibold text-gray-800">{author}</p>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </motion.div>
  )
}

function FaqItem({ question, answer, isOpen, toggleFaq }) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={toggleFaq}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <ChevronDown
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600">{answer}</p>
      )}
    </div>
  )
}

