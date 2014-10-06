/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Table = require('../api/table/table.model');
var Bill = require('../api/bill/bill.model');
var Order = require('../api/order/order.model');
var Meal = require('../api/meal/meal.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

Table.find({}).remove(function() {
  Table.create ({
    desc : 'Table 1',
    x : '10px',
    y : '10px',
    unit_height : 1,
    unit_width : 1,
    seats : '4',
    status : 'idle'
  }, {
    desc : 'Table 2',
    x : '20px',
    y : '20px',
    unit_height : 2,
    unit_width : 1,
    status : 'active'
  }, {
    desc : 'Table 3',
    x : '30px',
    y : '30px',
    unit_height : 1,
    unit_width : 2,
    status : 'reserved'
  }, {
    desc : 'Table 4',
    x : '40px',
    y : '40px',
    unit_height : 1,
    unit_width : 3,
    status : 'inactive'
  });
});

Meal.find({}).remove(function() {
  Meal.create ({
    desc : 'Hamburger',
    isMeat : true,
    addons : ['Ketchup','Mustard','Relish'],
    sides : ['French Fries','Salad','Tornado'],
    status : 'active'
  }, {
    desc : 'Philly Cheese',
    addons : ['Onions','Peppers','Mushrooms'],
    status : 'active'
  }, {
    desc : 'Cheeseburger',
    addons : ['Ketchup','Mustard','Relish'],
    sides : ['French Fries','Salad','Tornado'],
    status : 'active'
  }, {
    desc : 'Cheeseburger',
    addons : ['Ketchup','Mustard','Relish'],
    sides : ['French Fries','Salad','Tornado'],
    status : 'active'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});