import axios from "axios";
import { getUserCoords } from "../commons/location";

jest.mock("axios");

describe("getUserCoords", () => {
  it("Should return climate data", async () => {
    const data = {
      name: "São Paulo",
      sys: {
        country: "BR",
      },
      main: {
        temp: 5.84,
        temp_max: 7.2,
        temp_min: 4.34,
      },
      weather: [{ description: "overcast clouds" }],
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    const result = await getUserCoords();

    expect(result).toEqual(data);
  });
});
