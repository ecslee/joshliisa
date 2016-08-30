module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-aws");
    grunt.loadNpmTasks("grunt-sass");
    
    grunt.initConfig({
        s3: {
            aws: grunt.file.readJSON("credentials.json"),
            options: {
                accessKeyId: "<%= s3.aws.accessKeyId %>",
                secretAccessKey: "<%= s3.aws.secretAccessKey %>",
                bucket: "joshliisa.emilyanders.us",
                region: "us-west-2" // Oregon
            },
            css: {
                src: "css/**"
            },
            images: {
                src: "images/**"
            },
            index: {
                src: ["index.html", "index.js"]
            },
            libs: {
                src: "libs/**"
            }
        },
        sass: {
            options: {
                sourceMap: true,
                indentedSyntax: true,
                outputStyle: "compact",
                sourceComments: true
            },
            dist: {
                files: {
                    "css/fonts.css": "css/fonts.scss"
                }
            }
            
        }
    });
    
    grunt.registerTask("default", ["sass"]);
    grunt.registerTask("index", ["s3:index"]);
    grunt.registerTask("deploy", ["sass", "s3"]);
}