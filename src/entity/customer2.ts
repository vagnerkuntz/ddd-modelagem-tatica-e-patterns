/**
 * dominio rico expressa as regras
 * regras de negócio
 */
class Customer2 {

  _id: string;
  _name: string;
  _address: string;
  _active: boolean = true;

  constructor(id: string, name: string, address: string) {
    this._id = id;
    this._name = name;
    this._address = address;
  }

  // regra especifica de negócio
  changeName(name: string) {
    this._name = name;
  }

  activate() {
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }
}