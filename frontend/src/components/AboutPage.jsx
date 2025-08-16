import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CaseGrid = ({ cases }) => (
  <div className="mt-16">
    <h3 className="text-2xl font-semibold mb-6">Related cases</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {cases.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <img src={c.image} alt={c.title} className="w-full h-auto rounded-lg" />
          <p className="mt-2 text-lg font-semibold">{c.title}</p>
          <p className="text-gray-700">{c.subtitle}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const SolutionAccordion = ({ item, index, activeIndex, toggle }) => (
  <div className="border-t border-gray-300">
    <button
      onClick={() => toggle(index)}
      className="w-full text-left py-8 flex justify-between items-center text-3xl lg:text-4xl font-light cursor-pointer"
    >
      {item.title}
      <span className="transition-transform duration-300">
        {activeIndex === index ? '−' : '+'}
      </span>
    </button>
    <AnimatePresence initial={false}>
      {activeIndex === index && (
        <motion.div
          initial={{ opacity: 0, height: 0, scale: 0.98 }}
          animate={{ opacity: 1, height: 'auto', scale: 1 }}
          exit={{ opacity: 0, height: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden"
        >
          <div className="py-10 lg:flex gap-12 border-t border-gray-200">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:w-1/2 space-y-6 text-xl leading-relaxed text-left"
            >
              {item.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:w-1/2 mt-8 lg:mt-0 text-left"
            >
              <ul className="list-disc pl-5 space-y-4 text-xl">
                {item.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          </div>
          <CaseGrid cases={item.cases} />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const solutions = [
  {
    title: 'Brand strategy',
    description: [
      "Crafting sustainable brand strategies with real-life applicability using robust proprietary tools allows us to translate original ideas into uniquely impactful brand strategies defining the future of brands across all dimensions.",
      "Our strategists craft sustainable brand experiences, create memorable product and company names and engage on brand architecture systems to help businesses go to market efficiently."
    ],
    bullets: [
      'Positioning',
      'Purpose, mission, vision',
      'Naming',
      'Market and brand equity insights',
      'Brand portfolio and architecture',
      'Employer branding',
      'Messaging and claims'
    ],
    cases: [
      { title: 'Cuisinart', subtitle: 'Brand strategy, Positioning', image: 'https://ik.imagekit.io/your_path/cuisinart.jpg' },
      { title: 'INNIO', subtitle: 'Web design, Brand communications (inter)', image: 'https://ik.imagekit.io/your_path/innio.jpg' }
    ]
  },
  {
    title: 'Brand creation',
    description: [
      "We bring brands to life from the ground up. Whether you’re launching something new or evolving an existing identity, we build brands that connect emotionally and perform commercially.",
      "From naming and identity to full brand systems, we create everything needed to tell your story beautifully and consistently."
    ],
    bullets: [
      'Brand identity design',
      'Naming & tagline',
      'Visual systems & assets',
      'Tone of voice & messaging',
      'Design systems',
      'Launch kits'
    ],
    cases: [
      { title: 'Loop', subtitle: 'Brand identity, Naming', image: 'https://ik.imagekit.io/your_path/loop.jpg' },
      { title: 'Aviate', subtitle: 'Full brand creation', image: 'https://ik.imagekit.io/your_path/aviate.jpg' }
    ]
  },
  {
    title: 'Brand experience',
    description: [
      "We create brand experiences that engage across physical, digital, and human touchpoints. From packaging to retail and digital interaction, we help your brand come to life across every moment.",
      "Our experiences don’t just look good — they work hard to drive real impact."
    ],
    bullets: [
      'Retail & environmental design',
      'Packaging design',
      'User experience (UX)',
      'Interactive storytelling',
      'Service design',
      'Content creation'
    ],
    cases: [
      { title: 'PlayOn', subtitle: 'Retail & digital UX', image: 'https://ik.imagekit.io/your_path/playon.jpg' },
      { title: 'Greenlife', subtitle: 'Packaging, storytelling', image: 'https://ik.imagekit.io/your_path/greenlife.jpg' }
    ]
  },
  {
    title: 'Brand activation',
    description: [
      "Your brand lives in the world when it activates — in campaigns, culture, and conversation. We launch brands through integrated activation strategies and high-impact campaigns.",
      "Our work drives awareness, engagement, and loyalty where it matters most."
    ],
    bullets: [
      'Campaign strategy & creative',
      'Digital marketing assets',
      'Social storytelling',
      'Out-of-home (OOH)',
      'Influencer & partnerships',
      'Content & film'
    ],
    cases: [
      { title: 'Nova', subtitle: 'Campaign, content', image: 'https://ik.imagekit.io/your_path/nova.jpg' },
      { title: 'VivaFit', subtitle: 'Social campaigns', image: 'https://ik.imagekit.io/your_path/vivafit.jpg' }
    ]
  },
  {
    title: 'Branded AI',
    description: [
      "Your brand’s next evolution is AI-powered. At Smari, we build it around your brand’s DNA.",
      "Smarter, more consistent experiences that feel uniquely like your brand."
    ],
    bullets: [
      'Branded AI Personality',
      'Brand Assistant',
      'Brand Writer',
      'Brand Check',
      'AI Brand Level Support'
    ],
    cases: [
      { title: 'SynthAI', subtitle: 'AI Brand Personality', image: 'https://ik.imagekit.io/your_path/synthai.jpg' },
      { title: 'Promptify', subtitle: 'Conversational AI Identity', image: 'https://ik.imagekit.io/your_path/promptify.jpg' }
    ]
  }
];

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="md:mr-56 lg:mr-80 pt-[96px]">
      <section className="relative w-full p-0 m-0">
        <div className="absolute inset-0 bg-metadesign-red w-full h-full z-0" />
        <div className="relative z-10 text-white py-32 px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-left"
          >
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
              We make businesses
              <br />
              the best they can be
            </h1>
            <p className="text-xl lg:text-2xl font-light max-w-3xl">
              We are a creative brand consultancy. We’ve been collaborating with leading
              organizations to solve brand and business challenges since 1979. Our team
              across eight locations uses the power of creativity to transform businesses
              for the better.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-6xl font-light mb-14"
        >
          Our core solutions
        </motion.h2>

        {solutions.map((item, index) => (
          <SolutionAccordion
            key={index}
            item={item}
            index={index}
            activeIndex={activeIndex}
            toggle={toggle}
          />
        ))}
      </section>
    </div>
  
  );
};

export default AboutPage;
