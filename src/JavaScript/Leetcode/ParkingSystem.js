class ParkingSystem {  

  constructor(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
    this.usedBig = 0;
    this.usedMedium = 0;
    this.usedSmall = 0;        
  }

  addCar(carType) {
    if (carType == 1) {
      // big
      if (this.big - this.usedBig > 0) {
        this.usedBig++;
        return true
      }
    } else if (carType == 2) {
      if (this.medium - this.usedMedium > 0) {
        this.usedMedium++;
        return true
      }
    } else if (carType == 3) {
      if (this.small - this.usedSmall > 0) {
        this.usedSmall++;
        return true
      }
    }

    return false;
  }

}