function toggleHamburgerBtn() {
  const mobileMenu = document.querySelector('#mobile-menu');
  const img = document.querySelector('#menu-btn img');
  const logo = document.querySelector('#header a');

  // expression
  if (mobileMenu.style.display === 'none' || !mobileMenu.style.display) {
    mobileMenu.style.display = 'block';
    img.src = './imgs/x.svg';
    logo.style.opacity = 0;
  } else {
    mobileMenu.style.display = 'none';
    img.src = './imgs/IconMenu.svg';
    logo.style.opacity = 1;
  }
}

toggleHamburgerBtn();

// popup window
function createProjects() {
  return {
    project0: {
      title: 'Multi-Post Stories',
      img: './imgs/works.png',
      tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    },
    project1: {
      title: 'Profesional Art Printing Data',
      img: './imgs/works-bg.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    },
    project2: {
      title: 'Profesional Art Printing Data',
      img: './imgs/works-bg.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    },
    project3: {
      title: 'Profesional Art Printing Data',
      img: './imgs/works-bg.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    },
    project4: {
      title: 'Profesional Art Printing Data',
      img: './imgs/works-bg.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    },
    project5: {
      title: 'Profesional Art Printing Data',
      img: './imgs/works-bg.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    },
    project6: {
      title: 'Profesional Art Printing Data',
      img: './imgs/works-bg.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's "

    }
  }
}

function showProject() {
  const projects = createProjects();
  const card = projects.map(item => {
    return `<div class="works-box" id="wbox-2">
    <h2>${item.title}</h2>
    <p>${item.description}</p>

    <ul class="nav-buttons box-nav">
      <li><a href="">${item.tech[0]}</a></li>
      <li><a href="">${item.tech[1]}</a></li>
      <li><a href="">${item.tech[2]}</a></li>
    </ul>

    <button class="btn-type-1 box-btn">See Project</button>
  </div> `
  })
}


function clickedButton(btn) {
  document.querySelector('body').style.overflow = 'hidden';
  const projects = createProjects();
  const matchProject = projects[btn.id];

  // replace title & description
  document.querySelector('#popup').style.display = 'block';

  document.querySelector('#popup-title-X h3').textContent = matchProject.title;
  document.querySelector('#popup-info img').src = matchProject.img;
  document.querySelector('#popup-info-details p').textContent = matchProject.description;

  // replace the tech
  const techList = document.querySelector('#popup-skill-btns ul');
  matchProject.tech.forEach((tech) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '';
    a.innerHTML = tech;
    li.appendChild(a);
    techList.appendChild(li);
  });
}

clickedButton(null);

// Hide the popup
function hidePopup() {
  document.querySelector('body').style.overflow = 'auto';

  // remove all children of tech list
  const techList = document.querySelector('#popup-skill-btns ul');
  while (techList.firstElementChild) {
    techList.removeChild(techList.firstElementChild);
  }

  // hide popup
  document.querySelector('#popup').style.display = 'none';
}

hidePopup();