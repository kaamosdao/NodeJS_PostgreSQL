import db from '../db/index.js';

class PostController {
  async createPost(req, res) {
    const { title, content, userId } = req.body;
    const text =
      'INSERT INTO post (title, content, user_id) VALUES($1, $2, $3) RETURNING *';
    const newPost = await db.query(text, [title, content, userId]);
    res.json(newPost.rows[0]);
  }

  async getPostsByUser(req, res) {
    const { id } = req.query;
    const text = 'SELECT * FROM post WHERE user_id = $1';
    const post = await db.query(text, [id]);
    res.json(post.rows);
  }

  async updatePost(req, res) {
    const { id, title, content } = req.body;
    const text =
      'UPDATE post SET title = $1, content = $2 WHERE id = $3  RETURNING *';
    const post = await db.query(text, [title, content, id]);
    res.json(post.rows[0]);
  }

  async deletePost(req, res) {
    const { id } = req.params;
    const text = 'DELETE FROM post WHERE id = $1 RETURNING *';
    const post = await db.query(text, [id]);
    res.json(post.rows[0]);
  }
}

export default new PostController();
