/**
 * consistência constante em primeiro lugar
 * 
 */
class Customer3 {

  _id: string;
  _name: string = "";
  _address: string = "";
  _active: boolean = true;

  constructor(id: string) {
    this._id = id;
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

// isso é errado em modelagem de dominio rico
// porque name e address, vai estar em branco
let customer = new Customer3("123");
