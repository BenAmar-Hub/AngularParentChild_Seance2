export enum ProductsActionsTypes{
  GET_ALL_PRODUCTS="[Product] Get All Products",
  GET_SELECTED_PRODUCTS="[Product] Get Selected Products",
  GET_Available_PRODUCTS="[Product] Get Available Products",
  SEARCH_PRODUCTS="[Product] Search Products",
  NEW_PRODUCT="[Product] New Product",
  SELECT_PRODUCT="[Product] Select Product",
  EDIT_PRODUCT="[Product] Edit Product",
  DELETE_PRODUCT="[Product] Delete Product",
}
export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}
/*on definit des parametres pour un evenement*/
export interface ActionEvent{
  type:ProductsActionsTypes,
  payload?:any
}
/*creer une interface generic*/
export interface AppDataState<T>{
dataState?:DataStateEnum,
data?:T,
errorMessage?:string
}
