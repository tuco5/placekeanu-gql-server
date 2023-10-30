import { RESTDataSource } from "@apollo/datasource-rest";

export class PlaceKeanuAPI extends RESTDataSource {
  constructor(config) {
    super(config);
    this.baseURL = "https://placekeanu.com/";
  }

  getKeanuImage({
    width,
    height,
    y,
    g,
  }: {
    width: number;
    height?: number;
    y?: boolean;
    g?: boolean;
  }) {
    return this.get(
      `${width}/${height ? `${height}/` : ""}${y ? "y" : ""}${g ? "g" : ""}`
    );
  }
}
