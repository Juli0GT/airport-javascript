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
    it('raises an error when the airport is full', function() {
      for (var i=1;i<20;i++)
        {airport.land(new Plane())
        };
        expect(function() {airport.land(plane)}).toThrow("Plane cannot land: airport is full");
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
