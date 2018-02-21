/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed in the allFeeds object 
         * and ensures that the URL is defined and it is not empty.
         */

         it('has URL',function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });

        /* This test loops through each feed in the allFeeds object 
         * and ensures that name is defined and it is not empty.
         */

         it('has name',function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
                expect(typeof feed.name).toBe('string');
            });
         });
    });


    /* This test suite is named "The menu" and it is all about
     * menu icon in our application.  
    */
    describe('The menu', function(){

        /* This test ensures that the menu element is
         * hidden by default.
         */
         it('ensures the menu element is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* This test ensures that the menu changes
          * visibility when the menu icon is clicked. This test
          * have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('toggles visibility of menu element on click', function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

    });

    /* This test suite is named "Initial Entries" */

    describe('Initial Entries',function(){

        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * As loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
         });

         it('feed container has atleast 1 entry', function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
         });
    });

    /* This test suite is named "New Feed Selection" */
    describe('New Feed Selection', function(){

        /* This test ensures that when a new feed is loaded
         * by the loadFeed function, the content actually changes.
         */
         var oldFeed,newfeed;

         beforeEach(function(done){
            loadFeed(0, function(){
                oldFeed = $('.feed').html();
                loadFeed(1, function(){
                    done();
                });
            });
         });

         it('feed content changes', function(){
            expect(oldFeed).toBeDefined();
            newfeed = $('.feed').html();
            expect(newfeed).toBeDefined();
            expect(oldFeed).not.toEqual(newfeed);
         });

    });
}());
