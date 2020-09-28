import { FilterNone } from "@material-ui/icons";
import { API_URL } from "../handler/constants";

class APIServices {
  getAll() {
    return fetch(API_URL).then(response => response.json()).then(
        data =>{
            /*
                id - ._id, 
                away team - .teams.away.name,
                home team - .teams.home.name,
                Date - .time.date, 
                Time - .time.time, , 
                Result - [.result.away,result.home] (optional: result.winner), 
                Actions - delete
            */
            return Object.values(data.doc[0].data.matches).map(row =>{
                return ({
                    id:row._id,
                    teamAway: row.teams.away.name,
                    teamHome: row.teams.home.name,
                    date: row.time.date,
                    time: row.time.time,
                    resultAway: row.result.away,
                    resultHome: row.result.home,
                })
            })
        });
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