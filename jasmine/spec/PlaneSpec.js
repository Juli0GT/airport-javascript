describe('Plane', function() {

  var plane = new Plane();;
  function Airport() {  };
  var airport = new Airport();


  describe('land', function() {
    it('stores the airport the plane landed at', function() {
      plane.land(airport);
      expect(plane.airport()).toBe(airport);
    });
  });

  describe('take off', function() {
    it('can take off', function() {
      plane.takeOff();
      expect(plane.airport()).toBeUndefined();
    });
  });
});
