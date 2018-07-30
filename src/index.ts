import './style.css';

class Announcer {
  constructor(phrase: string) {
    // tslint:disable-next-line
    console.log(`🎉 ${phrase}!`);
  }
}

const announcer = new Announcer('Hello');
