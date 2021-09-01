class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      visibility: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      visibility: !prevState.visibility,
    }));
  }

  render() {
    return (
      <div>
        <h1> Visibility Toggle </h1>
        <button onClick={this.toggle}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>

        <div>
          {this.state.visibility && (
            <h3> These are some details you can see now 🎉 </h3>
          )}
        </div>
      </div>
    );
  }
}

const appRoot = document.getElementById('root');
ReactDOM.render(<VisibilityToggle />, appRoot);

// let visibility = false;
// const toggle = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   var template = (
//     <div className='container mt-3'>
//       <h1> Visibility Toggle </h1>
//       <button className='btn btn-dark my-3' onClick={toggle}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <h3> These are some details you can see now 🎉 </h3>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// const appRoot = document.getElementById('root');
// render();
