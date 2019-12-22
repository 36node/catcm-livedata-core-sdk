import fetch from "@36node/fetch";
import { denormalize } from "@36node/query-normalizr";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    let token = this.token;
    if (typeof token === "function") token = token();
    if (token) return `Bearer ${token}`;

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = {}) {
    this.base = opt.base || "";
    this.token = opt.token || "";
  }

  /**
   * livedata's methods
   */
  livedata = {
    /**
     * List all livedata
     *
     * @param {ListLivedataRequest} req listLivedata request
     * @returns {Promise<ListLivedataResponse>} A paged array of livedata
     */
    listLivedata: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/livedata`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create a livedata
     *
     * @param {CreateLivedataRequest} req createLivedata request
     * @returns {Promise<CreateLivedataResponse>} The livedata created
     */
    createLivedata: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createLivedata");

      return fetch(`${this.base}/livedata`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Find livedata by id
     *
     * @param {ShowLivedataByIdRequest} req showLivedataById request
     * @returns {Promise<ShowLivedataByIdResponse>} Expected response to a valid request
     */
    showLivedataById: (req = {}) => {
      const { livedataId, headers } = req;

      if (!livedataId)
        throw new Error("livedataId is required for showLivedataById");

      return fetch(`${this.base}/livedata/${livedataId}`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update livedata
     *
     * @param {UpdateLivedataRequest} req updateLivedata request
     * @returns {Promise<UpdateLivedataResponse>} The livedata
     */
    updateLivedata: (req = {}) => {
      const { livedataId, headers, body } = req;

      if (!livedataId)
        throw new Error("livedataId is required for updateLivedata");
      if (!body) throw new Error("requetBody is required for updateLivedata");

      return fetch(`${this.base}/livedata/${livedataId}`, {
        method: "PATCH",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     *
     *
     * @param {DeleteLivedataRequest} req deleteLivedata request
     * @returns {Promise<DeleteLivedataResponse>} livedata deleted
     */
    deleteLivedata: (req = {}) => {
      const { livedataId, headers } = req;

      if (!livedataId)
        throw new Error("livedataId is required for deleteLivedata");

      return fetch(`${this.base}/livedata/${livedataId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List all livedata events
     *
     * @param {ListLivedataEventsRequest} req listLivedataEvents request
     * @returns {Promise<ListLivedataEventsResponse>} A paged array of livedata events
     */
    listLivedataEvents: (req = {}) => {
      const { livedataId, headers } = req;

      if (!livedataId)
        throw new Error("livedataId is required for listLivedataEvents");

      return fetch(`${this.base}/livedata/${livedataId}/events`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create livedata event
     *
     * @param {CreateLivedataEventRequest} req createLivedataEvent request
     * @returns {Promise<CreateLivedataEventResponse>} Expected response to a valid request
     */
    createLivedataEvent: (req = {}) => {
      const { livedataId, headers, body } = req;

      if (!livedataId)
        throw new Error("livedataId is required for createLivedataEvent");
      if (!body)
        throw new Error("requetBody is required for createLivedataEvent");

      return fetch(`${this.base}/livedata/${livedataId}/events`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
}
