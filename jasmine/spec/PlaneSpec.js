describe('Plane', function() {
  function Airport() {  };
  var plane;
  var airport = new Airport();

  beforeEach(function() {
    plane = new Plane();
  });

  afterEach(function() {
    plane = undefined;
  });

  describe('land', function() {
    it('stores the airport the plane landed at', function() {
      plane.land(airport);
      expect(plane.airport()).toBe(airport);
    });
    it('throws an error if already landed', function() {
      plane.land(airport);
      expect(function() {plane.land(airport)}).toThrow("Plane cannot land: Plane already landed");
    });
  });

  describe('take off', function() {
    it('can take off', function() {
      plane.land(airport);
      plane.takeOff();
      expect(plane.airport()).toBeUndefined();
    });
    it('throws an error if already flying', function() {
      expect(function() {plane.takeOff()}).toThrow("Plane cannot take off: Plane already flying");
    });
  });
});
