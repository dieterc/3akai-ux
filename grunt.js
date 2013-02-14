module.exports = function(grunt) {
    grunt.initConfig({
        ghost: {
            dist: {
                src: ['tests/suites/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-ghost');

    grunt.registerTask('default', 'ghost');
};
