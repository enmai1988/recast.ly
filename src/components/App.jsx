class App extends React.Component {
  constructor(videos) {
    super(videos);
    this.state = {
      select: videos[0]
    };
    console.log('App videos', videos);
    this.handleSelect = this.handleSelect.bind(this);
  }
  
  handleSelect(video) {
    this.setState({
      select: video
    });
  }
  
  render() {
    var selection = this.state.select;
    console.log('App selection: ', selection);
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video = {selection}/>
        </div>
        <div className="col-md-5">
          <VideoList videos = {this.props.videos} onSelectionChange = {this.handleSelect}/>
        </div>
      </div>
    );
  }


}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

ReactDOM.render(<App videos = {exampleVideoData}/>, document.getElementById('app'));
