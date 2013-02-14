// Add a title comment so that you know what's happening and when
casper.test.comment('Sakai OAE - Log in with a user');

var testTime = new Date().getTime();

var takeScreenshot = function() {
    casper.waitForSelector('html', function() {
        this.captureSelector('screenshots/' + testTime + '/' + new Date().getTime() + '.png', 'html');
    });
};

/**
 * Initialize CasperJS and point it to cam.oae.com
 */
casper.start('http://cam.oae.com', function () {
    // Set the size of the viewport
    casper.viewport(1600, 1200);
});

casper.waitForSelector('#topnavigation_right_content a', function() {
    this.test.assertExists('#topnavigation_right_content a');
    this.click('#topnavigation_right_content a');
    takeScreenshot();
});

// Run the whole test suite (all the above)
casper.run(function () {
    // Confirm this test is done
    this.test.done();
});
