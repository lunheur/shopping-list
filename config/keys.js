module.exports = {
  mongoUri: `mongodb://${process.env.SHOPPING_DB_USER}:${
    process.env.SHOPPING_DB_PASSWORD
  }@ds119052.mlab.com:19052/shopping-list`
}
