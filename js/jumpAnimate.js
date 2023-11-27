const delay = (time) => new Promise((res) => setTimeout(res, time));

const stopJumping = (workBox) => {
  if (workBox) localStorage.setItem('itemJumping', workBox.id);
};

// Draw the line fuction
const jumping = async (hoverBtn, workBox, topRoad, leftRoad, angleRoad) => {
  const parent = document.querySelector('#works-box-container-desktop');
  const jumpBtn = document.getElementById('btn-fake');
  jumpBtn.style.display = 'block';

  let iniTop = jumpBtn.offsetTop;
  let iniLeft = jumpBtn.offsetLeft / parent.clientWidth;
  let iniAngle = 0;
  let iniScale = 1;

  if (localStorage.getItem('prevTopLeft')) {
    const [prevTop, prevLeft, prevAngle, prevScale] = localStorage.getItem('prevTopLeft').split('#');
    iniLeft = Number(prevLeft);
    iniTop = Number(prevTop);
    iniAngle = Number(prevAngle);
    iniScale = Number(prevScale) > 1 ? 1 : Number(prevScale);
  }

  const minStep = 0.01;
  const denominator = 20.0;
  const timeStep = 7;
  const maxScale = 1.8;

  const leftStep = (leftRoad - iniLeft) / denominator;
  const topStep = (topRoad - iniTop) / denominator;
  const angleStep = (angleRoad - iniAngle) / denominator;
  // 1->1.5 multiply 2 === 1->1.5 and 1.5->1;
  const scaleStep = (maxScale - iniScale) / denominator;

  let currentLeft = iniLeft;
  let currentTop = iniTop;
  let currentAngle = iniAngle;
  let currentScale = iniScale;

  if (!localStorage.getItem('prevTopLeft')) {
    localStorage.setItem('prevTopLeft',
      `${currentTop}#${currentLeft}#${currentAngle}#${currentScale}`);
  }

  // console.log('currentAngle : ', angleStep);
  let finishJump = true;

  while (Math.abs(currentLeft - leftRoad) > minStep
  || Math.abs(currentTop - topRoad) > minStep) {
    if (workBox.id !== localStorage.getItem('itemJumping')) {
      finishJump = false;
      break;
    }

    currentLeft += leftStep;
    currentTop += topStep;
    currentAngle += angleStep;
    currentScale += scaleStep * 2.0;

    jumpBtn.style.left = `${currentLeft}%`;
    jumpBtn.style.top = `${currentTop}px`;

    const realAngle = currentAngle > (angleRoad - 10) ? 0 : currentAngle;
    jumpBtn.style.rotate = `${realAngle * (-1)}deg`;

    const realScale = currentScale < maxScale ? currentScale : maxScale - (currentScale - maxScale);
    jumpBtn.style.scale = realScale;
    // console.log(currentScale, " - ", realScale);

    localStorage.setItem('prevTopLeft',
      `${currentTop}#${currentLeft}#${realAngle}#${realScale}`);
    /* eslint-disable */
    await delay(timeStep);
    /* eslint-enable */
  }

  if (finishJump) {
    const btns = document.getElementsByClassName('desktop-btn');
    Object.values(btns).forEach((btn) => { btn.style.display = 'none'; });

    hoverBtn.style.display = 'block';
    jumpBtn.style.display = 'none';
  }
};

// Jumping the button "See project"
const jump = (workBox) => {
  // top: calc(420px*2);
  // left: calc(64% + 4%);
  // store the hovered workbox.
  if (!workBox) return;
  localStorage.setItem('itemJumping', workBox.id);

  // hide all the workbox buttons while jumping
  const btns = document.getElementsByClassName('desktop-btn');
  const index = Number(workBox.id[workBox.id.length - 1]);
  const hoverBtn = document.querySelector(`#desk-${workBox.id}`);
  // console.log(hoverBtn);

  // reset buttons display
  Object.values(btns).forEach((btn) => { btn.style.display = 'none'; });

  const num = index <= 2 ? 1 : 2;

  const topRoad = 420 * num - 24 * (2 - num);
  const leftRoad = (32 + 2) * (index % 3);
  const angleRoad = 360;
  const scaleRoad = 1;

  // if move mouse out of the boxex, 2 cases
  // case1: mouse over another workbox => stop, then move the another workbox
  // case2: mouse not over any workbox => keep moving to the old workbox.
  jumping(hoverBtn, workBox, topRoad, leftRoad, angleRoad, scaleRoad);
};

stopJumping(null);
jump(null);
