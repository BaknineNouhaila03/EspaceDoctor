import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@assets/css/font-awesome.min.css";

const Table = ({ columns = [], data = [] }) => {
  if (!Array.isArray(columns) || !Array.isArray(data)) {
    console.error("Invalid prop types: 'columns' and 'data' should be arrays.");
    return <div>Error: Invalid table data</div>;
  }

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor}>{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.accessor}>
                  {column.accessor === "name" ? (
                    <div className="d-flex align-items-center">
                      <span>{row[column.accessor]}</span>
                    </div>
                  ) : column.accessor === "actions" ? (
                    <button className="btn btn-link p-0">...</button>
                  ) : (
                    row[column.accessor]
                  )}
                </td>
              ))}
              <td>
                <button className="btn btn-primary btn-sm">
                  Envoyer un message
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length + 1}>No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

// PropTypes for validation
Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      accessor: PropTypes.string.isRequired,
      Header: PropTypes.string.isRequired,
    })
  ),
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
