
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('spenders').del()
    .then(function () {
      // Inserts seed entries
      return knex('spenders').insert([
        {spender_name: 'Sender One', spender_email: 'one@test.com', spender_password:'passOne'},
        {spender_name: 'Sender Two', spender_email: 'two@test.com', spender_password:'passTwo'},
        {spender_name: 'Sender Three', spender_email: 'three@test.com', spender_password:'passThree'}

   
      ]);
    });
};
