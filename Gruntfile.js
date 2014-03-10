module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        emailBuilder: {
            inline: {
                files: { 'prod/index.html' : 'dev/index.html' },
                options: {
                    encodeSpecialChars: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-email-builder');
    
    grunt.registerTask('default', ['emailBuilder:inline']);
};
