import Cliente from "@/types/Cliente";

export default interface Cliente_Firebase_Repository {
  save(cliente: Cliente): Promise<Cliente>;
  delete(cliente: Cliente): Promise<void>;
  list(): Promise<Cliente[]>;
}
