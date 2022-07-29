interface IService<T> {
  create(obj:T):Promise<T>,
  // readOne(_id:string):Promise<T>,
  // update(_id: string, body: T): Promise<T | null>,
}

export default IService;