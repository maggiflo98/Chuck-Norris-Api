import React from "react";


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
 .then((category)=>this.setState({jokes:category}));


}

render(){
  
return(
    <div className="jokes">
       {this.state.jokes.map(jokes=>(
        <h1 key={jokes.id}>{jokes.name}</h1>
  

))}
</div>
 )
}
}
export default Jokes;
