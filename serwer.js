const Twitter = require('twitter');
const moment = require('moment');
const getImagesFromTweet = require('get-images-from-tweet');
const express = require('express');

const client = new Twitter({
    consumer_key: 'rvwZ0JSV01aLSpSAAZXO1Ilb7',
    consumer_secret: 'Yjhx77ANUqhgfRwKkY1ihpzd5nyBKgJgEXjnTdkUynSo6e7zUP',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAJkjAAEAAAAARAzRNRtwNx90XVX3EH%2FoMSR1FEs%3Dq6mbXVitwZcx1OECyx5yPa7avfbqBMmqMJQiHBpsACX0PAh4Mw',
});

const server = express();


server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

server.get('/twitterImages',(req, res) => {
    const params = {screen_name: 'Polska', tweet_mode: 'extended'};
    return client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {

            const monthAgoDate = moment().subtract(1, "months");
            const urlArray = [];

            const dateFilteredTweetsEntities = tweets
                .filter(tweet => {
                    return moment(tweet.created_at) > monthAgoDate
                })
                .forEach(filteredTweet => {
                    urlArray.push(getImagesFromTweet(filteredTweet));
                });
            console.log(urlArray);
            res.json(urlArray);

        } else {
            console.log('error');
        }
    });
});

server.listen(5026, () => {console.log('działa')});

