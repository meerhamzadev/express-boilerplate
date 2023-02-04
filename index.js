const app = require('./app');
const db = require('./models/index');
const port = process.env.PORT || 3000;

db.sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started successfully on port ${port}`);
    })
  })
  .catch(err => {
    console.log(err);
  })