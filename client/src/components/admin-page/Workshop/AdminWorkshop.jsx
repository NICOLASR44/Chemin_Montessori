import { useState } from "react";
// Components
import ControlSection from "./ControlSectionWorkshop";
import WorkshopForm from "./WorkshopForm";
import WorkshopCardListAdmin from "./WorkshopCardListAdmin";
import WorkshopCardDeleteListAdmin from "./WorkshopCardDeleteListAdmin";
import WorkshopUpdateForm from "./WorkshopUpdateForm";

// Context
import { AdminWorkshopContextProvider } from "../../../context/AdminWorkshopContext";

function AdminWorkshop() {
  const [control, setControl] = useState(2);
  const [selectedWorkshopId, setSelectedWorkshopId] = useState(null);

  const handleWorkshopCardClick = (workshopId) => {
    setSelectedWorkshopId(workshopId);
    setControl(4);
  };

  return (
    <AdminWorkshopContextProvider>
      <div>
        <ControlSection control={control} setControl={setControl} />
        {control === 1 && <WorkshopForm />}
        {control === 2 && (
          <WorkshopCardListAdmin
            onWorkshopCardClick={handleWorkshopCardClick}
          />
        )}
        {control === 3 && <WorkshopCardDeleteListAdmin />}
        {control === 4 && selectedWorkshopId && (
          <WorkshopUpdateForm workshopId={selectedWorkshopId} />
        )}
      </div>
    </AdminWorkshopContextProvider>
  );
}

AdminWorkshop.propTypes = {};
export default AdminWorkshop;
