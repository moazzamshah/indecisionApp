import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOptions from './AddOptions';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  componentDidMount() {
    const json = localStorage.getItem('data');
    const options = JSON.parse(json);

    if (options) {
      this.setState(() => ({ options }));
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    //objects as props
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('data', json);
    }
  };
  componentWillUnmount() {
    console.log('componet will unmount');
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }));
  };

  handleAddOption = (option) => {
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
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleCloseModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  render() {
    const title = 'Indecision';
    const subTitle = 'Put you life in the hands of computer';
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <div className='container'>
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className='widget'>
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOptions handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}
export default IndecisionApp;
