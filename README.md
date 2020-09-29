# ReactCodingChallenge

This is a coding challenge about creating a table with an add and delete functionality. 

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

A scene is a class that is used once. A component can be reused. Each scene and component can have sub-components to reduce the complexity of the code and to structure the functionalities. Services support the visualization with the connection to APIs (client) and helper functions (handler) such as parsers.

## Usage

Let's get started.

### Development

The app can be tested by executing the `start.sh` script. The development app is on port 3000.

```bash
bash start.sh
```


### Production

To build the app run `build.sh` and afterwards you can start a server to use the app. The production app is on port 5000.

```bash
bash build.sh
serve -s build
```

The app can also be deployed in a docker container. Build the container with:

```bash
docker build -t sample:dev .
```

and run the container with:

```
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev
```

## Documentation

The documentation was created with [react-styleguidist](https://react-styleguidist.js.org/). The server can be started with:

```bash
npx styleguidist server
```

A product version can be built with:

```bash
npx styleguidist build
```

## Improvements

One big advantage is the usage of a framework that connects all states of the components with each other. Each component is informed if a state changes and therefore can adapt its own variables. Redux is such a tool.

Another improvement is the usage of an advanced table component like [material-table](https://github.com/mbrn/material-table). 
For the match table, it would have been even better if the results of both teams are shown next to each other (5:4) and not in different rows. I tried this before but also wanted to have a generic solution by passing columns and rows to the table component. Thereby, the table structure is generated on the fly. As an improvement, I can provide a column and row template that the table is using und that combines the results of both teams.

Next, a [toastify](https://github.com/fkhadra/react-toastify) component could highlight the delete and add results. 

Finally, the class components can be replaced by functional components to save lines of code. Moreover, they have some other advantages described in this [article](https://blog.bitsrc.io/will-react-classes-get-deprecated-because-of-hooks-bb62938ac1f5).

