import {Injectable, Injector} from '@angular/core';

import {BaseResourceService} from '../../base-resource/base-resource.service';
import {DebtsModel} from './debts.model';


@Injectable({
  providedIn: 'root'
})
export class DebtsService extends BaseResourceService<DebtsModel> {

  constructor(protected override injector: Injector) {
    super('feed/debt', injector, DebtsModel.fromJson);
  }

}
