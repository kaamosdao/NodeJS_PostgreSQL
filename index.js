import express from "express";

const PORT = process.env.PORT || 4200;

const app = express()

app.get('/', (req, res) => {
  res.send('Its working!')
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
