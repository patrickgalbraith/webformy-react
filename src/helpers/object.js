export const reduce = (fn, acc, obj) =>
  Object.keys(obj).reduce((acc, key) => fn(acc, obj[key], key, obj), acc)

export const filter = (fn, obj) =>
  reduce((acc, val, key, obj) =>
    fn(val, key, obj)
      ? Object.assign(acc, {[key]: val})
      : acc, {}, obj)

export const filterKeys = (keys, obj) =>
  filter((val, key) => !keys.includes(key), obj)