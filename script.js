const aboutMeTab = document.querySelector("#aboutme");
const projectsTab = document.querySelector("#myprojects");
const contactTab = document.querySelector("#contact")
const aboutMeDiv = document.querySelector("#aboutme-div");
const projectsDiv = document.querySelector("#projects-div");
const contactDiv = document.querySelector("#contact-div");
console.log(contactTab);
aboutMeTab.addEventListener('click', (event) => {
  aboutMeDiv.classList.remove('no-show');
  aboutMeDiv.classList.add('show');
  aboutMeTab.classList.add('bottom-border');
  projectsDiv.classList.remove('show');
  projectsTab.classList.remove('bottom-border');
  contactTab.classList.remove('bottom-border');
  projectsDiv.classList.add('no-show');
  contactDiv.classList.remove('show');
  contactDiv.classList.add('no-show');
})

projectsTab.addEventListener('click', (event) => {
  projectsDiv.classList.remove('no-show');
  projectsDiv.classList.add('show');
  projectsTab.classList.add('bottom-border');
  aboutMeDiv.classList.remove('show');
  aboutMeTab.classList.remove('bottom-border');
  contactTab.classList.remove('bottom-border');
  aboutMeDiv.classList.add('no-show');
  contactDiv.classList.remove('show');
  contactDiv.classList.add('no-show');
})
console.log(contactTab);
contactTab.addEventListener('click', (event) => {
  contactDiv.classList.remove('no-show');
  contactDiv.classList.add('show');
  aboutMeDiv.classList.add('no-show');
  contactTab.classList.add('bottom-border');
  aboutMeDiv.classList.remove('show');
  aboutMeTab.classList.remove('bottom-border');
  projectsTab.classList.remove('bottom-border');
  projectsDiv.classList.remove('show');
  projectsDiv.classList.add('no-show');
})
