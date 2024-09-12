const Person = require("../../classes/Person");
const Bag = require("../../classes/Bag");

describe("Person tests", () => {
  it("instanceOf Person", () => {
    const person = new Person();
    expect(person).toBeInstanceOf(Person);
  });

  it("assings person properties", () => {
    const person = new Person("Zeus", "Olympia");
    expect(person.name).toBe("Zeus");
    expect(person.destination).toBe("Olympia");
  });

  it("adds to and gets bags array", () => {
    const person = new Person("Poseidon", "Atlantis");
    const bag = new Bag(5, 90);
    const bag2 = new Bag(4, 80);
    person.addBag(bag);
    person.addBag(bag2);
    expect(person.getBags().length).toBe(2);
  });
});
