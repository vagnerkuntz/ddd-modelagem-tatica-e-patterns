// entidade focada em negócio 
// vs
// entidade focada em persistencia (outra entidade "model")

/**
 * Complexidade de negocio
 * Domain
 * entity
 * - customer.ts (regras de negocio)
 * 
 * Complexidade acidental
 * infra - Mundo externo
 * - Entity / Model
 * -- customer.ts (get, set)
 */

class Customer5 {

  _id: string;
  _name: string = "";
  _address: string = "";
  _active: boolean = true;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  validate() {
    if (this._name.length === 0) {
      throw new Error('name is required');
    }
    if (this._id.length === 0) {
      throw new Error('id is required');
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  activate() {
    if (this._address.length === 0) {
      throw new Error('address is mandatory to activate a customer');
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }
}
