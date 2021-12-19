import { render } from "@testing-library/react";
import WeatherCard from "../components/WeatherCard";

describe("WeatherCard Component", () => {
  it("Should render the WeatherCard component", () => {
    const cardData = {
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
    const { getByTestId } = render(<WeatherCard data={cardData} />);
    const weatherCard = getByTestId("weatherCard");

    expect(weatherCard).toBeTruthy();
  });
});
