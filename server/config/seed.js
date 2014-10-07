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
    num : 1,
    x : 0,
    y : 0,
    unit_height : 1,
    unit_width : 1,
    seats : 2,
    status : 'available'
  }, {
    num : 2,
    x : 120,
    y : 0,
    unit_height : 1,
    unit_width : 1,
    seats : 2,
    status : 'occupied'
  }, {
    num : 3,
    x : 240,
    y : 0,
    unit_height : 1,
    unit_width : 2,
    seats : 4,
    status : 'reserved'
  }, {
    num : 4,
    x : 0,
    y : 120,
    unit_height : 1,
    unit_width : 1,
    seats : 4,
    status : 'disabled'
  });
});

Meal.find({}).remove(function() {
  Meal.create ( {
                  desc : 'Hamburger',
                  meat : true,
                  parts : [{
                    'name' : 'Bun',
                    'state' : true
                  },
                  {
                    'name' : 'Cheese',
                    'state' : false
                  },
                  {
                    'name' : 'Lettuce',
                    'state' : false
                  },
                  {
                    'name' : 'Tomatoes',
                    'state' : false
                  },
                  {
                    'name' : 'Onions',
                    'state' : false
                  },
                  {
                    'name' : 'Pickles',
                    'state' : false
                  },
                  {
                    'name' : 'Mayonaise',
                    'state' : false
                  }
                  ],
                  status : 'active'
                },
                {
                  desc : 'Chicken Wrap',
                  meat : false,
                  parts : [{
                    'name' : 'Cheese',
                    'state' : false
                  }]
                }
              );
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