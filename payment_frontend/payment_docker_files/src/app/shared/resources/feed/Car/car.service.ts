import {Injectable, Injector} from '@angular/core';

import {BaseResourceService} from '../../base-resource/base-resource.service';
import {CarModel} from './car.model';


@Injectable({
  providedIn: 'root'
})
export class CarService extends BaseResourceService<CarModel> {

  constructor(protected override injector: Injector) {
    super('feed/car', injector, CarModel.fromJson);
  }

}
