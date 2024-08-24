/**
 * entidade anêmica
 * entidade: tem id unico e valores que alteram com o tempo,
 * essa classe é anêmica porque não tem regras de negocio, apenas carrega dados
 * normalmente usada para ORM
 */

class Customer {

  _id: string;
  _name: string;
  _address: string;

  constructor(id: string, name: string, address: string) {
    this._id = id;
    this._name = name;
    this._address = address;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get address(): string {
    return this._address;
  }

  set name(name: string) {
    this._name = name;
  }

  set address(address: string) {
    this._address = address;
  }
}