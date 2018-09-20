import React, { Component } from "react";
import fetch from "../common/fetch";
import Event from "../components/Event";
import { basePath } from "../config";


class NextToJumpContainer extends Component {
  state = {
    events: []
  };

  interval = undefined;
  componentDidMount() {
    const self = this;
    const fetchEvents = () =>
      fetch(`${basePath}/events`)
        .then(res => {
          const { success, result } = res;
          if (!success) {
            throw "fetch failed";
          }
          self.setState({
            events: [...result]
          });
        })
        .catch(err => {
          console.warn("needs to direct to error page", err);
        });

    fetchEvents();
    this.interval = setInterval(fetchEvents, 5000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { events } = this.state;
    return (
      <div className="next2Jump">
        <div>
          <label>Next to Jump</label>
        </div>
        <div className="events">
          {events.map(e => (
            <Event key={`event-${e.EventID}`} event={e} />
          ))}
        </div>
      </div>
    );
  }
}

export default NextToJumpContainer;
