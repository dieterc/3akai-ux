module.exports = function(grunt) {
    grunt.initConfig({
        ghost: {
            dist: {
                src: ['tests/suites/*.js'],
                options: {
                    includes: [
                        'tests/utils/utils.js',
                    ],
                    failFast: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-ghost');

    grunt.registerTask('default', 'ghost');
    grunt.registerTask('test', 'ghost');
};
