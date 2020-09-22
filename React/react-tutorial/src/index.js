import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


// function formatName(user) {
//   return user.firstName + ' ' + user.lastName
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// }

// // const element = <h1>Hello {formatName(user)}</h1>

// function getGreeting(user) {
//   if (user) {
//   return <h1>Hello, {formatName(user)}!</h1>
//   } return <h1>Hello, Stranger.</h1>
// }
// ReactDom.render(getGreeting(user), document.getElementById('root'));

// END OF CHAPTER HELLO WORLD

// RENDERING ELEMENTS

// get the root and render the app to that root

// updating the render

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, World!</h1>
//   <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
  
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick,1000);

// this updates the element


//////////////////// COMPOENETS AND PROPS

// function Welcome(props) {
// return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;
// ReactDOM.render(element, document.getElementById('root'));

// always start componenet names with capital letters
// make an app with it for many times
// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Max" />
//       <Welcome name="Grant" />
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'));

///// State and Lifecyle
// new way to do the clock

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//   <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   )
// }

// function tick() {
//   ReactDOM.render(
//     // pass in the prop as a new date
//     <Clock date={new Date()} />, 
//     document.getElementById('root')
//   )
// }

// setInterval(tick, 1000);

// however this still updates the UI every second
// ideal want the clock element to update itself
// we need to add state

// we will also now mount and unmount to start a timer

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

  // these methods are called 'lifecycle method'

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//     <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Clock />, document.getElementById('root'));


//////// state rules
// do not modift state directly

// wrong
// this.state.comment = 'Hello';

// correct : use setState()
// this.setState({comment: 'hello'});

// state updates may be asyc
// wrong
// this.setState({counter: this.state.counter + this.props.increment})'

// Correct: use a function that receives props
// this.setState((state,props) => {counter: state.counter + props.increment});

// state updates are merged
// constructor(props) {
//   super(props)
//   this.state = {
//     posts: [],
//     comments: [],
//   }
// }

// // then you can update them indepenedtly
// componentDidMount() {
//   fetchPosts().then(response => {
//     this.setState({
//       posts: response.posts
//     })
//   })
//   fetchComments().then(response => {
//     this.setState({
//       comments: response.comments
//     })
//   })
// }

/////////////// Handling Events

// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked');
//   }
//   return (
//     <button>
//     <a href="#" onClick={handleClick}>Click Me</a>
//     </button>
//   )
// }


// class Toggle extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {isToggleOn: true};
//     this.handleClick = this.handleClick.bind(this)

//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }))
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON': 'OFF'}
//       </button>
//     )
//   }
// }

// ReactDOM.render(<Toggle/>, document.getElementById('root'));

/// Condidtional Rendering

// function UserGreeting(props) {
//   return <h1>Welcome, back!</h1>
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />
//   } return <GuestGreeting />
// }

// ReactDOM.render(
//   <Greeting isLoggedIn={true} />, document.getElementById('root')
// )

// // element variables

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       LogIn
//     </button>
//   )
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   )
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogOutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true})
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false})
//   }
//   render() {
//     const isLoggedIn = this.state.isLoggedIn
//     let button
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogOutClick} />
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />
//     }
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );

/// 8 lists and keys

// Rendering Multiple Components

// const numbers = [1,2,3,4,5];
// const listItems = numbers.map(number => <li>{number*2}</li>);

// ReactDOM.render(<uL>{listItems}</uL>,document.getElementById('root'));

// Basic List Compoenet

// function NumberList(props) {
//   const numbers = props.numbers
//   const listItems = numbers.map(number => <li key={number.toString()}>{number}</li>)
//   return (
//   <ul>{listItems}</ul>
//   )
// }

// // update a key in the map compoenent! need keys to make them unique

// const numbers = [1,2,3,4,5]
// ReactDOM.render(<NumberList numbers={numbers} />, document.getElementById('root'))
// most ways would be for an id
// const todoItems = todos.map((todo) =>
//   <li key={todo.id}>
//     {todo.text}
//   </li>
// );


/////// Forms

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSumbit = this.handleSumbit.bind(this);
//   }
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//   handleSumbit(event) {
//     alert('A name was submitted: ' + this.state.value)
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSumbit}>
//         <label>
//           Name: 
//           <input type='text' value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     )
//   }
// }

// ReactDOM.render(<NameForm />, document.getElementById('root'))


////// TextArea usually is definied by its child but in react it can be defined by its value

/// select tag

// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(<FlavorForm />, document.getElementById('root'))

// the file input tag



/// Lifting State Up

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleChange = this.handleChange.bind(this)
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value})
//   }
//   render() {
//     const temperature = this.state.temperature
//     return (
//       <fieldset>
//         <legend>Enter temperature in celsius</legend>
//         <input value={temperature} onChange={this.handleChange} />
//         <BoilingVerdict celsius={parseFloat(temperature)} />
//       </fieldset>
//     )
//   }
// }

// ReactDOM.render(<Calculator />, document.getElementById('root'))


//////////// Composition vs Inheritance

// Containmenet

// this is an example
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}


// this can now be resuable a lot

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}


/// Composition works equally well for components defined as classes:

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}


// final chapter is how to think in react