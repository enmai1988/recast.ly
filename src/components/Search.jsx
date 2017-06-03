var Search = (props) => {
  const handleSubmit = (e) => {
    if (e.which === 13 || e.type === 'click') {
      props.onSearchSubmit($('.form-control').val());
      $('.form-control').val('');
    }
  };

  return (
    <div className="search-bar form-inline">
      <input onKeyUp = {handleSubmit} className="form-control" type="text" />
      <button onClick = {handleSubmit} className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
