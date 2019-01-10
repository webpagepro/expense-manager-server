 
 const express = require('express')
const router = express.Router()
const linker = require('../lib/linker')

router.get('/', (req, res, next) => {
  res.json({
    _links: {
      self: {
        href: linker(req)
      },
    books: {
        href: linker(req, '/api/books')
      },
      expenses: {
        href: linker(req, '/api/expenses')
      }
    } 
  })
})

module.exports = router
/* */