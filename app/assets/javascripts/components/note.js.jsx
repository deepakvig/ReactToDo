var Note = React.createClass({
  getInitialState: function(){
    return {editing: false}
  },
  edit: function(){
    this.setState({editing: true})
  },
  save: function(){
    this.props.onChange(this.refs.newText.value, this.props.index);
    this.setState({editing: false});
  },
  remove: function(){
    this.props.onRemove(this.props.index);
  },
  renderDisplay: function(){
    return (
      <div className="note">
      <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil" />
          <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash" />
        </span>
      </div>
    );
  },
  renderForm: function(){
    return (
      <div className="note">
      <textarea ref="newText" defaultValue={this.props.children} className="form-control"></textarea>
      <button onClick={this.save} className="btn btn-success btn-sm" />
      </div>
    )
  },
  render: function() {
    if(this.state.editing){
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  }
});
