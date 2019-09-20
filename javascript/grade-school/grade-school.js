//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor () {
    this.list = {}
  }

  roster () {
    return JSON.parse(JSON.stringify(this.list));
  }

  add (name, grade) {
    if (this.list[grade]) {
      this.list[grade].push(name);
      this.list[grade].sort();
    } else {
      this.list[grade] = [name];
    }
  }

  grade (grade) {
    return Array.from(this.list[grade] || []);
  }
}
