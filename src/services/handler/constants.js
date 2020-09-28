const TABLE_COLUMNS = [
    {id:"id",label:"ID",type:"number",text:"ID"},
    {id:"teamAway",label:"Team Away",type:"string"},
    {id:"teamHome",label:"Team Home",type:"string"},
    {id:"date",label:"Date",type:"date"},
    {id:"time",label:"Time",type:"time"},
    {id:"resultAway",label:"Goals Away",type:"number"},
    {id:"resultHome",label:"Goals Home",type:"number"},
]

const API_URL = "https://widgets.fn.sportradar.com/common/en/Etc:UTC/gismo/fixtures_tournament/93581/20"

const NAVBAR_ITEMS = [
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

const NAVBAR_NEWS = [
    {
        ICON: "announcement",
        NAME: "News1"
    },
    {
        ICON: "announcement",
        NAME: "News2"
    },
    {
        ICON: "announcement",
        NAME: "News3"
    }
]

export {
    TABLE_COLUMNS,
    API_URL,
    NAVBAR_ITEMS,
    NAVBAR_NEWS
};