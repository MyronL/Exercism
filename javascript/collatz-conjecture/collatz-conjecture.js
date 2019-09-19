//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (num) => {
  if (num < 1) throw new Error('Only positive numbers are allowed');
  if (num === 1) return 0;
  return num % 2 === 0 ? 1 + steps(num / 2) : 1 + steps(3 * num + 1);
};
