<<<<<<< HEAD
/*
 * This is dummy file that exists for the sole purpose
 * of allowing tests to run directly in the browser as
 * well as by Testem.
 *
 * Testem is configured to run tests directly against
 * the test build of index.html, which requires a
 * snippet to load the testem.js file:
 *   <script src="/testem.js"></script>
 * This has to go before the qunit framework and app
 * tests are loaded.
 *
 * Testem internally supplies this file. However, if you
 * run the tests directly in the browser (localhost:8000/tests),
 * this file does not exist.
 *
 * Hence the purpose of this fake file. This file is served
 * directly from the express server to satisify the script load.
 */
=======
/* eslint-env node */
module.exports = {
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,
  "launch_in_ci": [
    "PhantomJS"
  ],
  "launch_in_dev": [
    "PhantomJS",
    "Chrome"
  ]
};
>>>>>>> 381cb93c46b58730c6b4dd8f54d383de36e9acdf
