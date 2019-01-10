
exports.up = function(knex, Promise) {
    return knex.schema.createTable("goals", (table) => {
table.increments();
      table.string("goal_title");
       table.integer("goal_expense_id");
      table.string("goal_amount");
      table.string("goal_month");
      table.string("goal_year");
      table.string("goal_messageFromServer");
      table.timestamps(true, true);
    })
};
    
    exports.down = function(knex, Promise) {
        return knex.schema.dropTable("goals")
};
