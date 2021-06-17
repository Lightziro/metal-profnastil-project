export const checkData = (data) => {
    for (let prop in data) {
        if (!data[prop].length && prop !== 'description') {
            return false;
        }
    }
    return true;
}