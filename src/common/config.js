// Replace the URL with your localhost API endpoint
// const apiRoot = "http://localhost:5079"
const apiRoot = "https://lifecklsservice.azurewebsites.net"

module.exports = {
    registrationUrl: `${apiRoot}/v1/user/register`,
    loginUrl: `${apiRoot}/v1/user/login`,
    getUserByName: `${apiRoot}/v1/user/`,
    connectUrl: `${apiRoot}/v1/user/connect`,
    connectionRequestsUrl: `${apiRoot}/v1/user/{username}/connectionrequests`
};