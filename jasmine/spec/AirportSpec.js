describe('Airport', function() {
  var airport;
  var plane;

  beforeEach (function() {
    plane = new Plane();
    airport = new Airport();
  });

  describe('land', function() {
    it('lands a plane', function() {
      airport.land(plane);
      expect(airport.planes()).toContain(plane);
    });
    it('raises an error when the airport is full', function() {
      for (var i=1;i<=20;i++) {
        airport.land(new Plane())
        };
        expect(function() {
          airport.land(plane);}).toThrow("Plane cannot land: airport is full");
    });
  });

  describe('takeOff', function() {
    it('takes off a plane', function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes()).not.toContain(plane);
    });
    it('raise an error when plane is not in the airport', function() {
      expect(function() {
        airport.takeOff(plane);}).toThrow("Plane is not in the airport");
    });
  });
});
