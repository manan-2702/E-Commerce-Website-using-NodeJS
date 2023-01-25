// const Sequelize = require("sequelize");

// const sequelize = new Sequelize("node-complete", "root", "Manan@2002", {
//   dialect: "mysql",
//   host: "localhost",
// });

// module.exports = sequelize;
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://Manan:Manan%402002@cluster0.dzl75c3.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
