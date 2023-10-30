import { type PlaceKeanuAPI } from "./datasources/placekeanu-api";

export type DataSourceContext = {
  dataSources: {
    placeKeanuAPI: PlaceKeanuAPI;
  };
};
