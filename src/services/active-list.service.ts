import type { TemplateModels } from "../models/template.models";
import { Rest } from "../util/rest";

export namespace ActiveListService {
  export const listActiveLists = async (): Promise<
    TemplateModels.ActiveList[]
  > => {
    return Rest.get<TemplateModels.ActiveList[]>(`/lists/`);
  };

  export const getActiveListDetail = async (
    id: number
  ): Promise<TemplateModels.ActiveList> => {
    return await Rest.get<TemplateModels.ActiveList>(`/lists/${id}`);
  };

  export const createFromTemplate = async (
    templateId: number
  ): Promise<{ id: number }> => {
    return await Rest.post<{ id: number }>(
      `/lists/create_from_template/${templateId}/`,
      {}
    );
  };

  export const checkItem = async (
    listId: number,
    itemId: number,
    checked: boolean
  ): Promise<{ id: number }> => {
    return await Rest.patch<TemplateModels.ActiveList>(
      `lists/${listId}/list_items/${itemId}/`,
      {
        checked,
      }
    );
  };

  export const finalizeActiveList = async (
    id: number
  ): Promise<{ id: number }> => {
    return await Rest.patch<TemplateModels.ActiveList>(`/lists/${id}/`, {
      is_active: false,
    });
  };
}
