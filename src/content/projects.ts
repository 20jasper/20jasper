type Image = {
  mediaType: "image";
  altText: string;
  src: string;
};

/** `string` if url exists, `null` otherwise */
type ProjectUrl = string | null;

type Project = Readonly<{
  media: Image;
  gitHubUrl: ProjectUrl;
  demoUrl: ProjectUrl;
  projectName: string;
  description: string;
  techUsed: string[];
}>;

export const projects: ReadonlyArray<Project> = [
  {
    projectName: "Portfolio Site Astro",
    demoUrl: "https://jacobasper.com/",
    description: "Jacob Asper's web development portfolio—now in Astro!",
    media: {
      mediaType: "image",
      src: "src/images/portfolioSiteAstro.webp",
      altText:
        "The home page of five line rhyme. There are a few user–submitted poems to readA website showcasing projects, social media links and an about me section",
    },
    techUsed: ["TypeScript", "Astro", "CSS"],
    gitHubUrl: "https://github.com/20jasper/portfolio-site-astro",
  },
  {
    projectName: "Interview Question API GraphQL",
    demoUrl: "https://full-stack-interview-prep.up.railway.app/",
    description: "Query full stack interview questions by category",
    media: {
      mediaType: "image",
      src: "https://github.com/bytesbybianca/readme-assets/raw/main/project-images/fullStackInterviewQuestions.gif?raw=true",
      altText:
        "An animation of a button being clicked and a question showing up",
    },
    techUsed: ["Rust", "GraphQL", "axum"],
    gitHubUrl: "https://github.com/20jasper/interview_question_api_graphql",
  },
  {
    projectName: "Five Line Rhyme",
    demoUrl: "https://five-line-rhyme.up.railway.app/",
    description: "A collection of poems only five lines long",
    media: {
      mediaType: "image",
      src: "https://user-images.githubusercontent.com/78604367/192409376-b33d90a4-9132-434e-bb98-b6867c74443b.png",
      altText:
        "The home page of five line rhyme. There are a few user–submitted poems to read",
    },
    techUsed: [
      "JavaScript",
      "CSS",
      "Node",
      "Express",
      "Pug",
      "MongoDB",
      "Mongoose",
    ],
    gitHubUrl: "https://github.com/20jasper/five-line-rhyme",
  },
  {
    projectName: "Budget Tracker",
    demoUrl: "https://budget-tracker.up.railway.app/",
    description: "Track your monthly expenses",
    media: {
      mediaType: "image",
      src: "https://user-images.githubusercontent.com/78604367/188524492-5c3a6633-335d-4511-ac35-59dc073f138c.png",
      altText:
        "A budget planner with a few test expenses. There is a form to add a new expense",
    },
    techUsed: [
      "JavaScript",
      "CSS",
      "HTML",
      "Node",
      "Express",
      "EJS",
      "MongoDB",
      "Mongoose",
    ],
    gitHubUrl: "https://github.com/20jasper/budget-tracker",
  },
];
