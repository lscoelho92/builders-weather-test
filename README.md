# WOA - What About Outside?

WOA is an application that, using the browser's location data, shows the user the current temperature of the city he is in.

### How to run the application.

To run the application just install the dependencies using:

```
npm install
```

After installing the dependencies, run the application using:

```
npm start
```

Wait for it to finish loading and open the address that will be showing on your terminal in your browser. on my for example the address is:

```
http://localhost:3000/
```

### What was developed

I developed the application using the **[Weather API](https://openweathermap.org/api):**.

I call the API using the browser's Latitude and Longitude data and it returns me the weather data from the user's region.

- The getUserCoords function returns the data from the API.

- dateBuilder function returns the current date to be displayed to the user.

When clicking on the splash screen button, it triggers the getUserCoords function, if it has the return with the API data, it renders the WeatherCard component that displays the data and the current date with the help of the dateBuilder function.

### How to use

1. Access the local address running the application. For example: http://localhost:3000/

2. Click on the "Let's Start!" button
   ![Home Page](src/assets/images/howtouse-01.png?raw=true "How to Use 01")

3. A dialog box will appear asking if you authorize to know your location. Click the "Allow" button
   ![Allow to know the user location](src/assets/images/howtouse-02.png?raw=true "How to Use 02")

4.The result screen will be displayed informing the date, current temperature, minimum and maximum temperature.
![Result Page](src/assets/images/howtouse-03.png?raw=true "How to Use 03")

5. If you want to update the information received, just click on the "Refresh data" button.

**Note 1:**
The API only updates information every 15 minutes, it's no use updating all the time.
