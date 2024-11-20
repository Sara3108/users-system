export interface ApiResponseInterface<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T;
}


export interface SearchCriteriaInterface {
  page: number;
  per_page: number;
}
