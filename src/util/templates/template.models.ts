export namespace TemplateModels {
  export interface Template {
    id: number;
    name: string;
    description: string;
    items: { name: string }[];
  }
}
