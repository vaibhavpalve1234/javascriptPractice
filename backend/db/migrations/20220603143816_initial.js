const knex = require('knex');

const tableNames = require('../../src/constants/tableNames');

function addDefaultColumns(table) {
  table.timestamps(false, true);
  table.datetime('deleted_at');
}

function createNameTable(knex, table_name) {
  return knex.schema.createTable(table_name, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    addDefaultColumns(table);
  });
}

function references(table, tableName) {
  table
    .integer(`${tableName}_id`)
    .unsigned()
    .references('id')
    .inTable(tableName)
    .onDelete('cascade');
}

function url(table, columnName) {
  table.string(columnName, 2048);
}
function email(table, columnName) {
  return table.string(columnName, 254);
}
function description(table, columnName) {
  return table.string(columnName, 255);
}
/**
 @param {Knex} knex
 */

exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable(tableNames.user, (table) => {
      table.increments().notNullable();
      email(table, 'email');
      table.string('name', 254).notNullable();
      table.string('password', 127).notNullable();
      table.string('last_login');
      addDefaultColumns(table);
    }),
    knex.schema.createTable(tableNames.location, (table) => {
      table.increments().notNullable();
      table.string('name').notNullable();
      description(table, 'description');
      url(table, 'image_url');
    }),
    createNameTable(knex, tableNames.item_type),
    createNameTable(knex, tableNames.country),
    createNameTable(knex, tableNames.state),
    createNameTable(knex, tableNames.shape),
  ]);
  await knex.schema.createTable(tableNames.address, (table) => {
    table.increments().notNullable().unique();
    table.string('street_address_1', 50).notNullable();
    table.string('street_address_2', 50);
    table.string('city', 50).notNullable();
    table.string('zipcode', 15).notNullable();
    table.float('latitude').notNullable();
    table.float('longitude').notNullable();
    references(table, 'state');
    references(table, 'country');
  });
  await knex.schema.createTable(tableNames.manufacture, (table) => {
    table.increments().notNullable().unique();
    table.string('name').notNullable();
    url(table, 'logo_url');
    description(table, 'description');
    table.string('type', 15).notNullable();
    url(table, 'website_url');
    email(table, 'email');
    references(table, 'address');
  });
};
exports.down = async (knex) => {
  await Promise.all(
    [
      tableNames.manufacture,
      tableNames.address,
      tableNames.user,
      tableNames.item_type,
      tableNames.country,
      tableNames.state,
      tableNames.location,
      tableNames.shape,
    ].map((table) => knex.schema.dropTable(table)),
  );
};
