const flapping = (state) => {
  const leftWing = document.getElementById('left-wing1');
  const body = document.getElementById('body1');
  const rightWing = document.getElementById('right-wing1');

  const movement = 100;
  const rotation = 70;
  const isFlying = localStorage.getItem('isFlying');
  const bodyScale = isFlying ? 1.1 : 1;

  if (state === 'hard') {
    leftWing.style.transform = `rotateY(${rotation}deg) translateX(${movement}px)`;
    rightWing.style.transform = `rotateY(${rotation}deg) translateX(-${movement}px)`;
    body.style.transform = `scale(${bodyScale + 0.3}, 1)`;

    // lighten all wings:
    body.style.filter = 'brightness(100%)';
    leftWing.style.filter = 'brightness(100%)';
    rightWing.style.filter = 'brightness(100%)';
  }

  if (state === 'wide') {
    // state 2: largest wings
    leftWing.style.transform = 'rotateY(0deg) translateX(1px)';
    rightWing.style.transform = 'rotateY(0deg) translateX(0px)';
    body.style.transform = `scale(${bodyScale + 0.2}, 1)`;

    body.style.filter = 'brightness(140%)';
    leftWing.style.filter = 'brightness(140%)';
    rightWing.style.filter = 'brightness(140%)';
  }

  if (state === 'upward') {
    leftWing.style.transform = `rotateY(${rotation}deg) translateX(${movement}px)`;
    rightWing.style.transform = `rotateY(${rotation}deg) translateX(-${movement}px)`;
    body.style.transform = `scale(${bodyScale}, 1)`;

    // lighten all wings:
    body.style.filter = 'brightness(100%)';
    leftWing.style.filter = 'brightness(100%)';
    rightWing.style.filter = 'brightness(100%)';
  }
};

const setButterflyPos = () => {
  const butterfly = document.getElementById('butterfly');
  const iniPos = document.getElementById('my-name');

  localStorage.setItem('butterflyPos', `${iniPos.offsetTop - 15}#${iniPos.offsetLeft - 20}`);
  butterfly.style.top = `${iniPos.offsetTop - 15}px`;

  const denominator = window.innerWidth < 768 ? 2.5 : 2.3;
  butterfly.style.left = `${iniPos.offsetWidth / denominator}px`;

  // show name and butterfly;
  document.getElementsByClassName('my-name-container')[0].style.opacity = 1;
  butterfly.style.opacity = 1;
};

const endFlapping = async () => {
  const butterfly = document.getElementById('butterfly');
  const states = ['wide', 'upward', 'wide', 'upward', 'wide'];

  while (states.length > 0) {
    const state = states.shift();

    const isFlying = localStorage.getItem('isFlying');
    if (isFlying === 'true') break;

    flapping(state);
    /* eslint-disable */
    await delay(500);
    /* eslint-disable */

  }

  const isFlying = localStorage.getItem('isFlying');
  if (isFlying === 'false') {
    // flapping('wide');
    await delay(1000);
    setButterflyPos(); //reset the butterfly position;
  }

  butterfly.addEventListener('click', fly);
};

const getNextPos = () => {
  /* eslint-disable */
  const [iniTop, iniLeft] = localStorage.getItem('butterflyPos').split('#');
  /* eslint-disable */

  const frame = document.querySelector('#headline');
  const nextTop = frame.clientHeight * 0.55;
  const nextLeft = iniLeft;

  // console.log(iniTop, nextTop);
  return [nextTop, nextLeft];
};

const fly = async () => {
  const butterfly = document.getElementById('butterfly');

  butterfly.removeEventListener('click', fly);

  // stop everything
  localStorage.setItem('isFlying', 'true');

  // next pos;
  const [iniTop, iniLeft] = localStorage.getItem('butterflyPos').split('#');
  const [nextTop, nextLeft] = getNextPos();

  const denominator = 15.0;

  const stepTop = (nextTop - iniTop) / denominator;
  let currentTop = Number(iniTop);
  let currentLeft = Number(iniLeft);
  // console.log(currentTop, stepTop);

  let num = 0;
  const fastflap = 50;
  const restflap = 80;
  
  /* eslint-disable */
  while (Math.abs(currentTop - nextTop) > stepTop) {
    num += 1;

    const rand = Math.random() + 1;
    currentTop += stepTop * rand;
    currentLeft += Math.round(rand * 10) % 2 === 0 ? 15 : -5;
    await delay(restflap);

    let cycle = 1;
    while (cycle < 4) {

      if (cycle === 1) {
        flapping('upward');
        butterfly.style.left = `${currentLeft}px`;
        butterfly.style.transitionDuration = `${fastflap/1000.0}s`

        // start flying
        butterfly.style.scale = 1.3;
      }
      if (cycle === 2) {
        flapping('wide');
      }
      if (cycle === 3) {
        flapping('hard');
        butterfly.style.top = `${currentTop}px`;
        butterfly.style.transitionDuration = `${fastflap/1000.0}s`
      }

      // console.log(cycle);
      cycle += 1;
    }

    await delay(fastflap);
    // resting state
    flapping('wide');
  }
  /* eslint-disable */
  
  // reset everything again
  localStorage.setItem('isFlying', 'false');
  
  // stop flying
  endFlapping(restflap);
  butterfly.style.scale = 1;
};
