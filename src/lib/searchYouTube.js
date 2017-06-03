var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search/',
    type: 'GET',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
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
