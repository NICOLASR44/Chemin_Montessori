/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class WorkshopRepository extends AbstractRepository {
  constructor() {
    super({ table: "workshop" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT workshop.id, workshop.title, COUNT(video.id) AS video_count FROM workshop LEFT JOIN video ON video.workshop_id = workshop.id GROUP BY workshop.id, workshop.title`
    );
    return rows;
  }

  async readFree() {
    const [rows] = await this.database.query(
      `select * from ${this.table} where price_ht = 0 limit 3`
    );
    return rows;
  }

  async readPaid() {
    const [rows] = await this.database.query(
      `select * from ${this.table} where price_ht > 0 order by rand() `
    );
    return rows;
  }

  async readId(id) {
    const [rows] = await this.database.query(
      `SELECT 
    w.id AS workshop_id,
    w.title AS workshop_title,
    w.price_ht,
    w.tva,
    w.image as general_image,
    v.id AS video_id,
    v.title AS video_title,
    v.description AS video_description,
    v.source AS video_source,
    v.duration AS video_duration,
    v.image AS video_image,
    v.section AS video_section
FROM 
    workshop w
JOIN 
    video v ON w.id = v.workshop_id
WHERE 
    w.id = ?
`,
      [id]
    );
    return rows;
  }

  async suggested(id) {
    const [rows] = await this.database.query(
      `SELECT ${this.table}.id,${this.table}.title, ${this.table}.image, ${this.table}.price_ht, ${this.table}.tva
  FROM ${this.table}
  WHERE id NOT IN (
    SELECT workshop_id
    FROM \`order\`
    WHERE user_id = ?)`,
      [id]
    );
    return rows;
  }

  async readPurchased(id) {
    const [rows] = await this.database.query(
      `SELECT 
        workshop.id,
        workshop.title, 
        workshop.image, 
        workshop.price_ht,
        workshop.tva,
        order.order_date
      FROM 
        workshop
      INNER JOIN 
        \`order\` 
      ON 
        workshop_id = workshop.id
      INNER JOIN
        user 
      ON 
        user.id = user_id
      WHERE
        user.id = ?
      ORDER BY
        order.order_date DESC`,
      [id]
    );
    return rows;
  }

  async readAllDetailsWorkshop() {
    const [rows] = await this.database.query(
      `SELECT 
  workshop.id AS workshop_id, 
  workshop.title, 
  workshop.price_ht, 
  workshop.description, 
  workshop.image AS workshop_image,
  resource.transcript_pdf, 
  resource.file_zip,
  COUNT(video.id) AS video_count,
  JSON_ARRAYAGG(
    JSON_OBJECT(
      'video_title', video.title,
      'video_description', video.description,
      'video_source', video.source,
      'video_duration', video.duration,
      'video_image', video.image,
      'video_section', video.section
    )
  ) AS videos
FROM workshop
LEFT JOIN resource ON resource.workshop_id = workshop.id
LEFT JOIN video ON video.workshop_id = workshop.id
GROUP BY 
  workshop.id, 
  workshop.title, 
  workshop.price_ht, 
  workshop.description, 
  workshop.image, 
  resource.transcript_pdf, 
  resource.file_zip
  ORDER BY workshop.id DESC
`
    );
    return rows;
  }

  async readDetails(id) {
    const [rows] = await this.database.query(
      `SELECT workshop.id AS workshop_id, workshop.title, workshop.price_ht, workshop.description, workshop.image, resource.transcript_pdf, resource.file_zip, video.title 
      AS video_title, video.description 
      AS video_description, video.source, video.duration, video.image 
      AS video_image, video.section 
      FROM workshop 
      LEFT JOIN resource  
      ON resource.workshop_id = workshop.id 
      LEFT JOIN video  
      ON video.workshop_id = workshop.id 
      WHERE workshop.id = ?`,
      [id]
    );
    return rows;
  }

  async create(workshop) {
    const { title, price_ht, description, image } = workshop;
    const [result] = await this.database.query(
      `insert into workshop (title, price_ht, description, image) VALUES ( ?, ?, ?, ?)`,
      [title, price_ht, description, image]
    );
    return result.insertId;
  }

  async addVideo(videos, id) {
    const connection = await this.database.getConnection();
    try {
      await connection.beginTransaction();
      for (const video of videos) {
        const { title, description, source, duration, image, section } = video;
        await connection.query(
          `INSERT INTO video (title, description, source, duration, image, workshop_id, section) VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [title, description, source, duration, image, id, section]
        );
      }
      // Commit la transaction une fois que toutes les vidéos sont mises à jour
      await connection.commit();
      return { success: true };
    } catch (err) {
      // Si une erreur survient, annuler la transaction
      await connection.rollback();
      throw err;
    } finally {
      // Relâcher la connexion après l'opération
      connection.release();
    }
  }

  async updateWorkshop(workshop, id) {
    const fields = Object.keys(workshop).filter(
      (key) => workshop[key] !== (undefined || null)
    );
    const setClause = fields.map((field) => `${field} = ?`).join(", ");
    const values = fields.map((field) => workshop[field]);
    
    values.push(id);

    const [result] = await this.database.query(
      `UPDATE ${this.table}
               SET ${setClause}
               WHERE id = ?`,
      values
    );
    return result.affectedRows;
  }

  async updateVideo(videos, workshopId) {
    const connection = await this.database.getConnection();
    try {
      await connection.beginTransaction();
  
      // Boucle sur chaque vidéo pour la mettre à jour
      for (const video of videos) {
        const { title, description, source, duration, video_image, section } = video;
  
        // Requête SQL pour mettre à jour une vidéo
        await connection.query(
          `UPDATE video 
          SET title = ?, description = ?, source = ?, duration = ?, image = ? 
          WHERE workshop_id = ? AND section = ?`,
          [title, description, source, duration, video_image, workshopId, section]
        );
      }
  
      // Commit la transaction une fois que toutes les vidéos sont mises à jour
      await connection.commit();
      return { success: true };
    } catch (err) {
      // Si une erreur survient, annuler la transaction
      await connection.rollback();
      throw err;
    } finally {
      // Relâcher la connexion après l'opération
      connection.release();
    }
  }

  async deleteVideo(workshopId) {
    const [result] = await this.database.query(
      `DELETE FROM video WHERE workshop_id = ?`,
      [workshopId]
    );
    return result;
  }

  async deleteWorkshop(id) {
    const [result] = await this.database.query(
      `DELETE FROM workshop WHERE id = ?`,
      [id]
    );
    return result;
  }
}

module.exports = WorkshopRepository;
