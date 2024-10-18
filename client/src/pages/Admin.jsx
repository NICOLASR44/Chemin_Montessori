import { useState } from "react";

// Context
import { AdminUserContextProvider } from "../context/AdminUserContext";

import AdminWorkshop from "../components/admin-page/Workshop/AdminWorkshop";
import AdminBlog from "../components/admin-page/Blog/AdminBlog";
import AdminUsers from "../components/admin-page/Users/AdminUsers";
import AdminReview from "../components/admin-page/Review/AdminReview";
import AdminStats from "../components/admin-page/Stats/AdminStats";
import SideNav from "../components/admin-page/shared/Sidenav";
import UpperNav from "../components/admin-page/shared/UpperNav";
import "./styles/Admin.css";

export default function Admin() {
  /* Cette state permet de controler quel module de controle
  est appliqué à la page.
  */

  const [palet, setPalet] = useState(1);

  return (
    <AdminUserContextProvider>
      <div className="admin">
        <SideNav palet={palet} setPalet={setPalet} />
        <div className="admin__main-container">
          <UpperNav />
          {palet === 1 && <AdminWorkshop />}
          {palet === 2 && <AdminBlog />}
          {palet === 3 && <AdminUsers />}
          {palet === 4 && <AdminReview />}
          {palet === 5 && <AdminStats />}
        </div>
      </div>
    </AdminUserContextProvider>
  );
}
