document.title = '🟣 Indecision App 🟣';
// var user = {
//   name: 'Syed',
//   age: '26',
//   location: 'Berlin',
// };
// function getLocation(location) {
//   if (location) {
//     return <p> Location: {location}</p>;
//   }
// }
// var myTemplate = (
//   <div>
//     <h1> {user.name ? user.name : 'Anonymous'} </h1>
//     <p> {(user.age && user.age) >= 18 && <p> Age: {user.age} </p>} </p>
//     <p> {getLocation(user.location)}</p>
//   </div>
// );

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in hands of computer',
  options: ['Item1', 'Item2', 'item3'],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  option.length === 0 && window.alert('You have not added something.');

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onRemoveAll = (e) => {
  e.preventDefault();
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const render = () => {
  var template = (
    <div className='container'>
      <h1 className='bg-dark text-light p-2'> {app.title} </h1>
      {app.subtitle && <p className=''> {app.subtitle} </p>}
      {app.options.length > 0 ? <p> Here are your options </p> : 'No Options'}
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={onRemoveAll}> Remove All </button>

      <ol>
        {app.options.map((option, index) => (
          <li key={index}>
            {option.charAt(0).toUpperCase() + option.slice(1)}{' '}
          </li>
        ))}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button> Add Option </button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
const appRoot = document.getElementById('root');
render();
