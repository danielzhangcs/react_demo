import React from 'react';

import { fetchTime }  from '../remoting/';

class TimeDisplay extends React.Component {
  state = {
    currentTime: null,
  }

  handleClick = async event => {
    const currentTime = await fetchTime();

    this.setState({
      currentTime,
    });
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
