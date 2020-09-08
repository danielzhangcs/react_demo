import React from 'react';

class TimeDisplay extends React.Component {
  state = {
    currentTime: null,
  }

  handleClick = event => {

  }

  render() {
    const { handleClick } = this;
    const { buttonText } = this.props;
    const { currentTime } = this.state;


    return (
      <>
        <div>
          The current Time is:
        </div>
        <div>
          {currentTime ? currentTime : '???'}
        </div>
        <div>
          <button
            type={'button'}
            onClick={handleClick}
          >
            {buttonText}
          </button>
        </div>
      </>
    );
  }
}

export default TimeDisplay;
