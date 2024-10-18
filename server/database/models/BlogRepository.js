const AbstractRepository = require("./AbstractRepository");

class BlogRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "blog" as configuration
    super({ table: "blog_post" });
  }

  async createArticle(article, userId) {
    // Execute the SQL INSERT query to add a new article to the "blog_post" table
    const { title, content, image } = article;
    const [result] = await this.database.query(
      `insert into ${this.table} (title, content, published_date, user_id, image) VALUES ( ?, ?, NOW(), ?, ?)`,
      [title, content, userId, image]
    );

    // Return the ID of the newly inserted article
    return result.insertId;
  }

  async browseBlog() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `select id, title, content, published_date, image from ${this.table}`
    );

    // Return the array of items
    return rows;
  }

  async browseSample() {
    // Execute the SQL SELECT query to retrieve the two most recent items from the "item" table
    const [rows] = await this.database.query(
      `SELECT id, title, 
        IF(CHAR_LENGTH(content) > 200, CONCAT(SUBSTRING(content, 1, 200), '...'), content) AS content, 
        published_date, image 
      FROM ${this.table}
      ORDER BY published_date DESC 
      LIMIT 2`
    );

    // Return the array of items
    return rows;
  }

  async readBlogArticle(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select title, content, image, published_date from ${this.table} where id =?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

async editBlogArticle(updateBlog, id) {
  // Extraire uniquement les champs définis
  const fields = Object.keys(updateBlog).filter(
    (key) => updateBlog[key] !== undefined && updateBlog[key] !== null
  );

  if (fields.length === 0) {
    throw new Error("No valid fields to update.");
  }

  // Construire la clause SET dynamiquement
  const setClause = fields.map((field) => `${field} = ?`).join(", ");

  // Construire les valeurs correspondantes
  const values = fields.map((field) => updateBlog[field]);

  // Ajouter l'ID pour la clause WHERE
  values.push(id);

  console.info("setClause", setClause);
  console.info("Test", values);

  const [result] = await this.database.query(
    `UPDATE ${this.table}
             SET ${setClause}
             WHERE id = ?`,
    values
  );
  return result;
}

  async deleteBlogArticle(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows;
  }
}

module.exports = BlogRepository;
