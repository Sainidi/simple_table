import React from 'react';

import { TableBody, TableCell, TableRow, Table as MuiTable } from '@mui/material';

import { TableHead } from './components/tableHead';
import { TableCellAlign, TableProps } from './utils/common';

export const Table = ({ cells, data, headVariant }: TableProps) => {
  return (
    <MuiTable aria-labelledby="simple table">
      <TableHead cells={cells} variant={headVariant} />

      <TableBody>
        {data &&
          data.map((item, index) => {
            const rowId = Object.values(item).join('_') + index;

            return (
              <TableRow key={`row_${rowId}`}>
                {cells.map((cell) => (
                  <TableCell key={`cell_${String(cell.field)}_${rowId}`} align={cell.align ? cell.align : TableCellAlign.LEFT}>
                    <>
                      {cell.index && index + 1}
                      {cell.render && cell.render(item)}
                      {!cell.render && <span>{item[cell.field]}</span>}
                    </>
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
      </TableBody>
    </MuiTable>
  );
};
