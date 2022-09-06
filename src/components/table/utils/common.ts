import { Variant } from '@mui/material/styles/createTypography';

export type TableCellType = {
  field: string;
  title: string;
  align?: TableCellAlign;
  index?: number;
  render?: (item) => void;
};

export interface TableHeadProps {
  cells: TableCellType[];
  variant: Variant;
}

export enum TableCellAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export interface TableProps {
  cells: TableCellType[];
  data: any[];
  headVariant?: Variant;
}
