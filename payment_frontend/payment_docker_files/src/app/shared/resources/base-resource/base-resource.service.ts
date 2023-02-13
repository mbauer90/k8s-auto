import {BaseResourceModel} from './base-resource.model';

import {Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';


export abstract class BaseResourceService<T extends BaseResourceModel> {

  protected http: HttpClient;
  token = null;

  constructor(
    protected apiPath: string,
    protected injector: Injector,
    protected jsonDataToResourceFn: (jsonData: any) => T,
  ) {
    this.http = injector.get(HttpClient);
  }


  // PROTECTED METHODS

  protected jsonDataToResources(jsonData: any[]): T[] {
    const resources: T[] = [];
    jsonData.forEach(
      element => resources.push(this.jsonDataToResourceFn(element))
    );
    return resources;
  }


  public jsonDataToResource(jsonData: any): T {
    return this.jsonDataToResourceFn(jsonData);
  }


}
