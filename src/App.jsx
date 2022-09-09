import React, {Component} from "react";


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      items: ["Ready", "Set", "GO"],
      task:"",
    }; this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(event) {
    event.preventdefault();

    let newList = [...this.state.list, this.state.text];
    this.setState({list: newList, text: ""});
  }

  updateItems() {
    let newItems = [...this.state.items, this.state.task];
    this.setState({newItems});
  }

render() {


  return (
    <div>
      <h2>ToDoItems</h2>
      <div>
        {/* Controlled Input */}
        <input
          type="text"
          name="newTask"
          id="newTask"
          value={this.state.task}
          onChange={(e) => this.setState({task: e.target.value})}
          />
          <button onClick={(e) => this.updateItems()}>Add</button>
      </div>
      <ul>
        {/* rendered list */}
        {this.state.items.map((item, idx) => {
          return <li key={idx}>{item}</li>
        })}
        
      </ul>
    </div>
)}}

export default App