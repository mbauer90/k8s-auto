import {BaseResourceModel} from '../../base-resource/base-resource.model';

export class InstallmentModel extends BaseResourceModel {
  constructor(
    public override id?: string,
    public name?: string,
    public value?: string,
    public total?: string,
    public selected?: boolean,
  ) {
    super();
  }

  static fromJson(jsonData: any): InstallmentModel {
    return Object.assign(new InstallmentModel(), jsonData);
  }

}
