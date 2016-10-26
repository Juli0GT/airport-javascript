describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('flying plane', function() {
    it('returns true when the plane is flying', function() {
      plane.landed();
      plane.takenOff();
      expect(plane.isFlying()).toBeTruthy();
    });
  });

  describe('landed plane', function() {
    it('returns false when the plane is landed', function() {
      plane.landed();
      expect(plane.isFlying()).toBeFalsy();
    });
  });
});
