const {faker} = require('@faker-js/faker'); // Import the Faker library to generate fake data

// Array to store the generated products
const products = [];


const getData = async () => {
    // Loop to generate 40 products
    for (let i = 1; i <= 40; i++) {
    // Generate a random number between 1 and 5 to determine the number of developers for this product
    const numDevelopers = Math.floor(Math.random() * 5) + 1;

    // Generate an array of developer names with length numDevelopers
    const developers = Array.from({ length: numDevelopers }, () => faker.name.fullName());

    // Generate the rest of the product data
    const product = {
        productId: faker.datatype.uuid(),
        productName: faker.commerce.productName(),
        productOwnerName: faker.name.fullName(),
        developers,
        scrumMasterName: faker.name.fullName(),
        startDate: faker.date.past().toISOString().slice(0, 10), // Get a random past date and format it as YYYY/MM/DD
        methodology: faker.helpers.arrayElement(['Agile', 'Waterfall', 'Scrum']) // Choose a random methodology from the array
    };

    // Add the generated product to the products array
    products.push(product);
    }

    return products
}

module.exports = {
    getData,
    products
}