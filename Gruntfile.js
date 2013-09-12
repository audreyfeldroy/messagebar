module.exports = function(grunt) {

  grunt.initConfig({

    // Import package manifest
    pkg: grunt.file.readJSON("topbar.jquery.json"),

    // Banner definitions
    meta: {
      banner: "/*\n" +
        " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
        " *  <%= pkg.description %>\n" +
        " *  <%= pkg.homepage %>\n" +
        " *\n" +
        " *  Made by <%= pkg.author.name %>\n" +
        " *  Under <%= pkg.licenses[0].type %> License\n" +
        " */\n"
    },

    // Concat definitions
    concat: {
      dist: {
        src: ["src/jquery.topbar.js"],
        dest: "dist/jquery.topbar.js"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    // Lint definitions
    jshint: {
      files: ["src/jquery.topbar.js"],
      options: {
        jshintrc: ".jshintrc"
      }
    },

    // Minify definitions
    uglify: {
      my_target: {
        src: ["dist/jquery.topbar.js"],
        dest: "dist/jquery.topbar.min.js"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    // CSS minification
    cssmin: {
      add_banner: {
        options: {
          banner: '/* topbar by audreyr ~ https://github.com/audreyr/topbar */'
        },
        files: {
          'dist/jquery.topbar.min.css': ['src/topbar.css']
        }
      }
    },

    // Start local server and open demo
    connect: {
      server: {
        options: {
          keepalive: true,
          open: "http://127.0.0.1:8080/demo/index.html",
          port: 8080
        }
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask("default", ["jshint", "concat", "uglify", "cssmin", "connect"]);
  grunt.registerTask("travis", ["jshint"]);

};