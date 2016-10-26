function Airport(weather = new Weather()) {
  this._planes = [];
  this._capacity = 20;
  this._weather = weather;
};

Airport.prototype.capacity = function() {
  return this._capacity;
}

Airport.prototype.planes = function() {
  return this._planes;
};

Airport.prototype.land = function(plane) {
  if (this._planes.length >= this._capacity) {
    throw "Plane cannot land: airport is full";
  };
  if (this.isBadWeather() === true) {
    throw "The weather is too bad to land.";
  };
  this._planes.push(plane);
  plane.landed();
};

Airport.prototype.takeOff = function(plane) {
  if (!this._planes.includes(plane)) {
    throw "Plane is not in the airport";
  };
  if (this.isBadWeather() === true){
    throw "The weather is too bad to take off.";
  };
  var index = this._planes.indexOf(plane);
  this._planes.splice(index);
  plane.takenOff();
};

Airport.prototype.isBadWeather = function () {
  return this._weather.isStormy();
};
