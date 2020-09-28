# ReactCodingChallenge

This is a coding challenge about creating a table with a add and a delete functionality. Redux is not used in this project, but can be considered for future projects if the complexity gets higher. 

## Project Structure

The structure of the directory is as follows:

- components/
    - Component/
        - Component.js
        - components/
            - HelperComponent.js
- scenes/
    - Scene/
        - Scene.js
        - components/
            - HelperComponent.js
- services/
    - handler/
        - handler.js
    - client/
        - api.js
        - (routes/)

A scene is a class that is used ones. A component can be reused. Each scene and component can have sub-components to reduce the complexity of the code and to structure the functionalities. Services support the visualization with the connection to APIs (client) and helper functions (handler) like parsers.

## Usage

Let's get started.

### Development

The app can be tested by executing the `start.sh` script. The development app is on port 3000.

```bash
bash start.sh;
```


### Production

To build the app run `build.sh` and afterwards you can start a server to use the app. The production app is on port 5000.

```bash
bash build.sh;
serve -s build;
```


## Documentation

The documentation was created with [react-styleguidist](https://react-styleguidist.js.org/). The server can be started with:

```bash
npx styleguidist server;
```

A product version can be build with:

```bash
npx styleguidist build;
```
