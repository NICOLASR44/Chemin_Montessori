import PropTypes from "prop-types";
import "./styles/UserInfosCard.css";
import { useState, useContext } from "react";
import { format, parseISO } from "date-fns";
import "./styles/UserActivityList.css";
import { AdminUserFullData } from "../../../context/AdminUserFullDataContext";

export default function UserActivityList({ activityType }) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    userOrderData,
    userOrderIsLoading,
    userCommentData,
    userCommentIsLoading,
  } = useContext(AdminUserFullData);

  if (userOrderIsLoading || userCommentIsLoading) return "loading";

  return (
    <div className="user-activity-list">
      <div className="user-activity-list__title-container">
        <h3 className="user-activity-list__title">
          {activityType === "orders"
            ? "Consulter les dernières commandes"
            : "Consulter les derniers commentaires"}
        </h3>
        <button
          className="user-activity-list__button"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && (
        <ul className="user-activity-list__list">
          {activityType === "orders" &&
            userOrderData.map((order) => (
              <li className="user-activity-list__list-item" key={order.id}>
                <span>
                  {format(parseISO(order.order_date), "dd/MM/yyyy")} -{" "}
                </span>
                <span>{order.workshop_title} - </span>
                <span className="user-activity-list__list-item--end">
                  {order.order_total_amount}€
                </span>
              </li>
            ))}
          {activityType === "comments" &&
            userCommentData.map((comment) => (
              <li
                className="user-activity-list__list-item--comment"
                key={comment.comment}
              >
                <span className="user-activity-list__list-item--workshop">
                  Atelier : {comment.workshop_title}
                </span>
                <div className="user-acitivity-list__comment-container">
                  <span>{comment.comment}</span>
                  <span className="user-activity-list__list-item--visible">
                    {comment.is_active ? "Visible" : "Non visible"}
                  </span>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

UserActivityList.propTypes = {
  activityType: PropTypes.string.isRequired,
};
