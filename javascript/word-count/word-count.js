//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Words {
  count(str) {
    let cnt = {};
    str.trim().toLowerCase().split(/\s+/).forEach((word) => {
      cnt[word] = cnt.hasOwnProperty(word) ? cnt[word] + 1 : 1;
    })
    return cnt;
  }
}
