
export class HugeService {

  dt : string;
  constructor() {
    this.dt = this.latstDt();
   }

  latstDt() {
    return `${new Date().toString()}`
  }
}
