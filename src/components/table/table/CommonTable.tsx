// CommonTable.tsx
import React from "react";
import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { TableData } from "./types";

interface CommonTableProps {
  data: TableData;
}

const CommonTable: React.FC<CommonTableProps> = ({ data }) => {
  return (
    <Box border={1}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {data.header.map((e) => (
                <TableCell key={e.id} align="center">
                  {e.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.rows.map((row) => (
              <TableRow key={row.id}>
                {data.header.map((headerItem) => (
                  <TableCell key={headerItem.id} align="center">
                    {row[headerItem.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CommonTable;
