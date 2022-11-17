export type fetchClothesParams = {
  search: string;
  category: string; 
  sortBy: string; 
  order: string; 
  pageCount: string;
}

export type clothesItems = {
  value: string;
  id: string;
  imageUrl: string;
  title: string;
  price: number;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface clothesSliceState {
  items: clothesItems[];
  status: Status;
}