class App extends React.Component {
  constructor() {
    super();
    this.state = {
      select: null,
      videos: null
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    searchYouTube({key: window.YOUTUBE_API_KEY, query: '', max: 5}, this.init.bind(this));
  }

  init(data) {
    this.setState({select: data[0], videos: data});
  }

  handleSelect(video) {
    this.setState({
      select: video
    });
  }

  render() {
    let player, videoList;
    if (this.state.videos) {
      player = <VideoPlayer video = {this.state.select}/>;
      videoList = <VideoList videos = {this.state.videos} onSelectionChange = {this.handleSelect}/>;
    } else {
      player = <div>Please wait</div>;
      videoList = <div>Fetching data</div>;
    }
    return (
      <div>
        <Nav />
        <div className="col-md-7 clearfix">
        {player}
        </div>
        <div className="col-md-5 clearfix">
        {videoList}
        </div>
      </div>
    );
  }


}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

ReactDOM.render(<App />, document.getElementById('app'));
