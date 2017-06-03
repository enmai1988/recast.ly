class App extends React.Component {
  constructor() {
    super();
    this.state = {
      select: null,
      videos: null
    };
  }

  componentDidMount() {
    searchYouTube({query: 'react tutorial'}, this.fetch.bind(this));
  }

  fetch(data) {
    this.setState({videos: data});
  }

  handleSearch(str) {
    searchYouTube({query: str}, this.fetch.bind(this));
  }

  handleSelect(video) {
    this.setState({
      select: video
    });
  }

  render() {
    let player, videoList, selection;
    if (this.state.videos) {
      selection = this.state.select || this.state.videos[0];
      player = <VideoPlayer video = {selection}/>;
      videoList = <VideoList videos = {this.state.videos} onSelectionChange = {this.handleSelect.bind(this)}/>;
    } else {
      player = <div>Please wait</div>;
      videoList = <div>Fetching data</div>;
    }
    return (
      <div>
        <Nav onSearchSubmit = {this.handleSearch.bind(this)}/>
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
