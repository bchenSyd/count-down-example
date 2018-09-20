import React from "react";
import renderer from "react-test-renderer";
import NextToJumpContainer from "./NextToJumpContainer";

jest.mock("../components/Event", () => "Event");
const response1 = {
  result: [
    {
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
    }
  ],
  success: true
};
const response2 = {
  result: [
    {
      EventID: 30717085,
      EventName: "Race 4",
      EventTypeDesc: "Greyhounds",
      MasterEventName: "Races",
      AdvertisedStartTime: "2018-09-20T00:32:09.753Z",
      Venue: {
        Venue: "Daytona Beach",
        StateCode: null,
        Slug: "daytona-beach"
      }
    }
  ],
  success: true
};

describe("next to jump", () => {
  it("should render correctly", () => {
    fetch = jest.fn().mockReturnValueOnce(Promise.resolve(response1));
    const component = renderer.create(<NextToJumpContainer />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
