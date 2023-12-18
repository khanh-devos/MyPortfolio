const showRubyAnimate = (className) => {
  if (!className) return;
  // select items: item should hide inside ini-CSS
  const items = document.getElementsByClassName(className);

  Object.values(items).forEach((item) => {
    // getBoundingClientRect();
    const position = item.getBoundingClientRect();
    const difBottom = position.top - window.innerHeight;

    if (difBottom <= -100 && item.style.opacity < 1) {
      item.style.transform = 'translate(0px, 0px)';
      item.style.transitionDuration = '0.7s';
      item.style.opacity = 1;
    }

    if (difBottom > 0) {
      item.style.transitionDuration = '0.7s';
      item.style.opacity = 0;

      if (className.includes('top')) item.style.transform = 'translateY(-22px)';
      if (className.includes('left')) item.style.transform = 'translateX(-22px)';
      if (className.includes('right')) item.style.transform = 'translateX(22px)';
    }
  });
};

const iniRubyAnimate = () => {
  // select items: item should hide inside ini-CSS
  const classNames = ['ruby-animate-top', 'ruby-animate-left', 'ruby-animate-right', 'ruby-left', 'ruby-right', 'ruby-top'];

  classNames.forEach((name) => showRubyAnimate(name));
};

const blurHeader = () => {
  const winScrollPos = Math.round(window.scrollY);
  const header = document.getElementById('header');

  if (winScrollPos > 50) {
    if (window.innerWidth > 768) header.style.opacity = 0.5;
  } else {
    header.style.opacity = 1;
  }

  const darkenHeader = () => {
    header.style.opacity = 1;
  };

  header.addEventListener('mouseover', darkenHeader);
};

const checkRubyAnimate = () => {
  const classNames = ['ruby-animate-top', 'ruby-animate-left', 'ruby-animate-right', 'ruby-left', 'ruby-right', 'ruby-top'];
  classNames.forEach((name) => showRubyAnimate(name));

  blurHeader();
};

if (document.readyState === 'complete') {
  iniRubyAnimate();
  checkRubyAnimate(null);
}