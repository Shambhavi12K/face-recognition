
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import { Component } from 'react';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      input:'',
    }
  }

  onInputChange=(event)=>{
    console.log(event.target.value)
  }

  onSubmit=()=>{
   console.log("click")
  }
  render(){
  return (
    <div className="App">
         <Navigation/>
         <Logo/>
         <Rank/>
         <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
         {/* <FaceRecognition/> */}
    </div>
  );
}
}

export default App;
