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
  /**
   * summary's methods
   */
  summary = {
    /**
     * Get livedata summary
     *
     * @param {GetLivedataSummaryRequest} req getLivedataSummary request
     * @returns {Promise<GetLivedataSummaryResponse>} A paged array of livedata summaries
     */
    getLivedataSummary: (req = {}) => {
      const { headers } = req;

      return fetch(`${this.base}/summary/livedata`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get extra summary
     *
     * @param {GetExtraSummaryRequest} req getExtraSummary request
     * @returns {Promise<GetExtraSummaryResponse>} A paged array of livedata summaries
     */
    getExtraSummary: (req = {}) => {
      const { headers } = req;

      return fetch(`${this.base}/summary/extra`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * extra's methods
   */
  extra = {
    /**
     * List all extra
     *
     * @param {ListExtraRequest} req listExtra request
     * @returns {Promise<ListExtraResponse>} A paged array of extra
     */
    listExtra: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/extra`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create a Extra
     *
     * @param {CreateExtraRequest} req createExtra request
     * @returns {Promise<CreateExtraResponse>} The Extra created
     */
    createExtra: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createExtra");

      return fetch(`${this.base}/extra`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Find Extra by id
     *
     * @param {ShowExtraByIdRequest} req showExtraById request
     * @returns {Promise<ShowExtraByIdResponse>} Expected response to a valid request
     */
    showExtraById: (req = {}) => {
      const { extraId, headers } = req;

      if (!extraId) throw new Error("extraId is required for showExtraById");

      return fetch(`${this.base}/extra/${extraId}`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update Extra
     *
     * @param {UpdateExtraRequest} req updateExtra request
     * @returns {Promise<UpdateExtraResponse>} The Extra
     */
    updateExtra: (req = {}) => {
      const { extraId, headers, body } = req;

      if (!extraId) throw new Error("extraId is required for updateExtra");
      if (!body) throw new Error("requetBody is required for updateExtra");

      return fetch(`${this.base}/extra/${extraId}`, {
        method: "PATCH",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     *
     *
     * @param {DeleteExtraRequest} req deleteExtra request
     * @returns {Promise<DeleteExtraResponse>} Extra deleted
     */
    deleteExtra: (req = {}) => {
      const { extraId, headers } = req;

      if (!extraId) throw new Error("extraId is required for deleteExtra");

      return fetch(`${this.base}/extra/${extraId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List all Extra events
     *
     * @param {ListExtraEventsRequest} req listExtraEvents request
     * @returns {Promise<ListExtraEventsResponse>} A paged array of Extra events
     */
    listExtraEvents: (req = {}) => {
      const { extraId, headers } = req;

      if (!extraId) throw new Error("extraId is required for listExtraEvents");

      return fetch(`${this.base}/extra/${extraId}/events`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create Extra event
     *
     * @param {CreateExtraEventRequest} req createExtraEvent request
     * @returns {Promise<CreateExtraEventResponse>} Expected response to a valid request
     */
    createExtraEvent: (req = {}) => {
      const { extraId, headers, body } = req;

      if (!extraId) throw new Error("extraId is required for createExtraEvent");
      if (!body) throw new Error("requetBody is required for createExtraEvent");

      return fetch(`${this.base}/extra/${extraId}/events`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * feedback's methods
   */
  feedback = {
    /**
     * List all feedback
     *
     * @param {ListFeedbackRequest} req listFeedback request
     * @returns {Promise<ListFeedbackResponse>} A paged array of feedback
     */
    listFeedback: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/feedback`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create a feedback
     *
     * @param {CreateFeedbackRequest} req createFeedback request
     * @returns {Promise<CreateFeedbackResponse>} The feedback created
     */
    createFeedback: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createFeedback");

      return fetch(`${this.base}/feedback`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
}
