
exports.up = function(knex, Promise) {
    return knex.schema.createTable("spenders", (table) => {
table.increments();
      table.string("spender_name");
      table.string("spender_email");
      table.string("spender_password");
      table.timestamps(true, true);
    })
};

    
    exports.down = function(knex, Promise) {
        return knex.schema.dropTable("spenders")
};

