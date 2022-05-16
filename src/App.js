import logo from './logo.svg';
import './App.css';
import {Hello1,Hello2} from './component/hello';
import Answer from './component/answer'

function App() {
  let arr1=["Android","Blackberry","IPhone","Windows Phone"];
  let arr2=["Samsung","HTC","Micromax","Apple"]
  return (
    <div className="App">
     
        <Hello1/>
        <Answer arr={arr1}/>
        <Hello2/>
        <Answer arr={arr2}/>
        
    </div>
  );
}

export default App;
