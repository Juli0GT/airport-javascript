function Airport() {
  this._planes = [];
  this._capacity = 20;
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
   }
    this._planes.push(plane);
    plane.landed();
  };

  Airport.prototype.takeOff = function(plane) {
    if (!this._planes.includes(plane)) {
      throw "Plane is not in the airport";
    }
    var index = this._planes.indexOf(plane);
    this._planes.splice(index);
    plane.takenOff();

  };
