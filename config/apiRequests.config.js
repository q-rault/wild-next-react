import config from "./config";

const {
  api: { host, port, wilder },
} = config;

const apiRequests = {
  wilderCreateString: `http://${host}:${port}/${wilder}create`,
  wilderReadString: `http://${host}:${port}/${wilder}read`,
};
export default apiRequests;
