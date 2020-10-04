import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    name:'',
    author:'',
    all:[]
  }
  handleclick=(ev)=>{
    ev.preventDefault()
    alert('button clicked'+this.state.name+this.state.author)
    var payload = this.state
    axios.post("http://localhost:4000/notes/add",payload )
    .then((dat)=>{
      console.log('status : '+dat.status)
    })
    .catch(()=>{console.log('couldnt have data from backend')})
}

  handlefn=(e)=>{
  this.setState({name:e.target.value})
  }
  handleln=(e)=>{
    this.setState({author:e.target.value})
  }

  componentDidMount(){
    axios.get("http://localhost:4000/notes")
    .then((dat)=>{
      this.setState({all:dat.data})
     console.log(this.state.all)
    })
    .catch(()=>{console.log('couldnt have data from backend')})
  }
  render(){

    return (
      <div className="App">
          <form className="for">
          <label htmlFor="fname">First name:</label><br/>
          <input type="text" id="fname" name="fname" value={this.state.fname} onChange={this.handlefn} /><br/>
          <label htmlFor="lname">Last name:</label><br/>
          <input type="text" id="lname" name="lname" value={this.state.lname}  onChange={this.handleln}/><br/>
          <button onClick={this.handleclick} >Submit</button> 
          </form>     
          <hr/>
          <table id="customers" className="tab">
          <tr>
            <th>id</th>
            <th>name</th>
            <th>author</th>
          </tr>
       
            {this.state.all.map((item)=>{
              let id,name,author;
              id = item._id
              name = item.name
              author = item.author
              return (
                <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{author}</td>
                </tr>
                      )
            })}
           
          </table>

      </div>
    );
  


  }
}

export default App;
