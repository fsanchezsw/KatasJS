export function kata2 (obj, def, path) {
    const accessor = (path) => {
        const value = path.split('.').reduce((object, prop) => {
            return object[prop] ? object[prop] : false;
        }, obj);

        return value ? value : def;
    };

    return path ? accessor(path) : accessor;
}
