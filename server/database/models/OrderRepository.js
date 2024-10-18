/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class OrderRepository extends AbstractRepository {
    constructor() {
        super({ table: `order` });
      }

      async createOrder(order) {
        const { user_id, order_total_amount, order_number, 
            order_date, workshop_id } = order;
        const [result] = await this.database.query(
            `INSERT INTO \`order\` (user_id, order_total_amount, 
            order_number, order_date, workshop_id)
             VALUES (?, ?, ?, ?, ?)`,
            [user_id, order_total_amount, order_number, 
                order_date, workshop_id]
          );
      
          return result.insertId;
      }

    // GET orders by user id ready if needed later
    //   async getOrdersByUser(userId) {
    //     const [rows] = await this.database.query(
    //       `SELECT * FROM \`order\` WHERE user_id = ? ORDER BY order_date DESC`,
    //       [userId]
    //     );
    //     return rows;
    //   }
}

module.exports = OrderRepository;