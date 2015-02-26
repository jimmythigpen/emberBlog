import Ember from 'ember';

export function initialize(/* container, application */) {
  Ember.$.ajaxSetup({
    headers: {
      "X-Parse-Application-Id": "QAnEPJGriPT8L8lbklatsXs27pHHZ4jCIKlQoeIE",
      "X-Parse-REST-API-Key": "mZU9I6Thkc5o4p65P5bBkLyC9oNQcLIjd37qFnh9"
    }
  });
}

export default {
  name: 'parse',
  initialize: initialize
};
