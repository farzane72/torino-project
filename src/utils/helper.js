
const flattenObject = (obj, delimiter = ".", prefix = "") => {
  const flattObject = Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}${delimiter}` : "";
    if (
      typeof obj[k] === "object" &&
      obj[k] !== null &&
      Object.keys(obj[k]).length > 0
    )
      Object.assign(acc, flattenObject(obj[k], delimiter, k));
    else acc[k] = obj[k];
    return acc;
  }, {});

  return flattObject;
};

const DateToIso = (date) => new Date(date).toISOString();


const uniqueItem = (array,key) => {
  return Array.from(
    array
    .reduce((map, item) => {
        const { id, name } = item[key];
        if (!map.has(id)) {
          map.set(id, { id, name });
        }
        return map;
      }, new Map())
      .values()
  );
};


const validateIranianNationalCode = (value) => {
  if (!/^\d{10}$/.test(value)) return false; // Must be exactly 10 digits

  const check = +value[9];
  const sum = value
    .substring(0, 9)
    .split('')
    .reduce((acc, digit, index) => acc + +digit * (10 - index), 0);

  const remainder = sum % 11;
  return remainder < 2 ? check === remainder : check === 11 - remainder;
};
export { flattenObject, DateToIso ,uniqueItem,validateIranianNationalCode};
