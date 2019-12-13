import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './componente/menu'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      menuitens:[
        'imagem1','imagem2','imagem3'
      ],
     
    }
  }
   render(){
    return (
      <div className="App">
        <Menu estadoNulo={this.state.imagemrenderizada} paisagem={this.state.menuitens} />
        
      </div>
    );
   } 
}

export default App;
