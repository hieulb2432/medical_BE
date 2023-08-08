const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('bc31jfvgkgmxulek0ffn', 'u2nrcavzwhcld5it', "zVrYmX1psrRtrxmkByX", {
  host: "bc31jfvgkgmxulek0ffn-mysql.services.clever-cloud.com",
  dialect: 'mysql',
  port: "21304", 
  logging: false
});

let connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports = connectDB;