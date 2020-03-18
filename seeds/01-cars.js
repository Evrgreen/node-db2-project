exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { VIN: "MX045385", Make: "Honda", Model: "Accord", Mileage: 100354 },
        { VIN: "3J058X25", Make: "Hyundai", Model: "Sonata", Mileage: 89005 },
        { VIN: "1548H12L", Make: "Geo", Model: "Metro", Mileage: 200135 },
        {
          VIN: "B82C0A3",
          Make: "Jaguar",
          Model: "XJ-6",
          Mileage: 125035,
          Transmission: "Automatic",
          Title: "Clean"
        }
      ]);
    });
};
