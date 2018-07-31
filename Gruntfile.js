module.exports = (grunt) => {

  // grunt.loadNpmTasks('grunt-run');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    exec: {
      install_deps: {
        cwd: 'appointments',
        cmd: 'npm install',
        notify: 'echo "npm install complete?"',
      },
      other_deps: {
        cwd: 'reviews',
        cmd: 'npm install',
        notify: 'isntalled npm deps for reviews',
      },
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        
        src: [
        'reviews/public/dist/bundle.js',
        'appointments/public/dist/bundle.js',
        'image-carousel/client/dist/bundle.js',
        'maps_info/client/dist/bundle.js',
        ],

        dest: 'proxy/public/bundle.js',
      },
    },

  });
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-run');
  grunt.registerTask('default', 'this is the help answer!', ['concat', /*'run', 'exec', 'express',*/ ]);
};