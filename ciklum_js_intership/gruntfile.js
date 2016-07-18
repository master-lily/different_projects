/**
 * Created by Lily on 18.07.2016.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        concat:
        {

            dist:
            {
                src: ['styles/variables.scss','styles/reset.scss','styles/style.scss', 'styles/mixins.scss'],
                dest: 'styles/main.scss'
            }
        },
        uglify:
        {
            dist:
            {
                src:['js/dist/script.min.js'],
                dest:'js/dist/script.min.js'
            }
        },
        sass:
        {
            dist:
            {
                files:
                    [{
                        expand: true,
                        cwd: 'styles',
                        src: ['main.scss'],
                        dest: 'styles',
                        ext: '.css'
                    }]
            }


        },

        watch:
        {
            sass:
            {

                files: ['styles/*.scss'],
                tasks: ['concat','sass']
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify','sass']);


};