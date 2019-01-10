
exports.up = function(knex, Promise) {
    return knex.schema.createTable("expenses", (table) => {
      table.increments();
      table.string("expense_description");
      table.string("expense_amount");
      table.integer("expense_spender_id");
      table.string("expense_reason");
      table.string("expense_details");
      table.string("expense_date");
      table.boolean("expense_paid");
      table.boolean("expense_credited");
      table.timestamps(true, true);
      }) 
  };

    
    exports.down = function(knex, Promise) {
        return knex.schema.dropTable("expenses")
};
