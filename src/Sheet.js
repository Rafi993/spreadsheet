import React, { useState, useCallback, Fragment } from "react";

import Cell from "./Cell";
import { Sheet as StyledSheet } from "./styles";

const NUMBER_OF_ROWS = 10;
const NUMBER_OF_COLUMNS = 10;

const getColumnName = index =>
  String.fromCharCode("A".charCodeAt(0) + index - 1);

const Sheet = () => {
  const [data, setData] = useState({});

  const setCellValue = useCallback(
    ({ row, column, value }) => {
      const newData = { ...data };

      if (!newData[column]) {
        newData[column] = {};
      }

      newData[column][row] = value;
      setData(newData);
    },
    [data, setData]
  );

  const computeCell = useCallback(
    ({ row, column }) => {
      const cellContent = data?.[column]?.[row];
      if (cellContent) {
        if (cellContent.charAt(0) === "=") {
          return "";
        }
        return cellContent;
      }
      return "";
    },
    [data]
  );

  return (
    <StyledSheet>
      {Array(NUMBER_OF_ROWS)
        .fill()
        .map((m, i) => {
          return (
            <Fragment key={i}>
              {Array(NUMBER_OF_COLUMNS)
                .fill()
                .map((n, j) => {
                  const columnName = getColumnName(j);
                  return (
                    <Cell
                      rowIndex={i}
                      columnIndex={j}
                      columnName={columnName}
                      setCellValue={setCellValue}
                      currentValue={data?.[columnName]?.[i]}
                      computeCell={computeCell}
                      key={`${columnName}${i}`}
                    />
                  );
                })}
            </Fragment>
          );
        })}
    </StyledSheet>
  );
};

export default Sheet;
