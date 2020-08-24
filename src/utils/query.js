const url = "https://avatar-api-cb.herokuapp.com/api/";

module.exports = {
    create: (category, sort, id) => {
        let tempURL = url + category.toLowerCase() + "/";
        let method = "GET";
        switch (category) {
            case "Characters":
                if (sort === "element") tempURL += `all?element=${id}`
                else tempURL += `one?id=${+ id}`;
                break;
            case "Quotes":
                tempURL += `all?${sort}=${id}`;
                method = "POST";
                break;
            case "Elements":
                tempURL += "all";
                break;
            case "Episodes":
                tempURL += `one/?id=${id}`;
                break;
            case "Seasons":
                tempURL += `one/?id=${id}`;
                break;
            default:
                return;
        }
        console.log(tempURL)
        return { url: tempURL, method };
    }
}