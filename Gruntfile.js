module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-aws");
    grunt.loadNpmTasks("grunt-sass");
    
    grunt.initConfig({
        s3: {
            aws: grunt.file.readJSON("credentials.json"),
            options: {
                accessKeyId: "<%= s3.aws.accessKeyId %>",
                secretAccessKey: "<%= s3.aws.secretAccessKey %>",
                //bucket: "joshliisa.emilyanders.us",
                bucket: "www.joshandaliisa.com",
                region: "us-east-1" // Oregon
            },
            css: {
                src: "css/**"
            },
            images: {
                src: "images/**"
            },
            index: {
                src: ["index.html", "index.js", "work-in-progress.html"]
            },
            libs: {
                src: "libs/**"
            }
        },
        sass: {
            options: {
                sourceMap: false,
                indentedSyntax: true,
                outputStyle: "compact",
                sourceComments: false
            },
            dist: {
                files: {
                    "css/jaliisha.css": "css/jaliisha.scss"
                }
            }
            
        }
    });
    
    grunt.registerTask("default", ["sass"]);
    grunt.registerTask("index", ["s3:index"]);
    grunt.registerTask("deploy", ["sass", "s3"]);
    grunt.registerTask("savethedate", ["savethedate"]);
}