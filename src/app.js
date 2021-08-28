class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subTitle = 'Put you life in the hands of computer';
    const options = ['Thing one', 'Thing two', 'Thing three'];
    return (
      <div className='m-2'>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOptions />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    const { title, subTitle } = this.props;
    return (
      <div>
        <h1> {title} </h1>
        <h2> {subTitle} </h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button> What should i do? </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    const { options } = this.props;
    return (
      <div>
        {options.map((option) => (
           <Option key={option} option = {option}/>
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    const { option } = this.props;
    return (
      <div>
        <p> {option} </p>
      </div>
    );
  }
}

class AddOptions extends React.Component {
  render() {
    return (
      <div>
        <p> Add Options component here </p>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
