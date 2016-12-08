# react-weather-forecast

Hosting url: http://www.codeworkshop.co.uk/samples/react-weather/

Repo: https://github.com/danb-cws/react-weather-forecast

###Instructions:
* Development build: npm start
* Prod build: npm build
* Test: npm run test (only default react-create-app smoke test)

###With more time I would work on:
* umm, perhaps some styling? ;) More UI work, iconography for weather, temperature related colours
* reduce ui to one days info with pagination to other days
* refresh of data (button driven or via a timer)
* facility to change units
* ability to select other cities
* tests

### Problems with the implementation
* API key is unprotected - better to have a service (eg node) that makes the api call and only accepts a whitelist of domains
* no server rendering
* its ugly!