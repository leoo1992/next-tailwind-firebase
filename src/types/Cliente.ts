export default class Cliente {
    #id: string;
    #nome: string;
    #idade: string;

    constructor(id: string , nome: string, idade: string) {
        this.#id = id;
        this.#nome = nome;
        this.#idade = idade;
    }

    static vazio() {
        return new Cliente( '' , '', '');
    }

   get id () {
       return this.#id;
   } 

   get nome () {
       return this.#nome;
   }

   get idade () {
       return this.#idade;
   }

   toObject() {
    return {
        id: this.#id,
        nome: this.#nome,
        idade: this.#idade
    };
}

   
}