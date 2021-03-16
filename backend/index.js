const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const recipesRouter = require('./routes/recipes');

app.use(express.json());
app.use(cors());
/*
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
*/





app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/recipes', recipesRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});