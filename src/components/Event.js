import React, { Component } from "react";
import { diffTimeInSeconds, displayTimeDiff } from "../common/timeUtils";


class Event extends Component {
  state = {
    diffInSeconds: 0
  };

  interval = undefined;

  componentWillMount() {
    const {
      event: { AdvertisedStartTime: startTime }
    } = this.props;
    this.setState({
      diffInSeconds: diffTimeInSeconds(startTime)
    });
  }

  componentWillReceiveProps(nextProps) {
    const {
      event: { AdvertisedStartTime: startTime }
    } = nextProps;

    this.setState({
      diffInSeconds: diffTimeInSeconds(startTime)
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

  render() {
    const { event } = this.props;
    const { diffInSeconds } = this.state;
    const {
      EventName,
      Venue: { Venue }
    } = event;

    return (
      <div className="event">
        <div className="count-down">{displayTimeDiff(diffInSeconds)}</div>
        <div>
          <div className="event-name">{EventName}</div>
          <div>{Venue}</div>
        </div>
      </div>
    );
  }
}

export default Event;
