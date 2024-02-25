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
    projectName: "Leptos Tac Toe",
    demoUrl: "https://20jasper.github.io/leptos-tic-tac-toe/",
    description: "Tic Tac Toe built with Rust and Leptos",
    media: {
      mediaType: "image",
      src: "src/images/leptos-tac-toe.png",
      altText: "A Tic tac toe board with the current user's token above it",
    },
    techUsed: ["Rust", "Leptos"],
    gitHubUrl: "https://github.com/20jasper/leptos-tic-tac-toe",
  },
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
];
