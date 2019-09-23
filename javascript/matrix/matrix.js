//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(mat) {
    this.matrix = mat.split("\n").map(n => n.split(' ').map(n => parseInt(n)));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.matrix[0].map((col, i) => this.matrix.map(row => row[i]));
  }
}
