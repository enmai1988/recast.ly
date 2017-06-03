var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search/',
    type: 'GET',
    data: {
      part: 'snippet',
      key: window.YOUTUBE_API_KEY,
      q: options.query,
      maxResults: 5,
      type: 'video',
      videoEmbeddable: 'true'
    },
    dataType: 'json',
    success: data => {
      callback(data.items);
    },
    error: () => console.log('failed')
  });
};

window.searchYouTube = searchYouTube;
