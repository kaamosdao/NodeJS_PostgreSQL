import db from '../db/index.js';
import postController from './postController.js';

class UserController {
  async createUser(req, res) {
    const { name, surname } = req.body;
    const text =
      'INSERT INTO person (name, surname) VALUES($1, $2) RETURNING *';
    const newPerson = await db.query(text, [name, surname]);
    res.json(newPerson.rows[0]);
  }

  async getUsers(_req, res) {
    const users = await db.query('SELECT * FROM person');
    res.json(users.rows);
  }

  async getOneUser(req, res) {
    const { id } = req.params;
    const text = 'SELECT * FROM person WHERE id = $1';
    const person = await db.query(text, [id]);
    res.json(person.rows[0]);
  }

  async updateUser(req, res) {
    const { id, name, surname } = req.body;
    const text =
      'UPDATE person SET name = $1, surname = $2 WHERE id = $3  RETURNING *';
    const person = await db.query(text, [name, surname, id]);
    res.json(person.rows[0]);
  }

  async deleteUser(req, res) {
    const { id } = req.params;

    const postText = 'DELETE FROM post WHERE user_id = $1 RETURNING *';
    await db.query(postText, [id]);

    const personText = 'DELETE FROM person WHERE id = $1 RETURNING *';
    const person = await db.query(personText, [id]);

    res.json(person.rows[0]);
  }
}

export default new UserController();
