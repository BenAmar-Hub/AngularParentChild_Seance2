export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}
/*creer une interface generic*/
export interface AppDataState<T>{
dataState?:DataStateEnum,
data?:T,
errorMessage?:string
}
