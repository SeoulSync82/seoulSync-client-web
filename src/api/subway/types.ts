export type subwayLineItemType = {
  uuid: string;
  line: string;
};

export type subwayLineType = {
  subway: Array<subwayLineItemType>;
};
