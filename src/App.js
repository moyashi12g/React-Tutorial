import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './Table'


const characters = [
  {
    name: 'ゴン',
    job: '強化系',
  },
  {
    name: 'キルア',
    job: '変化形',
  },
  {
    name: 'クラピカ',
    job: '特質系',
  },
  {
    name: 'レオリオ',
    job: '放出系',
  },
]


// stateはclass-compornentでしか使えない
// function App{
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={characters}; 
    // initialize state
  };
  render(){
    return (
      <div className="App">
        <Table
        characterData={this.state.characters}
        removeCharacter={index => this.removeCharacter(index)}
       
        />
      </div>
    );
  }


  removeCharacter(index){
    const characters = this.state.characters.filter((_,i) => i !== index)
    this.setState({characters});
    // 引数で渡ってきたやつ以外のもので配列を作って，セット
    // つまり，引数のものを削除
  }
}

export default App;
