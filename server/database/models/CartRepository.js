const AbstractRepository = require("./AbstractRepository");

class CartRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    super({ table: "cart" });
  }

  async addToCart(userId, workshopId) {
    const [result] = await this.database.query(
      `INSERT INTO cart (user_id, workshop_id) VALUES (?, ?)`,
      [userId, workshopId]
    );
    return result;
  }

  async readCart(id) {
    const [rows] = await this.database.query(
        `SELECT 
          workshop.id, 
          workshop.title, 
          price_ht, 
          tva, 
          price_ht * (1 + tva / 100) AS total_ttc, 
          (SELECT SUM(price_ht * (1 + tva / 100)) 
          FROM cart 
          INNER JOIN workshop ON cart.workshop_id = workshop.id 
          WHERE cart.user_id = ?) AS total_all_ttc,  -- Total TTC pour tous les articles
          (SELECT SUM(price_ht) 
          FROM cart 
          INNER JOIN workshop ON cart.workshop_id = workshop.id 
          WHERE cart.user_id = ?) AS total_all_ht    -- Total HT pour tous les articles
        FROM cart 
        INNER JOIN workshop ON cart.workshop_id = workshop.id 
        WHERE cart.user_id = ? 
        GROUP BY workshop.id, workshop.title, price_ht, tva`,
    [id, id, id]
);

    return rows;
  }

  async deleteWorkshopCart(userId, workshopId) {
    const [rows] = await this.database.query(
        `DELETE FROM cart WHERE user_id = ? AND workshop_id = ?`,
    [userId, workshopId]
);

    return rows;
  }

  async deleteCart(userId) {
    const [result] = await this.database.query(
      `DELETE FROM cart WHERE user_id = ?`, [userId]
    );
    return result;
  }

}

module.exports = CartRepository;
