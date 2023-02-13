import {Component, OnInit} from '@angular/core';
import {CarModel} from '../../shared/resources/feed/Car/car.model';
import {DebtsModel} from '../../shared/resources/feed/debts/debts.model';
import {InstallmentModel} from '../../shared/resources/shared/installment/installment.model';


@Component({
  templateUrl: 'feed.component.html',
  styleUrls: ['feed.component.scss']
})
export class FeedComponent implements OnInit {

  total: number = 0;
  debts: DebtsModel[] = [];
  installments: InstallmentModel[] = [];
  installmentSelected: InstallmentModel = new InstallmentModel();

  car = new CarModel();
  checkout: boolean;

  constructor() {
    this.checkout = false
  }


  ngOnInit(): void {

  }

  search() {
    this.car.id = 'XXXX'
    this.car.placa = 'AAA-1010'

    this.car.debts = [];
    this.car.debts.push(new DebtsModel("x1", "IPVA 2023 Cota Única", " 763.48"));
    this.car.debts.push(new DebtsModel("x2", "IPVA (1a. Cota) 2023", " 254.49"));
    this.car.debts.push(new DebtsModel("x3", "Licenciamento 2023", "142.69"));

  }

  select(event: any, debt: DebtsModel) {
    if (event.currentTarget.checked) {
      this.debts.push(debt);
    } else {
      let index = this.debts.findIndex(el => el.id == debt.id)
      this.debts.splice(index, 1);
    }
    this.calcTotal();
  }

  calcTotal(): void {
    if (this.debts.length == 0) {
      this.total = 0;
      return
    }
    this.total = this.debts.map((debt) => {
      return Number(debt.value);
    }).reduce((a, b) => a + b)

    this.calcInstallments()
  }

  calcInstallments(): void {
    this.installments = [];

    if (this.total == 0) {
      return;
    }

    let total: number = Number(this.total)

    this.installments.push(new InstallmentModel("PIX","PIX", (total).toFixed(2), total.toFixed(2)))
    this.installments.push(new InstallmentModel("debito", "Débito", (total * 1.02).toFixed(2), total.toFixed(2)))


    let i: number = 1;
    while (i <= 12) {
      let key = i + " X"
      this.installments.push(new InstallmentModel(key, key, (total / i).toFixed(2), total.toFixed(2)))
      i++;
    }
  }

  selectDebt(debt: DebtsModel) {
    if (this.isDebtSelected(debt)) {
      let index = this.debts.findIndex(el => el.id == debt.id)
      this.debts.splice(index, 1);
    } else {
      this.debts.push(debt);
    }

    this.calcTotal();
  }

  isDebtSelected(debt: DebtsModel): boolean {
    console.log(debt.name, this.debts.findIndex(el => el.id == debt.id));

    return this.debts.findIndex(el => el.id == debt.id) != -1;
  }

  selectInstallment(installment: InstallmentModel): void {
    this.installmentSelected = installment;
  }

}
