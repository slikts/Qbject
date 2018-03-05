interface Qbject<T> {
  [key: string]: any;
  // valueOf: T | null;
}

const Qbject = <T>(
  obj: Qbject<T> = {},
  defaultValue: T | null = null
): Qbject<T> => {
  return new Proxy(obj, {
    get(target, key) {
      if (key === "valueOf") {
        return target;
      } else {
        let clone = { ...obj };
        const proxy: Qbject<T> = new Proxy(clone, {
          get(subTarget, subKey) {
            if (subKey === "valueOf") {
              return clone;
            } else {
              clone = clone ? clone[subKey] || defaultValue : defaultValue;
              return proxy;
            }
          }
        });

        return proxy[key];
      }
    }
  });
};

export default Qbject;
