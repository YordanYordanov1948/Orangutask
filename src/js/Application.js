import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    console.log(emojis);

    const array = [this.emojis[1], this.banana];
    const map1 = array.map((banana) => this.emojis[1] + banana);
    const p = (document.createElement("p").textContent = [map1]);
    console.log(p);
  }

  addBananas() {
    const array = [this.emojis[1], this.banana];
    const map1 = array.map((banana) => this.emojis[1] + banana);
    console.log(map1);
  }
}
