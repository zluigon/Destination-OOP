const Bag = require("../../classes/Bag");

describe("Bag tests", () => {
  it("instanceOf Bag", () => {
    const bag = new Bag();
    expect(bag).toBeInstanceOf(Bag);
  });

  it("tests assignment of props", () => {
    const bag = new Bag(5, 90);
    expect(bag.weight).toBe(5);
    expect(bag.id).toBe(90);
  });

  it("gets and sets owner", () => {
    const bag = new Bag(4, 80);
    expect(bag.getOwner()).toBe(null);
    bag.setOwner("abc");
    expect(bag.getOwner()).toBe("abc");
  })




});
