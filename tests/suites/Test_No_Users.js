// Add a title comment so that you know what's happening and when
casper.test.comment('Sakai OAE - Log in with a user');

var testTime = new Date().getTime();

/**
 * Initialize CasperJS and point it to cam.oae.com
 */
casper.start('http://cam.oae.com', function () {
    // Set the size of the viewport
    casper.viewport(1600, 1200);
});

casper.waitForSelector('#topnavigation_right_content a', function() {

    // Assert that the sign in button is there
    this.test.info("     # Verify that the sign in button is there");
    this.test.assertVisible('a.topnavigation-menu-item', 'Sign in button is visible');

    // Assert that the sign in dropdown is hidden
    this.test.info("     # Verify that the sign in dropdown is hidden");
    this.test.assertNotVisible('#topnavigation_user_options_login_fields', 'Dropdown is not visible');
});

// Click the sign in butto
casper.thenClick('#topnavigation_right_content a', function(){
    this.echo("Sign in button is clicked")
    // Assert that the sign in dropdown is visible
    this.test.info("     # Verify that the sign in dropdown is visible");
    this.test.assertVisible('#topnavigation_user_options_login_fields', 'Dropdown is visible');

    // Assert that the form and all its elements are there
    this.test.info("     # Verify that the form and all its elements are there");
    this.test.assertExists('form#topnavigation_user_options_login_form','Login form is found');
    this.test.assertExists('#topnavigation_login_username','Username field form is found');
    this.test.assertExists('#topnavigation_login_password','Password field form is found');
});

casper.then(function(){

    // Fill in the form
    this.test.info("     # Fill in the form");
    this.fill('form#topnavigation_user_options_login_form', {}, false);

    // Submit the form
    this.test.info("     # Submit the form");
    this.thenClick('#topnavigation_user_options_login_button_login',function(){
        this.echo("Current url: "+this.getCurrentUrl());
        var url = this.getCurrentUrl();

        // Verify that the user is logged in
        this.test.info("     # Verify that the user is logged in");
        if (url.indexOf("/me") !=-1)
        {
            this.echo("You're logged in");
        }
        else
        {
            this.echo("You're not logged in");
            this.test.assertVisible('#topnavigation_login_username_error','Error username found');
            this.test.assertVisible('#topnavigation_login_password_error','Error password found');
        }
        //casper.test.done();
    });
});
casper.then(function(){
    // Assert that the form and all its elements are there
    this.test.info("     # Verify that the form and all its elements are there");
    this.test.assertExists('form#topnavigation_user_options_login_form','Login form is found');
    this.test.assertExists('#topnavigation_login_username','Username field form is found');
    this.test.assertExists('#topnavigation_login_password','Password field form is found');
});

casper.then(function(){

    // Fill in the form
    this.test.info("     # Fill in the form");
    this.fill('form#topnavigation_user_options_login_form', { 
        'topnavigation_login_username' : 'DieterC'}, false);

    // Submit the form
    this.test.info("     # Submit the form");
    this.thenClick('#topnavigation_user_options_login_button_login',function(){
        this.echo("Current url: "+this.getCurrentUrl());
        var url = this.getCurrentUrl();

        // Verify that the user is logged in
        this.test.info("     # Verify that the user is logged in");
        if (url.indexOf("/me") !=-1)
        {
            this.echo("You're logged in");
        }
        else
        {
            this.echo("You're not logged in");
            //this.test.assertVisible('#topnavigation_login_username_error','Error username found');
            this.test.assertVisible('#topnavigation_login_password_error','Error password found');
        }
        //casper.test.done();
    });
});

casper.then(function(){
    // Assert that the form and all its elements are there
    this.test.info("     # Verify that the form and all its elements are there");
    this.test.assertExists('form#topnavigation_user_options_login_form','Login form is found');
    this.test.assertExists('#topnavigation_login_username','Username field form is found');
    this.test.assertExists('#topnavigation_login_password','Password field form is found');
});

casper.then(function(){

    // Fill in the form
    this.test.info("     # Fill in the form");
    this.fill('form#topnavigation_user_options_login_form', { 
        'topnavigation_login_username' : 'DieterC'}, false);

    // Submit the form
    this.test.info("     # Submit the form");
    this.thenClick('#topnavigation_user_options_login_button_login',function(){
        this.echo("Current url: "+this.getCurrentUrl());
        var url = this.getCurrentUrl();

        // Verify that the user is logged in
        this.test.info("     # Verify that the user is logged in");
        if (url.indexOf("/me") !=-1)
        {
            this.echo("You're logged in");
        }
        else
        {
            this.echo("You're not logged in");
            //this.test.assertVisible('#topnavigation_login_username_error','Error username found');
            this.test.assertVisible('#topnavigation_login_password_error','Error password found');
        }
        //casper.test.done();
    });
});
casper.then(function(){
    // Assert that the form and all its elements are there
    this.test.info("     # Verify that the form and all its elements are there");
    this.test.assertExists('form#topnavigation_user_options_login_form','Login form is found');
    this.test.assertExists('#topnavigation_login_username','Username field form is found');
    this.test.assertExists('#topnavigation_login_password','Password field form is found');
});

casper.then(function(){

    // Fill in the form
    this.test.info("     # Fill in the form");
    this.fill('form#topnavigation_user_options_login_form', { 
        'topnavigation_login_username' : 'DieterC',
        'topnavigation_login_password' : 'w9x2k7dieter' }
        , false);

    // Submit the form
    this.test.info("     # Submit the form");
    this.thenClick('#topnavigation_user_options_login_button_login',function(){
        this.echo("Current url: "+this.getCurrentUrl());
        var url = this.getCurrentUrl();

        // Verify that the user is logged in
        this.test.info("     # Verify that the user is logged in");
        if (url.indexOf("/me") !=-1)
        {
            this.echo("You're logged in");
        }
        else
        {
            this.echo("You're not logged in");
            this.test.assertVisible('#topnavigation_login_username_error','Error username found');
            this.test.assertVisible('#topnavigation_login_password_error','Error password found');
        }
        casper.test.done();
    });
});

// Run the whole test suite (all the above)
casper.run();
