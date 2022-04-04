  /* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "  Six",
  title: "Hi All, I'm Six",
  subTitle: emoji(
    "An Simple Discord Bot Dev, I Like To Make A Discord Bot For You"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SixOP",
  mail: "malviyadhairya89@icloud.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Crazy Boi Who Is Freaking Interested In Coding",
  skills: [
    emoji(
      "⚡ Develop Discord Bots"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Your School Name",
      logo: require("./assets/images/lfes.png"),
      subHeader: "Computer Science Student",
      duration: "January 2020 - January 2021",
      desc: "Participated in the Programming Challenge ",
      descBullets: [
        "I Love Coding In Schools's Computer",
        "Learning HTML In School 😂"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Owner",
      company: "SixDevelopment",
      companylogo: require("./assets/images/Six.png"),
      date: "April-2022",
      desc: "Programming For SixDevelopment."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some Normal Discord Stuffs I Coded In Free Time",
  projects: [
    {
      image: require("./assets/images/Rabbit.png"),
      projectName: "Rabbit",
      projectDesc: "Rabbit Is A Simple Discord Bot",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sixop.github.io/Rabbit-DashBoard/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Six.png"),
      projectName: "SixBot",
      projectDesc: "SixBot Is  A Discord Bot!",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/SixDevelopment/SixBot/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Developer Program Member",
      subtitle:
        "Member Of Github Programming Team Member.",
      image: require("./assets/images/github.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/NotSaksh"
        },
      ]
    },
    {
      title: "Discord Bot Developer",
      subtitle:
        "Member Of Discord Developing Company.",
      image: require("./assets/images/discord.png"),
      footerLink: [
        {
          name: "View Discord Server",
          url: "https://discord.gg/gkunquMXzp"
        }
      ]
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.w3schools.com/",
      title: "How To Learn Coding?",
      description:
        "You Can Learn Coding From Diffent Sites / Videos But I Suggest To Use W3 School."
    },
    {
      url: "https://discord.gg/7YtDujvD",
      title: "Why React Is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji(
    "I Love To Share My Limited Knowledge 🙄"
  ),

  talks: [
    {
      title: "Learn JavaScript / HTML",
      subtitle: "Chandragadhi Birtamode 57204",
      slides_url: "https://bit.ly/notsaksh",
      event_url: "https://www.facebook.com/sakshyam.baral.311/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

 const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss A Project Or Just Want To Say Hi? My Inbox Is Open For All.",
  email_address: "malviyadhairya89@icloud.com"
};

// Twitter Section

const twitterDetails = {
  userName: "SixOP", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
