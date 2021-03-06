// Codio API
// =========

var _ = require('lodash');
var url = require('url');

var ProjectManager = require('./lib/project-manager');
var ProjectStructureManager = require('./lib/project-structure-manager');
var ContainerManager = require('./lib/container-manager');
var TaskManager = require('./lib/task-manager');
var SshManager = require('./lib/ssh-manager');
var ForwardingManager = require('./lib/forwarding-manager');
var AccountManager = require('./lib/account-manager');
var OrganizationManager = require('./lib/organization-manager');
var BuildManager = require('./lib/build-manager');
var ImportManager = require('./lib/import-manager');
var SubscriptionManager = require('./lib/subscription-manager');
var PlagiarismDetectionManager = require('./lib/plagiarism-detection-manager');
var EducationTrialManager = require('./lib/trial-manager');
var StacksManager = require('./lib/stacks-manager');


module.exports = function (options) {
    this.options = options || {};
    var origin = this.options.origin;
    if (_.isString(origin)) {
        this.options.origin = url.parse(origin);
    } else if (_.isObject(origin)) {
        this.options.origin = origin;
    } else {
        this.options.origin = null;
    }

    this.projectManager = new ProjectManager(this.options);
    this.projectStructureManager = new ProjectStructureManager(this.options);
    this.containerManager = new ContainerManager(this.options);
    this.taskManager = new TaskManager(this.options);
    this.sshManager = new SshManager(this.options);
    this.forwardingManager = new ForwardingManager(this.options);
    this.accountManager = new AccountManager(this.options);
    this.organizationManager = new OrganizationManager(this.options);
    this.buildManager = new BuildManager(this.options);
    this.importManager = new ImportManager(this.options);
    this.subscriptionManager = new SubscriptionManager(this.options);
    this.plagiarismDetectionManager = new PlagiarismDetectionManager(this.options);
    this.educationTrialManager = new EducationTrialManager(this.options);
    this.stacksManager = new StacksManager(this.options);
};
