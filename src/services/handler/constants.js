//Defines the table labels and types
const MATCH_TABLE_COLUMNS = [
    {id:"id",label:"ID",type:"number",align:"left"},
    {id:"teamAway",label:"Team Away",type:"string",align:"left"},
    {id:"teamHome",label:"Team Home",type:"string",align:"left"},
    {id:"date",label:"Date",type:"date",align:"left"},
    {id:"time",label:"Time",type:"time",align:"left"},
    {id:"resultAway",label:"Goals Away",type:"number",align:"right"},
    {id:"resultHome",label:"Goals Home",type:"number",align:"left"},
]

// the API URL can be placed at a other place or be a input parameter of the app.
const API_URL = "https://widgets.fn.sportradar.com/common/en/Etc:UTC/gismo/fixtures_tournament/93581/20"

// just for visualization
const NAVBAR_PRIMARY = [
    {
        ICON: "dashboard",
        NAME: "Dashboard"
    },
    {
        ICON: "money",
        NAME: "Betting"
    },
    {
        ICON: "sports_basketball",
        NAME: "Sport News"
    },
    {
        ICON: "info",
        NAME: "About Us"
    },
]

// just for visualization
const NAVBAR_SECONDARY = [
    {
        ICON: "announcement",
        NAME: "Information"
    },
    {
        ICON: "announcement",
        NAME: "Documentation"
    },
    {
        ICON: "announcement",
        NAME: "Contact Us"
    }
]

export {
    MATCH_TABLE_COLUMNS,
    API_URL,
    NAVBAR_PRIMARY,
    NAVBAR_SECONDARY
};