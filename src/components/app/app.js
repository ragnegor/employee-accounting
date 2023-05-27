import React from "react";
import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: "John C", salary: 800, increase: false, rise: true, id: 1},
        {name: "Alex R", salary: 3000, increase: true, rise: false, id: 2},
        {name: "Jack T", salary: 5000, increase: false, rise: false, id: 3},
      ]
    }
    this.lastId = 3;
  }

  deleteItem = (id) => {
   this.setState(({data}) => {
    return {
      data: data.filter(item => item.id !== id)
    }
   })
  }

  addItem = (name, salary) => {
    const newObject = {
      name: name,
      salary: salary,
      increase: false,
      rise: false,
      id: this.lastId + 1
    }
    const arrData = this.state.data.slice();
    arrData.push(newObject);

    this.setState({data: arrData});
    this.lastId +=1;
  }

  onToggleIncrease = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return{...item, increase: !item.increase}
        }
        return item;
      })
      })

    )
  }

  onToggleRise = (id) => {
    console.log(`rise this ${id}`);
  }

  render() {
    return (
      <div className="app">
        <AppInfo/>
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <EmployersList data={this.state.data}
                       onDelete={this.deleteItem}
                       onToggleIncrease={this.onToggleIncrease}
                       onToggleRise={this.onToggleRise}/>
        <EmployersAddForm data={this.state.data}
                          onAdd={this.addItem}/>
      </div>
    )
  }
}

export default App;