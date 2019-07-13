import _ from "underscore";

export const getServerBackendUrl = () => `http://backend:1337`;

export const getClientBackendUrl = () =>
  `http://${window.location.hostname}:1337`;
