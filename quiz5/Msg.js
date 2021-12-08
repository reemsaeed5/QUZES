/*=================  Quiz05: React functional and class components methode =================== */


/* 1- create a react class component and do the following:
   a- create a state called message and initialize it as an empty string, then insert it inside the the returned component.
   b- when the component mounts, change the value of the message state the value to the string "welcome to the jungle"
   c- create a state called message2 and do the same steps as in a and b but change the message2 to "quiz are awesome :)" state when the component updates.
   d- notice what happens in when you run the component and explain it
   e- write a code to prevent this behavior, and explain it
*/
/*       write your code her      */
import React , {Component} from 'React';
class Msg extends Component{
   constructor(){
   super()
   this.state={
      massege:'',
      massege:''
   }
   }
componentDidMount(){
   this.setState({
   massege:"welcome to the jungle"
    } )
}
componentDidUpdate(prevpros, prevstat)
    render(){
        return(

<div>
   <h2>massege:{"welcome to the jungle"}</h2> 
   <h2>massege2:{"Hello"}</h2>
   
   </div>


        )
    }
}

export default App;

