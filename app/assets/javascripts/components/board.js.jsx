var Board = React.createClass({
  propTypes: {
    count: function(props, propName){
      if (typeof props[propName] !== "number"){
        return new Error('The count property should be number');
      }
      if(props[propName] > 100){
        return new Error("Creating " + props[propName] + " notes is ridiculous")
      }
    }
  },
  getInitialState: function(){
    return {
      notes: []
    };
  },
  add: function(text){
    var arr = this.state.notes;
    arr.push(text);
    this.setState({notes: arr});
  },
  update: function(newText, i){
    var arr = this.state.notes;
    arr[i] = newText;
    this.setState({notes: arr});
  },
  remove: function(i){
    var arr = this.state.notes;
    arr.splice(i, 1);
    this.setState({notes: arr});
  },
  eachNote: function(note, i){
    return (
      <Note key={i} index={i} onChange={this.update} onRemove={this.remove}>{note}</Note>
    )
  },
  render: function() {
    return (
      <div className="board">
      {this.state.notes.map(this.eachNote)}
      <button className="btn btn-sm btn-success" onClick={this.add.bind(null, 'New Note')} />
      </div>
    );
  }
});
