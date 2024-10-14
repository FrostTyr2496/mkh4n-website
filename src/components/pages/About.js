import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 }); // Triggers when 30% of the element is in view

  // Animation variants for fly-in effect
  const flyInVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <div className="container mx-auto mt-12 px-4 text-left">
      <h2 className="text-yellow-400 text-4xl font-bold mb-4 text-center">About Me</h2>
      <div className="flex flex-col gap-8">

        {/* Bullet Points Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
              'Tech manager by day, nature explorer in spare time.',
              'Snaps everything from galaxies to landscapes, notes and code.',
              'Proud dog dad to Hank, 13-yo cancer-surviving sniffy Bassador.',
              'Traverses the modern distracted world like an RPG game.',
              'Mixes old philosophy with new tech—and a dash of dad jokes.',
              'Always in search of the calm within the chaos.'            
          ].map((point, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={flyInVariants}
              className="text-xl"
            >
              • {point}
            </motion.div>
          ))}
        </div>

        {/* Swipe for more words */}
        <motion.p
          custom={7} // Make sure this follows after the bullet points
          initial="hidden"
          animate="visible"
          variants={flyInVariants}
          className="text-center text-lg italic text-yellow-400 mt-4"
        >
          Wanna know more? Just swipe up!
        </motion.p>

        {/* Extended Bio Section */}
        <motion.div
          ref={ref} // Reference for the in-view logic
          initial={{ opacity: 0 }} // Start hidden
          animate={isInView ? { opacity: 1 } : { opacity: 0 }} // Fade in when in view
          transition={{ duration: 1 }}
          className="text-center text-justify mx-auto md:w-3/4 lg:w-3/4"
        >
          <p className="text-xl mb-4">
            I’m Mush Khan, a software engineering manager and a lifelong explorer at heart. My journey spans across two intersecting worlds: technology and the natural landscape. By day, I lead a team at Amazon Robotics, where I thrive on solving complex problems, building systems that bridge the gap between human interaction and cutting-edge robotics. My work has always been about pushing boundaries, whether it’s improving operations or exploring how technology can enhance human life.
          </p>
          <p className="text-xl mb-4">
            But my curiosity doesn’t stop at the office. Outside of work, I immerse myself in the art of photography, using my lenses to capture the unseen perspectives of nature. Whether I’m out with my mirrorless camera for astrophotography, taking to the skies with my drone, or capturing candid landscapes with my phone, I’m always chasing a moment—an alignment between the technical and the organic.
          </p>
          <p className="text-xl mb-4">
            I’m also deeply committed to personal development, continually striving to grow in a fast-changing world. I often visualize this growth like a skill tree in a role-playing game, where each branch represents a pursuit or a passion. From mastering leadership techniques in the workplace to honing my craft in photography, music, and fitness, I believe in constantly building on the skills that make me who I am.
          </p>
          <p className="text-xl mb-4">
            Among my many passions, I have a deep bond with my dog, Hank. He has been a constant companion for over eight years and serves as a reminder of the rich, co-evolutionary bond humans and animals share—something I find deeply moving and inspiring.
          </p>
          <p className="text-xl mb-4">
            Beyond the technical and creative realms, I also seek to find balance through introspection, looking to ancient wisdom and philosophies to navigate life’s complexities. As someone intrigued by history and the human condition, I often reflect on how the past can inform and guide our future in meaningful ways.
          </p>
          <p className="text-xl mb-4">
            Thanks for stopping by my corner of the internet! Feel free to explore my work—whether it's a snapshot of the stars or a line of code connecting robots to the world. Keep an eye on this space, as there are plenty more updates (and probably some questionable jokes) coming soon.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;