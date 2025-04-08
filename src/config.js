// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "Dmitrii173173";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  " I studied Machine Learning and Artificial Intelligence during my Master's program at Lanzhou University of Technology, where I explored a wide range of subjects including algorithms, matrix theory, and software architecture. This academic journey sparked my interest in scientific research and inspired me to pursue a PhD. I am passionate about becoming a researcher and contributing to the field through high-quality publications in international journals. I enjoy solving complex problems, learning new technologies, and applying them to real-world challenges. My goal is to advance knowledge in computer science and make meaningful contributions to the research community.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="logos:pytorch" className="display-4" />,
    name: "PyTorch",
  },
  {
    id: 2,
    skill: <Icon icon="logos:tensorflow" className="display-4" />,
    name: "TensorFlow",
  },
  {
    id: 3,
    skill: <Icon icon="logos:machine-learning" className="display-4" />,
    name: "Machine Learning",
  },
  {
    id: 4,
    skill: <Icon icon="logos:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 5,
    skill: <Icon icon="logos:nvidia-cuda" className="display-4" />,
    name: "CUDA",
  },
  {
    id: 6,
    skill: <Icon icon="logos:jupyter" className="display-4" />,
    name: "Jupyter Notebook",
  },
  {
    id: 7,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];


// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
// export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
export const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL;

// Footer icons theme (light or dark)
export const footerTheme = "dark";
