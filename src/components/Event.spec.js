import React from "react";
import renderer from "react-test-renderer";
import Event from "./Event";

jest.useFakeTimers();
describe("Event", () => {
  it("should render a event tile properly", () => {
    const event = {
      EventID: 30717084,
      EventName: "Race 3",
      EventTypeDesc: "Greyhounds",
      MasterEventName: "Races",
      AdvertisedStartTime: "2018-09-20T00:22:09.753Z",
      Venue: {
        Venue: "Daytona Beach",
        StateCode: null,
        Slug: "daytona-beach"
      }
    };

    Date.now = jest.fn().mockReturnValue(1537402868528); //2018-09-20T00:21:08.528Z
    const component = renderer.create(<Event event={event} />);

    expect(component.toJSON()).toMatchSnapshot(); // 1m 1s

    jest.runOnlyPendingTimers()

    expect(component.toJSON()).toMatchSnapshot(); // 1m
  });
});
