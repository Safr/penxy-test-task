// Global/Window object Stubs for Jest
window.matchMedia = window.matchMedia
  || function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

window.requestAnimationFrame = window.requestAnimationFrame
  || function (callback) {
    setTimeout(callback, 0);
  };

window.localStorage = {
  getItem: function () { },
  setItem: function () { },
};

Object.values = () => [];