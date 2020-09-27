import { FilterNone } from "@material-ui/icons";
import { API_URL } from "../handler/constants";

class APIServices {
  getAll() {
    return fetch(API_URL).then(response => response.json());
  }
  
  get(id) {
    return "";
  }

  create(data) {
    return "";
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