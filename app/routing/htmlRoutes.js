// path is a dependency
const path = require('path');

// routing
module.exports = app => {

    // This code creates the html GET Route for /survey to display the survey page
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    // This code creates the html GET Route for default to display the home page
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
}