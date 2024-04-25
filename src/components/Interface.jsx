import { motion } from "framer-motion";
import { useState } from "react";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import githubIcon from "/src/icons/gh.gif";
import codechefIcon from "/src/icons/cc.gif";
import LinkedInIcon from "/src/icons/linkedin.gif";
import LeetcodeIcon from "/src/icons/Leetcode.gif";
import codeforcesIcon from "/src/icons/Codeforces.gif";
import PinterestIcon from "/src/icons/Pinterest.gif";
import GFGIcon from "/src/icons/GFG.gif";
import musicIcon from "/src/icons/music.png";
import musicFile from "/src/music/Sunflower.mp3";
import { useForm, ValidationError } from '@formspree/react';

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto
        flex flex-col items-start justify-center
      `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

const AnimatedIcon = ({ src, alt }) => {
  const [isBreathing, setIsBreathing] = useState(false);

  const startBreathing = () => {
    setIsBreathing(true);
    if (hoverEffect) {
      cursorOutline.current.style.borderColor = "red";
      cursorOutline.current.style.backgroundColor = "transparent";
    }
  };

  const stopBreathing = () => {
    setIsBreathing(false);
    if (hoverEffect) {
      cursorOutline.current.style.borderColor = "red";
      cursorOutline.current.style.backgroundColor = "transparent";
    }
  };

  return (
    <motion.div
      className={`social-icon ${isBreathing ? "breathing" : ""}`}
      onMouseEnter={startBreathing}
      onMouseLeave={stopBreathing}
    >
      <img src={src} alt={alt} />
    </motion.div>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audio = new Audio(musicFile);

  const toggleMusic = () => {
    if (isMusicPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsMusicPlaying(false);
    } else {
      const audioElements = document.getElementsByTagName('audio');
      for (let i = 0; i < audioElements.length; i++) {
        const audioElement = audioElements[i];
        if (!audioElement.paused) {
          audioElement.pause();
          audioElement.currentTime = 0;
        }
      }
      audio.volume = 0.3;
      audio.play();
      setIsMusicPlaying(true);
    }
  };
  

  return (
    <Section>
      <div className="music-icon">
        <img
          src={musicIcon}
          alt="Music Icon"
          className={`music-icon ${isMusicPlaying ? "active" : "inactive"}`}
          onClick={toggleMusic}
          style={{
            position: "absolute",
            top: "0px",
            right: "50px",
            margin: "50px",
            opacity: isMusicPlaying ? 1 : 0.5,
          }}
        />
        
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/pulkitkmathur/" target="_blank">
          <AnimatedIcon src={LinkedInIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/Pulkit1822" target="_blank">
          <AnimatedIcon src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://leetcode.com/pulkitkumarmathur1/" target="_blank">
          <AnimatedIcon src={LeetcodeIcon} alt="LeetCode" />
        </a>
        <a href="https://www.codechef.com/users/pulkitmathur18" target="_blank">
          <AnimatedIcon src={codechefIcon} alt="CodeChef" />
        </a>
        <a href="https://codeforces.com/profile/pulkitkumarmathur1" target="_blank">
          <AnimatedIcon src={codeforcesIcon} alt="Codeforces" />
        </a>
        <a href="https://auth.geeksforgeeks.org/user/pulkitkmathur/practice/" target="_blank">
          <AnimatedIcon src={GFGIcon} alt="GeeksforGeeks" />
        </a>
        <a href="https://in.pinterest.com/pulkitkumarmathur/" target="_blank">
          <AnimatedIcon src={PinterestIcon} alt="Pinterest" />
        </a>
      </div>
      <h1> 
        <span role="img" aria-label="wave emoji" className="wave-emoji">👋</span>
        <span className="emoji-gap"></span>
        <span className="font-normal" style={{ fontSize: '25px' }} >Hey, I'm</span> 
        <br />
        <span className="px-1" style={{ fontFamily: 'Calligraphy', fontSize: '70px' }}>
          <span className="font-bold" style={{fontFamily: 'Calligraphy'}}>Pulkit Mathur</span>
        </span>
      </h1>
      <motion.p
        className="text-lg text-black-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        <span className="font-custom" style={{ fontFamily: 'Roman', fontSize: '25px' }}>
          Pre-Final year CSE Undergrad
          <br />
          AWS Certified Cloud Practitioner
          <br />
          Competitive Programmer
          <br />
          Full-Stack Web Developer
          </span>

      </motion.p>
      <motion.button
        onClick={() => setSection(3)}
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "C++ & Java",
    level: 60,
  },
  {
    title: "HTML & CSS",
    level: 70,
  },
  {
    title: "Threejs / React Three Fiber",
    level: 50,
  },
  {
    title: "JavaScript",
    level: 45,
  },
  {
    title: "Nodejs",
    level: 30,
  },
];
const languages = [
  {
    title: "DSA",
    level: 80,
  },
  {
    title: "Machine Learning",
    level: 30,
  },
  {
    title: "SQL",
    level: 40,
  },
  {
    title: "Git",
    level: 50,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold text-white">Skills</h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-5xl font-bold mt-10 text-white">Other Skills</h2>
          <div className=" mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-100"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-5xl font-bold">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

function ContactForm() {
  const [state, handleSubmit] = useForm("mleyddkz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  )
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mleyddkz");
  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
        {state.succeeded ? (
          <motion.p
            className="text-purple-900 text-center glow-effect"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              textShadow: "0 0 8px #FFD700",
            }}
            transition={{
              duration: 1,
            }}
          >
            <p>Thank you for your message. 😊😊</p> <p>I will be in touch soon regarding next steps.</p>
          </motion.p>

        ) : (
          <form onSubmit={handleSubmit}>
            <label for="name" className="font-medium text-gray-900 block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <button
              disabled={state.submitting}
              className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};