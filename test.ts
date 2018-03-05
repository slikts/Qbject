import Qbject from "./Qbject";
import { expect } from "chai";
import "mocha";

describe("Qbject", () => {
  it("should construct and update", () => {
    const qbj = Qbject({});
    const val = "data";
    qbj.foo = val;
    expect(qbj.foo.valueOf).to.equal(val);
    expect(qbj.bar.bar.baz.valueOf).to.be.null;
    expect(qbj.foo.valueOf).to.equal(val);
  });

  it("should return passed default value", () => {
    const obj = { foo: "test" };
    const defaultVal = "something";
    const qbj = Qbject(obj, defaultVal);

    expect(qbj.valueOf).to.equal(obj);
    expect(qbj.foo.valueOf).to.equal(obj.foo);
    expect(qbj.bar.valueOf).to.equal(defaultVal);
    expect(qbj.bar.bar.valueOf).to.equal(defaultVal);
    expect(qbj.valueOf).to.equal(obj);
    expect(qbj.bar.valueOf).to.equal(defaultVal);
  });

  it("should construct with no params", () => {
    const qbj = Qbject();
    expect(qbj).to.be.instanceOf(Object);
  });
});
