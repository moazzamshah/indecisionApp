import Header from './Header'
import Action from './Action';
import Options from './Options';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    this.state = {
      options: [], //['Thing one', 'Thing two', 'Third thing'],
    };
  }

  componentDidMount() {
    const json = localStorage.getItem('data');
    const options = JSON.parse(json);

    if (options) {
      this.setState(() => ({ options }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //objects as props
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('data', json);
    }
  }
  componentWillUnmount() {
    console.log('componet will unmount');
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option is already exists.';
    } else {
      this.setState((prevState) => {
        return {
          options: [...prevState.options, option],
        };
      });
    }
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  render() {
    const title = 'Indecision';
    const subTitle = 'Put you life in the hands of computer';
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOptions handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}




ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
