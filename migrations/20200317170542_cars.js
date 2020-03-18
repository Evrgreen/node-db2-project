exports.up = function(knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl
      .string("VIN")
      .unique()
      .notNullable();
    tbl.string("Make").notNullable();
    tbl.string("Model").notNullable();
    tbl.integer("Mileage").notNullable();
    tbl.string("Transmission");
    tbl.string("Title");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};

//- The critical information for each car is the VIN, make, model, and mileage.
//They also track transmission type and status of the title (clean, salvage, etc.)
