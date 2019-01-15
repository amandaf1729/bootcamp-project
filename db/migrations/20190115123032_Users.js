
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Users', table => {
      table.uuid('id').notNull()
      table.text('name').notNull()
      table.text('email').notNull().unique()
      table.text('password').notNull()
      table.datetime('birthday')
      table.enu('concentration')
      table.text('hometown')
      table.text('house')
      table.enu('gender')
      table.text('bio')
      table.text('picture')
      table.timestamp('createdAt').defaultTo(knex.fm.now()).notNull()
      table.timestamp('updateAt').defaultTo(knex.fm.now()).notNull(),
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Users')
};
