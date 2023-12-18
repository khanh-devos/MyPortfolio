const checkZoom = () => {
  if (window.innerWidth <= 768) return;

  const headline = document.getElementById('headline');
  const clothContainer = document.getElementById('cloth');

  const headlineWidth = Number(localStorage.getItem('headlineSize').split('#')[0]);
  if (Math.abs(headlineWidth - headline.offsetWidth) > 50) {
    localStorage.setItem('headlineSize', `${headline.offsetWidth}#${headline.offsetHeight}`);

    clothContainer.style.display = window.innerWidth > 768 ? 'block' : 'none';
    clothContainer.style.display = window.innerWidth > 3000 ? 'none' : 'block';
  }

  const difHeadline = headline.getBoundingClientRect().top - window.innerHeight;
  if (clothContainer) clothContainer.style.transitionDuration = '1s';

  if (difHeadline >= -1200) {
    if (clothContainer) clothContainer.style.opacity = 1;
  } else if (difHeadline >= -3200) {
    if (clothContainer) clothContainer.style.opacity = 0;
    clothContainer.style.transitionDuration = '1s';
  } else {
    if (clothContainer) clothContainer.style.opacity = 1;
    clothContainer.style.transitionDuration = '1s';
  }
};

const showClothWave = (check = 1) => {
  if (!check || window.innerWidth <= 768 || window.innerWidth > 3000) return;

  const headline = document.getElementById('headline');
  const clothContainer = document.createElement('div');
  clothContainer.setAttribute('id', 'cloth');
  clothContainer.style.display = window.innerWidth > 768 ? 'block' : 'none';

  clothContainer.style.width = window.innerWidth - 2;
  clothContainer.style.height = window.innerHeight - 2;

  /* eslint-disable */
  const app = new PIXI.Application({
    backgroundAlpha: 0,
    resizeTo: headline,
  });

  localStorage.setItem('headlineSize', `${headline.offsetWidth}#${headline.offsetHeight}`);
  checkZoom(app);

  clothContainer.appendChild(app.view);
  headline.insertBefore(clothContainer, document.getElementById('mobile-menu'));

  /// ///////////////////////////////
  /// ///// FROM HERE ///////////////
  /// ///////////////////////////////
  let count = 0;
  
  // build a rope!
  const ropeLength = 79;

  const points = [];

  for (let i = 0; i < 25; i += 1) {
    points.push(new PIXI.Point(i * ropeLength, 0));
  }

  const strip = new PIXI.SimpleRope(PIXI.Texture.from('./imgs/pixi/lines.svg'), points);

  const snakeContainer = new PIXI.Graphics();
  /* eslint-disable */
  
  snakeContainer.x = -70;
  snakeContainer.y = 600;

  snakeContainer.width = headline.offsetWidth;
  snakeContainer.height = headline.offsetHeight;

  app.stage.addChild(snakeContainer);

  snakeContainer.addChild(strip);

  app.ticker.add(() => {
    count += 0.02;
    // make the snake
    for (let i = 0; i < points.length; i += 1) {
      points[24 - i].y = Math.sin((i * 0.5) + count) * 2;
      points[i].x = i * ropeLength + Math.cos((i * 0.3) + count) * 50;
      
    }

  });
};

showClothWave(null);