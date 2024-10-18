// useWorkshopFilter.js
import { useState, useMemo } from "react";

const useWorkshopFilter = (
  workshops,
  initialVisibleCount = 6,
  someInitialVisibleCount = 3
) => {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [someVisibleCount, setSomeVisibleCount] = useState(
    someInitialVisibleCount
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const filteredWorkshops = useMemo(
    () =>
      workshops.filter((workshop) => {
        const matchesSearchTerm = workshop.title
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesTypeFilter =
          typeFilter === "" || workshop.title === typeFilter;
        //       typeFilter === "" || workshop.type === typeFilter; // A mettre quand type sera ajouté à la BDD
        return matchesSearchTerm && matchesTypeFilter;
      }),
    [workshops, searchTerm, typeFilter]
  );

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const handleShowSomeMore = () => {
    setSomeVisibleCount((prevCount) => prevCount + 3);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setTypeFilter(event.target.value);
  };

  const handleReset = () => {
    setSearchTerm("");
    setTypeFilter("");
  };

  return {
    visibleCount,
    someVisibleCount,
    filteredWorkshops: filteredWorkshops.slice(0, visibleCount),
    handleShowMore,
    handleShowSomeMore,
    handleSearch,
    handleFilterChange,
    handleReset,
    searchTerm,
    typeFilter,
  };
};

export default useWorkshopFilter;
