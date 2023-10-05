exports.up = knex.schema.createTable('dishes', table => {
  table.increments('id')
  table.text('name')
  table.text('description')
  table.decimal('price')
  table.text('imageFood').defaultTo(null)
  
})
exports.down = knex => knex.schema.dropTable('dishes')