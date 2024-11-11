import Title from "./Title";
const Header = (props) => {
  
    return <>
        <div className="container">
            <Title name={props.name}/>
        </div>
    </>
    ;
  };
  
  export default Header;
  