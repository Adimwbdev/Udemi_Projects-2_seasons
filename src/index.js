import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
// import "semantic-ui-css/semantic.min.css";






class App extends React.Component {
 constructor(props) {//Is more related to javascript not specific to React and it is a
  //always called before anything else

  super(props); //Constructor function of the React.Component Class Αυτο ισχυει για τον constructor

  this.state = {lat: null, errorMessage:''};  //State Object initialization
  
 }


 //Lifecycle Methods
componentDidMount() {
  window.navigator.geolocation.getCurrentPosition(
    position => this.setState({lat: position.coords.latitude}),
      //We called setstate!!!
       
     err =>this.setState({errorMessage: err.message})
  );
         }

renderContent (){
  if (this.state.errorMessage && !this.state.lat){
    return <div>Error: {this.state.errorMessage}</div>;
    }
    
    if (!this.state.errorMessage && this.state.lat){
      // return <div>Latitude: {this.state.lat} </div>;
      return <SeasonDisplay lat = {this.state.lat} err={this.state.errorMessage}/>
    }
     
    return <Spinner message='Please accept Location Request'/>;
  
}


    // React says that we have to define render!!! 
    render() {
    return <div className="border red">{this.renderContent()}</div>;
}
}






//ReactDOM.render(<App />, document.querySelector('#root'))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
