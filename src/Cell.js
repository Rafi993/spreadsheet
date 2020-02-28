import React, { useCallback, useState, memo, useMemo } from "react";

import { Input, Header } from "./styles";

const Cell = ({
  rowIndex,
  columnIndex,
  columnName,
  setCellValue,
  computeCell,
  currentValue
}) => {
  const [edit, setEdit] = useState(false);

  const value = useMemo(() => {
    if (edit) {
      return currentValue || "";
    }
    return computeCell({ row: rowIndex, column: columnName });
  }, [edit, currentValue, rowIndex, columnName, computeCell]);

  const handleChange = useCallback(
    event => {
      setCellValue({
        row: rowIndex,
        column: columnName,
        value: event.target.value
      });
    },
    [rowIndex, columnName, setCellValue]
  );

  if (columnIndex === 0 && rowIndex === 0) {
    return <Header />;
  }

  if (columnIndex === 0) {
    return <Header>{rowIndex}</Header>;
  }

  if (rowIndex === 0) {
    return <Header>{columnName}</Header>;
  }

  return (
    <Input
      onBlur={() => setEdit(false)}
      onFocus={() => setEdit(true)}
      value={value}
      type="text"
      onChange={handleChange}
    />
  );
};

export default memo(Cell);
