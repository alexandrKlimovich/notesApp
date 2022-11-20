export function patchHTTPAddress(urlAddress, argBody) {
    fetch(urlAddress, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(argBody),
    }).then((r) => r.json());
}
export function getHTTPAddress(urlAddress) {
    const HTTPAddress = fetch(urlAddress).then((r) => r.json());
    return HTTPAddress;
}
export function postHTTPAddres(urlAddress, argBody) {
    fetch(urlAddress, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(argBody),
    }).then((r) => r.json());
}
export function deleteHTTPAddress(urlAddress) {
    fetch(urlAddress, {method: 'DELETE'}).then((r) => r.json());
}
