import { API_URL } from "../handler/constants";

/**
 * Connection class to the API. The functionalities can be separated if the complexity increases.
 */
class APIServices {

    /**
    * Get all matches and transform them into the table format
    *
    * @public
    */
    getAll() {
    return fetch(API_URL).then(response => response.json()).then(
        data =>{
            // TODO: dynamic extraction of json
            return Object.values(data.doc[0].data.matches).map(row =>{
                return this.extractMatchData(row);
            })
        });
    }

    /**
     * Transforms the API Call output into the table format. 
     * This function can be outsourced from the APIServices if the react app gets bigger.
     *
     * @param {row} json 
     * @public
     */
    extractMatchData(row) {
        return ({
            id:row._id,
            teamAway: row.teams.away.name,
            teamHome: row.teams.home.name,
            date: row.time.date,
            time: row.time.time,
            resultAway: row.result.away,
            resultHome: row.result.home,
        })
    }

    // not implemented
    get(id) {
        return "";
    }

    /**
    * mockup API call to create a entry
    * 
    * @param {data} dict 
    * @public
    */
    create(data) {
        console.log("Add new record to database with the values: ",data);
        return true;
    }

    // not implemented
    update(id, data) {
        return "";
    }

    /**
    * mockup API call to delete a entry
    * 
    * @param {id} int 
    * @public
    */
    delete(id) {
        console.log("delete item with id:".concat(id));
        return true;
    }
  
}

export default new APIServices();