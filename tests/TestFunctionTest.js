/**
 * Created by atoth on 2015.02.23..
 */

var testFunction = require('../TestFunction');

describe('Tests the function', function () {
   it('should return 3', function () {
       // Just run Karma runner and press the play button -> anything you write here won't show up -> always the old code will show up
       expect(testFunction()).toBe(3);
   })
});