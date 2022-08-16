const formatLabel = require("./formatLabel");

describe("formatLabel", () => {
  it("returns string with a length of 14", () => {
    const result = formatLabel("moo");
    expect(result.length).toEqual(14);
  });
});
