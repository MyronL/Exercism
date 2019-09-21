export class change {
  calculate (change, amount) {
    if (amount < 0) throw new Error('Negative totals are not allowed.');
  }
}
