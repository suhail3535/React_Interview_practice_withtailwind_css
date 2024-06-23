1. What is React.js?
Answer: React.js is a JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create large web applications that can change data, without reloading the page. Its main goal is to be fast, scalable, and simple.
<!-- <--------------------------->
2. What are components in React?
Answer: Components are the building blocks of a React application. A component is a self-contained module that renders some output. Components can be functional or class-based.
Example-
<!-- Functional Component -->
const Greeting = () => <h1>Hello, world!</h1>;

<!-- Class Component -->
class Greeting extends React.Component {
  render() {
    return <h1>Hello, world!</h1>;
  }
}

<!-- <-------------------------------->
3. What is JSX?
Answer: JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML directly within JavaScript. JSX makes the code easy to understand and debug.
Example-
const element = <h1>Hello, world!</h1>;
<!-- <-------------------------------->

4. What is the virtual DOM?
Answer: The virtual DOM is a concept where a virtual representation of the real DOM is kept in memory and synced with the real DOM by libraries such as ReactDOM. This process is known as reconciliation.
<!-- <-------------------------------->

5. What are props in React?
Answer: In React Props are short for properties. They are read-only attributes used to pass data from one component to another, typically from a parent to a child component.
Example:-
const Welcome = (props) => <h1>Hello, {props.name}</h1>;
<Welcome name="Sara" />;
<!-- <-------------------------------->

6. What is state in React?
Answer:In React  State is a built-in object that stores property values which is belong to a component. When the state object changes, the component will re-renders.
Example:-
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
<!-- <-------------------------------->

7. What are lifecycle methods in React?
Answer: Lifecycle methods are special methods in a React component that allow you to run code at specific points in the component's life cycle, such as when the component mounts or unmounts.
Example:-
class MyComponent extends React.Component {
  componentDidMount() {
    // Code to run when the component is mounted
  }

  componentWillUnmount() {
    // Code to run when the component is unmounted
  }

  render() {
    return <div>My Component</div>;
  }
}
<!-- <-------------------------------->

8. What is the difference between state and props?
Answer: Props are used to pass data from parent to child components and are immutable, while state is a local data storage that is mutable and controlled by the component itself.
<!-- <-------------------------------->

9. What is Redux?
Answer: Redux is a predictable state container for JavaScript applications. It helps you write applications that behave consistently and can run in different environments.
<!-- <-------------------------------->

10. What is a higher-order component (HOC)?
Answer: A higher-order component is a function that takes a component as parameter and returns a new component as its value. HOCs are used to add functionality to existing components.
Example:-
import React from 'react';
const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoading;

<!-- <-------------------------------->

11. What is the useEffect hook?
Answer: The useEffect hook allows you to perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in class components.
Example:-
import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    // Code to run on component mount and update

    return () => {
      // Code to run on component unmount
    };
  }, []);

  return <div>My Component</div>;
};
<!-- <-------------------------------->

12. What is the useState hook?
Answer: The useState hook allows you to add state to functional components.
Example:-
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
<!-- <-------------------------------->

13. What is context(Context API) in React?
Answer: Context provides a way to pass data through the component tree without having to pass props down manually at every level.
Example:-
const MyContext = React.createContext();

const App = () => (
  <MyContext.Provider value="Hello World">
    <MyComponent />
  </MyContext.Provider>
);

const MyComponent = () => (
  <MyContext.Consumer>
    {(value) => <div>{value}</div>}
  </MyContext.Consumer>
);
14. What is the difference between controlled and uncontrolled components?
Answer: A controlled component is an input element whose value is controlled by React through the state, while an uncontrolled component is an input element that maintains its own internal state.
Example:-
<!-- Controlled Component-------- -->
const ControlledComponent = () => {
  const [value, setValue] = useState('');

  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
};

<!--  Uncontrolled Component-----------> -->
const UncontrolledComponent = () => {
  const inputRef = React.createRef();

  return <input ref={inputRef} />;
};
<!-- <-------------------------------->

15. What are keys in React?
Answer: Keys help React identify which items have changed, are added, or are removed. They should be given to elements inside the array to give the elements a stable identity.
Example:-
const items = ['item1', 'item2', 'item3'];

const List = () => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
<!-- <-------------------------------->

16. What is the useReducer hook?
Answer: The useReducer hook is used for managing complex state logic in React functional components. It is an alternative to useState and is usually preferable when you have complex state logic.
Example:-
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};
Example-2
<!-- API CALL -->
import React, { useReducer, useEffect } from 'react';

const initialState = { joke: '', loading: true, error: null };

function reducer(state, action) {
  switch (action.type) {
    case 'fetchSuccess':
      return { ...state, joke: action.payload, loading: false };
    case 'fetchError':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

const JokeComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Fetch data from the API
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        dispatch({ type: 'fetchSuccess', payload: data.value });
      } catch (error) {
        dispatch({ type: 'fetchError', payload: error.message });
      }
    };

    fetchJoke();
  }, []);

  return (
    <div>
      {state.loading ? (
        <p>Loading...</p>
      ) : state.error ? (
        <p>Error: {state.error}</p>
      ) : (
        <p>Joke: {state.joke}</p>
      )}
    </div>
  );
};

export default JokeComponent;

<!-- <-------------------------------->

17. What is the useRef hook?
Answer:In React useRef is a React hook that returns a mutable ref object which have  .current property is initialized to the passed argument. It can be used to store a reference to a DOM element.
Example:-
import React, { useRef } from 'react';
const FocusInput = () => {
const inputRef = useRef(null);

const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};
<!-- <-------------------------------->

18. What is reconciliation in React?
Answer: Reconciliation is the process by which React updates the DOM to match the virtual DOM. When a component’s state or props change, React compares the new virtual DOM with the previous one and updates only the parts of the DOM that have changed.
<!-- <-------------------------------->

19. What is React Router?
Answer: React Router is a library for routing in React applications. It enables navigation among views or different components in a React application, allows the browser URL to be updated, and keeps the UI in sync with the URL.
Example-
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
);
<!-- <-------------------------------->

20. What is the significance of keys in React?
Answer: Keys are important in React as they help identify which items in a list are changed, added, or removed. This improves the performance of list rendering and provides a stable identity to list items.
<!-- <-------------------------------->

21. How do you handle forms in React?
Answer: Forms in React can be handled by using controlled components where form data is handled by the state.

Example:-
const MyForm = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted value: ${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};
<!-- <-------------------------------->


22. What is the purpose of React.Fragment?
Answer: React.Fragment is used to group multiple elements without adding an extra node to the DOM.
Example:-
const MyComponent = () => (
  <React.Fragment>
    <h1>Title</h1>
    <p>Paragraph</p>
  </React.Fragment>
);
<!-- <-------------------------------->

23. What is the purpose of the useMemo hook?
Answer: The useMemo hook is used to memoize expensive functions to avoid recalculating them on every render.
Example:-
import React, { useMemo } from 'react';

const ExpensiveComponent = ({ num }) => {
  const expensiveCalculation = useMemo(() => {
    return num * 2; // Imagine this is an expensive calculation
  }, [num]);

  return <div>{expensiveCalculation}</div>;
};
<!-- <-------------------------------->

24. What is the purpose of the useCallback hook?
Answer: The useCallback hook is used to memoize functions to prevent them from being recreated on every render, which can improve performance by avoiding unnecessary re-renders.

Example:-
import React, { useCallback } from 'react';

const MyComponent = () => {
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return <button onClick={handleClick}>Click Me</button>;
};
<!-- <-------------------------------->

25. How do you fetch data in React?
Answer: Data in React can be fetched using various methods like fetch, axios, or using hooks like useEffect.

Example:-
import React, { useEffect, useState } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
<!-- <-------------------------------->

26. What is PropTypes in React?
Answer: PropTypes is a library that helps with type checking of props in React components.
Example:-
import PropTypes from 'prop-types';

const MyComponent = ({ name, age }) => (
  <div>
    <h1>Name: {name}</h1>
    <h2>Age: {age}</h2>
  </div>
);

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
<!-- <-------------------------------->
<!-- MOST IMPORTANT -->
27. How do you optimize performance in a React application?
Answer: Performance in React can be optimized by using various techniques such as memoizing components with React.memo, using the useMemo and useCallback hooks, avoiding unnecessary re-renders, and lazy loading components.
<!-- <-------------------------------->


28. What are portals in React?
Answer: Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
Example:-
import ReactDOM from 'react-dom';

const MyPortalComponent = () => {
  return ReactDOM.createPortal(
    <div>Content in a portal</div>,
    document.getElementById('portal-root')
  );
};
<!-- <-------------------------------->

29. What is code-splitting in React?
Answer: Code-splitting is a technique to split your code into smaller bundles that can be loaded on demand. This can be achieved using dynamic import() in React.

import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

const MyComponent = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);
<!-- <------------------------------>
 30.How do you handle errors in React?
Answer: Errors in React can be handled using error boundaries. Error boundaries are React components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI.


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error information
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}



