//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = (number) => {
  const arr = number.toString().split("").map(num => parseInt(num));
  const value = arr.reduce((total, val) => {
    return total + Math.pow(val, arr.length);
  }, 0);
  return value === number;
};
