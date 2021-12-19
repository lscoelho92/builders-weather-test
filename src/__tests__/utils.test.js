import { dateBuilder } from "../commons/utils";

describe("dateBuilder", () => {
  it("Should return a date with weekday, number day, month name and year", () => {
    const standardDate = new Date(2021, 11, 18);
    const date = dateBuilder(standardDate);

    expect(date).toBe("Saturday 18 December 2021");
  });
});
