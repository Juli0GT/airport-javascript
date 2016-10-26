describe("Weather", function () {
  var stormyWeather
  var sunnyWeather

  beforeEach(function () {
    stormyWeather = new Weather;
    sunnyWeather = new Weather;
  });

  describe("sunny weather", function () {
    it("returns false when weather is sunny", function () {
      spyOn(Math, "random").and.returnValue(0.5);
      expect(sunnyWeather.isStormy()).toBeFalsy();
    });
  });

  describe("stormyWeather", function () {
    it("returns false when weather is sunny", function () {
      spyOn(Math, "random").and.returnValue(0.9);
      expect(stormyWeather.isStormy()).toBeTruthy();
    });
  });
});
