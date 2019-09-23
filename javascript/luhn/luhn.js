//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Luhn {
  constructor(str) {
    this.value = str.replace(/\s/g, '');
  }

  get valid () {
    const regex = RegExp(/\D/g);
    if (this.value.length <= 1 || regex.test(this.value)) return false;
    const total = this.value.split('').reverse().map(num => parseInt(num)).reduce((acc, currVal, index) => {
      let value = currVal;
      if (index % 2 === 1) {
        value = currVal * 2 > 9 ? currVal * 2 - 9 : currVal * 2;
      }
      return acc + value;
    }, 0)
    return total % 10 === 0;
  }
}
