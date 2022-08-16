const isValidInput = require("./validateInput");

describe("validateInput", () => {
  it("should return true when string has at least characted", () => {
    const result = isValidInput("a");
    expect(result).toEqual(true);
  });
  it("should return true when valid string is used", () => {
    const result = isValidInput("test this command");
    expect(result).toEqual(true);
  });
  it("should return false when input is not a string", () => {
    const result = isValidInput(1);
    expect(result).toEqual(false);
  });
  it("should return false when input is missing", () => {
    const result = isValidInput();
    expect(result).toEqual(false);
  });
});
