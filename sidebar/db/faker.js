const db = require('./db.js');
const faker = require('faker');
const mongoose = require('mongoose');

let menuMaker = () => {
  let menu = {};
  let randomMenuLength = faker.random.number({min: 1, max: 10});
  let randomMenuSections = faker.random.number(5);
  for (let i = 0; i < randomMenuSections; i++) {
    let section = [];
    for (let j = 0; j < randomMenuLength; j++) {
      let menuItem = {
        item_name: faker.commerce.productName(),
        item_price: faker.commerce.price(),
        item_description: faker.lorem.sentence(3),
        photo_url: faker.image.food(),
      }
      section.push(menuItem);
    }
    menu[faker.commerce.department()] = section;
  }
  return menu;
}

let randomHH = () => {
  let AmPm = ['am', 'pm'];
  let randMinutes1 = faker.random.number({min: 0, max: 59});

  if (randMinutes1 < 10) {
    randMinutes1 = '0' + randMinutes1;
  }

  let randMinutes2 = faker.random.number({min: 0, max: 59});
  if (randMinutes2 < 10) {
    randMinutes2 = '0' + randMinutes2;
  }

  let ampm1 = faker.random.arrayElement(AmPm);
  let ampm2 = (ampm1 === 'am') ? 'pm' : 'am';
  let time1 = `${faker.random.number({min: 1, max: 12})}:${randMinutes1} ${ampm1}`;
  let time2 = `${faker.random.number({min: 1, max: 12})}:${randMinutes2} ${ampm2}`;
  return `${time1} - ${time2}`;
}

let hoursMaker = () => {
  return {
    Mon: randomHH(),
    Tue: randomHH(),
    Wed: randomHH(),
    Thu: randomHH(),
    Fri: randomHH(),
    Sat: randomHH(),
    Sun: randomHH(),
  }
}

for (let i = 1; i <= 100; i++) {
  const Info = db.connection.model('Info', db.RestaurantInfo);
  const info = new Info({
    id: db.ObjectId,
    restaurant_name: faker.company.companyName(),
    restaurant_ID: i,
    price_range: `$${faker.random.number({min: 1, max:99})}-${faker.random.number({min:100, max:200})}`,
    health_score: faker.random.number({min: 0, max: 100}),
    menu: menuMaker(),
    hours: hoursMaker(),
  });
  info.save();
}

