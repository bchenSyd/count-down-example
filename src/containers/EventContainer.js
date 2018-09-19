import React, { Component } from "react";
import fetch from "../common/fetch";
import Event from "../components/Event";
import { basePath } from "../config";

class EventContainer extends Component {
  state = {
    events: []
  };

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
          console.warn("needs to direct to error page");
        });

    fetchEvents();
    setInterval(fetchEvents, 5000);
  }

  render() {
    const { events } = this.state;
    return (
      <div className="App">
        {events.map(e => (
          <Event key={`event-${e.EventID}`} event={e} />
        ))}
      </div>
    );
  }
}

export default EventContainer;
