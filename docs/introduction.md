This is a coding challenge about creating a table with a add and a delete functionality. Redux is not used in this project, but can be considered for future projects if the complexity gets higher. 

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