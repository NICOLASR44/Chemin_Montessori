const AbstractRepository = require("./AbstractRepository");

class CommentRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "review" });
  }

  async readWorkshopComment(id) {
    const [row] = await this.database.query(
      `select comment, username, avatar from review inner join user on user.id = user_id where review.workshop_id = ? and review.is_active = 1  order by review.id desc limit 3;`,
      [id]
    );
    return row;
  }

  async readUserComment(id) {
    const [row] = await this.database.query(
      `select 
      review.id, 
      comment, 
      workshop.id as workshop_id,
      workshop.title as workshop_title, 
      is_active 
      from review 
      inner join workshop 
      on workshop_id = workshop.id 
      where user_id = ?`,
      [id]
    );
    return row;
  }

  async postComment(comment, userId, workshopId) {
    const [result] = await this.database.query(
      `insert into review (comment, user_id, workshop_id) values (?, ?, ?)`,
      [comment, userId, workshopId]
    );
    return result;
  }

  async browse() {
    const [result] = await this.database
      .query(`select review.id, comment, user_id, workshop_id, review.is_active, avatar, username from review inner join user on user_id = user.id;
`);
    return result;
  }

  async readNotActive() {
    const [result] = await this.database.query(
      `select review.id, comment, review.is_active, avatar, username, workshop.title as workshop_title  from review inner join user on user_id = user.id inner join workshop on workshop.id = workshop_id where review.is_active = 0`
    );
    return result;
  }

  async update(id, comment) {
    const { isActive } = comment;
    const [result] = await this.database.query(
      `UPDATE review SET is_active = ? WHERE id = ?`,
      [isActive, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE from ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = CommentRepository;
