import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Masters-Thesis-Generative-AI-Paradoxes",
    des: "Conducted comprehensive literature reviews on AI paradoxes, emphasizing on Generative AI, creativity paradox, bias amplification vs feedback loop and productivity vs realism. Formulated those paradoxes, designing and executing controlled experiments to demonstrate paradoxes' impact on decision-making processes in organizational context and analyzing outcomes.",
    img: "/p1.svg",
    iconLists: ["/Python.png", "/jupyter.png"],
    link: "/ui.earth.com",
    live: "https://github.com/AnugyaSahu/Masters-Thesis-Generative-AI-Paradoxes?tab=readme-ov-file#masters-thesis-generative-ai-paradoxes",
    year: "2024",
  },
  {
    id: 2,
    title: "Explainable Machine learning Exercises",
    des: "Random Forest predicts, Adjusted R2 adjusts; Lasso effect plot; test interactions, linear regression assumptions; logistic regression, odds ratio; decision trees, MDI; RuleFit, CART rules in Lasso; support attribute; PDP, ICE, M-plot, ALE, permutation importance; local post-hoc, counterfactuals, LIME, SHAP, Kernel SHAP.",
    img: "/RF3.png",
    iconLists: ["/Python.png", "/jupyter.png"],
    link: "/ui.yoom.com",
    live: "https://github.com/AnugyaSahu/Explainable-Machine-Learning",
    year: "2023",
  },
  {
    id: 3,
    title: "Combinatorial-problems-with-Transformers",
    des: "Finding an optimal solution to Travelling Salesman Problem",
    img: "/TS.png",
    iconLists: ["/Python.png", "/jupyter.png"],
    link: "/ui.aiimg.com",
    live: "https://github.com/AnugyaSahu/Combinatorial-problems-with-Transformers",
    year: "2023",
  },
  {
    id: 4,
    title: "DL-Scratch-and-Solar-Panel-Image-Project",
    des: "Feed forward Neural Networks, Convolutional Neural Networks, Recurrent Neural Networks written using numpy library including Pooling layers, Activation functions, Optimization layers, Batch normalization from scratch.",
    img: "/FN.webp",
    iconLists: ["/Python.png", "/jupyter.png"],
    link: "/ui.apple.com",
    live: "https://github.com/AnugyaSahu/DL-Scratch-and-Solar-Panel-Image-Project",
    year: "2023",
  },
  {
    id: 5,
    title: "Data-Science-Survival-Skills-Turtle-project",
    des: "In Python, turtle graphics provides a representation of a physical “turtle” (a little robot with a pen) that draws on a sheet of paper on the floor.",
    img: "/TG.jpg",
    iconLists: ["/Python.png", "/jupyter.png"],
    link: "/ui.apple.com",
    live: "https://github.com/AnugyaSahu/Data-Science-Survival-Skills-Turtle-project",
    year: "2022",
  },
  {
    id: 6,
    title: "GitHub Repository",
    des: "Explore all the projects that I have done till date.",
    img: "/GH.webp",
    iconLists: ["/Python.png", "jupyter.png"],
    link: "/ui.apple.com",
    live: "https://github.com/AnugyaSahu?tab=repositories",
    year: "2024",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Werkstudent in Data Science - Siemens Healthineers",
    desc: "lorem ispaofonnaiubfuvuheafuvuvacibuavsuyvhvfauvyvyuvidi",
    className: "md:col-span-2",
    thumbnail: "/SH.svg.png",
    date: "Apr 2024 - Present",
  },
  {
    id: 2,
    title: "FAU Erlangen - Nürnberg",
    desc: "Student Tutor : Tutor for the Knowledge Discovery Databases module",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/FAU.png",
    date: "Feb 2024 - Present",
  },
  {
    id: 3,
    title: "Werkstudent Analyst - Siemens AG ",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/Siemens-logo.svg.png",
    date: "Mar 2023 - Mar 2024",
  },
  {
    id: 4,
    title: "Application Development Associate - Accenture",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/Accenture.png",
    date: "Mar 2022 - Sept 2022",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/anugyasahu",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://github.com/anugyasahu",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/anugya-sahu-806b2b186/",
  },
];
