/**
 * Cisco PSIRT openVuln API
 * The Cisco Product Security Incident Response Team (PSIRT) openVuln API is a RESTful API that allows customers to obtain Cisco Security Vulnerability information in different machine-consumable formats. APIs are important for customers because they allow their technical staff and programmers to build tools that help them do their job more effectively (in this case, to keep up with security vulnerability information). For more information about the Cisco PSIRT openVuln API visit https://developer.cisco.com/site/PSIRT/discover/overview  For detail steps on how to use the API go to:https://developer.cisco.com/site/PSIRT/get-started/getting-started.gsp  This is a beta release of a swagger YAML for the Cisco PSIRT openVuln API.  To access the API sign in with your Cisco CCO account at http://apiconsole.cisco.com and register an application to recieve a client_id and a client_secret  You can then get your token using curl or any other method you prefer.  'curl -s -k -H \"Content-Type: application/x-www-form-urlencoded\" -X POST -d \"client_id=<your_client_id>\" -d \"client_secret=<your_client_secret>\" -d \"grant_type=client_credentials\" https://cloudsso.cisco.com/as/token.oauth2'  You will receive an access token as demonstrated in the following example:  '{\"access_token\":\"I7omWtBDAieSiUX3shOxNJfuy4J6\",\"token_type\":\"Bearer\",\"expires_in\":3599}'  In Swagger, click on Change Authentication  enter the text \"I7omWtBDAieSiUX3shOxNJfuy4J6\" (which is the token you received)  then click on \"Try this operation\" 
 *
 * OpenAPI spec version: 0.0.3
 * Contact: os@cisco.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./api/DefaultApi'));
  }
}(function(ApiClient, DefaultApi) {
  'use strict';

  /**
   * The_Cisco_Product_Security_Incident_Response_Team__PSIRT_openVuln_API_is_a_RESTful_API_that_allows_customers_to_obtain_Cisco_Security_Vulnerability_information_in_different_machine_consumable_formats__APIs_are_important_for_customers_because_they_allow_their_technical_staff_and_programmers_to_build_tools_that_help_them_do_their_job_more_effectively__in_this_case_to_keep_up_with_security_vulnerability_information_For_more_information_about_the_Cisco_PSIRT_openVuln_API_visit_httpsdeveloper_cisco_comsitePSIRTdiscoveroverviewFor_detail_steps_on_how_to_use_the_API_go_tohttpsdeveloper_cisco_comsitePSIRTget_startedgetting_started_gspThis_is_a_beta_release_of_a_swagger_YAML_for_the_Cisco_PSIRT_openVuln_API_To_access_the_API_sign_in_with_your_Cisco_CCO_account_at_httpapiconsole_cisco_com_and_register_an_applicationto_recieve_a_client_id_and_a_client_secretYou_can_then_get_your_token_using_curl_or_any_other_method_you_prefer_curl__s__k__H_Content_Type_applicationx_www_form_urlencoded__X_POST__d_client_idyour_client_id__d_client_secretyour_client_secret__d_grant_typeclient_credentials_httpscloudsso_cisco_comastoken_oauth2You_will_receive_an_access_token_as_demonstrated_in_the_following_example_access_tokenI7omWtBDAieSiUX3shOxNJfuy4J6token_typeBearerexpires_in3599In_Swagger_click_on_Change_Authenticationenter_the_text_I7omWtBDAieSiUX3shOxNJfuy4J6__which_is_the_token_you_receivedthen_click_on_Try_this_operation.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CiscoPsirtOpenVulnApi = require('index'); // See note below*.
   * var xxxSvc = new CiscoPsirtOpenVulnApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CiscoPsirtOpenVulnApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CiscoPsirtOpenVulnApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CiscoPsirtOpenVulnApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.3
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));