function Weather() {

};

Weather.prototype.isStormy = function () {
  return Math.random(1) >= 0.8;
};
