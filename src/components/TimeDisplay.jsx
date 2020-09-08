import React from 'react';

import { fetchTime }  from '../remoting/';

class TimeDisplay extends React.Component {
  state = {
    currentTime: null,
    updateCounter: 0,
  }

  componentDidMount() {
    const { updateTime } = this;

    updateTime();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentTime, updateCounter } = this.state;

    if (prevState.currentTime !== currentTime) {
      this.setState({
        updateCounter: updateCounter + 1,
      });
    }
  }

  updateTime = async () => {
    const currentTime = await fetchTime();

    this.setState({
      currentTime,
    });
  }

  render() {
    const { updateTime } = this;
    const { buttonText } = this.props;
    const { currentTime, updateCounter } = this.state;


    return (
      <>
        <div>
          The current Time is:
        </div>
        <div>
          {currentTime ? currentTime : '???'}
        </div>
        <div>
          The time has been updated {updateCounter} times
        </div>
        <div>
          <button
            type={'button'}
            onClick={updateTime}
          >
            {buttonText}
          </button>
        </div>
      </>
    );
  }
}

export default TimeDisplay;
