import React from "react";
import { mount } from "enzyme";
import NextToJumpContainer from "./NextToJumpContainer";
jest.useFakeTimers();
jest.mock("../common/fetch");
jest.mock("../components/Event", () => "event");
const fetch = require("../common/fetch");

// https://github.com/airbnb/enzyme/issues/1587#issuecomment-374547756
describe("next to jump", () => {
  it("should render correctly", () => {
    const response1 = {
      success: true,
      result: [
        {
          EventId: 11111,
          EventName:"first fetch result"
        }
      ]
    };
    const response2 = {
      success: true,
      result: [
        {
          EventId: 22222,
          EventName:"second fetch result"
        }
      ]
    };

    fetch.default.mockReturnValueOnce(Promise.resolve(response1));

    const mounted = mount(<NextToJumpContainer />);

    return Promise.resolve(mounted)
      .then(() => mounted.update())
      .then(() => {
        // verify render with response1
        expect(mounted).toMatchSnapshot();

        // component should re-fetch data after 5 seconds
        fetch.default.mockReturnValueOnce(Promise.resolve(response2));

        jest.runOnlyPendingTimers();
      })
      .then(() => mounted.update())
      .then(() => {
        // verify render with response2
        expect(mounted).toMatchSnapshot();
      });
  });
});
