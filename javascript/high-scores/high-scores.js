//
// This is only a SKELETON file for the 'High-Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scores) {
    this.scrs = scores;
  }

  get scores() {
    return this.scrs;
  }

  get latest() {
    return this.scrs[this.scrs.length - 1];
  }

  get personalBest() {
    return Math.max(...this.scrs);
  }

  get personalTopThree() {
    return this.scrs.sort((a, b) => b - a).slice(0, 3);
  }
}
