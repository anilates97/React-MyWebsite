import React from "react";
import movieScience1 from "../../assets/img/MovieScience/1.png";
import movieScience2 from "../../assets/img/MovieScience/2.png";

import movieScience4 from "../../assets/img/MovieScience/4.png";
import movieScience5 from "../../assets/img/MovieScience/5.png";
import movieScience6 from "../../assets/img/MovieScience/6.png";
import movieScience7 from "../../assets/img/MovieScience/222.png";

import expPlace1 from "../../assets/img/explore-place/1.png";
import expPlace2 from "../../assets/img/explore-place/2.png";
import expPlace3 from "../../assets/img/explore-place/3.png";
import expPlace4 from "../../assets/img/explore-place/4.png";
import expPlace5 from "../../assets/img/explore-place/5.png";

import projBitirme1 from "../../assets/img/bitirmeP/1.png";
import projBitirme2 from "../../assets/img/bitirmeP/2.png";
import projBitirme3 from "../../assets/img/bitirmeP/3.png";
import projBitirme4 from "../../assets/img/bitirmeP/4.png";
import projBitirme5 from "../../assets/img/bitirmeP/5.png";
import projBitirme6 from "../../assets/img/bitirmeP/6.png";
import projBitirme7 from "../../assets/img/bitirmeP/7.png";
import projBitirme8 from "../../assets/img/bitirmeP/8.png";
import projBitirme9 from "../../assets/img/bitirmeP/9.png";
import projBitirme10 from "../../assets/img/bitirmeP/10.png";

import adoBilet from "../../assets/img/adoBilet/AdoBilet.png";

import adoBilet1 from "../../assets/img/adoBilet/1.png";
import adoBilet2 from "../../assets/img/adoBilet/2.png";

import adoBilet3 from "../../assets/img/adoBilet/3.png";
import adoBilet4 from "../../assets/img/adoBilet/4.png";

import adoBilet6 from "../../assets/img/adoBilet/6.png";
import adoBilet7 from "../../assets/img/adoBilet/7.png";
import adoBilet8 from "../../assets/img/adoBilet/8.png";
import adoBilet9 from "../../assets/img/adoBilet/9.png";
import adoBilet10 from "../../assets/img/adoBilet/10.png";

import eCommerce1 from "../../assets/img/E-commerce/1.png";
import eCommerce2 from "../../assets/img/E-commerce/2.png";
import eCommerce3 from "../../assets/img/E-commerce/3.png";
import eCommerce4 from "../../assets/img/E-commerce/4.png";
import eCommerce5 from "../../assets/img/E-commerce/5.png";
import eCommerce6 from "../../assets/img/E-commerce/6.png";
import eCommerce7 from "../../assets/img/E-commerce/7.png";
import eCommerce8 from "../../assets/img/E-commerce/8.png";
import eCommerce9 from "../../assets/img/E-commerce/9.png";
import eCommerce10 from "../../assets/img/E-commerce/10.png";
import fastPizza1 from "../../assets/img/fastPizzaUdemy/1.png";
import fastPizza2 from "../../assets/img/fastPizzaUdemy/2.png";
import fastPizza3 from "../../assets/img/fastPizzaUdemy/3.png";
import fastPizza4 from "../../assets/img/fastPizzaUdemy/4.png";
import fastPizza5 from "../../assets/img/fastPizzaUdemy/5.png";
import fastPizza6 from "../../assets/img/fastPizzaUdemy/6.png";

import estate1 from "../../assets/img/estate/1.png";
import estate2 from "../../assets/img/estate/2.png";
import estate3 from "../../assets/img/estate/3.png";
import estate4 from "../../assets/img/estate/4.png";
import estate5 from "../../assets/img/estate/5.png";
import estate6 from "../../assets/img/estate/6.png";
import estate7 from "../../assets/img/estate/7.png";
import estate8 from "../../assets/img/estate/8.png";
import estate9 from "../../assets/img/estate/9.png";

import foodOrder1 from "../../assets/img/foodOrder/1.png";
import foodOrder2 from "../../assets/img/foodOrder/2.png";
import foodOrder3 from "../../assets/img/foodOrder/3.png";
import foodOrder4 from "../../assets/img/foodOrder/4.png";
import foodOrder5 from "../../assets/img/foodOrder/5.png";
import foodOrder6 from "../../assets/img/foodOrder/6.png";
import foodOrder7 from "../../assets/img/foodOrder/7.png";

import reactImg from "../../assets/img/react-javascript-js-framework-facebook-svgrepo-com.svg";

export const projects = [
  {
    id: 1,
    title: "AdoBilet & Midlevel Bootcamp",
    type: "Design & Full Stack Web Development",
    imgUrl: [
      adoBilet,
      adoBilet1,
      adoBilet2,

      adoBilet3,
      adoBilet4,
      adoBilet6,
      adoBilet7,
      adoBilet8,
      adoBilet9,
      adoBilet10,
    ],
    description:
      "As a team, I spearheaded the entire backend, admin panel, and a significant portion of the frontend within our developed platform. This platform offers filtering options based on date, event name, and location, allowing users to browse through events. Additionally, users can access past events, share events, and utilize Google Maps integration to visualize event locations on a map. One of the most challenging aspects of this project was the development of the admin panel.",
    mainlyUsedTechnologies: [
      {
        name: "React",
        img: reactImg,
      },
      {
        name: "Redux",
        img: "https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png",
      },
      {
        name: "Axios",
        img: "https://axios-http.com/assets/logo.svg",
      },
      {
        name: "Formik",
        img: "https://static-00.iconduck.com/assets.00/formik-icon-1024x1024-deyd4zqw.png",
      },
      {
        name: "React Router",
        img: "https://www.svgrepo.com/show/354262/react-router.svg",
      },
      {
        name: "Tailwind",
        img: "https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg",
      },
      {
        name: "GMaps",
        img: "https://e7.pngegg.com/pngimages/27/774/png-clipart-google-maps-google-i-o-logo-map-icon-google-map-logo-text-sign.png",
      },
    ],
  },

  {
    id: 2,
    title: "Explore Place & React Native",
    type: "Design & Mobile Development",
    imgUrl: [expPlace1, expPlace2, expPlace3, expPlace4, expPlace5],
    description:
      "The mobile application developed with React Native offers category-based venue retrieval and filtering with Google Maps integration, detailed venue pages, and venue sharing. Soon, a feature for adding favorites will also be added.",
    mainlyUsedTechnologies: [
      {
        name: "React Native",
        img: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
      },
      {
        name: "React Navigation",
        img: "https://avatars.githubusercontent.com/u/29647600?s=280&v=4",
      },
      {
        name: "Axios",
        img: "https://axios-http.com/assets/logo.svg",
      },
      {
        name: "Expo",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeo2BMhXHwShI7vdjOZ8X-LQ7-qL_GuDRQgmn3em9IFA&s",
      },
      {
        name: "React Native Maps",
        img: "https://aboutreact.com/wp-content/uploads/2018/09/react_native_map-1.png",
      },
    ],
  },

  {
    id: 3,
    title: "Food Order && React Native",
    type: "Design & Mobile Development",
    imgUrl: [
      foodOrder1,
      foodOrder2,

      foodOrder3,
      foodOrder4,
      foodOrder5,
      foodOrder6,
      foodOrder7,
    ],
    description:
      "The application I developed was created with React Native. Users are greeted with a login screen and then prompted for location permission. The app visually presents restaurants located in hotels and has a detailed design. Details of the restaurants, location information, and menus are easily accessible. Supabase was used as the backend.",
    mainlyUsedTechnologies: [
      {
        name: "React Native",
        img: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
      },
      {
        name: "Expo Router",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlAMahS-D-u3BZd15Sj1VZSYvVHQEP-p3MkMrqzib4iA&s",
      },
      {
        name: "Redux",
        img: "https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png",
      },
      {
        name: "Supabase",
        img: "https://supabase.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-preview.50e72501.jpg&w=3840&q=75",
      },
      {
        name: "Expo",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeo2BMhXHwShI7vdjOZ8X-LQ7-qL_GuDRQgmn3em9IFA&s",
      },
      {
        name: "React Native Maps",
        img: "https://aboutreact.com/wp-content/uploads/2018/09/react_native_map-1.png",
      },
    ],
  },

  {
    id: 4,
    title: "Estate App & Freelance",
    type: "Design & Web Development",
    imgUrl: [
      estate1,
      estate2,
      estate3,
      estate4,
      estate5,
      estate6,
      estate7,
      estate8,
      estate9,
    ],
    description:
      "I developed a mobile-responsive real estate application using React. I integrated Auth0 and Leaflet for authentication and map functionality. Users can make reservations, create favorite lists, and view/search residences based on their locations.",
    mainlyUsedTechnologies: [
      {
        name: "Typescript",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
      },
      {
        name: "React",
        img: reactImg,
      },
      {
        name: "Context",
        img: "https://miro.medium.com/v2/resize:fit:1000/0*CdSOpVAdLxMvlh7D.png",
      },
      {
        name: "Mantine",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57rsMTp7tXoWGijtNnFsE3nWru0QFnEzex4uOBl76_Q&sg",
      },
      {
        name: "Axios",
        img: "https://axios-http.com/assets/logo.svg",
      },
      {
        name: "Auth0",
        img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1605953217279/M-vk-LPrs.png",
      },
      {
        name: "Leaflet",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxW8POqMIbIFECHj84m6UwRU34jaA5fbOahtGraoFN&s",
      },
      {
        name: "React Query",
        img: "https://miro.medium.com/v2/resize:fit:513/1*NvNjVbjTCT_qqloPnR098w.png",
      },
      {
        name: "Swiper",
        img: "https://miro.medium.com/v2/resize:fit:1128/1*FbvMJKVVYzfHGG3b0NaJGg.png",
      },
      {
        name: "Prisma",
        img: "https://camo.githubusercontent.com/1899b1c9cea6723925368e3d3ce3b9fb0d88c25e1c0f2f2a90c036f07e2ce81e/68747470733a2f2f692e696d6775722e636f6d2f774434725674342e706e67",
      },
      {
        name: "Express",
        img: "https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA",
      },
    ],
  },

  {
    id: 5,
    title: "Fast Pizza & Udemy",
    type: "Design & Web Development",
    imgUrl: [
      fastPizza1,
      fastPizza2,
      fastPizza3,
      fastPizza4,
      fastPizza5,
      fastPizza6,
    ],
    description:
      "I have a project called FastPizza. In this project, users can place pizza orders. Once an order is placed, there's an interface to track the order. Tailwind and Redux were used as tools for this project. Initially, the user encounters a screen to input their name, followed by transitioning to the order process. Geolocation is utilized to determine the user's location while placing an order. Additionally, there's an option to prioritize orders, albeit incurring an extra cost during or after the order placement process.",
    mainlyUsedTechnologies: [
      {
        name: "React",
        img: reactImg,
      },
      {
        name: "Redux",
        img: "https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png",
      },
      {
        name: "Tailwind",
        img: "https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg",
      },
      {
        name: "React Router",
        img: "https://www.svgrepo.com/show/354262/react-router.svg",
      },
    ],
  },

  {
    id: 6,
    title: "Library Simulation & Graduation",
    type: "Design & Mobile Development",
    imgUrl: [
      projBitirme1,
      projBitirme2,
      projBitirme3,
      projBitirme4,
      projBitirme5,
      projBitirme6,
      projBitirme7,
      projBitirme8,
      projBitirme9,
      projBitirme10,
    ],
    description:
      "I have a project named Library Simulation, which is also my graduation project. The application was developed using Flutter and functions as a library archive system. It showcases popular books and allows users to add their preferred books to their personal libraries. Features like adding, deleting, and updating books are available. Additionally, advanced filtering options exist. Users can create, delete, update shelves, and view them. It's possible to place books on appropriate shelves before adding them to the archive. Books can be listed by categories. The app provides Dark Mode and Light Mode options. The 'Lucky Book' feature was added to randomly showcase a book. Users can view and follow other users, utilizing an optional tracking system. Each user has their own library archive, and the following is based on preferences regarding archive likes. Users have the option to hide their archives if they prefer.",
    mainlyUsedTechnologies: [
      {
        name: "Flutter",
        img: "https://w7.pngwing.com/pngs/168/443/png-transparent-flutter-logo-flutter-software-logo-social-media-logo-logo-technology-logo-3d-icon.png",
      },
      {
        name: "Firebase",
        img: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
      },
      {
        name: "Riverpod",
        img: "https://codeclusive.io/blog/riverpod-state-management/images/riverpod.png",
      },
      {
        name: "FAwesome",
        img: "https://www.yucelalkan.com/uploads/fontawesome-kullanimi_5_5_1_b.jpg",
      },
      {
        name: "Lottie",
        img: "https://cdn.iconscout.com/icon/free/png-256/free-lottie-files-3050917-2538296.png",
      },
      {
        name: "Http",
        img: "https://cdn-icons-png.flaticon.com/512/1276/1276471.png",
      },
      {
        name: "Dio",
        img: "https://protocoderspoint.com/wp-content/uploads/2022/12/flutter-dio.jpg",
      },
    ],
  },

  {
    id: 7,
    title: "E-commerce & Freelance",
    type: "Design & MERN Stack Development",
    imgUrl: [
      eCommerce1,
      eCommerce2,
      eCommerce3,
      eCommerce4,
      eCommerce5,
      eCommerce6,
      eCommerce7,
      eCommerce8,
      eCommerce9,
      eCommerce10,
    ],
    description:
      "My project is an E-commerce application designed for online shopping. It includes a cart feature where users can add and remove items. Stripe was integrated for credit card processing. The project is built on the MERN (MongoDB, Express.js, React, Node.js) stack, utilizing MongoDB as the database. The admin panel was developed using Ant Design, while the application incorporates charts using the Recharts package for data visualization.",
    mainlyUsedTechnologies: [
      {
        name: "React",
        img: reactImg,
      },
      {
        name: "Context",
        img: "https://miro.medium.com/v2/resize:fit:1000/0*CdSOpVAdLxMvlh7D.png",
      },
      {
        name: "Recharts",
        img: "https://blog.openreplay.com/images/charting-and-graphing-in-react-with-recharts/images/hero.png",
      },
      {
        name: "Antd",
        img: "https://camo.githubusercontent.com/70ec62b59182d7ecbc34f6cfe6f043d6ca17b133c398871ef1cdab0fa4d1e424/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f726d73706f7274616c2f4b4470677667754d704766716148506a6963524b2e737667",
      },
      {
        name: "React Router",
        img: "https://www.svgrepo.com/show/354262/react-router.svg",
      },
      {
        name: "Stripe",
        img: "https://easydigitaldownloads.com/wp-content/uploads/edd/2019/03/stripe-product-image.png",
      },
      {
        name: "Express",
        img: "https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA",
      },
      {
        name: "Mongoose",
        img: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
      },
    ],
  },

  {
    id: 8,
    title: "Movie Science",
    type: "Design & Mobile Development",
    imgUrl: [
      movieScience1,
      movieScience2,

      movieScience4,
      movieScience5,
      movieScience6,
      movieScience7,
    ],
    description:
      "I have a project called Movie Science. In this project, users can view popular movies and their detailed pages. Users can add movies they like to the 'favorites' list. We have the option to add quotes to our favorite movies or view existing quotes. Subsequently, the quotes for these movies are displayed on the application screen, and we can vote on these quotes. The given votes are also displayed on the screen. Flutter was used in this project.",
    mainlyUsedTechnologies: [
      {
        name: "Flutter",
        img: "https://w7.pngwing.com/pngs/168/443/png-transparent-flutter-logo-flutter-software-logo-social-media-logo-logo-technology-logo-3d-icon.png",
      },
      {
        name: "Firebase",
        img: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
      },
      {
        name: "Riverpod",
        img: "https://codeclusive.io/blog/riverpod-state-management/images/riverpod.png",
      },

      {
        name: "Http",
        img: "https://cdn-icons-png.flaticon.com/512/1276/1276471.png",
      },
      {
        name: "Dio",
        img: "https://protocoderspoint.com/wp-content/uploads/2022/12/flutter-dio.jpg",
      },
    ],
  },
];

function ProjectData() {
  return <div>ProjectData</div>;
}

export default ProjectData;
