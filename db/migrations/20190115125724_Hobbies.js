
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Hobbies', table => {
        table.uuid('id').notNull()
        table.timestamp('createdAt').defaultTo(knex.fm.now()).notNull()
        table.timestamp('updateAt').defaultTo(knex.fm.now()).notNull()
        table.enu('hobby', ['SPORTS', 'ARTS', 'MUSIC', 'READING', 'TRAVEL', 'DINING', 'CODING']).notNull()
        table.text('userId').notNull()
    })
}
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Hobbies')
  };
  