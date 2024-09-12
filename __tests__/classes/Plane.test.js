const Plane = require("../../classes/Plane");
const Person = require("../../classes/Person");
const Airport = require("../../classes/Airport");

describe("Plane tests", () => {
  it("instanceOf Plane", () => {
    const plane = new Plane();
    expect(plane).toBeInstanceOf(Plane);
  });

  it("assigns properties", () => {
    const plane = new Plane("Delta", "JP");
    expect(plane.company).toBe("Delta");
    expect(plane.origin).toBe("EWR");
    expect(plane.destination).toBe("JP");
  });

  it("initializes and adds passengers", () => {
    const plane = new Plane("Delta", "JP");
    const person = new Person("Poseidon", "Atlantis");
    expect(plane.getPassengers().length).toBe(0);
    plane.addPassenger(person);
    expect(plane.getPassengers()[0]).toBeInstanceOf(Person);
    expect(plane.getPassengers().length).toBe(1);
  });
});
