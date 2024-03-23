Steps to reproduce Maestro performance issues:
- npm install
- npm start
- maestro test maestro-test.yaml

Adjust `NUMBER_OF_MARKERS` in `App.js` to switch between performant tests and tests that take a long time.
Maestro Studio will fail to load when the marker count is high (defaulted to 300 in this repo).