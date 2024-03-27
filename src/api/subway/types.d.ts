export type subwayLineItemType = {
  uuid: string;
  line: string;
};

export type subwayItemType = {
  uuid: string;
  station: string;
};

export type GetSubwayCustomPlaceCount = {
  lineUuid: string;
  stationUuid: string;
};

export type APISubwayListParamsType = {
  uuid: string;
};

export type APISubwayCustomPlaceCountParamsType = {
  subway: string;
  line: string;
};

export type SubwayCustomPlaceCountType = {
  RESTAURANT: number;
  CAFE: number;
  BAR: number;
  SHOPPING: number;
  CULTURE: number;
  ENTERTAINMENT: number;
  EXHIBITION: number;
  POPUP: number;
};

export enum CustomPlace {
  RESTAURANT = '음식점',
  CAFE = '카페',
  BAR = '술집',
  SHOPPING = '쇼핑',
  CULTURE = '문화',
  ENTERTAINMENT = '놀거리',
  EXHIBITION = '전시',
  POPUP = '팝업',
}
