import React, { Component } from "react";

class Event extends Component {
  state = {
    diffInSeconds: 0
  };

  interval = undefined;

  diffTime = eventStartTimeUTC => {
    const now_iso = new Date().toISOString();
    const diff =
      new Date(eventStartTimeUTC).getTime() - new Date(now_iso).getTime();
    return parseInt(diff / 1000);
  };

  componentWillMount() {
    const {
      event: { AdvertisedStartTime: startTime }
    } = this.props;
    this.setState({
      diffInSeconds: this.diffTime(startTime)
    });
  }

  componentWillReceiveProps(nextProps) {
    const {
      event: { AdvertisedStartTime: startTime }
    } = nextProps;

    this.setState({
      diffInSeconds: this.diffTime(startTime)
    });
  }

  componentDidMount() {
    const self = this;
    this.interval = setInterval(() => {
      const { diffInSeconds } = self.state;
      self.setState({
        diffInSeconds: diffInSeconds - 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  formatTime = timeDiffInSeconds => {
    let minutes = 0,
      seconds;
    const _secondsABS = Math.abs(timeDiffInSeconds);
    if (_secondsABS >= 60) {
      minutes = parseInt(_secondsABS / 60);
      seconds = _secondsABS % 60;
    } else {
      seconds = _secondsABS;
    }
    return `${timeDiffInSeconds < 0 ? "-" : ""}${
      minutes ? minutes + "m" : ""
    } ${seconds}s `;
  };

  render() {
    const { event } = this.props;
    const { diffInSeconds } = this.state;
    const {
      EventName,
      Venue: { Venue },
      AdvertisedStartTime
    } = event;

    return (
      <div className="Event">
        <div className="count-down">{this.formatTime(diffInSeconds)}</div>
        <div>
          <div className="event-name">{EventName}</div>
          <div>{Venue}</div>
        </div>
      </div>
    );
  }
}

export default Event;
