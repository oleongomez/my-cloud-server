var lowdb = require("lowdb");
jest.mock("lowdb")
var simple = require("../../../src/simple");

describe("the init function", () => {
  test("must return an object", () => {
    lowdb.mockImplementationOnce(() => {
      return () => {
        return null;
      };
    });
    const result = simple.init_db();
    expect(result).not.toBeNull();
    expect(typeof result).toEqual("object");
  });
});

describe("simple storage read_all", () => {
  test("must read storage file", () => {
    lowdb.mockResolvedValue(new lodash.chain());
    lowdb.value.mockResolvedValue({ users: [] });
    const result = simple.read_all();
    expect(result).not.toBeNull();
    expect(result).toEqual({ users: [] });
  });
});
