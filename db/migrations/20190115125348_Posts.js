
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Posts', table => {
        table.uuid('id').notNull()
        table.timestamp('createdAt').defaultTo(knex.fm.now()).notNull()
        table.timestamp('updateAt').defaultTo(knex.fm.now()).notNull()
        table.text('content').notNull()
        table.text('userId').notNull(),
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Posts')
  };
  