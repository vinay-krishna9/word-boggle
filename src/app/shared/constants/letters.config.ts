export const LETTERS = {
  english: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  //   TODO: add german + french
} as const;

export type Language = keyof typeof LETTERS;
