import React from "react";
import { mount } from "enzyme";
import NextToJumpContainer from "./NextToJumpContainer";
jest.mock("../common/fetch", () => {
  const response = {
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
  return jest.fn().mockReturnValue(Promise.resolve(response));
});

jest.mock("../components/Event", () => "event");


// https://github.com/airbnb/enzyme/issues/1587#issuecomment-374547756
describe("next to jump", () => {
  it("should render correctly", () => {
    const mounted = mount(<NextToJumpContainer />);

    return Promise.resolve(mounted)
      .then(() => mounted.update())
      .then(() => {
         expect(mounted).toMatchSnapshot();
      });
  });
});
