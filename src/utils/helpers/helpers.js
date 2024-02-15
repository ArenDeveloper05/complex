export function objectIsNotEpmty(obj) {
  return Object.keys(obj).length !== 0;
}

export function objectHasKey(obj, key) {
  return Object.keys(obj).includes(key.toString());
}

export function generateFormData(obj) {
  const formData = new FormData();
  for (const key in obj) {
    formData.append(key, obj[key]);
  }
  return formData;
}
