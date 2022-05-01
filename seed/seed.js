const connection = require("../config/connection");
const { Thought, User } = require("../models");
const Chance = require("chance");

String.prototype.capitalise = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
const chance = new Chance();

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing courses
  await User.deleteMany({});

  // Drop existing students
  await Thought.deleteMany({});

  // Create empty array to hold the students
  const startArray = [...Array(10).keys()];

  const users = startArray.map((item) => {
    return {
      username: chance.first().toLowerCase() + chance.last().capitalise(),
      email: chance.email(),
    };
  });

  const thoughts = startArray.map((item) => {
    return {
      thoughtText: chance.sentence(),
      username: users[Math.floor(Math.random() * 10)].username,
    };
  });

  // Add students to the collection and await the results
  await User.collection.insertMany(users);

  // Add courses to the collection and await the results
  const res = await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.log(res);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
