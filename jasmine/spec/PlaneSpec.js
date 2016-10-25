describe('Plane', function() {
  var plane;
  function Airport() {  };
  var airport = new Airport();


  describe('land', function() {
    it('stores the airport the plane landed at', function() {
      plane = new Plane();
      plane.land(airport);
      expect(plane.airport()).toBe(airport);
    });
  });
});
