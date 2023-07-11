import Page from "./page";

const path = {
  [Page.Index]: {
    path: "/",
  },
  [Page.BizA]: {
    path: "/biza",
  },
  [Page.BizADetail]: {
    path: "/biza/:id",
    params: {
      id: "string",
    },
  },
  [Page.BizB]: {
    path: "/bizb",
  },
} as const;

export default path;
