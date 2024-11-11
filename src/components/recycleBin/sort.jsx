import React, { useState } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

export const getSortIcon = (sortConfig, columnName) => {
  if (sortConfig.key !== columnName) {
    return <FaSort className="ml-1 inline" />;
  }
  return sortConfig.direction === "asc" ? (
    <FaSortUp className="ml-1 inline" />
  ) : (
    <FaSortDown className="ml-1 inline" />
  );
};
