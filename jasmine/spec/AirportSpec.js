describe('Airport', function() {
  var airport;
  var plane;

  beforeEach (function() {
    stormyWeather = {
      isStormy: function() {
        return true;
      }
    }
    sunnyWeather = {
      isStormy: function () {
        return false;
      }
    }
    sunnyAirport = new Airport(sunnyWeather);
    stormyAirport = new Airport(stormyWeather);
    plane = new Plane();
    airport = new Airport();
  });

  describe('land', function() {
    it('lands a plane', function() {
      sunnyAirport.land(plane);
      expect(sunnyAirport.planes()).toContain(plane);
    });

    it('raises an error when the airport is full', function() {
      for (var i=1;i<=20;i++) {
        sunnyAirport.land(new Plane())
        };
        expect(function() {
          sunnyAirport.land(plane);}).toThrow("Plane cannot land: airport is full");
    });

    it('does not allow plane to land when the weather is stormy', function () {
      expect(function () {
        stormyAirport.land(plane)}).toThrow("The weather is too bad to land.");
      expect(stormyAirport.planes()).not.toContain(plane);
    });
  });

  describe('takeOff', function() {
    it('takes off a plane', function() {
      sunnyAirport.land(plane);
      sunnyAirport.takeOff(plane);
      expect(sunnyAirport.planes()).not.toContain(plane);
    });
    it('raise an error when plane is not in the airport', function() {
      expect(function() {
        sunnyAirport.takeOff(plane);}).toThrow("Plane is not in the airport");
    });
  });
});
