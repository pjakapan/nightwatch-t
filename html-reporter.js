var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');
var dateFormat = require('dateformat');


module.exports = {
    write: function (results, options, done) {
        var keys = Object.keys(results.modules);
        var moduleKey = keys.shift();
        var pathParts = moduleKey.split(path.sep);
        var moduleName = pathParts.pop();
        var now = new Date();

        var reportFilename = moduleName + '_' + options.filename_prefix + dateFormat(now, "yyyymmdd_HHMMss") + '.html';
        var reportFilePath = path.join(__dirname, options.output_folder, reportFilename);

        // read the html template
        fs.readFile('./bin/htmlReporter/html-reporter.hbs', function (err, data) {
            if (err) throw err;

            var template = data.toString();

            // merge the template with the test results data
            var html = handlebars.compile(template)({
                results: results,
                options: options,
                timestamp: new Date().toString(),
                browser: options.filename_prefix.split('_').join(' '),
                reportName : reportFilename
            });

            // write the html to a file
            fs.writeFile(reportFilePath, html, function (err) {
                if (err) throw err;
                console.log('Report generated: ' + reportFilePath);
                done();
            });
        });
    }
};