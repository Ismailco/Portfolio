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
    name: 'Marock music festival',
    description: "This project was built with a Mobile-first design perspective and it's mobile responsive. for the design, the main technologies in CSS are flexbox and media query. The Festival was inspired by the Boulevard urban music festival in Morocco.",
    featuredImage: 'img/projects/marock/screenshot.png',
    technologiesOne: 'HTML/CSS',
    technologiesTwo: 'Flexbox',
    technologiesThree: 'JavaScript',
    linkToLiveVersion: 'https://ismailco.github.io/First-capstone-project_Conference-page/',
    linkToSource: 'https://github.com/Ismailco/First-capstone-project_Conference-page',
  },
];

// Create the project section
const projectSection = document.querySelector('.projects_container');

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < projectPop.length; i++) {
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
setTimeout(() => {
  document.querySelectorAll('.project_btn').forEach((btn, index) => {
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
