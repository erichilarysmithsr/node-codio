// ProjectManager
// =============


var request = require('./request');


var ProjectManager = module.exports = function (options) {
    this.options = options;
    this.request = request.bind(null, this.options, 'ProjectManager');
};


// Get a project by name.
//
// name     - String, the project name.
// info     - Object, with additional parameters
//            user    - String, the user name.
//            session - String, the session key.
//            branch  - String, the branch name.
// callback - A callback function.
ProjectManager.prototype.getProjectByName = function (name, info, callback) {
    this.request('getProjectByName', {
        accountName : info.user,
        projectName: name
    }, {
        'session_id' : info.session
    }, callback, info.branch);
};


// Check if the user has the right permissions.
//
// credentials - Object with user credentials
//               user    - Name of the user.
//               session - Session ID.
// callback - Function, to call with the result of the request.
ProjectManager.prototype.checkPermissionForUser = function (credentials, callback) {
    this.request('checkPermissionForUser', {
        userName: credentials.user
    }, {
        session_id: credentials.session
    }, callback);
};


// Check if the user has the right permissions.
//
// credentials - Object with user credentials
//               project - Object
//                 name  - Name of the project.
//                 owner - Name of the owner of the project.
//               session - Session ID.
// callback    - Function to call with the result.
ProjectManager.prototype.checkPermissionForProject = function (credentials, callback) {
    this.request('checkPermissionForProject', {
        userName: credentials.project.owner,
        projectName: credentials.project.name,
    }, {
        session_id: credentials.session
    }, callback);
};
