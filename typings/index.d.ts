export = SDK;

declare class SDK {
  constructor(opts?: SDK.Options);

  base: string;
  token: string;
  auth: string;

  livedata: SDK.LivedataAPI;
  summary: SDK.SummaryAPI;
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
  export interface SummaryAPI {
    /**
     * Get livedata summary
     */
    getLivedataSummary(req: GetLivedataSummaryRequest): Promise<GetLivedataSummaryResponse>;
  }

  type ListLivedataRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: string;
      group?: string | [string];

      filter: {
        no: {
          $regex?: string;
        };
        type: {
          $regex?: string;
        };
        title: {
          $regex?: string;
        };
        district: {
          $regex?: string;
        };
        owner: {
          $regex?: string;
        };
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

  type GetLivedataSummaryRequest = {
    query: {
      group: [string];

      filter: {
        no: {
          $regex?: string;
        };
        type: {
          $regex?: string;
        };
        title: {
          $regex?: string;
        };
        district: {
          $regex?: string;
        };
        owner: {
          $regex?: string;
        };
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
      };
    };
  };

  type GetLivedataSummaryResponse = {
    body: [LivedataSummary];
  };

  type LivedataDoc = {
    no: string;
    type: string;
    title: string;
    district: string;
    owner: string;
    viewCount: number;
    category: "1" | "2" | "3" | "4" | "5" | "6";
    name: string;
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
    birthday: string;
    phone: string;
    birthplace: string;
    position: string;
    doctorYear: string;
    doctorAttach: [undefined];
    job: string;
    jobAttach: [string];
    degree: string;
    degreeAttach: [string];
    email: string;
    address: string;
    postcode: string;
    idNumber: string;
    idImage: [string];
    award: string;
    awardAttach: [string];
    medicine: string;
    medicineAttach: [string];
    brand: string;
    brandAttach: [string];
    patent: string;
    patentAttach: [string];
    book: string;
    bookAttach: [string];
    paper: string;
    paperAttach: [string];
    product: string;
    productAttach: [string];
    appliance: string;
    applianceAttach: [string];
    sample: string;
    sampleAttach: [string];
    project: string;
    projectAttach: [string];
    company: string;
    companyAttach: [string];
    heritage: string;
    heritageAttach: [string];
    inherite: string;
    inheriteAttach: [string];
    homeaddress: string;
    homeaddressAttach: [string];
    companyaddress: string;
    companyaddressAttach: [string];
    expertComment: string;
    expertCommentAttach: [string];
    honesty: string;
    honestyAttach: [string];
    techCertificate: string;
    techCertificateAttach: [string];
    owerCertificate: string;
    owerCertificateAttach: [string];
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
    no: string;
    type: string;
    title: string;
    district: string;
    owner: string;
    viewCount: number;
    category: "1" | "2" | "3" | "4" | "5" | "6";
    name: string;
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
    birthday: string;
    phone: string;
    birthplace: string;
    position: string;
    doctorYear: string;
    doctorAttach: [undefined];
    job: string;
    jobAttach: [string];
    degree: string;
    degreeAttach: [string];
    email: string;
    address: string;
    postcode: string;
    idNumber: string;
    idImage: [string];
    award: string;
    awardAttach: [string];
    medicine: string;
    medicineAttach: [string];
    brand: string;
    brandAttach: [string];
    patent: string;
    patentAttach: [string];
    book: string;
    bookAttach: [string];
    paper: string;
    paperAttach: [string];
    product: string;
    productAttach: [string];
    appliance: string;
    applianceAttach: [string];
    sample: string;
    sampleAttach: [string];
    project: string;
    projectAttach: [string];
    company: string;
    companyAttach: [string];
    heritage: string;
    heritageAttach: [string];
    inherite: string;
    inheriteAttach: [string];
    homeaddress: string;
    homeaddressAttach: [string];
    companyaddress: string;
    companyaddressAttach: [string];
    expertComment: string;
    expertCommentAttach: [string];
    honesty: string;
    honestyAttach: [string];
    techCertificate: string;
    techCertificateAttach: [string];
    owerCertificate: string;
    owerCertificateAttach: [string];
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
  type LivedataSummary = {};
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
