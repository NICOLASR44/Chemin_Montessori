// import PropTypes from 'prop-types'
import "./styles/AdminReview.css";

import { AdminCommentContextProvider } from "../../../context/AdminCommentContext";

import ReviewWrapper from "./ReviewWrapper";

function AdminReview() {
  return (
    <AdminCommentContextProvider>
      <ReviewWrapper />
    </AdminCommentContextProvider>
  );
}

AdminReview.propTypes = {};
export default AdminReview;
