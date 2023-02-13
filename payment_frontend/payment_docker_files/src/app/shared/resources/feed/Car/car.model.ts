import {BaseResourceModel} from '../../base-resource/base-resource.model';
import {DebtsModel} from '../debts/debts.model';

export class CarModel extends BaseResourceModel {
  constructor(
    public placa?: string,
    public debts?: DebtsModel[],
  ) {
    super();
    this.debts = [];
  }

  static fromJson(jsonData: any): CarModel {
    return Object.assign(new CarModel(), jsonData);
  }

}
