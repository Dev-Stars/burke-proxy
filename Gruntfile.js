module.exports = (grunt) => {

  // grunt.loadNpmTasks('grunt-run');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
        'image-carousel/client/dist/bundle.js',
        'reviews/public/dist/bundle.js',
        'maps_info/client/dist/bundle.js',
        'appointments/public/dist/bundle.js',
        ],

        dest: 'proxy/public/bundle.js',
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', 'this is the help answer!', ['concat', /*'run', 'exec', 'express',*/ ]);
};