const argon2 = require("argon2");
const AbstractRepository = require("./AbstractRepository");
// const { verifyPassword } = require("../helper/passwordHelper");

class UserRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "user" });
  }

  async browse() {
    const [rows] = await this.database.query(
      `SELECT id, username, avatar, created_on, status FROM user ORDER BY username ASC`
    );
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT firstname, lastname, id, username, email, newsletter, avatar from ${this.table} where user.id = ?`,
      [id]
    );

    return rows[0]; // Retourne la première ligne si elle existe, sinon `undefined`
  }

  async readOrder(id) {
    const [rows] = await this.database.query(
      `SELECT 
    u.id, 
    u.firstname, 
    u.lastname, 
    u.username, 
    u.avatar, 
    u.created_on, 
    u.status,
    o.order_date, 
    o.order_total_amount,
    w.title AS workshop_title
FROM 
    user u
LEFT JOIN chemin_montessori.order o ON u.id = o.user_id
LEFT JOIN workshop w ON o.workshop_id = w.id
WHERE 
    u.id = ?
`,
      [id]
    );
    return rows;
  }

  // Mise à jour d'une ou plusieurs données d'un utilisateur
  async update(id, updateUser) {
    // Extraire uniquement les champs définis
    const fields = Object.keys(updateUser).filter(
      (key) => updateUser[key] !== (undefined || null)
    );
    const setClause = fields.map((field) => `${field} = ?`).join(", ");
    const fullSetClause = `${setClause}, updated_on = NOW()`;
    const values = fields.map((field) => updateUser[field]);

    values.push(id);

    const [result] = await this.database.query(
      `UPDATE ${this.table}
               SET ${fullSetClause}
               WHERE id = ?`,
      values
    );
    return result;
  }

  // création d'un nouvel utilisateur
  async createNewUser(userInfo) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const { firstname, lastname, username, email, password, newsletter } =
      userInfo;

    // Hacher le mot de passe avant de l'insérer dans la base de données
    // const hashedPassword = await argon2.hash(password);

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, username, email, password, created_on, newsletter)
  VALUES (?, ?, ?, ?, ?, NOW(), ?)`,
      [firstname, lastname, username, email, password, newsletter]
    );

    return result.insertId;
  }

  async loginUser(username, plainPassword) {
    const [rows] = await this.database.query(
      `SELECT id, password, status FROM ${this.table} WHERE username = ?`,
      [username]
    );

    if (rows.length === 0) {
      throw new Error("Utilisateur non trouvé");
    }

    const { id, status } = rows[0];
    console.info(rows[0].password, plainPassword);

    // Vérifier le mot de passe
    const isMatch = await argon2.verify(rows[0].password, plainPassword);
    console.info(isMatch);
    if (!isMatch) {
      throw new Error("Mot de passe incorrect");
    }

    // Retourne l'id et le statut de l'utilisateur
    return { id, status };
  }

  // Vérifier si un nom d'utilisateur existe dans la base de données
  async findByUsername(username) {
    try {
      const [rows] = await this.database.query(
        `SELECT id FROM ${this.table} WHERE username = ?`,
        [username]
      );

      return rows.length > 0 ? rows[0] : null; // Retourne l'utilisateur s'il existe, sinon null
    } catch (err) {
      console.error("Error in findByUsername:", err); // Log pour voir les erreurs
      throw err;
    }
  }

  async findById(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows.length > 0 ? rows[0] : null; // Retourne l'id s'il existe, sinon null
  }
}

module.exports = UserRepository;
