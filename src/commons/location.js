import axios from "axios";

export const getUserCoords = async () => {
  return new Promise((resolve, reject) => {
    const api = {
      key: "f5fc0d4cb4a03911e34a54060a16565d",
      url: "https://api.openweathermap.org/data/2.5/weather?",
    };

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
    };

    const success = (position) => {
      axios
        .get(
          `${api.url}lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${api.key}`
        )
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    };

    navigator.geolocation.getCurrentPosition(
      success,
      () => console.log("Unable to get Coords"),
      options
    );
  });
};

export const testMock = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=51.5135872&lon=7.4652981&units=metric&appid=f5fc0d4cb4a03911e34a54060a16565d"
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
