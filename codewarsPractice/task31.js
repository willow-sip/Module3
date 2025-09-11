"use strict;" 
//Fun with ES6 Classes #6
class File {
  #fullName;
  #filename;
  #extension;

  constructor(fullName, contents) {
    this.#fullName = fullName;
    this.#filename = fullName.slice(0, fullName.lastIndexOf("."));
    this.#extension = fullName.slice(fullName.lastIndexOf(".") + 1);
    this.contents = contents;
    this.lines = contents.split("\n") || "";
    this.lineIndex = 0;
    this.charIndex = 0;
  }

  get fullName() {
    return this.#fullName;
  }
  get filename() {
    return this.#filename;
  }
  get extension() {
    return this.#extension;
  }

  getContents() {
    return this.contents;
  }
  write(str) {
    if (this.contents) {
      this.contents += `\n${str}`;
    } else {
      this.contents = str;
    }
    this.lines = this.contents.split("\n");
  }
  gets() {
    if (this.lineIndex < this.lines.length) {
      return this.lines[this.lineIndex++];
    }
    return undefined;
  }
  getc() {
    if (this.charIndex < this.contents.length) {
      return this.contents[this.charIndex++];
    }
    return undefined;
  }
}