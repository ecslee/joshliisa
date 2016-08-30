module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-aws");
    
    grunt.initConfig({
        aws: grunt.file.readJSON("credentials.json"),
        s3: {
            options: {
                accessKeyId: "<%= aws.accessKeyId %>",
                secretAccessKey: "<%= aws.secretAccessKey %>",
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
        }
    });
    
    grunt.registerTask("default", ["s3"]);
    grunt.registerTask("index", ["s3:index"]);
}