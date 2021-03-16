import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bryson Nelson | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello World, I'm",
  name: 'Bryson.',
  subtitle: 'I build web apps in San Diego.',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'aboutproile.jpg',
  paragraphOne:
    "I've always loved problem solving and puzzle. Development at its core is just breaking a problem down into its smallest components, and then figuring out how to make it all work together.",
  paragraphTwo:
    "I have had the opportunity to travel the world and am extremely passionate about culture and diversity. I've been lucky enough to pick up Danish, Spanish, and Portuguese along the way.",
  paragraphThree:
    "Along the way, I've found that diversity really fuels software development in many ways. The inclusion of ideas and experiences of a variety of people can help bring about different ways of tackling problems. The collaboration of ideas, opinions, and knowledge is one of my favorite parts of building software.",
  // resume: '../images/brysonNelsonResumePDF.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'gardenbuddy.png',
    title: 'Garden Buddy',
    info:
      "GardenBuddy offers users growing information on a variety of hundreds flowers, vegetables, herbs and fruits based on your location (hardiness zone) and the best times of year to plant them. You can save your real plants to your 'Virtual Garden' with photos, plus, we'll send you water reminders so your plants are never thirsty. Happy Harvest!",
    info2: '',
    url: 'https://dry-retreat-91513.herokuapp.com/',
    repo: 'https://github.com/brysonelson/gardenbuddy', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'koolskool.png',
    title: 'Kool Skool Tool',
    info:
      'Kool Skool Tool is an attempt to simplify school attendance taking. We wanted to create a simple way for teachers to track their students. We have logins for Admins, Teachers and Parents. Admins have to ability to send a mass alert text via Twilio to all parents in the event of a school emergency. In order to see the app, login with the test credentials: peter@koolskooltool.com and the password is six zeros numerically',
    info2: '',
    url: 'https://kool-skool-tool-11235.herokuapp.com/login',
    repo: 'https://github.com/brysonelson/KoolSkool', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'barfinder.jpg',
    title: 'Bar Finder',
    info:
      'Bar Finder lets users search for different types of bars and breweries in their area. Users can save their favorite bars and also share bars they like with the community. And for those nights you feel like staying in, you can search for drink recipes as well.',
    info2: '',
    url: 'https://brysonelson.github.io/project-gpgp/',
    repo: 'https://github.com/brysonelson/project-gpgp', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Contact me below, just not too early.',
  btn: '',
  email: 'bryson.nelson1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bryson-nelson-7779a411a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/brysonelson',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
