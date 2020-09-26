const url = "https://avatar-api-cb.herokuapp.com/api/";

module.exports = {
    create: (category, sort, id) => {
        let tempURL = url + category.toLowerCase() + "/";
        let method = "GET";
        switch (category) {
            case "Characters":
                if (sort === "element") tempURL += `all?element=${id}`
                else tempURL += `sample/?id=${+ id}`;
                break;
            case "Quotes":
                tempURL += `sample/?${sort}=${id}`;
                break;
            case "Elements":
                tempURL += "all";
                break;
            case "Episodes":
                tempURL += `sample/?id=${id}`;
                break;
            case "Seasons":
                tempURL += `all/?id=${id}`;
                break;
            default:
                return;
        }
        return { url: tempURL, method };
    },
    covertToLowerCase: (strObj) => {
        for (const key in strObj) {
            if (strObj[key] && typeof (strObj[key] === 'string')) {
                strObj[key] = strObj[key].toLowerCase();
            }
        }
        return strObj;
    }
}