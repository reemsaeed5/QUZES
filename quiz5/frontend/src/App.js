import React from 'react';
import { Route } from 'react-router-dom';
import Num2 from '../../Num';

const App = () => {
	const [crossingState, setcrossingState] = useState();
	
	return <div className="App">App component

			<Msg/>
			<Num2/>
		</div>
}


/* 3- connect the previous two components inside a react app, and add the following:
   a- create a state "crossingState" inside app.js.
   b- render the state inside the class component that you made
   c- have the state setter inside the functional component and make the change method using a dropdown list
   d- the dropdown list will have 5 choices, each choice will be a day of the week, and the state will change based on the day chosen
*/

/*       write your code her      */