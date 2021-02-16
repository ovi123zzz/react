import React, {Component} from 'react'

class StateEx extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{name: 'Ovi'}]
    }
  }

  changeName(e) {
    this.setState(() => ({
      data: [...this.state.data, {name: 'ceva'}, {name: 'alceva'}]
    }))
  }

  fetchData() {
    setTimeout(() => {
      this.setState(() => ({
        data: [...this.state.data, {name: 'ceva'}, {name: 'alceva'}]
     
      }))
    }, 2000)
  }

  componentDidMount() {
    // this.fetchData()
    // this.changeName()
    
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <h1>{this.state.data[0].name}</h1>
        <button onClick={(e) => this.changeName(e)}>click here</button>
      </div>
    )
  }
}

export default StateEx