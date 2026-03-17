const registeredHomes = [];

module.exports = class Home{
  constructor(houseName, location, price, rating, photoUrl){
    this.houseName = houseName;
    this.location = location;
    this.price = price;
    this.rating = rating;
    this.photoUrl = photoUrl;
    registeredHomes.push(this);
  }

  save(){
    registeredHomes.push(this);
  }
  static fetchAll(){
    return registeredHomes;
  }

  
}