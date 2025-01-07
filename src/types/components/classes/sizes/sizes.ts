import { UnitSize } from "./UnitSizes";

type NumValues =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96;

type PercentageValues =
  | "1/2"
  | "1/3"
  | "1/4"
  | "1/5"
  | "1/6"
  | "1/12"
  | "2/3"
  | "2/4"
  | "2/5"
  | "2/6"
  | "2/12"
  | "3/4"
  | "3/5"
  | "3/6"
  | "3/12"
  | "4/5"
  | "4/6"
  | "4/12"
  | "5/6"
  | "5/12"
  | "6/12"
  | "7/12"
  | "8/12"
  | "9/12"
  | "10/12"
  | "11/12"
  | "full";

type KeywordValues =
  | "auto"
  | "screen"
  | "svw"
  | "lvw"
  | "dvw"
  | "min"
  | "max"
  | "fit";

export type Height =
  | `h-${NumValues}`
  | `h-${PercentageValues}`
  | `h-${KeywordValues}`
  | `h-${UnitSize}`;

export type Width =
  | `w-${NumValues}`
  | `w-${PercentageValues}`
  | `w-${KeywordValues}`
  | `w-${UnitSize}`;

export type Size =
  | `size-${NumValues}`
  | `size-${PercentageValues}`
  | `size-${UnitSize}`;
