"use strict";
console.log("Hellow");

window.onload = function () {
  const parallax = document.querySelector(".parallax");
  if (parallax) {
    const content = document.querySelector(".parallax_container");
    const clouds = document.querySelector(".images-parallax_clouds");
    const mountains = document.querySelector(".images-parallax_mountains");
    const human = document.querySelector(".images-parallax_human");
    ///////Коефіцієнти
    const forClouds = 40;
    const forMountains = 20;
    const forHuman = 10;

    /////Швидкість анімації
    const speed = 0.05;

    /////об'явлення перемінних
    let positionX = 0,
      positionY = 0;
    let coordXprocent = 0,
      coordYprocent = 0;

    function setMouseParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + distX * speed;
      positionY = positionY + distY * speed;

      //////Передаємо стилі

      clouds.style.cssText = `transform: translate(${positionX / forClouds}%,${
        positionY / forClouds
      }%)`;
      mountains.style.cssText = `transform: translate(${
        positionX / forMountains
      }%,${positionY / forMountains}%)`;
      human.style.cssText = `transform: translate(${positionX / forHuman}%,${
        positionY / forHuman
      }%)`;
      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", function (e) {
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      /////Ноль по середині
      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      ////отримуємо відсотки
      coordXprocent = (coordX / parallaxWidth) * 100;
      coordYprocent = (coordY / parallaxHeight) * 100;
    });
  }

  ////////////////
  ///////////////
  //////////////
};
