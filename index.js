const request = require('request'),
    AVGLE_SEARCH_VIDEOS_API_URL = 'https://api.avgle.com/v1/search/';
let query = 'AV',
    page = 2,
    limit = '?limit=2';
request(AVGLE_SEARCH_VIDEOS_API_URL + encodeURIComponent(query) + '/' + page + limit,
    (error, response, body) => {
        var response = JSON.parse(body);
        // console.log(response);

        if (response.success) {
            var videos = response.response.videos;
            console.log(videos[0].title);
        }

    });
