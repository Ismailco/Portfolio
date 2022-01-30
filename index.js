const menuButton = document.querySelector('.mobile_menu_btn');
const mobileMenu = document.querySelector('.mobile_menu');
const remButton = document.querySelector('.fa-times');

// transition styles
mobileMenu.style.right = '-800px';
mobileMenu.style.transition = 'right 800ms';

// listen for a click on the menu button and X button
menuButton.addEventListener('click', (e) => {
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
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featuredImage: 'img/project1.svg',
    technologiesOne: 'HTML/CSS',
    technologiesTwo: 'Ruby on Rails',
    technologiesThree: 'JavaScript',
    linkToLiveVersion: 'https://ismailcourr.ml',
    linkToSource: 'https://ismailcourr.ml',
  },
  {
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featuredImage: 'img/project2.svg',
    technologiesOne: 'HTML/CSS',
    technologiesTwo: 'Ruby on Rails',
    technologiesThree: 'JavaScript',
    linkToLiveVersion: 'https://ismailcourr.ml',
    linkToSource: 'https://ismailcourr.ml',
  },
  {
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featuredImage: 'img/project3.svg',
    technologiesOne: 'HTML/CSS',
    technologiesTwo: 'Ruby on Rails',
    technologiesThree: 'JavaScript',
    linkToLiveVersion: 'https://ismailcourr.ml',
    linkToSource: 'https://ismailcourr.ml',
  },
  {
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featuredImage: 'img/project4.svg',
    technologiesOne: 'HTML/CSS',
    technologiesTwo: 'Ruby on Rails',
    technologiesThree: 'JavaScript',
    linkToLiveVersion: 'https://ismailcourr.ml',
    linkToSource: 'https://ismailcourr.ml',
  },
  {
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featuredImage: 'img/project5.svg',
    technologiesOne: 'HTML/CSS',
    technologiesTwo: 'Ruby on Rails',
    technologiesThree: 'JavaScript',
    linkToLiveVersion: 'https://ismailcourr.ml',
    linkToSource: 'https://ismailcourr.ml',
  },
  {
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featuredImage: 'img/project6.svg',
    technologiesOne: 'HTML/CSS',
    technologiesTwo: 'Ruby on Rails',
    technologiesThree: 'JavaScript',
    linkToLiveVersion: 'https://ismailcourr.ml',
    linkToSource: 'https://ismailcourr.ml',
  },
];

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
const miniImage = document.createElement('img');
const description = document.createElement('p');
const buttonContainer = document.createElement('div');
const liveDemo = document.createElement('button');
const sourceCode = document.createElement('button');

// Listen for a click on the projects links or close button
closeBtn.addEventListener('click', () => {
  projectPopup.style.display = 'none';
  closeBtn.style.display = 'none';
  projectPopup.innerHTML = '';
  miniImageCountainer.innerHTML = '';
});

const projectLinks = document.querySelectorAll('.project_btn');
projectLinks.forEach((btn, index) => {
  btn.addEventListener('click', () => {
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

    miniImage.setAttribute('src', projectPop[index].featuredImage);
    miniImage.classList.add('popup_mini_img');
    const miniImageTwo = miniImage.cloneNode(true);
    const miniImageThree = miniImageTwo.cloneNode(true);
    const miniImageFoor = miniImageThree.cloneNode(true);
    miniImageCountainer.append(miniImage, miniImageTwo, miniImageThree, miniImageFoor);
    miniImageCountainer.classList.add('mini_img');

    imageContainer.append(sliderCountainer, miniImageCountainer);
    imageContainer.classList.add('img_slider');

    description.classList.add('popup_text');
    description.textContent = projectPop[index].description;

    liveDemo.classList.add('popup_btn');
    liveDemo.innerHTML = `<a href = "${projectPop[index].linkToLiveVersion}">See live <i class="fas fa-share-square"></i></a>`;

    sourceCode.classList.add('popup_btn');
    sourceCode.innerHTML = `<a href = "${projectPop[index].linkToSource}">See source <i class="fab fa-github"></i></a>`;

    buttonContainer.classList.add('popup_buttons');
    buttonContainer.append(liveDemo, sourceCode);

    projectPopup.classList.add('project_pop');
    projectPopup.append(closeBtn, projectName, list, imageContainer, description, buttonContainer);

    document.body.appendChild(projectPopup);
  });
});

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

// local storage
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
