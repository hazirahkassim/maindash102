
import './App.css';
import Businessacc from './component/Businessacc';
import Fserviced from './component/Fserviced';
import MDside from './component/MDside';
import Topnavi from './component/Topnavi';

function App() {
  return (
    <>
    <div className ="barSide">
      <div><MDside/></div></div>

    <div className = "barTop">
      <div> <Topnavi/></div></div>

    <div className = "pageTwo">
      <div><Businessacc/></div>
      <div><Fserviced/></div>
    </div>
    
    
    
    </>
  );
}

export default App;
