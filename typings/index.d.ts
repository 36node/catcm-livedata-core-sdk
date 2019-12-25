export = SDK;

declare class SDK {
  constructor(opts?: SDK.Options);

  base: string;
  token: string;
  auth: string;

  livedata: SDK.LivedataAPI;
}

declare namespace SDK {
  export interface Options {
    base?: string;
    token?: string;
  }

  export interface LivedataAPI {
    /**
     * List all livedata
     */
    listLivedata(req: ListLivedataRequest): Promise<ListLivedataResponse>;
    /**
     * Create a livedata
     */
    createLivedata(req: CreateLivedataRequest): Promise<CreateLivedataResponse>;
    /**
     * Find livedata by id
     */
    showLivedataById(req: ShowLivedataByIdRequest): Promise<ShowLivedataByIdResponse>;
    /**
     * Update livedata
     */
    updateLivedata(req: UpdateLivedataRequest): Promise<UpdateLivedataResponse>;
    /**
     *
     */
    deleteLivedata(req: DeleteLivedataRequest): Promise<DeleteLivedataResponse>;
    /**
     * List all livedata events
     */
    listLivedataEvents(req: ListLivedataEventsRequest): Promise<ListLivedataEventsResponse>;
    /**
     * Create livedata event
     */
    createLivedataEvent(req: CreateLivedataEventRequest): Promise<CreateLivedataEventResponse>;
  }

  type ListLivedataRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: string;
      group?: string | [string];

      filter: {
        id?: string;
        type?: string;
        title: {
          $regex?: string;
        };
        district?: string;
        owner?: string;
        publishedAt: {
          $gt?: string;
          $lt?: string;
        };
        submittedAt: {
          $gt?: string;
          $lt?: string;
        };
        assignees?: string;
        state?: "DRAFT" | "INIT" | "REVIEWING" | "PUBLISHED" | "REJECTED" | "RETURNED";
        createdBy?: string;
      };
    };
  };

  type ListLivedataResponse = {
    body: [Livedata];
    headers: {
      xTotalCount: number;
    };
  };

  type CreateLivedataRequest = {
    body: LivedataDoc;
  };

  type CreateLivedataResponse = {
    body: Livedata;
  };

  type ShowLivedataByIdRequest = {
    livedataId: string;
  };

  type ShowLivedataByIdResponse = {
    body: Livedata;
  };

  type UpdateLivedataRequest = {
    livedataId: string;
    body: LivedataDoc;
  };

  type UpdateLivedataResponse = {
    body: Livedata;
  };

  type DeleteLivedataRequest = {
    livedataId: string;
  };

  type ListLivedataEventsRequest = {
    livedataId: string;
  };

  type ListLivedataEventsResponse = {
    body: [LivedataEvent];
    headers: {
      xTotalCount: number;
    };
  };

  type CreateLivedataEventRequest = {
    livedataId: string;
    body: LivedataEventDoc;
  };

  type CreateLivedataEventResponse = {
    body: LivedataEvent;
  };

  type LivedataDoc = {
    type: string;
    title: string;
    district: string;
    owner: string;
    viewCount: number;
    category: "1" | "2" | "3" | "4" | "5" | "6";
    indication: string;
    detail: string;
    solution: string;
    method: string;
    usage: string;
    contraindication: string;
    consideration: string;
    source: string;
    caseDetail: string;
    comment: string;
    remark: string;
    caseAttach: [string];
    caseVideo: [string];
    caseImage: [string];
    caseRemark: string;
    phone: string;
    email: string;
    address: string;
    postcode: string;
    doctorRange: string;
    idImage: [string];
    ownerRemark: string;
    state: "DRAFT" | "INIT" | "REVIEWING" | "PUBLISHED" | "REJECTED" | "RETURNED";
    events: [undefined];
    assignees: [string];
    submittedAt: string;
    assignedAt: string;
    auditedAt: string;
    rejectedAt: string;
    publishedAt: string;
    returnedAt: string;
    createdBy: string;
    updatedBy: string;
  };
  type Livedata = {
    id: string;
    updatedAt: string;
    createdAt: string;
    type: string;
    title: string;
    district: string;
    owner: string;
    viewCount: number;
    category: "1" | "2" | "3" | "4" | "5" | "6";
    indication: string;
    detail: string;
    solution: string;
    method: string;
    usage: string;
    contraindication: string;
    consideration: string;
    source: string;
    caseDetail: string;
    comment: string;
    remark: string;
    caseAttach: [string];
    caseVideo: [string];
    caseImage: [string];
    caseRemark: string;
    phone: string;
    email: string;
    address: string;
    postcode: string;
    doctorRange: string;
    idImage: [string];
    ownerRemark: string;
    state: "DRAFT" | "INIT" | "REVIEWING" | "PUBLISHED" | "REJECTED" | "RETURNED";
    events: [undefined];
    assignees: [string];
    submittedAt: string;
    assignedAt: string;
    auditedAt: string;
    rejectedAt: string;
    publishedAt: string;
    returnedAt: string;
    createdBy: string;
    updatedBy: string;
  };
  type LivedataEventDoc = {
    name: "SUBMIT" | "ASSIGN" | "AUDIT" | "REJECT" | "PUBLISH" | "TURN_BACK";
    createdBy: string;
    comment: string;
    value: string;
  };
  type LivedataEvent = {
    id: string;
    updatedAt: string;
    createdAt: string;
    name: "SUBMIT" | "ASSIGN" | "AUDIT" | "REJECT" | "PUBLISH" | "TURN_BACK";
    createdBy: string;
    comment: string;
    value: string;
  };
  type MongoDefault = {
    id: string;
    updatedAt: string;
    createdAt: string;
  };
  type Err = {
    code: string;
    message: string;
  };
}
