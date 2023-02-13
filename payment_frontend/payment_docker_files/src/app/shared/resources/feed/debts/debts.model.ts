import {BaseResourceModel} from '../../base-resource/base-resource.model';

export class DebtsModel extends BaseResourceModel {
  constructor(
    public override id?: string,
    public name?: string,
    public value?: string,
  ) {
    super();
  }

  static fromJson(jsonData: any): DebtsModel {
    return Object.assign(new DebtsModel(), jsonData);
  }

}
