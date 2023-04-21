export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    this._code = val;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  /**
   * Creates the full string representation of this Currency.
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
