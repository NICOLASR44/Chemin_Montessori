import { format, parseISO } from "date-fns";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { calculateCost } from "../../functions/calculateCost";

function RecentOrders() {
  const [activeOrder, setActiveOrder] = useState(-1);

  const contextOrders = useContext(UserContext);
  if (!contextOrders) {
    return <div>Erreur: le contexte utilisateur n'est pas disponible</div>;
  }

  const {
    purchasedWorkshopData,
    purchasedWorkshopLoading,
    purchasedWorkshopfoError,
  } = contextOrders;
  if (purchasedWorkshopLoading) return <div>Chargement en cours...</div>;
  if (purchasedWorkshopfoError)
    return <div>Erreur lors du chargement des données...</div>;

  console.info("purchased workshops : ", purchasedWorkshopData);

  function toggleOrder(index) {
    setActiveOrder(activeOrder === index ? -1 : index);
  }

  function handleKeyPress(event, index) {
    if (event.key === "Enter" || event.key === " ") {
      toggleOrder(index);
    }
  }

  return (
    <div className="orders">
      <ul className="orders__list">
        {purchasedWorkshopData.map((order) => (
          <li
            key={order.id}
            className={`orders__item ${activeOrder === order.id ? "active" : ""}`}
          >
            <div
              className="orders__header"
              onClick={() => toggleOrder(order.id)}
              onKeyDown={(event) => handleKeyPress(event, order.id)}
              tabIndex={0}
              role="button"
            >
              <span className="orders__title">
                {format(parseISO(order.order_date), "dd/MM/yy")} - {order.title}{" "}
                - {calculateCost(order.price_ht, order.tva)}
              </span>
              <span className="orders__icon">
                {activeOrder === order.id ? "" : ""}
              </span>
            </div>
            {activeOrder === order.id && (
              <div className="orders__details">
                {/* <p>{order.details}</p> */}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentOrders;
