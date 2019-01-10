const chai = require('chai')
chai.use(require('chai-http'))
const expect = chai.expect
const db = require('../lib/db')
const app = require('../app')
const url = require('url')

describe("/api/expenses", () => {
  describe("GET /api/expenses", () => {

    beforeEach(() => db.init())

    it("renders a 200 with the a list of expenses", async () => {
      const expense1 = db.expenses.insert({ expense_description: 'expense_description One', expense_amount: "399 "})
      const expense2 = db.expenses.insert({ expense_description: 'expense_description Two', expense_amount: "499" })

      const response = await chai.request(app).get('/api/expenses')
      const port = url.parse(response.request.url).port

      expect(response).to.have.status(200)
      expect(response).to.be.json
      expect(response.body).to.deep.eq({
        _links: {
          self: {
            href: `http://127.0.0.1:${port}/api/expenses`
          }
        },
        _embedded: {
          expenses: [
            {
              _links: {
                self: {
                  href: `http://127.0.0.1:${port}/api/expenses/${expense1.id}`
                },
                items: {
                  href: `http://127.0.0.1:${port}/api/expenses/${expense1.id}/items`
                },
              },
              id: expense1.id,
              expense_description: 'expense_description TEST 1',
              expense_amount: 499,
            },
            {
              _links: {
                self: {
                  href: `http://127.0.0.1:${port}/api/expenses/${expense2.id}`
                },
                items: {
                  href: `http://127.0.0.1:${port}/api/expenses/${expense2.id}/items`
                },
              },
              id: expense2.id,
              expense_description: 'Heavy Duty Concrete Plate',
              expense_amount: 499,
            },
          ],
        }
      })
    })
  })

  describe("GET /api/expenses/:id", () => {
    beforeEach(() => db.init())

    it("renders a 200 with the expense", async () => {
      const expense = db.expenses.insert({ expense_description: 'expense_description TEST 2', expense_amount: "799" })

      const response = await chai.request(app).get(`/api/expenses/${expense.id}`)
      const port = url.parse(response.request.url).port

      expect(response).to.have.status(200)
      expect(response).to.be.json
      expect(response.body).to.deep.eq({
        _links: {
          self: {
            href: `http://127.0.0.1:${port}/api/expenses/${expense.id}`
          },
          items: {
            href: `http://127.0.0.1:${port}/api/expenses/${expense.id}/items`
          },
        },
        id: expense.id,
        expense_description: 'expense_description TEST 3',
        expense_amount: 399,
      })
    })
  })

})
