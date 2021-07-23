class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = '';
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(status) {
    this._isCheckedOut = status;
  }

  getAverageRating() {
    return this._rating.reduce((currentSum, rating) => currentSum + rating, 0) / this._rating.legngth;
  }
  toggleCheckOutStatus() {
    if(this._isCheckedOut == "true") {
      this._isCheckedOut = false;
    }else {
      this._isCheckedOut = true;
    }
  }
  addRating(value) {
    this._rating.push(value);
  }
}

class Book extends Media {
  constructor(author, pages, title) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(artist, songs, title) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}

let historyOfEverything = new Book('Bill Bryson', 544, 'A Short History of Nearly');

historyOfEverything.toggleCheckOutStatus()

console.log(historyOfEverything.isCheckedOut)
console.log(Media.isCheckedOut);


console.log(historyOfEverything);