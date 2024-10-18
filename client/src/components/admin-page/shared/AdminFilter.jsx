import PropTypes from "prop-types";
import "./styles/AdminFilter.css";
import ResetArrow from "../../svg/ResetArrow";

function AdminFilter({ handleSearch, searchTerm, handleReset }) {
  return (
    <div className="admin-filter">
      <fieldset className="filter_fieldset">
        <input
          className="filter_fieldset-search-input"
          type="search"
          id="site-search"
          name="search"
          value={searchTerm}
          placeholder="Rechercher un nom d'utilisateur"
          onChange={handleSearch}
        />
        <ResetArrow
          onClick={handleReset}
          className="filter_reset-arrow-desktop"
        />
      </fieldset>
    </div>
  );
}

AdminFilter.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};
export default AdminFilter;
