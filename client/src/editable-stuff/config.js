// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #000000, #481c5a, #000000, #920202, #000000",
  firstName: "Asem",
  middleName: "",
  lastName: "Basheer",
  message: " Enginner | Programmer | Full Stack Developer ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/asembasheer",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/asem.basheer/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/asem-basheer/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/asembasheer/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/asembasheer.png"),
  imageSize: 250,
  message:
    "My name is Asem Basheer. I'm passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "asembasheer",
  reposLength: 0,
  specificRepos: ['Falcons-skyscanner', 'Personal-Expenses-App', 'face-detection', 'Falcons-FoodDose', 'OnlineSchoolSystem'],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/asembasheer.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/asembasheer.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Technical Skills",
  // hardSkills: [
  //   { name: "React", value: 'https://camo.githubusercontent.com/22045498095171997ccf6a9554672519b9f67898/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f72656163742e737667' },
  //   { name: "Flutter & Dart", value: 'https://cdn.iconscout.com/icon/free/png-512/flutter-2038877-1720090.png' },
  //   { name: "JavaScript", value: 'https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png' },
  //   { name: "TypeScript", value: 'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png' },
  //   { name: "C++", value: 'https://img.icons8.com/color/452/c-plus-plus-logo.png' },
  //   { name: "HTML/CSS", value: 'https://media.discordapp.net/attachments/762721371809382421/793153790260805712/html5-css3.png' },
  //   { name: "Python", value: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png' },
  //   { name: "MongoDB", value: 'https://img.icons8.com/color/452/mongodb.png' },
  //   { name: "MySQL / PostgreSQL", value: 'https://icons-for-free.com/iconfiles/png/512/file+sql+icon-1320183612970878250.png' },
  //   { name: "django", value: 'https://icon-library.com/images/django-icon/django-icon-0.jpg' },
  //   { name: "Firebase", value: 'https://img.icons8.com/color/452/firebase.png' },
  //   { name: "Material-UI", value: 'https://material-ui.com/static/logo.png' },
  // ],
  softSkills: [
    { name: "Creativity", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Problem Solving", value: 75 },
    { name: "Organization", value: 70 },
    { name: "Adaptability", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Goal-Oriented", value: 80 },
    { name: "Positivity", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "",
  email: "eng.asem.basheer@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
