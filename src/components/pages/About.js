import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto mt-12 px-4 text-left">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="md:w-1/2">
          <h2 className="text-yellow-400 text-4xl font-bold mb-4">About {'{'}</h2>
          <p className="text-xl mb-4">
            Software engineer with over 7 years of experience. Part-time wizard & proud bug developer.
          </p>
          <p className="text-yellow-400 italic">I use Arch btw</p>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2">
          <p className="text-xl mb-4">
            Passionate about computer science since childhood, I've spent over 7 years refining my skills through diverse projects.
            Ever since I was 9 years old, I've loved computer science. This interest has grown into a full career where I keep learning and staying up-to-date with technology.
          </p>
          <p className="text-xl">
            I like to learn by doing, not watching tutorials. Over the years, I have independently developed numerous open-source projects to experiment with a wide range of technologies.
          </p>
        </div>
      </div>
      <h2 className="text-yellow-400 text-4xl font-bold mt-8">{'}'}</h2>
    </div>
  );
};

export default About;