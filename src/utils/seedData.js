const Category = require('../models/Category');
const fs = require('fs').promises;
const path = require('path');

const seedDatabase = async () => {
  try {
    // Read the content.json file
    const data = await fs.readFile(path.join(__dirname, '../../content.json'), 'utf8');
    const { categories } = JSON.parse(data);

    // Clear existing data
    await Category.deleteMany({});

    // Insert new data
    await Category.insertMany(categories);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

module.exports = seedDatabase; 