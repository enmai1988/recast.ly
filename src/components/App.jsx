class App extends React.Component {
  constructor(videos) {
    super(videos);

  }
  
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer/>
        </div>
        <div className="col-md-5">
          <VideoList videos = {this.props.videos}/>
        </div>
      </div>
    );
  }


}


// var App = () => (

// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

ReactDOM.render(<App videos = {exampleVideoData}/>, document.getElementById('app'));
