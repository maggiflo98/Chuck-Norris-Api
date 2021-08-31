import React from "react";
import "./App.css";


class Jokes extends React.Component{
constructor(){
  super();
  this.state={
    jokes:[]
  };
  

}
componentDidMount(){
fetch("https://api.chucknorris.io/jokes/categories")
  .then((response)=>response.json())
 .then((category)=>{ console.log(category)
   this.setState({jokes:category})});

 


}

render(){
  
return(
    <div className="jokes">
       {this.state.jokes.map(joke=>(
        <h1 key={joke.id}>{joke}</h1>
  

))}
</div>
)
}
}
export default Jokes;
