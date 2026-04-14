const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

module.exports = class Home {
  constructor(houseName, location, price, rating, photoUrl) {
    this.houseName = houseName;
    this.location = location;
    this.price = price;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    const homes = Home.fetchAll();
    homes.push(this);

    fs.writeFile(homeDataPath, JSON.stringify(homes, null, 2), (err) => {
      if (err) {
        console.log("Error writing to file", err);
      }
    });
  }

  static fetchAll() {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    try {
      const data = fs.readFileSync(homeDataPath, "utf-8");
      if (!data) {
        return [];
      }
      return JSON.parse(data);
    } catch (err) {
      return [];
    }
  }
};
