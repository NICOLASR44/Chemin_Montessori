import PropTypes from "prop-types";
// Hooks
import { useContext } from "react";

// Context
import { WorkshopContext } from "../../context/WorkshopContext";

import ResetArrow from "../svg/ResetArrow";
import "./styles/Filter.css";

function Filter({
  handleSearch,
  searchTerm,
  typeFilter,
  handleFilterChange,
  handleReset,
  style = {},
}) {
  const { paidVideoData } = useContext(WorkshopContext);

  return (
    <div className="filter" style={style}>
      <fieldset className="filter_fieldset">
        <select
          className="filter_fieldset-select"
          id="menu"
          name="menu"
          value={typeFilter}
          onChange={handleFilterChange}
        >
          <option value="">Sélectionner</option>
          {paidVideoData.map((workshop) => (
            <option key={workshop.id} value={workshop.title}>
              {" "}
              {/* A changer en type quand sera ajouté à la BDD */}
              {workshop.title}
            </option>
          ))}
        </select>
        <div className="filter_fieldset-search">
          <input
            className="filter_fieldset-search-input"
            type="search"
            id="site-search"
            name="search"
            value={searchTerm}
            placeholder="Rechercher un atelier"
            onChange={handleSearch}
          />
          <ResetArrow
            onClick={handleReset}
            className="filter_reset-arrow-mobile"
          />
        </div>
        <ResetArrow
          onClick={handleReset}
          className="filter_reset-arrow-desktop"
        />
      </fieldset>
    </div>
  );
}

Filter.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  typeFilter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};

export default Filter;
