import { API_URL, extractMatchData } from "../handler/constants";

/**
 * Connection class to the API. The functionalities can be separated if the complexity increases.
 */
class APIServices {

  //get all matches and transform them into the table format
  getAll() {
    return fetch(API_URL).then(response => response.json()).then(
        data =>{
            // TODO: dynamic extraction of json
            return Object.values(data.doc[0].data.matches).map(row =>{
                return extractMatchData(row);
            })
        });
  }
  // not implemented
  get(id) {
    return "";
  }

  // mockup API call to create a entry
  create(data) {
    console.log("Add new record to database with the values: ",data);
    return true;
  }

  // not implemented
  update(id, data) {
    return "";
  }

  //// mockup API call to delete a entry
  delete(id) {
    console.log("delete item with id:".concat(id));
    return true;
  }
  
}

export default new APIServices();