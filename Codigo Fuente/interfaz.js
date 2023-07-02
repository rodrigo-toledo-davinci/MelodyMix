class MelodyMixApp {
  constructor() {
    this.userInterface = null;
  }

  createUserInterface() {
    this.userInterface = new UserInterface();
    this.userInterface.show();
  }

  class UserInterface {
  constructor() {
    this.title = "MelodyMix";
    this.buttons = [];
    this.labels = [];
  }
  
}
