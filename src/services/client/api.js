import { API_URL, extractMatchData } from "../handler/constants";

class APIServices {
  getAll() {
    return fetch(API_URL).then(response => response.json()).then(
        data =>{
            // TODO: dynamic extraction of json
            return Object.values(data.doc[0].data.matches).map(row =>{
                return extractMatchData(row);
            })
        });
  }
  
  get(id) {
    return "";
  }

  create(data) {
    console.log("Add new record to database with the values: ",data);
    return true;
  }

  update(id, data) {
    return "";
  }

  delete(id) {
    console.log("delete item with id:".concat(id));
    return true;
  }
  
}

export default new APIServices();