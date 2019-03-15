const request = require('request'),
    AVGLE_SEARCH_VIDEOS_API_URL = 'https://api.avgle.com/v1/search/',
    readlineSync = require('readline-sync');
let query = readlineSync.question('調べたいタイトルは？');
    page = 50,
    limit = '?limit=50';
request(AVGLE_SEARCH_VIDEOS_API_URL + encodeURIComponent(query) + '/' + page + limit,
    (error, response, body) => {
        var response = JSON.parse(body);
        // console.log(response);
        if (response.success) {
            let videos = response.response.videos;

            for (let i = 0; i < videos.length; i++) {
                console.log(i + 1 + ". " + videos[i].title);
            }
        }

    });
