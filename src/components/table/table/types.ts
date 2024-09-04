// types.ts
export interface TableHeader {
  id: string;
  label: string;
}

export interface TableRow {
  id: number;
  [key: string]: string | number; // Allows dynamic keys with string or number values
}

export interface TableData {
  header: TableHeader[];
  rows: TableRow[];
}
