const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');
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
    const homeDataPath = path.join(rootDir, 'data', 'homes.json');
    fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (err) => {
      if(err){
        console.log('Error writing to file', err);
      }
    });
  }
  static fetchAll() {
    const homeDataPath = path.join(rootDir, 'data', 'homes.json');
    try {
      const data = fs.readFileSync(homeDataPath, 'utf-8');
      console.log("file data", data);
      return JSON.parse(data);
    } catch (err) {
      // If file doesn't exist or is empty, return empty array
      return [];
    }
  }

  
}