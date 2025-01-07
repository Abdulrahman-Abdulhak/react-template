Object.defineProperties(String.prototype, {
  toWords: {
    value: function (separator = " "): string[] {
      return this.split(separator);
    },
    configurable: true,
    writable: true,
  },
  initials: {
    value: function (initialsCount = 2) {
      const _words = this.toWords();

      let initials_ = "";
      for (let i = 0; i < _words.length && i < initialsCount; i++) {
        initials_ += _words[i][0];
      }

      return initials_.toLowerCase();
    },
    configurable: true,
    writable: true,
  },
  capitalize: {
    value: function () {
      return this.toWords()
        .map((word: string) => word.replace(word[0], word[0].toUpperCase()))
        .join(" ");
    },
    configurable: true,
    writable: true,
  },
});
