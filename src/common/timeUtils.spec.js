import { diffTimeInSeconds, displayTimeDiff } from "./timeUtils";

describe("time utils", () => {
  it("should diff time correctly", () => {
    Date.now = jest.fn().mockReturnValue(1537402868528); //2018-09-20T00:21:08.528Z
    const timeStr = "2018-09-20T00:21:18.528Z";
    const diffResult = diffTimeInSeconds(timeStr);
    expect(diffResult).toBe(10);
  });

  it("should display diff time correctly", () => {
    const diff1 = 10;
    const diff2 = 60;
    const diff3 = 70;
    const diff4 = -120;
    expect(displayTimeDiff(diff1)).toBe(" 10s");
    expect(displayTimeDiff(diff2)).toBe("1m ");
    expect(displayTimeDiff(diff3)).toBe("1m 10s");
    expect(displayTimeDiff(diff4)).toBe("-2m ");
  });
});
