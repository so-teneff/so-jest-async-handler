const f = require("./index");

global.someEvent = {
  listen: jest.fn(),
};

describe("the f function", () => {
  describe("called with 1", () => {
    beforeAll(() => {
      global.someEvent.listen.mockClear();
      f(1);
    });

    it("set the someEvent handler", () => {
      expect(global.someEvent.listen).toHaveBeenCalledWith(
        expect.any(Function)
      );
    });

    describe("when the someEvent triggers the handler", () => {
      beforeAll(() => {
        global.console.log = jest.fn();
        const [[handler]] = global.someEvent.listen.mock.calls;
        handler();
      });

      it("should call console.log", () => {
        expect(console.log).toHaveBeenCalledWith("ok");
      });
    });
  });

  describe("called with something else", () => {
    beforeAll(() => {
      global.someEvent.listen.mockClear();
      f("x");
    });

    it("set the someEvent handler", () => {
      expect(global.someEvent.listen).toHaveBeenCalledWith(
        expect.any(Function)
      );
    });

    describe("when the someEvent triggers the handler", () => {
      let handler;
      beforeAll(() => {
        [[handler]] = global.someEvent.listen.mock.calls;
      });

      it("should return rejected promise with `not okay`", async () => {
        await expect(handler()).rejects.toEqual("not okay");
      });
    });
  });
});
