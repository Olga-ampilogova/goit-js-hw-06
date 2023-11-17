class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value
  };

  padStart (str)  {
    let commLen = str.length + this.#value.length;
    this.#value = this.#value.padStart(commLen, str);
  }
  padEnd (str) {
    let commLen = str.length + this.#value.length;
    this.#value = this.#value.padEnd(commLen, str);
  }
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
 }
}
const builder = new StringBuilder(".");
console.log(builder.getValue());
 builder.padStart("^");
console.log(builder.getValue());
builder.padEnd("^");
console.log(builder.getValue());
builder.padBoth("=");
console.log(builder.getValue())