function mobileProjects() {
  return {
    project0: {
      title: 'Electric Battery Conference',
      img: './imgs/projectImgs/capstone1.jpg',
      tech: ['CSS', 'HTML', 'Bootstrap', 'DOM'],
      description: "a webapp is to launch a new event named 'Electric Battery' to the audiences, having 2 pages Home and About, showing the event place and time, mobile view and desktop view is designed.",
      url: 'https://khanh-devos.github.io/Capstone1-conference/',
      git: 'https://github.com/khanh-devos/Capstone1-conference',
    },
    project1: {
      title: 'TO DO List',
      img: 'https://www.adobe.com/content/dam/dx-dc/images/landing/discover/uk/pomodoro-technique/AdobeStock_124738800.jpeg.img.jpeg',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description: 'List of tasks to do, allow checkbox to update a task state completed, add or remove a task, modify task description, drag and drop a task to exchange position with another task.',
      url: 'https://khanh-devos.github.io/TO-DO-LIST/dist/',
      git: 'https://github.com/khanh-devos/TO-DO-LIST',
    },
    project2: {
      title: 'Nobelists',
      img: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Nobel_Prize.png',
      tech: ['HTML', 'React', 'Redux'],
      description: "show a list of Nobelists based on their countries and cities in the world. Testing included",
      url: 'https://khanh-devos.github.io/re-cap-nobel/',
      git: 'https://github.com/khanh-devos/re-cap-nobel',
    },
    project3: {
      title: 'Budget management',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png',
      tech: ['Ruby', 'Rails', 'Stimulus'],
      description: "you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
      url: 'https://snapscan-khanh.onrender.com/',
      git: 'https://github.com/khanh-devos/rails-7-snapscan',
    },
    project4: {
      title: 'Profesional Art Printing Data',
      img: './imgs/works-bg.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
      url: '',
      git: '',
    }
  };
}

function desktopProjects() {
  return {
    project0: {
      title: 'TO DO List',
      img: 'https://www.adobe.com/content/dam/dx-dc/images/landing/discover/uk/pomodoro-technique/AdobeStock_124738800.jpeg.img.jpeg',
      tech: [],
      description: 'List of tasks to do, allow checkbox to update a task state completed, add or remove a task, modify task description, drag and drop a task to exchange position with another task.',
      url: 'https://khanh-devos.github.io/TO-DO-LIST/dist/',
      git: 'https://github.com/khanh-devos/TO-DO-LIST',
    },
    project1: {
      title: 'Space Travel',
      img: './imgs/projectImgs/earthFromSpace.jpg',
      tech: ['Reactjs', 'Redux', 'Jest'],
      description: 'the real live data from the SpaceX API. It provides commercial and scientific space travel services, allows users to book|cancel rockets and join selected space missions. Kanban board and testing is included.',
      url: 'https://khanh-devos.github.io/react-redux-group-kanban/',
      git: 'https://github.com/khanh-devos/react-redux-group-kanban',
    },
    project2: {
      title: 'Episodes',
      img: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Under_the_Dome_R1_S1_DVD.jpg',
      tech: ['HTML', 'JavaScript', 'Redux'],
      description: "List of episodes of the UNDER THE DOME, adding Redux implemented for curiosity",
      url: 'https://khanh-devos.github.io/Capstone2-Kanban/',
      git: 'https://github.com/khanh-devos/Capstone2-Kanban',
    },
    project3: {
      title: 'Profesional Art Printing Data More',
      img: './imgs/works-bg.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
      url: '',
      git: '',
    },
    project4: {
      title: 'Data Dashboard Healthcare',
      img: './imgs/box-2.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
      url: '',
      git: '',
    },
    project5: {
      title: 'Website Portfolio',
      img: './imgs/box-3.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
      url: '',
      git: '',
    },
  };
}

function mobileCards() {
  const projects = mobileProjects();
  delete projects.project0;

  const cards = Object.keys(projects).map((item, i) => {
    const project = projects[item];

    return `<div class="works-box">

    <div class="works-box-content"></div>
    
    <h2>${project.title}</h2>
    <p>${project.description}</p>
      
    
    <div>
    <ul class="nav-buttons box-nav">
      <li><a href="">${project.tech[0]}</a></li>
      <li><a href="">${project.tech[1]}</a></li>
      <li><a href="">${project.tech[2]}</a></li>
    </ul>
    
    <button id="project${i + 1}" onclick="clickedMobileBtn(this)" class="btn-type-1 box-btn">See Project</button>
    </div>

    <img src="${project.img}" class="works-box-img" alt="project cover" />

    
    </div>`;
  });
  return cards;
}

function desktopCards() {
  const projects = desktopProjects();

  const cards = Object.keys(projects).map((item) => {
    const project = projects[item];

    return `<div class="works-box" 
    id="${item}"
    onclick="clickedDesktopBtn(this)"
    >

    <div class="works-box-content"></div>


    <h2>${item === 'project0' ? '' : `${project.title}`}</h2>
    <p>${item === 'project0' ? '' : `${project.description}`}</p>


    <div>
    <ul class="nav-buttons box-nav">
      ${project.tech[0] === undefined ? '' : `<li><a href="">${project.tech[0]}</a></li>`}
      ${project.tech[1] === undefined ? '' : `<li><a href="">${project.tech[1]}</a></li>`}
      ${project.tech[2] === undefined ? '' : `<li><a href="">${project.tech[2]}</a></li>`}
    </ul>

    ${item === 'project0' ? '<img id="hand" width=20 height=20 src="./imgs/socialIcons/Shape.png" alt="cursor">' : ''}

    ${item === 'project0' ? '<button id="project0" onclick="clickedDesktopBtn(this)" class="btn-type-1 box-btn">See Project</button>' : ''}

    </div>

    <img src="${project.img}" class="works-box-img" alt="project cover" />


  </div> `;
  });
  return cards;
}

function validateEmail(event) {
  const email = document.querySelector('#form').elements.email.value;

  // check email
  const res = email.match(/[A-Z]/g);
  const input = document.querySelector('form #li-btn input');
  const li = document.querySelector('form #li-btn');
  const child = document.createElement('i');
  let msg = '';

  if (res) {
    msg = 'email should be lowercase only';
    event.preventDefault();
  } else return;

  // add popup error
  child.innerText = msg;
  child.style.color = 'red';
  child.id = 'email-err';
  li.style.position = 'relative';
  if (li.childElementCount === 1) li.insertBefore(child, input);

  // remove the msg
  setTimeout(() => {
    li.style.position = 'block';
    child.remove();
  }, 4000);
}

window.onload = () => {
  document.querySelector('#works-box-container').innerHTML = mobileCards().join('');
  document.querySelector('#works-box-container-desktop').innerHTML = desktopCards().join('');

  // validate form
  document.querySelector('#form').addEventListener('submit', (event) => validateEmail(event));
};

function toggleHamburgerBtn() {
  const mobileMenu = document.querySelector('#mobile-menu');
  const img = document.querySelector('#menu-btn img');
  const logo = document.querySelector('#header a');

  // expression
  if (mobileMenu.style.display === 'block' || !mobileMenu.style.display) {
    mobileMenu.style.display = 'none';
    img.src = './imgs/IconMenu.svg';
    logo.style.opacity = 1;
  } else {
    mobileMenu.style.display = 'block';
    img.src = './imgs/x.svg';
    logo.style.opacity = 0;
  }
}

// popup window
function showPopup(project) {
  // dynamic the tech
  if (!project) return null;
  const lis = project.tech.map((tech) => `<li><a href="">${tech}</a></li>`);

  // setup the popup
  return `<div id="popup">
  <div id="popup-content">
    <div id="popup-title-X">
      <h3>${project.title}</h3>
      <button id="popup-X-btn" onclick="hidePopup()">
        <img src="./imgs/x.svg" alt="close button">
      </button>
    </div>

    <div id="popup-skill-btns">
      <ul class="nav-buttons">
        ${lis.join('')}
      </ul>
    </div>

    <div id="popup-info">
      <img id='popup-img' width="100%" src="${project.img}" alt="project-image">

      <div id="popup-info-details">
        <p>${project.description}</p>

        <div id="function-btns">
          <a class="btn-type-1" href="${project.url}">
            See Live
            <img width="20" src="./imgs/socialIcons/popupIcon.svg" alt="popupIcon">
          </a>
          
          <a class="btn-type-1" href="${project.git}">
            See Source
            <img width="20" src="./imgs/socialIcons/gitIcon.svg" alt="gitIcon">
          </a>
        </div>
      </div>
      
    </div>
  </div>
</div>`;
}

function clickedMobileBtn(btn) {
  if (!btn) return;

  const body = document.querySelector('body');
  body.style.overflow = 'hidden';

  // popup
  const projects = mobileProjects();
  const matchProject = projects[btn.id];
  const worksBox = document.querySelector('#popup-window');
  worksBox.innerHTML = showPopup(matchProject);
}

function clickedDesktopBtn(btn) {
  if (!btn) return;

  const body = document.querySelector('body');
  body.style.overflow = 'hidden';

  // popup
  const projects = desktopProjects();
  const matchProject = projects[btn.id];
  const worksBox = document.querySelector('#popup-window');
  worksBox.innerHTML = showPopup(matchProject);
}

// Hide the popup
function hidePopup() {
  document.querySelector('body').style.overflow = 'auto';
  document.querySelector('#popup-window').innerHTML = '';
}

clickedMobileBtn(null);
clickedDesktopBtn(null);
toggleHamburgerBtn();
hidePopup();