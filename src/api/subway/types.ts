export const subwayPaths = {
  subway: (uuid: string) => `/subway/${uuid}`,
  subwayLine: '/subway/line',
};

export type subwayLineItemType = {
  uuid: string;
  line: string;
};

export type APISubwayListParamsType = {
  uuid: string;
};
