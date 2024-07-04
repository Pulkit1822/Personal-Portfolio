import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Univibes",
    url: "https://github.com/Pulkit1822/Univibes",
    image: "projects/univibes.jpg",
    description: "Developed a responsive university event management application with CRUD operations and OD permissions support.",
  },
  {
    title: "Online Judge",
    url: "https://github.com/Pulkit1822/Algo-Arena",
    image: "projects/oj.jpg",
    description: "Made a Django & Python project that checks code & test cases!",
  },
  {
    title: "Portfolio",
    url: "https://github.com/Pulkit1822/Personal-Portfolio",
    image: "projects/Portfolio.jpg",
    description: "Made a personalized portfolio with React, Three.js, Blender, CSS. It's got my favorite tunes as a chill background.",
  },
  
  {
    title: "Java & JavaFX",
    url: "https://github.com/Pulkit1822/JavaJavaFX_coursework",
    image: "projects/Java.jpg",
    description: "Studied Java and JavaFX under Dr. Adarsh Patel sir, completing coursework and practicals.",
  },
  {
    title: "React JS Practice",
    url: "https://pulkit1822.github.io/Ethnus-MERN-Assignment-3/",
    image: "projects/reactjs.jpg",
    description: "Completed 6 small React JS projects to enhance practical skills and deepen understanding.",
  },
  {
    title: "OS Algorithms",
    url: "https://github.com/Pulkit1822/CSE3003-Operating_System",
    image: "projects/OS.jpg",
    description: "Studied Operating Systems under Dr. J. Subhash Chandra Bose sir, completing coursework and practicals.",
  },
  
  
  {
    title: "Pothole DS",
    url: "https://github.com/Pulkit1822/Pothole-Detection-System",
    image: "projects/pothole.jpg",
    description: "Made extensive analysis of pothole detection models, identifying top performer.",
  },
  {
    title: "Harmony Events",
    url: "https://github.com/Pulkit1822/Harmony-Events",
    image: "projects/HE.png",
    description: "Simplifying concerts with an elegant, unified platform for seamless experiences.",
  },
  {
    title: "Ticklus",
    url: "https://github.com/Pulkit1822/Ticklus",
    image: "projects/ticklus.jpg",
    description: "Developed smart app streamlining online booking for museums/monuments, enhancing efficiency. (SIH'22 project)",
  },
];
const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(0);

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 2.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
