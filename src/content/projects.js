import React from 'react'

import Kiosk from '../assets/projects/code/kiosk.jpg'
import Encompass from '../assets/projects/code/encompass.png'
import Marine from '../assets/projects/code/marine.jpg'
import Snowpea from '../assets/projects/code/snowpea.jpg'
import Vision from '../assets/projects/code/vision.png'

export const PROJECTS =
[
  {
    content: ["This was a client project for Westfield Lab that I was working on at Yeti."+
    " The app was built for a big touchscreen directory at Westfield Malls, specifically for"+
    " the one at World Trade Center in New York."+
    " Westfield's Digital Directory allows users to find"+
    "destinations located in Westfield's shopping centres."+
    " Shoppers can browse deals, events, movie times, restaurants,"+
    " and retailers. Localized transit information is also available.", <br />,
    "When Yeti took over developing the app from the client, it was initially"+
    " written in Famous JS but then the team decided to rewrite it in React. "+
    "I was developing the front end part and working closely with the PM and Designer from Westfield Lab,"+
    " as well as other developers there who wrote the API."],
    images: [Kiosk],
    name: "digital directory",
    subtitle: "Yeti, 2016",
    tools: ["react", "es6", "sass", "grunt"],
    url: ""
  },
  {
    content: ["Encompass is another client project that I took part in development"+
      " when I was working at Yeti."+
      " The app is a cloud-based service designed to complement metering systems "+
      "designed by EKM Metering. From user's free encompass account they can "+
      "monitor any number of meters, in any number of locations around the world, "+
      "from one online interface.", <br />,
      "The project was already 2 year old when I started"+
      " working on it and was initially written in Angular 1 on the front end."+
      " I was in charge of implementing new features and gradually moving the old codebase"+
      " from Angular 1 to Angular 2 and Typescript.", <br />,
      <a target="_blank" href="https://yeti.co/work/encompass/">
      Yeti </a>, <br />,
      <a target="_blank" href="http://www.encompass.io/">
      Encompass </a>],
    images: [Encompass],
    name: "encompass",
    subtitle: "Yeti, 2016",
    tools: ["angular 2", "typescript", "django", "sass", "jasmine"],
    url: "https://yeti.co/work/encompass/"
  },
  {
    content: ["Vision is a small ML algorithm that recognizes handwritten digits. It"+
    " was developed using Naive Bayes Net. This technique would be similar to"+
    " Linear Classifier if all probabilities were calculated in logarithmic values"+
    " instead. The training and testing data were taken from MNIST database.", <br />,
    <a target="_blank" href="https://docs.google.com/document/d/183a3CMGr9jsEGrhIKXlFjPDA-42_9KwiWvlOMFDREyw/edit">
    Research Paper </a>, <br />,
    <a target="_blank" href="https://github.com/anyatran/vision">
    Github Repo</a>
  ],
    images: [Vision],
    name: "vision",
    subtitle: "AI class, 2016",
    tools: ["python", "scipy"],
    url: "https://github.com/anyatran/vision"
  },
  {
    content: ["This was the project for Software Development class. The client, The Helmuth lab at Northeastern University Marine Science Center,"+
      " is a marine biology lab that focuses on forecasting marine ecosystems under"+
      " the immediate pressure of climate change. Their goal is to understand how"+
      " species distribution will shift with environmental change.",
      <br />,
     "The team consisted of 7 people and I was doing Front End: retreiving data from"+
     " the database and using D3 to graph it. The team's project was chose by the client for a final deploy out"+
     " of other 6 teams who were working on the same project as well.", <br />,
      <a target="_blank" href="https://docs.google.com/document/d/1rlVcaJyc-X6-kqMLjSioe4RGzbv2ss7cGlti8lVwwns/edit">
      Feasibility Report </a>, <br />,
      <a target="_blank" href="https://github.com/anyatran/vision">
      Github Repo </a>],
     images: [Marine],
     name: "robocarl",
     subtitle: "Software Development class, 2015",
     tools: ["flask", "jquery", "psql", "bootstrap", "d3.js", "jasemine"],
     url: "https://github.com/anyatran/vision"
  },
  {
    content: ["Snowpeas was developed within 48 hours at Hackbeanpot in 2015"+
      "The idea of the app is that you can browse locally for available"+
      " produce around you, grown by your neighbors in their own back"+
      " yards. It's a place where people who care deeply about organics,"+
      " sustainability, or diet can come together with personal and"+
      " community gardeners in a veggie symbiosis.", <br />,
      "The team won the Most Innovative Award at Hackbeanpot 2015", <br />,
      <a target="_blank" href="https://github.com/snowpeame/snowpeas">
      Github Repo </a>],
    images: [],
    name: "snowpeas",
    subtitle: "Hackbeanpot 2015, Most Innovative Award",
    tools: ["angular 1", "sass", "firebase", "bootstrap"],
    url: "https://github.com/snowpeame/snowpeas"
  },
];
