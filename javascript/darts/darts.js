//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const solve = (x, y) => {
  const distanceFromCenter = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  if (distanceFromCenter > 10) return 0;
  else if (distanceFromCenter > 5) return 1;
  else if (distanceFromCenter > 1) return 5;
  else return 10;
};
