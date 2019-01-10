const Table = require('./table')

const db = {
  init() {

    
    this.books = new Table()
    this.expenses = new Table()
  
  },
}

db.init()

require('./seeds/books')(db)
require('./seeds/expenses')(db)

module.exports = db
