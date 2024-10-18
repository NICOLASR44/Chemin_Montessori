/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class ResourceRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "resource" });
  }

  // The C of CRUD - Create operation

  async readResourceFromWorkshop(id) {
    const [rows] = await this.database.query(
      `select * from resource WHERE workshop_id = ?`,
      [id]
    );
    return rows[0];
  }

  async createResource(resource, id) {
    const {transcript_pdf, file_zip } = resource;
    const [result] = await this.database.query(
      `insert into resource (transcript_pdf, file_zip, workshop_id) VALUES (?, ?, ?)`,
      [transcript_pdf, file_zip, id]
    );
    return result.insertId;
  }

  async updateResource(resource, id) {
    const { transcript_pdf, file_zip } = resource;
    const [result] = await this.database.query(
      `UPDATE resource
        SET 
        transcript_pdf = ?, 
        file_zip = ?
        WHERE workshop_id = ?`,
      [transcript_pdf, file_zip, id]
    );
    return result.insertId;
  }

  async deleteResource(workshopId) {
    const [result] = await this.database.query(
      `DELETE FROM resource WHERE workshop_id = ?`,
      [workshopId]
    );
    return result;
  }
}

module.exports = ResourceRepository;
