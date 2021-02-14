
function getRandomNo(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
const Seattle = {
  location: 'Seattle',
  min: 23,
  max: 65,
  avgCookie: 6.3,
  cookiePurArray: [],
  sum: 0,
  timeArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
  getCookiePerCust: function () {
    for (let i = 0; i < (this.timeArr.length - 1); i++) {
      this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
      this.sum += this.cookiePurArray[i];
    }
    this.cookiePurArray[14] = this.sum;
  },
  render: function () {
    const division = document.getElementById('cookieStand');
    console.log(division);
    const articleEl = document.createElement('article');
    division.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.location;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.timeArr.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.timeArr[i]}:${this.cookiePurArray[i]}`;
    }
  }
};
Seattle.getCookiePerCust();
Seattle.render();

const Tokyo = {
  location: 'Tokyo',
  min: 3,
  max: 24,
  avgCookie: 1.2,
  cookiePurArray: [],
  sum: 0,
  timeArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
  getCookiePerCust: function () {
    for (let i = 0; i < (this.timeArr.length - 1); i++) {
      this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
      this.sum += this.cookiePurArray[i];
    }
    this.cookiePurArray[14] = this.sum;
  },
  render: function () {
    const division = document.getElementById('cookieStand');
    console.log(division);
    const articleEl = document.createElement('article');
    division.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.location;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.timeArr.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.timeArr[i]}:${this.cookiePurArray[i]}`;
    }
  }
};
Tokyo.getCookiePerCust();
Tokyo.render();

const Dubai = {
  location: 'Dubai',
  min: 11,
  max: 38,
  avgCookie: 3.7,
  cookiePurArray: [],
  sum: 0,
  timeArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
  getCookiePerCust: function () {
    for (let i = 0; i < (this.timeArr.length - 1); i++) {
      this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
      this.sum += this.cookiePurArray[i];
    }
    this.cookiePurArray[14] = this.sum;
  },
  render: function () {
    const division = document.getElementById('cookieStand');
    console.log(division);
    const articleEl = document.createElement('article');
    division.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.location;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.timeArr.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.timeArr[i]}:${this.cookiePurArray[i]}`;
    }
  }
};
Dubai.getCookiePerCust();
Dubai.render();

const Paris = {
  location: 'Paris',
  min: 20,
  max: 38,
  avgCookie: 2.3,
  cookiePurArray: [],
  sum: 0,
  timeArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
  getCookiePerCust: function () {
    for (let i = 0; i < (this.timeArr.length - 1); i++) {
      this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
      this.sum += this.cookiePurArray[i];
    }
    this.cookiePurArray[14] = this.sum;
  },
  render: function () {
    const division = document.getElementById('cookieStand');
    console.log(division);
    const articleEl = document.createElement('article');
    division.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.location;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.timeArr.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.timeArr[i]}:${this.cookiePurArray[i]}`;
    }
  }
};
Paris.getCookiePerCust();
Paris.render();

const Lima = {
  location: 'Lima',
  min: 2,
  max: 16,
  avgCookie: 4.6,
  cookiePurArray: [],
  sum: 0,
  timeArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
  getCookiePerCust: function () {
    for (let i = 0; i < (this.timeArr.length - 1); i++) {
      this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
      this.sum += this.cookiePurArray[i];
    }
    this.cookiePurArray[14] = this.sum;
  },
  render: function () {
    const division = document.getElementById('cookieStand');
    console.log(division);
    const articleEl = document.createElement('article');
    division.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.location;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.timeArr.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.timeArr[i]}:${this.cookiePurArray[i]}`;
    }
  }
};
Lima.getCookiePerCust();
Lima.render();
