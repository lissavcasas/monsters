class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [ ]
    };
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({monsters: users})) ;
      /* console.log(users) */
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}>
         
        </CardList>
        
      </div>
    );
  }
}

export default App;