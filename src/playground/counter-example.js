class CounterExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0,
    };
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  handleMinusOne() {
    this.setState((prev) => {
      return {
        count: prev.count - 1,
      };
    });
  }

  handleReset() {
    this.setState((prevState) => ({
      count: 0,
      name: prevState.name + ' reset',
    }));
  }
  render() {
    return (
      <div>
        <h1> Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}> +1 </button>
        <button onClick={this.handleMinusOne}> -1 </button>
        <button onClick={this.handleReset}> Reset </button>
      </div>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<CounterExample />, root);

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1> Count: {count} </h1>
//       <button onClick={addOne} id='my__id' className='button'>
//         {' '}
//         +1{' '}
//       </button>
//       <button onClick={minusOne}> -1 </button>
//       <button onClick={reset}> Reset </button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
