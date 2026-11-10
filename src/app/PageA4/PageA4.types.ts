export type PageRange = [start: number, end: number];

export interface Band {
  top: number;
  bottom: number;
}

export interface Measured {
  lines: Band[];
  atoms: Band[];
  marks: number[];
  total: number;
}

export interface Cut {
  cut: number;
  resume: number;
}
