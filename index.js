const menuButton = document.querySelector('.mobile_menu_btn');
const mobileMenu = document.querySelector('.mobile_menu');
const remButton = document.querySelector('.fa-times');
const htmlBody = document.querySelector('body');

// transition styles
mobileMenu.style.right = '-800px';
mobileMenu.style.transition = 'right 800ms';

// listen for a click on the menu button and X button
menuButton.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
  setTimeout(() => {
    mobileMenu.style.right = '0px';
  }, 1);
});

remButton.addEventListener('click', () => {
  mobileMenu.style.right = '-800px';
  setTimeout(() => {
    mobileMenu.style.display = 'none';
  }, 900);
  menuButton.style.display = 'block';
});

document.querySelectorAll('.menu_link').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.style.right = '-800px';
    setTimeout(() => {
      mobileMenu.style.display = 'none';
    }, 900);
    menuButton.style.display = 'block';
  });
});

// Project popup

// Create project object
const projectPop = [
  {
    name: 'Marock music festival',
    desc: "This project was built with a Mobile-first design perspective and it's mobile responsive. for the design, the main technologies in CSS are flexbox and media query. The Festival was inspired by the Boulevard urban music festival in Morocco.",
    featuredImage: 'img/projects/marock/preview0.png',
    miniImg: ['img/projects/marock/preview0.png', 'img/projects/marock/preview1.png', 'img/projects/marock/preview2.png', 'img/projects/marock/preview3.png'],
    technologiesOne: 'HTML/CSS',
    technologiesTwo: 'Flexbox',
    technologiesThree: 'JavaScript',
    linkToLiveVersion: 'https://ismailco.github.io/First-capstone-project_Conference-page/',
    linkToSource: 'https://github.com/Ismailco/First-capstone-project_Conference-page',
  },
  {
    name: 'Film Guru',
    desc: "This project was built in colaborations with jhonathan. We had to select an API (OMDb API) that provides data about Movies and then build the webapp around it. The webapp has 2 user interfaces, it's mobile responsive",
    featuredImage: 'img/projects/moviesGuru/preview0.png',
    miniImg: ['img/projects/moviesGuru/preview0.png', 'img/projects/moviesGuru/screenshot1.png', 'img/projects/moviesGuru/screenshot2.png', 'img/projects/moviesGuru/screenshot-m-1.png', 'img/projects/moviesGuru/screenshot-m-2.png'],
    technologiesOne: 'HTML/CSS',
    technologiesTwo: 'JavaScript',
    technologiesThree: 'API',
    linkToLiveVersion: 'https://movieguru.ml/',
    linkToSource: 'https://github.com/Ismailco/Movies-Guru',
  },
  {
    name: 'Weather App',
    desc: 'A Weather app created using React.js and Metaweather API. the app has the functionality to search any city in the world and get the weather data for the week.',
    featuredImage: 'img/projects/weatherApp/screenshot0.png',
    miniImg: ['img/projects/weatherApp/screenshot.png', 'img/projects/weatherApp/screenshot1.png', 'img/projects/weatherApp/screenshot2.png', 'img/projects/weatherApp/screenshot3.png'],
    technologiesOne: 'CSS',
    technologiesTwo: 'JavaScript',
    technologiesThree: 'React',
    linkToLiveVersion: 'https://mv-react-weather-app.herokuapp.com/',
    linkToSource: 'https://github.com/Ismailco/weather-app',
  },
  {
    name: 'Math magicians',
    desc: 'This is my first react.js App, that I build while learning React. The App has the functionality of Calculator and some mathematic quotes.',
    featuredImage: 'img/projects/mathMagicians/preview0.png',
    miniImg: ['img/projects/mathMagicians/preview0.png', 'img/projects/mathMagicians/screenshot1.png', 'img/projects/mathMagicians/screenshot.png'],
    technologiesOne: 'React',
    technologiesTwo: 'CSS',
    technologiesThree: 'JavaScript',
    linkToLiveVersion: 'https://mv-calculator.herokuapp.com',
    linkToSource: 'https://github.com/Ismailco/math-magicians',
  },
  {
    name: 'ToDo chrome extension',
    desc: 'This is a to-do list chrome extension built using HTML for the skeleton and CSS, FlexBox for the styling and positioning of the elements on the page. JavaScript to build the functionalities of the extension. this extension uses local storage to store the data.',
    featuredImage: 'img/projects/todo/preview0.png',
    miniImg: ['img/projects/todo/preview0.png', 'img/projects/todo/preview1.png', 'img/projects/todo/preview2.png', 'img/projects/todo/preview3.png'],
    technologiesOne: 'HTML/CSS',
    technologiesTwo: 'JSON',
    technologiesThree: 'JavaScript',
    linkToLiveVersion: 'https://chrome.google.com/webstore/detail/todo/cbodikmkpephblbhpdcbdjhcmkjocpai',
    linkToSource: 'https://github.com/Ismailco/Todo-Chrome-Extension',
  },
  {
    name: 'Space travel Hub',
    desc: 'his is a dummy website for company that provides commercial and scientific space travel sercises. This application will allow users to book rockets and join selected space missions.',
    featuredImage: 'img/projects/spaceTravel/screenshot0.png',
    miniImg: ['img/projects/spaceTravel/screenshot.png', 'img/projects/spaceTravel/screenshot1.png', 'img/projects/spaceTravel/screenshot2.png', 'img/projects/spaceTravel/screenshot3.png'],
    technologiesOne: 'HTML/CSS',
    technologiesTwo: 'React',
    technologiesThree: 'JavaScript',
    linkToLiveVersion: 'https://space-traveller.herokuapp.com/',
    linkToSource: 'https://github.com/Ismailco/space-travel',
  },
  {
    name: 'Awesome-books',
    desc: "This project was built with a Mobile-first design perspective and it's mobile responsive. In this project, we build a basic website that allows users to add/remove books from a list, using JavaScript objects and arrays. and dynamically modify the DOM and add basic events.",
    featuredImage: 'img/projects/bookList/preview0.png',
    miniImg: ['img/projects/bookList/preview0.png', 'img/projects/bookList/preview1.png', 'img/projects/bookList/preview2.png', 'img/projects/bookList/preview3.png'],
    technologiesOne: 'HTML/CSS',
    technologiesTwo: 'Flexbox',
    technologiesThree: 'JavaScript',
    linkToLiveVersion: 'https://ismailco.github.io/Awesome-books_JavaScript-objects/',
    linkToSource: 'https://github.com/Ismailco/Awesome-books_JavaScript-objects',
  },
  {
    name: 'To Do List with Webpack',
    desc: 'In this project, I build a basic website that allows users to add/remove taskes from a list, using JavaScript objects and arrays. and dynamically modify the DOM and add basic events. The project built using Webpack.',
    featuredImage: 'img/projects/todoWebpack/preview0.png',
    miniImg: ['img/projects/todoWebpack/preview0.png', 'img/projects/todoWebpack/screenshot1.png', 'img/projects/todoWebpack/screenshot.png'],
    technologiesOne: 'HTML/CSS',
    technologiesTwo: 'JavaScript',
    technologiesThree: 'WebPack',
    linkToLiveVersion: 'https://ismailco.github.io/Todo-list-with-webpack/dist/',
    linkToSource: 'https://github.com/Ismailco/Todo-list-with-webpack',
  },
  {
    name: 'Leaderboard',
    desc: 'In this project, I set up a basic JavaScript project for the Leaderboard list app, using webpack and ES6 features, notably modules. The project uses the Leaderboard API.',
    featuredImage: 'img/projects/leaderboard/preview0.png',
    miniImg: ['img/projects/leaderboard/screenshot1.png', 'img/projects/leaderboard/screenshot2.png', 'img/projects/leaderboard/screenshot3.png'],
    technologiesOne: 'HTML/CSS',
    technologiesTwo: 'JavaScript',
    technologiesThree: 'API',
    linkToLiveVersion: 'https://ismailco.github.io/Leaderboard/dist/',
    linkToSource: 'https://github.com/Ismailco/Leaderboard',
  },
  {
    name: 'Google Clone',
    desc: 'This is a clone of the Google home page created using HTML and CSS',
    featuredImage: 'img/projects/googleClone/preview1.png',
    miniImg: ['img/projects/googleClone/preview0.png', 'img/projects/googleClone/preview1.png'],
    technologiesOne: 'HTML/CSS',
    technologiesTwo: 'Flexbox',
    technologiesThree: '',
    linkToLiveVersion: 'https://ismailco.github.io/google-homepage/',
    linkToSource: 'https://github.com/Ismailco/google-homepage',
  },
];

// Create the project section
const projectSection = document.querySelector('.projects_container');

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < projectPop.length; i += 1) {
    const project = document.createElement('article');
    const projectImg = document.createElement('img');
    const projectBody = document.createElement('div');
    const projectHeading = document.createElement('h3');
    const projectList = document.createElement('ul');
    const projectListItemOne = document.createElement('li');
    const projectListItemTwo = document.createElement('li');
    const projectListItemThree = document.createElement('li');
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('project_btn');
    projectBtn.textContent = 'See this Project';
    project.classList.add('project');
    projectImg.classList.add('project_img');
    projectImg.setAttribute('src', projectPop[i].featuredImage);
    projectImg.setAttribute('alt', 'project_image_preview');
    projectBody.classList.add('project_body');
    projectHeading.classList.add('project_name');
    projectHeading.textContent = projectPop[i].name;
    projectList.classList.add('project_languages');
    projectListItemOne.classList.add('project_language');
    projectListItemOne.textContent = projectPop[i].technologiesOne;
    projectListItemTwo.classList.add('project_language');
    projectListItemTwo.textContent = projectPop[i].technologiesTwo;
    projectListItemThree.classList.add('project_language');
    projectListItemThree.textContent = projectPop[i].technologiesThree;

    projectList.append(projectListItemOne, projectListItemTwo, projectListItemThree);
    projectBody.append(projectHeading, projectList, projectBtn);
    project.append(projectImg, projectBody);
    projectSection.append(project);
  }
});

// create html elements
const projectPopup = document.createElement('div');
const closeBtn = document.createElement('i');
const projectName = document.createElement('h3');
const list = document.createElement('ul');
const listItemOne = document.createElement('li');
const listItemTwo = document.createElement('li');
const listItemThree = document.createElement('li');
const imageContainer = document.createElement('div');
const sliderCountainer = document.createElement('div');
const slider = document.createElement('div');
const image = document.createElement('img');

const miniImageCountainer = document.createElement('div');

// const miniImageOne = document.createElement('img');
// const miniImageTwo = document.createElement('img');
// const miniImageThree = document.createElement('img');
// const miniImageFoor = document.createElement('img');
const desc = document.createElement('p');
const buttonContainer = document.createElement('div');
const liveDemo = document.createElement('button');
const sourceCode = document.createElement('button');

imageContainer.classList.add('image_container_all');
// Listen for a click on the projects links or close button
closeBtn.addEventListener('click', () => {
  htmlBody.style.overflow = 'scroll';
  projectPopup.style.display = 'none';
  closeBtn.style.display = 'none';
  projectPopup.innerHTML = '';
  miniImageCountainer.innerHTML = '';
});
setTimeout(() => {
  document.querySelectorAll('.project_btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      htmlBody.style.overflow = 'hidden';
      projectPopup.style.display = 'flex';
      closeBtn.style.display = 'block';

      // create content
      closeBtn.classList.add('fas', 'fa-times', 'popup_close');

      projectName.textContent = projectPop[index].name;
      projectName.classList.add('popup_name');

      listItemOne.textContent = projectPop[index].technologiesOne;
      listItemOne.classList.add('popup_language');
      listItemTwo.textContent = projectPop[index].technologiesTwo;
      listItemTwo.classList.add('popup_language');
      listItemThree.textContent = projectPop[index].technologiesThree;
      listItemThree.classList.add('popup_language');
      list.classList.add('popup_languages');
      list.append(listItemOne, listItemTwo, listItemThree);

      image.setAttribute('src', projectPop[index].featuredImage);
      image.classList.add('popup_img');
      slider.appendChild(image);

      slider.classList.add('slider');
      sliderCountainer.appendChild(slider);

      sliderCountainer.classList.add('slider_container');

      projectPop[index].miniImg.forEach((imgSrc) => {
        const miniImage = document.createElement('img');
        miniImage.setAttribute('src', imgSrc);
        miniImage.classList.add('popup_mini_img');
        miniImageCountainer.append(miniImage);
      });

      // miniImageOne.setAttribute('src', projectPop[index].miniImg1);
      // miniImageOne.classList.add('popup_mini_img');
      // miniImageTwo.setAttribute('src', projectPop[index].miniImg2);
      // miniImageTwo.classList.add('popup_mini_img');
      // miniImageThree.setAttribute('src', projectPop[index].miniImg3);
      // miniImageThree.classList.add('popup_mini_img');
      // miniImageFoor.setAttribute('src', projectPop[index].miniImg4);
      // miniImageFoor.classList.add('popup_mini_img');

      // miniImageCountainer.append(miniImageOne, miniImageTwo, miniImageThree, miniImageFoor);
      miniImageCountainer.classList.add('mini_img');

      imageContainer.append(sliderCountainer, miniImageCountainer);
      imageContainer.classList.add('img_slider');

      desc.classList.add('popup_text');
      desc.textContent = projectPop[index].desc;

      liveDemo.classList.add('popup_btn');
      liveDemo.innerHTML = `<a href = "${projectPop[index].linkToLiveVersion}">See live <i class="fas fa-share-square"></i></a>`;

      sourceCode.classList.add('popup_btn');
      sourceCode.innerHTML = `<a href = "${projectPop[index].linkToSource}">See source <i class="fab fa-github"></i></a>`;

      buttonContainer.classList.add('popup_buttons');
      buttonContainer.append(liveDemo, sourceCode);

      projectPopup.classList.add('project_pop');
      projectPopup.append(closeBtn, projectName, list, imageContainer, desc, buttonContainer);

      document.body.appendChild(projectPopup);

      // change mini image
      const popMiniImg = document.querySelectorAll('.popup_mini_img');
      popMiniImg.forEach((img) => {
        img.addEventListener('click', () => {
          for (let x = 0; x < popMiniImg.length; x += 1) {
            popMiniImg[x].style.border = '1px solid transparent';
          }
          img.style.border = '1px solid #000';
          image.setAttribute('src', img.src);
        });
      });
    });
  });
}, 1);

// form validation
const form = document.querySelector('.form');
const formEmail = document.querySelector('.input2');

// function to check if the str is lowerCase
function isLowerCase(s) {
  return s === s.toLowerCase();
}

formEmail.addEventListener('input', () => {
  if (isLowerCase(formEmail.value)) {
    formEmail.setCustomValidity('');
  } else {
    formEmail.setCustomValidity('Please use lower case on your email!');
    formEmail.reportValidity();
    form.preventDefault();
  }
});

// local storage for form
form.addEventListener('input', () => {
  const formInfo = {
    name: document.querySelector('.input1').value,
    email: document.querySelector('.input2').value,
    message: document.querySelector('.input3').value,
  };

  localStorage.setItem('contactForm', JSON.stringify(formInfo));
});

const formObj = JSON.parse(localStorage.getItem('contactForm'));
document.querySelector('.input1').value = formObj.name;
document.querySelector('.input2').value = formObj.email;
document.querySelector('.input3').value = formObj.message;
