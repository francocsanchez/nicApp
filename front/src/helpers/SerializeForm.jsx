export const SerializeForm = (form) => {
  const formData = new FormData(form);

  const obj = {};

  for (let [name, value] of formData) {
    obj[name] = value;
  }

  return obj;
};
