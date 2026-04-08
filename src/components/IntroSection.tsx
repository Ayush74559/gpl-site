import React, { useState } from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TabContent {
  title: string;
  description: string;
  description2?: string;
  subSections?: {
    title: string;
    content: string;
  }[];
  buttonText: string;
  image: string;
}

const tabData: Record<string, TabContent> = {
  'Polyhouse / Greenhouse': {
    title: 'IGPL Polyhouse',
    description: "IGPL's polyhouse offers you two types of polyhouse, namely naturally ventilated polyhouse and fan pad polyhouse.",
    subSections: [
      {
        title: 'Naturally Ventilated Polyhouse (NVPH)',
        content: 'Naturally ventilated polyhouses have air vents installed inside the structure to solve the problem of temperature and humidity. It uses top vents to release hot air and side vents to draw cool air to maintain the temperature inside a polyhouse.'
      },
      {
        title: 'Fan & Pad Polyhouse (FPPH)',
        content: 'Fan & Pad polyhouse is a climate-controlled polyhouse in which temperature and humidity are controlled by a cooling pad and exhaust fan. It uses an exhaust fan on one side to pull air through evaporative cooling pads.'
      },
      {
        title: 'Tunnel Polyhouse',
        content: "IGPL's polytunnel offers you two types of tunnels, namely ventilation tunnels and round tunnels. A polytunnel is a steel-framed tunnel covered with 5 layers of polythene membrane that's used to create the perfect environment for your crops."
      }
    ],
    buttonText: 'Know more about IGPL Polyhouse',
    image: 'https://picsum.photos/seed/polyhouse_detail/800/600'
  },
  'Shade Net House': {
    title: 'IGPL Shade Net House',
    description: "IGPL's net house offers you two types of shade net house, namely dome-shape and flat roof net house.",
    subSections: [
      {
        title: 'Dome-Shaped Shade Net House',
        content: 'Dome-shaped shade net house is different from the other types of net houses because of their ergonomic shape. It also requires little to no maintenance, making it an excellent choice for people who are environmentally conscious.'
      },
      {
        title: 'Flat-Roof Shade Net House',
        content: 'Flat-roof shade net houses are an innovative way to control light intensity. The net house is used for the purpose of controlling how much heat and light is allowed in depending on the season or the environment.'
      }
    ],
    buttonText: 'Know more about IGPL Net House',
    image: 'https://picsum.photos/seed/shadenet_detail/800/600'
  },
  'Hydroponics': {
    title: 'IGPL Hydroponics',
    description: "IGPL's commercial hydroponic farm offers two types of hydroponic system installation namely NFT Hydroponic and Ebb & Flow Hydroponics.",
    subSections: [
      {
        title: 'NFT Hydroponics',
        content: 'NFT is a type of hydroponics that uses a nutrient film technique to grow plants. The plants are grown in a shallow channel of water and the roots are suspended in the water. The roots are constantly bathed in the nutrient solution for the plants to grow.'
      },
      {
        title: 'Ebb & Flow Hydroponics',
        content: 'Ebb & flow hydroponics is a type of hydroponics where the water is pumped from a reservoir to a growing table, then back to the reservoir. The water is pumped in a continuous cycle.'
      }
    ],
    buttonText: 'Know more about IGPL Hydroponics',
    image: 'https://picsum.photos/seed/hydroponics_detail/800/600'
  },
  'Polyhouse Automation': {
    title: 'IGPL Polyhouse Automation',
    description: 'IGPL Polyhouse Automation Systems are suitable for all types of Polyhouses from small farmers to commercial farming. With the use of Polyhouse automation, a grower can increase the yield and improve the quality of crops and minimize climate for the crop by monitoring and controlling temperature, humidity, light, and CO2 in the Polyhouse.',
    description2: "IGPL Polyhouse Automation Systems are very easy to operate and accessed via smart phone, tablet, or computer from anywhere. When it comes to Polyhouses, they are great protection from adverse weather conditions, but what many don't realize is that outside factors have a significant impact on what's happening to your plants inside the Polyhouse. There are optimal conditions that plants thrive in and finding that sweet spot can be tricky when you consider all the environmental variables including light and solar radiation, wind, atmospheric pressure, and relative humidity as well as rain and precipitation. Create the ideal environment for your plants with an automated Polyhouse.",
    buttonText: 'Know more about Polyhouse Automation',
    image: 'https://picsum.photos/seed/automation_detail/800/600'
  },
  'Hydropincs Automation': {
    title: 'IGPL Hydroponics Automation',
    description: 'IGPL Hydroponics Automation Grow Systems are a sustainable method of growing with water with savings anywhere between 70% and 90% depending on the type of plant and your grow set-up. Hydroponics is the growing of plants using substrates while delivering water, nutrients and oxygen.',
    description2: "For growers looking to optimize, modernize and grow their business for sustainable crop production - the key is automation. The overall benefits of automating your growing operation are vast and plentiful. Regardless of how you're looking to develop your growing enterprise, automation offers universal benefits that allow you to achieve your goals - and then some.",
    buttonText: 'Know more about Hydroponics Automation',
    image: 'https://picsum.photos/seed/hydro_auto_detail/800/600'
  }
};

export default function IntroSection() {
  const [activeTab, setActiveTab] = useState('Polyhouse / Greenhouse');
  const tabs = [
    'Polyhouse / Greenhouse',
    'Shade Net House',
    'Hydroponics',
    'Polyhouse Automation',
    'Hydropincs Automation'
  ];

  const content = tabData[activeTab];

  return (
    <section className="py-20 container mx-auto px-4 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Leading <span className="text-agri-green">Polyhouse Manufacturer</span> in India
          </h2>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 space-y-4"
        >
          <p>
            Innovative Greenhouse Projects LLP believes that agriculture is not only for farmers; with the right technology and training, agriculture can be for everybody.
          </p>
          <p>
            With 25+ years of experience in the Hi-Tech agricultural industry, IGPL, a polyhouse construction company, believes in offering smart farming solutions to effectively multiply your crop production while utilising limited resources.
          </p>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-gray-200 pb-4 mb-16">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-2 text-sm md:text-base font-semibold transition-all py-2 px-4 rounded-lg ${activeTab === tab ? 'text-agri-green bg-agri-green/10' : 'text-gray-500 hover:text-agri-green'}`}
          >
            {tab}
            <ChevronRight size={16} className={`${activeTab === tab ? 'rotate-90' : ''} transition-transform`} />
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-agri-green mb-8">{content.title}</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {content.description}
            </p>

            {content.subSections && (
              <div className="space-y-8">
                {content.subSections.map((sub, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 underline decoration-agri-green decoration-2 underline-offset-4">
                      {sub.title}
                    </h3>
                    <p className="text-gray-600">
                      {sub.content}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {content.description2 && (
              <p className="text-gray-600 mb-8 leading-relaxed">
                {content.description2}
              </p>
            )}

            <button className="mt-10 bg-agri-green hover:bg-agri-dark-green text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-agri-green/20">
              {content.buttonText}
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={content.image}
                alt={content.title}
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 right-6">
                <button className="bg-agri-green text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center gap-2">
                  <MessageCircle size={24} fill="currentColor" />
                  <span className="font-medium">Ask us on WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
