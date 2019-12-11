const aboutMeTab = document.querySelector("#aboutme");
const projectsTab = document.querySelector("#myprojects");
const aboutMeDiv = document.querySelector("#aboutme-div");
const projectsDiv = document.querySelector("#projects-div");

aboutMeTab.addEventListener('click', (event) => {
  aboutMeDiv.classList.remove('no-show');
  aboutMeDiv.classList.add('show');
  aboutMeTab.classList.add('bottom-border');
  projectsDiv.classList.remove('show');
  projectsTab.classList.remove('bottom-border');
  projectsDiv.classList.add('no-show');
});

projectsTab.addEventListener('click', (event) => {
  projectsDiv.classList.remove('no-show');
  projectsDiv.classList.add('show');
  projectsTab.classList.add('bottom-border');
  aboutMeDiv.classList.remove('show');
  aboutMeTab.classList.remove('bottom-border');
  aboutMeDiv.classList.add('no-show');
});

const at = document.querySelector('#at');
at.addEventListener('mouseover', (event) => {
  at.title = ("Click to copy - nicolas.pierson57@gmail.com");
});

const copyToClipboard = () => {
  const el = document.createElement('textarea');
  el.value = "nicolas.pierson57@gmail.com";
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

at.addEventListener('click', (event) => {
  copyToClipboard();
})
