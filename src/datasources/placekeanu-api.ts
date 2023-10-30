import { RESTDataSource } from "@apollo/datasource-rest";

export class PlaceKeanuAPI extends RESTDataSource {
  constructor(config) {
    super(config);
    this.baseURL = "https://placekeanu.com/";
  }

  getKeanuImage(width: string) {
    return this.get(`/${width}`);
  }
}
