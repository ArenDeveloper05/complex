export function objectIsNotEpmty(obj) {
  return Object.keys(obj).length !== 0;
}

export function objectHasKey(obj, key) {
  return Object.keys(obj).includes(key.toString());
}
