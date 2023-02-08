export namespace SharedModels {
  export interface ListInputItem {
    name: string;
  }

  export const isListInputItemValid = (item: ListInputItem): boolean =>
    item.name.trim().length > 0;
}
