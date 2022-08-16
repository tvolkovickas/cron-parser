const getCronValue = require("./getCronValue");

describe("getCronValue", () => {
  it("returns correct minute value when number is used", () => {
    const result = getCronValue("1", 0, 59);
    expect(result).toEqual("1");
  });
  it("returns correct minute value when multiple values are used", () => {
    const result = getCronValue("1,2,5", 0, 59);
    expect(result).toEqual("1 2 5");
  });
  it("returns correct minute value when range is used", () => {
    const result = getCronValue("25-30", 0, 59);
    expect(result).toEqual("25 26 27 28 29 30");
  });
  it("returns correct minute value when all values are used", () => {
    const result = getCronValue("*", 0, 59);
    expect(result).toEqual(
      "0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59"
    );
  });
  it("returns correct minute value when values are skipped", () => {
    const result = getCronValue("*/5", 0, 59);
    expect(result).toEqual("0 5 10 15 20 25 30 35 40 45 50 55");
  });
  it("returns correct minute value when values are skipped starting at specific value", () => {
    const result = getCronValue("20/5", 0, 59);
    expect(result).toEqual("20 25 30 35 40 45 50 55");
  });

  it("returns correct dayOfMonth value when number is used", () => {
    const result = getCronValue("1", 1, 31);
    expect(result).toEqual("1");
  });
  it("returns correct dayOfMonth value when multiple values are used", () => {
    const result = getCronValue("1,2,5", 1, 31);
    expect(result).toEqual("1 2 5");
  });
  it("returns correct dayOfMonth value when range is used", () => {
    const result = getCronValue("25-30", 1, 31);
    expect(result).toEqual("25 26 27 28 29 30");
  });
  it("returns correct dayOfMonth value when all values are used", () => {
    const result = getCronValue("*", 1, 31);
    expect(result).toEqual(
      "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31"
    );
  });
  it("returns correct dayOfMonth value when values are skipped", () => {
    const result = getCronValue("*/5", 1, 31);
    expect(result).toEqual("1 6 11 16 21 26 31");
  });
  it("returns correct dayOfMonth value when values are skipped starting at specific value", () => {
    const result = getCronValue("20/5", 1, 31);
    expect(result).toEqual("20 25 30");
  });

  it("returns correct dayOfWeek value when number is used", () => {
    const result = getCronValue("1", 1, 7);
    expect(result).toEqual("1");
  });
  it("returns correct dayOfWeek value when multiple values are used", () => {
    const result = getCronValue("1,2,5", 1, 7);
    expect(result).toEqual("1 2 5");
  });
  it("returns correct dayOfWeek value when range is used", () => {
    const result = getCronValue("1-7", 1, 7);
    expect(result).toEqual("1 2 3 4 5 6 7");
  });
  it("returns correct dayOfWeek value when all values are used", () => {
    const result = getCronValue("*", 1, 7);
    expect(result).toEqual("1 2 3 4 5 6 7");
  });
  it("returns correct dayOfWeek value when values are skipped", () => {
    const result = getCronValue("*/5", 1, 7);
    expect(result).toEqual("1 6");
  });
  it("returns correct dayOfWeek value when values are skipped starting at specific value", () => {
    const result = getCronValue("2/2", 1, 7);
    expect(result).toEqual("2 4 6");
  });

  it("returns error when not a number is passed", () => {
    const result = getCronValue("a", 0, 59);
    expect(result).toEqual("Invalid number");
  });

  it("returns error when number is outside range", () => {
    const result = getCronValue("60", 0, 59);
    expect(result).toEqual("Invalid number");
  });

  it("returns error when number is outside range", () => {
    const result = getCronValue("-2", 0, 59);
    expect(result).toEqual("Invalid number");
  });
});
