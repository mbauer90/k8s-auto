import {Injectable, Injector} from '@angular/core';

import {BaseResourceService} from '../../base-resource/base-resource.service';
import {InstallmentModel} from './installment.model';


@Injectable({
  providedIn: 'root'
})
export class DebtsService extends BaseResourceService<InstallmentModel> {

  constructor(protected override injector: Injector) {
    super('feed/installment', injector, InstallmentModel.fromJson);
  }

}
