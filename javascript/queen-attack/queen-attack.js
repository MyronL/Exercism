export class QueenAttack {
  constructor (position = {white: [0, 3], black: [7, 3]}) {
    Object.assign(this, position);
    if (this.white[0] === this.black[0] && this.white[1] === this.black[1])
      throw new Error("Queens cannot share the same space");
  }

  toString () {
    let board = [...Array(8)].map(row => Array(8).fill("_"));
    board[this.white[0]][this.white[1]] = "W";
    board[this.black[0]][this.black[1]] = "B";
    return board.map(r => r.join(' ')).join('\n') + '\n';
  }

  canAttack () {
    for (const coor of this.white) {
      if (coor === this.black[0] || coor === this.black[1]) return true;
    }
    const dx = this.white[0] - this.black[0];
    const dy = this.white[1] - this.black[1];
    if (Math.abs(dx) === Math.abs(dy)) return true;
    return false;
  }
}
