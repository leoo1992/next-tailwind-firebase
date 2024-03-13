import Cliente_Firebase_Repository from "@/repository/Cliente_Firebase_Repository";
import Cliente from "@/types/Cliente";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  });
}

export default class ClienteColection implements Cliente_Firebase_Repository {
  #db: firebase.firestore.Firestore;
  #converter: firebase.firestore.FirestoreDataConverter<Cliente>;

  constructor() {
    this.#db = firebase.firestore();
    this.#converter = {
      toFirestore(cliente: Cliente) {
        return {
          nome: cliente.nome,
          idade: cliente.idade,
        };
      },
      fromFirestore(
        snapshot: firebase.firestore.QueryDocumentSnapshot,
        options: firebase.firestore.SnapshotOptions
      ) {
        const dados = snapshot.data(options);
        return new Cliente(snapshot?.id, dados?.nome, dados?.idade);
      },
    };
  }

  async save(cliente: Cliente): Promise<Cliente> {
    if (cliente?.id) {
      await this.#collection()
        .doc(cliente.id)
        .set(cliente)
        .then(() => cliente);
      return cliente;
    } else {
      const docRef = await this.#collection().add(cliente);
      const doc = await docRef.get();
      return doc.data() as Cliente;
    }
  }

  async delete(cliente: Cliente): Promise<void> {
    return this.#collection().doc(cliente.id).delete();
  }

  async list(): Promise<Cliente[]> {
    const query = await this.#collection().get();
    return query.docs.map((doc) => doc.data()) as Cliente[] ?? [];
  }

  #collection() {
    return this.#db.collection("clientes").withConverter(this.#converter);
  }
}