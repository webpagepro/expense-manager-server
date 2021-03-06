module.exports = db => {
    const expenses = [
      {
        "expense_description": "expense_description One",
        "expense_amount": "1000",
        "expense_spender_id": 1,
        "expense_reason": "expense_reason One",
        "expense_details": "expense_details One",
        "expense_date": "2019-1-4",
        "expense_paid": false,
        "expense_credited": true
      },
      {
        "expense_description": "expense_description To",
        "expense_amount": "2000",
        "expense_spender_id": 2,
        "expense_reason": "expense_reason Two",
        "expense_details": "expense_details Two",
        "expense_date": "2019-1-5",
        "expense_paid": true,
        "expense_credited": false
      },
      {
        "expense_description": "expense_description Three",
        "expense_amount": "3000",
        "expense_spender_id": 3,
        "expense_reason": "expense_reason Three",
        "expense_details": "expense_details Three",
        "expense_date": "2019-1-4",
        "expense_paid": false,
        "expense_credited": true
      },
      {
        "expense_description": "expense_description Four",
        "expense_amount": "4000",
        "expense_spender_id": 3,
        "expense_reason": "expense_reason Four",
        "expense_details": "expense_details Four",
        "expense_date": "2019-1-6",
        "expense_paid": false,
        "expense_credited": true
      },
      {
        "expense_description": "expense_description Five",
        "expense_amount": "5000",
        "expense_spender_id": 5,
        "expense_reason": "expense_reason Five",
        "expense_details": "expense_details Five",
        "expense_date": "2019-1-6",
        "expense_paid": false,
        "expense_credited": true
      },
      {
        "expense_description": "expense_description Six",
        "expense_amount": "6000",
        "expense_spender_id": 6,
        "expense_reason": "expense_reason Six",
        "expense_details": "expense_details Six",
        "expense_date": "2019-1-7",
        "expense_paid": false,
        "expense_credited": true
      },
      {
        "expense_description": "expense_description Seven",
        "expense_amount": "7000",
        "expense_spender_id": 6,
        "expense_reason": "expense_reason Seven",
        "expense_details": "expense_details Seven",
        "expense_date": "2019-1-3",
        "expense_paid": false,
        "expense_credited": true
      },
      {
        "expense_description": "expense_description Eight",
        "expense_amount": "8000",
        "expense_spender_id": 8,
        "expense_reason": "expense_reason Eight",
        "expense_details": "expense_details Eight",
        "expense_date": "2019-1-5",
        "expense_paid": false,
        "expense_credited": true
      }
    ]
  
    expenses.forEach(expense => db.expenses.insert(expense))
  }
  