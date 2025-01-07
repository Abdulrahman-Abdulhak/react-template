export type Pixel = `${number}px`;
export type Percent = `${number}%`;

export type EM = `${number}em`;
export type REM = `${number}rem`;
export type Character = `${number}ch`;

export type ViewWidth = `${number}vw`;
export type ViewHeight = `${number}vh`;
export type DynamicViewHeight = `${number}dvh`;
export type SmallViewHeight = `${number}svh`;
export type LargeViewHeight = `${number}lvh`;
export type ViewMinimum = `${number}vmin`;
export type ViewMaximum = `${number}vmax`;

export type UnitSize =
  | Pixel
  | Percent
  | EM
  | REM
  | Character
  | ViewWidth
  | ViewHeight
  | DynamicViewHeight
  | SmallViewHeight
  | LargeViewHeight
  | ViewMinimum
  | ViewMaximum;
