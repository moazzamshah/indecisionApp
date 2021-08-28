document.title = '🟣 Visibility Toggle 🟣';

let visibility = false;
const toggle = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  var template = (
    <div className='container mt-3'>
      <h1> Visibility Toggle </h1>
      <button className='btn btn-dark my-3' onClick={toggle}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <div>
          <h3> These are some details you can see now 🎉 </h3>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('root');
render();
