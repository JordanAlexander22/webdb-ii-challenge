exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "123456ddd90qwertyw",
          make: "Honda",
          model: "Accord",
          mileage: "2975"
        },
        {
          vin: "1234567890qwertyy",
          make: "ford",
          model: "mustang",
          mileage: "24000"
        }
      ]);
    });
};
