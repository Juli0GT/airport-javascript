describe('Airport', function() {
  function Plane() {  };
  var airport;
  var plane = new Plane();

  describe('land', function() {
    it('lands a plane', function() {
      airport = new Airport();
      airport.land(plane);
      expect(airport.planes()).toContain(plane)
    });
  });

  describe('take_off', function() {
    it('takes off a plane', function() {
      airport = new Airport();
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes()).not.toContain(plane)
    });
  });
});
