import { Injectable } from '@angular/core';
import { HttpReqService } from "./http-req.service";
import { IApiCodegenRequest, IApiCodegenResponse } from "../../models/codegen.model";
import { Observable } from "rxjs";
import { API_URL } from "../../../assets/constantas";

@Injectable({
  providedIn: 'root'
})
export class CodegenService {

  constructor(private http: HttpReqService) { }

  postGenerate(obj: IApiCodegenRequest): Observable<IApiCodegenResponse> {
    return this.http.post<IApiCodegenRequest, IApiCodegenResponse>(
      API_URL + '/codegen',
      obj
    );
  };

  getOptions(): Observable<string[]> {
    return this.http.get<string[]>(
      API_URL + '/codegen'
    );
  }
}
