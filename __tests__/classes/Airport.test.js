const Airport = require("../../classes/Airport");
const Plane = require("../../classes/Plane");

describe("Airport tests", () => {
  it("instanceOf Airport", () => {
    const airport = new Airport("Newark", () => {
      expect(airport).toBeInstanceOf(Airport);
    });
  });

  it("assings properties", () => {
    const airport = new Airport("Newark", () => {
      expect(airport.name).toBe("Newark");
      expect(Airport.airportCode).toBe("EWR");
    });
  });

  it("initializes and adds planes", () => {
    const airport = new Airport("Newark");
    const plane = new Plane("United Airlines", "DFW");
    expect(airport.getPlanes().length).toBe(0);
    airport.addPlane(plane);
    expect(airport.getPlanes().length).toBe(1);
    expect(airport.getPlanes()[0]).toBeInstanceOf(Plane);

  })
});
