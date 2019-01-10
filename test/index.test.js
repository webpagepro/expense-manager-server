const chai = require('chai')
chai.use(require('chai-http'))
const expect = chai.expect
const app = require('../app')
const url = require('url')

describe("GET /api", () => {

  it("renders a list of available endpoints", async function() {
    const response = await chai.request(app).get('/api')
    const port = url.parse(response.request.url).port

    expect(response).to.have.status(200)
    expect(response).to.be.json
    expect(response.body).to.deep.eq({
      _links: {
        self: {
          href: `http://127.0.0.1:${port}/`
        },
        books: {
          href: `http://127.0.0.1:${port}/api/books`
        },
        expenses: {
          href: `http://127.0.0.1:${port}/api/expenses`
        },
       
      }
    })
  })

})
