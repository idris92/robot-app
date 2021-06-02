import React, {Component} from 'react';
import CardList from './components/card-list/card-list'
import Search from './components/search/search'
import { robots } from './robots';
import './App.css'


class App extends Component{
    constructor()
{
    super()
    this.state ={
        robots: robots,
        searchField:''
    }
    
}    


render(){
    const{robots, searchField} = this.state;
    const filteredMonsters = robots.filter(monster=> monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
        <div className="App">
            <Search 
            placeholder='search monster'
            handleChange={e=>this.setState({searchField:e.target.value})}
            />
            <CardList monster = {filteredMonsters}/>
        </div>
    )
    
    }
}

export default App;