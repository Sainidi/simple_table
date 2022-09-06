import React from 'react';

import { TableCell, TableRow, Typography, TableHead as MuiTableHead } from '@mui/material';

import { TableCellAlign, TableHeadProps } from '../../utils/common';

export const TableHead = ({ cells, variant }: TableHeadProps) => {
  return (
    <MuiTableHead>
      <TableRow>
        {cells.map((cell, index) => {
          const cellAlignment = cell.align ? cell.align : TableCellAlign.LEFT;

          return (
            <TableCell align={cellAlignment} key={cell.title.split(' ').join('_') + index}>
              <Typography variant={variant}>{cell.title}</Typography>
            </TableCell>
          );
        })}
      </TableRow>
    </MuiTableHead>
  );
};
