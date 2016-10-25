function Plane() {

};

Plane.prototype.airport = function() {
  return this._airport;
};

Plane.prototype.land = function(airport) {
  this._airport = airport;
};
