import { useState } from "react";
import "./styles/AdminBlog.css";
import ControlSectionBlog from "./ControlSectionBlog";
import AdminBlogValidation from "./AdminBlogValidation";
import AdminblogListContainer from "./AdminblogListContainer";
import AdminBlogDelete from "./AdminBlogListDelete";
import BlogUpdateForm from "./BlogUpdateForm";
import { BlogContextProvider } from "../../../context/BlogContext";

function AdminBlog() {
  const [control, setControl] = useState(2);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  const handleBlogCardClick = (BlogId) => {
    setSelectedBlogId(BlogId);
    setControl(4);
  };

  return (
    <BlogContextProvider>
      <div>
        <ControlSectionBlog control={control} setControl={setControl} />
        {control === 1 && <AdminBlogValidation />}
        {control === 2 && (
          <AdminblogListContainer onBlogCardClick={handleBlogCardClick} />
        )}
        {control === 3 && <AdminBlogDelete />}
        {control === 4 && selectedBlogId && (
          <BlogUpdateForm blogId={selectedBlogId} />
        )}
      </div>
    </BlogContextProvider>
  );
}

AdminBlog.propTypes = {};
export default AdminBlog;
