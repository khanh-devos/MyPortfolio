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

      if (className.includes('top')) item.style.transform = 'translateY(-20px)';
      if (className.includes('left')) item.style.transform = 'translateX(-20px)';
      if (className.includes('right')) item.style.transform = 'translateX(20px)';
    }
  });
};

const iniRubyAnimate = () => {
  // select items: item should hide inside ini-CSS
  const classNames = ['ruby-animate-top', 'ruby-animate-left', 'ruby-animate-right', 'ruby-left', 'ruby-right', 'ruby-top'];

  classNames.forEach((name) => showRubyAnimate(name));
};

const checkRubyAnimate = () => {
  const classNames = ['ruby-animate-top', 'ruby-animate-left', 'ruby-animate-right', 'ruby-left', 'ruby-right', 'ruby-top'];
  classNames.forEach((name) => showRubyAnimate(name));
};

if (document.readyState === 'complete') {
  iniRubyAnimate();
  checkRubyAnimate(null);
}