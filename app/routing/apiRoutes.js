// Path is a dependency 
const path = require('path');

// load the data
const peopleData = require('../data/friends');

// routing 
module.exports = app => {

    // creates api GET Routes to /api/friends to display JSON of all possible friends
    app.get('/api/friends', (req, res) => {
        res.json(peopleData)
    });

    // create the API POST route to /api/friends for incoming survey results
    app.post('/api/friends', (req, res) => {
        const results = [];
        for (i in req.body.results) {
            results.push(parseInt(req.body.results[i].slice(0, 1)));
        }
        let rawData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: scores
        };

        // match compatiability logic
        let friendMatch = [];
        let lowestDiff = 100;
        peopleData.forEach(person => {
            // finds the total difference the people within the database and the new score.
            let totalDiff = 0;
            for (i in scores) {
                totalDiff += Math.abs(results[i] - person.results[i])
            }
            // if the difference of scores is equal to the current lowest difference, add person to the match array
            // there can be more than one person who matches
            if (lowestDiff === totalDiff) {
                match.push(person);
            }
            // if a lower difference of scores is calculated, empty the array, then add the person as a match
            if (lowestDiff > totalDiff) {
                friendMatch = [];
                match.push(person);
                lowestDiff = totalDiff;
            }

        });
        // respond with friendMatches to be displayed in modal
        console.log(friendMatch);
        res.json(match);

        // add a new survey entry to the dataset
        peopleData.push(rawData);
    });
}