export namespace TemplateModels {
  export interface Template {
    id: number;
    name: string;
    items: { name: string }[];
  }

  export interface ActiveList {
    id: number;
    name: string;
    is_active: boolean;
    items: { id: number; name: string; checked: boolean }[];
  }
}
