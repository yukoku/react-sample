export default class Board {
  constructor(id, name){
    this.id = id;
    this.name = name;
    this.route = `/trello-clone-board/${id}`;
  }
}
