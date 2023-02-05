export namespace ActiveListModels {
  export interface ActiveList {
    id: number;
    name: string;
    is_active: boolean;
    items: { id: number; name: string; checked: boolean }[];
  }
}
