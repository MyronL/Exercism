//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(s1, s2, s3) {
    this.lengths = [s1, s2, s3];
  }

  kind() {
    let filteredSides = this.lengths.filter(length => length > 0);
    if (filteredSides.length != this.lengths.length) throw new Error("")
    filteredSides.sort((a, b) => a - b);
    if (filteredSides[0] + filteredSides[1] < filteredSides[2]) throw new Error("");
    if (filteredSides[0] === filteredSides[2]) return 'equilateral';
    else if (filteredSides[0] === filteredSides[1] || filteredSides[1] === filteredSides[2]) return 'isosceles';
    else return 'scalene';
  }
}
