declare global {
  interface String {
    toWords(separator: string = " "): string[];
    initials(initialsCount: number = 2): string;
    capitalize(): string;
  }
}

export {};
