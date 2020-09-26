import { API_URL } from "../handler/constants";

class APIServices {
  getAll() {
    return fetch(API_URL).then(response => response.json());
  }
  /*
  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }
  */
}

export default new APIServices();