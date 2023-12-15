const check = () => {

}

const showClothWave = () => {
  const headline = document.getElementById('headline');
  const clothContainer = document.createElement('div');
  clothContainer.setAttribute('id', 'cloth');
  
  const app = new PIXI.Application({
    backgroundAlpha: 0,
    width: headline.offsetWidth,
    height: headline.offsetHeight,
  });


  clothContainer.appendChild(app.view);
  headline.insertBefore(clothContainer, document.getElementById('mobile-menu'));

  //////////////////////////////////
  //////// FROM HERE ///////////////
  //////////////////////////////////
  let count = 0;

  // build a rope!
  const ropeLength = 1480 / 20;

  const points = [];

  for (let i = 0; i < 20; i++)
  {
      points.push(new PIXI.Point(i * ropeLength, 0));
  }
  
  const strip = new PIXI.SimpleRope(PIXI.Texture.from('./imgs/circle/circle.svg'), points);

  strip.x = 0;
  strip.y = 450;
  // points.forEach((p) => console.log(p) );


  const snakeContainer = new PIXI.Container();

  snakeContainer.x = 0;
  snakeContainer.y = 0;

  // snakeContainer.scale.set(1100 / 1100);
  app.stage.addChild(snakeContainer);

  snakeContainer.addChild(strip);

  app.ticker.add(() =>
  {
      count += 0.01;

      // make the snake
      for (let i = 0; i < points.length; i++)
      {
          points[i].y = Math.sin((i * 0.5) + count) * 1;
          points[i].x = i * ropeLength + Math.cos((i * 0.5) + count) * 50;
      }
  });
  

}