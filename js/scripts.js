console.log('OK');

gsap.to(
  '#hat', {
    opacity: 1,
    duration: 5, 
    x: 150,
    y: 15
  });

  gsap.set(
    '#head', {
      x: 150,
      y: 215
    });