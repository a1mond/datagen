import { IVariable } from "./variable.model";

export interface IApiCodegenRequest {
  str: string,
  times: number,
  variables: IVariable[]
}

export interface IApiCodegenResponse {
  data: string[];
}
