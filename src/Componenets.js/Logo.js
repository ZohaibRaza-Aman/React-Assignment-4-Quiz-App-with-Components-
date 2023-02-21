import Img from "../logo.jpg.jpg";
const Logo = (props) => {
  
  return (
    <div className="App">
    <header className="App-header">
    <img onClick={props.click === false ? true:""} Disabled={false} src={Img} className="App-logo" alt="logo" />
    </header>
    </div>
  );
};

export default Logo;
