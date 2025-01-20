import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Droplet, Bed, ArrowRight, ChevronDown, MapPin, Clock, Smartphone } from 'lucide-react';

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80')] opacity-5 bg-fixed bg-cover"></div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 mix-blend-overlay"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <div className="relative">
        <header className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative z-10">MediFind</span>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
            <div className="space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 transition-colors relative group"
                whileHover={{ scale: 1.05 }}
              >
                <span>About</span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: '100%' }}
                />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 transition-colors relative group"
                whileHover={{ scale: 1.05 }}
              >
                <span>Contact</span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: '100%' }}
                />
              </motion.a>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div 
              className="lg:w-1/2 mb-8 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block"
              >
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full">
                  #1 Medical Resource Finder
                </span>
              </motion.div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 mt-4">
                <motion.span 
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Find Lifesaving
                </motion.span>
                <motion.span 
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Resources
                </motion.span>
                <motion.span 
                  className="text-gray-800 block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Instantly
                </motion.span>
              </h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Locate the nearest available hospital beds and blood banks in real-time. Every second counts when saving lives.
              </motion.p>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center hover:shadow-xl transition-shadow relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  onClick={() => window.location.href = '/dashboard'}
                >
                  <span className="relative z-10">Start Searching</span>
                  <motion.div
                    className="ml-2 relative z-10"
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.button>
                <motion.button
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
              <motion.div
                className="mt-8 flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://images.unsplash.com/photo-${i}?auto=format&fit=crop&w=32&h=32`}
                      alt={`User ${i}`}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">1,000+</span> medical facilities connected
                </div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    rotate: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-xl relative backdrop-blur-sm bg-white/90"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80" 
                    alt="Hospital Finder Illustration" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                  <motion.div
                    className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-gray-800">Live Updates</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
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
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How It Works
            </motion.h2>
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
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What Our Users Say
            </motion.h2>
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
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-4 max-w-3xl mx-auto">
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

          <section className="mt-24 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <div className="relative bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <motion.h2
                    className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Join Our Network
                  </motion.h2>
                  <p className="text-gray-600 mb-6">
                    Are you a healthcare provider? Partner with us to make healthcare more accessible.
                  </p>
                  <motion.button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Partner With Us
                  </motion.button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h3 className="font-semibold text-gray-800">24/7 Support</h3>
                      <p className="text-sm text-gray-600">Round-the-clock technical assistance</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h3 className="font-semibold text-gray-800">Easy Integration</h3>
                      <p className="text-sm text-gray-600">Simple API implementation</p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h3 className="font-semibold text-gray-800">Real-time Updates</h3>
                      <p className="text-sm text-gray-600">Instant availability sync</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h3 className="font-semibold text-gray-800">Analytics</h3>
                      <p className="text-sm text-gray-600">Detailed usage insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 mt-24 py-12">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Make a Difference?
            </motion.h2>
            <p className="text-xl text-gray-600 mb-8">Join us in our mission to connect people with life-saving resources.</p>
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
            </motion.button>
            <div className="mt-12 grid md:grid-cols-4 gap-8 text-left max-w-4xl mx-auto">
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">API</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Careers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Security</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600">&copy; 2024 MediFind. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg relative overflow-hidden group"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <motion.div 
        className="mb-4 relative z-10"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 relative z-10">{title}</h3>
      <p className="text-gray-600 relative z-10">{description}</p>
    </motion.div>
  );
}

function HowItWorksCard({ icon, title, description, step }) {
  return (
    <motion.div 
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: step * 0.2 }}
    >
      <motion.div 
        className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full p-6 mb-4"
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mb-4">
        {step}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function TestimonialCard({ quote, author, role }) {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg relative overflow-hidden group"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <p className="text-gray-600 italic mb-4 relative z-10">"{quote}"</p>
      <div className="relative z-10">
        <p className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{author}</p>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </motion.div>
  );
}

function FaqItem({ question, answer, isOpen, toggleFaq }) {
  return (
    <motion.div 
      className="border-b border-gray-200 pb-4"
      initial={false}
    >
      <motion.button
        className="flex justify-between items-center w-full text-left"
        onClick={toggleFaq}
        whileHover={{ x: 10 }}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="mt-2 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}