import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "As a Data Scientist, I am experienced in state-of-the-art technologies and working independently. I strive to get actionable insights for strategic decision-making.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full opacity-20",
    titleClassName: "justify-end",
    img: "/DS.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "My Technical Skills Includes",
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Currently Learning German at B2",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "Scared.png",
    spareImg: "",
  },

  {
    id: 4,
    title: "Currently working on Generative AI and Diffusion models",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName:
      "absolute right-0 bottom-0 opacity-30 sm:opacity-90 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/CropCode.jpg",
    spareImg: "/grid.svg",
  },
  {
    id: 5,
    title: "Do you want to connect over a virtual meeting?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
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
    name: "Power-BI",
    img: "/apps/PB.svg",
  },
  {
    id: 2,
    name: "Excel",
    img: "/apps/Excel.svg",
  },
  {
    id: 3,
    name: "Azure",
    img: "/apps/Azure.svg",
  },
  {
    id: 4,
    name: "Matlab",
    img: "/apps/Matlab.png",
  },
  {
    id: 5,
    name: "Tableau",
    img: "/apps/TB.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Werkstudent in Data Science - Siemens Healthineers",
    desc: "Project - Model Order Reduction with Deep Neural Networks",
    className: "md:col-span-2",
    thumbnail: "/SH.svg.png",
    date: "Apr 2024 - Present",
  },
  {
    id: 2,
    title: "Student Tutor - FAU Erlangen-Nuremberg",
    desc: "Module - Knowledge discovery in databases in Department of Informatik",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/FAU2.svg",
    date: "Feb 2024 - Present",
  },
  {
    id: 3,
    title: "Werkstudent Analyst - Siemens AG ",
    desc: "Projects - Sustainability project, Knowledge graphs",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/Siemens-logo.svg.png",
    date: "Mar 2023 - Mar 2024",
  },
  {
    id: 4,
    title: "Application Development Associate - Accenture",
    desc: "Developed and maintained backend framework using C# and Microsof SQL Server",
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
    img: "/LC.svg",
    link: "https://leetcode.com/u/mas197067/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/anugya-sahu-806b2b186/",
  },
];

export const projects2 = {
  "2024": [
    {
      id: 1,
      title: "Masters-Thesis-Generative-AI-Paradoxes",
      des: "Conducted comprehensive literature reviews on AI paradoxes, emphasizing on Generative AI, creativity paradox, bias amplification vs feedback loop and productivity vs realism. Formulated those paradoxes, designing and executing controlled experiments to demonstrate paradoxes' impact on decision-making processes in organizational context and analyzing outcomes.",
      img: "/Code.jpg",
      iconLists: ["/Python.png", "/jupyter.png"],
      link: "/ui.earth.com",
      live: "https://github.com/AnugyaSahu/Masters-Thesis-Generative-AI-Paradoxes?tab=readme-ov-file#masters-thesis-generative-ai-paradoxes",
      year: "2024",
    },
  ],
  "2023": [
    {
      id: 1,
      title: "Explainable Machine learning Exercises",
      des: "Random Forest predicts, Adjusted R2 adjusts; Lasso effect plot; test interactions, linear regression assumptions; logistic regression, odds ratio; decision trees, MDI; RuleFit, CART rules in Lasso; support attribute; PDP, ICE, M-plot, ALE, permutation importance; local post-hoc, counterfactuals, LIME, SHAP, Kernel SHAP.",
      img: "/RF3.png",
      iconLists: ["/Python.png", "/jupyter.png"],
      link: "/ui.yoom.com",
      live: "https://github.com/AnugyaSahu/Explainable-Machine-Learning",
      year: "2023",
    },
    {
      id: 2,
      title: "Combinatorial-problems-with-Transformers",
      des: "Finding an optimal solution to Travelling Salesman Problem",
      img: "/TS.png",
      iconLists: ["/Python.png", "/jupyter.png"],
      link: "/ui.aiimg.com",
      live: "https://github.com/AnugyaSahu/Combinatorial-problems-with-Transformers",
      year: "2023",
    },
    {
      id: 3,
      title: "DL-Scratch-and-Solar-Panel-Image-Project",
      des: "Feed forward Neural Networks, Convolutional Neural Networks, Recurrent Neural Networks written using numpy library including Pooling layers, Activation functions, Optimization layers, Batch normalization from scratch.",
      img: "/FN.webp",
      iconLists: ["/Python.png", "/jupyter.png"],
      link: "/ui.apple.com",
      live: "https://github.com/AnugyaSahu/DL-Scratch-and-Solar-Panel-Image-Project",
      year: "2023",
    },
  ],
  "2022": [
    {
      id: 1,
      title: "Visualizations",
      des: "Visualizations are a crucial aspect of data analysis and communication. They help to understand complex data, identify patterns, and convey insights effectively.",
      img: "/Vz.png",
      iconLists: ["/Python.png", "/jupyter.png"],
      link: "/ui.apple.com",
      live: "https://github.com/AnugyaSahu/Visualizations",
      year: "2022",
    },
    {
      id: 2,
      title: "Emojify",
      des: "As an exercise of NLP course, the project uses word vector representations to build an Emojifier.The emojifier can automatically turn this into: 'Congratulations on the promotion! 👍 Let's get coffee and talk. ☕️ Love you! ❤️'",
      img: "/Emojify.png",
      iconLists: ["/Python.png", "/jupyter.png"],
      link: "/ui.apple.com",
      live: "https://github.com/AnugyaSahu/Emojify",
      year: "2022",
    },
    {
      id: 3,
      title: "Plotly-Express-Animated-plots",
      des: "IPlotly Express is a high-level interface to Plotly, which is a popular data visualization library in Python. Plotly Express simplifies the process of creating interactive and complex visualizations.",
      img: "/Ploty.png",
      iconLists: ["/Python.png", "/jupyter.png"],
      link: "/ui.apple.com",
      live: "https://github.com/AnugyaSahu/Plotly-Express-Animated-plots",
      year: "2022",
    },
  ],
};
