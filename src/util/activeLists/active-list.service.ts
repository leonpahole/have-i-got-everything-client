import { RestService } from "../shared/rest.service";
import type { ActiveListModels } from "./active-list.models";

export namespace ActiveListService {
  export const listActiveLists = async (): Promise<
    ActiveListModels.ActiveList[]
  > => RestService.get<ActiveListModels.ActiveList[]>(`/lists/`);

  export const getActiveListDetail = async (
    id: number
  ): Promise<ActiveListModels.ActiveList> => RestService.get<ActiveListModels.ActiveList>(`/lists/${id}`);

  export const createFromTemplate = async (
    templateId: number
  ): Promise<{ id: number }> => RestService.post<{ id: number }>(
      `/lists/create_from_template/${templateId}/`,
      {}
    );

  export const checkItem = async (
    listId: number,
    itemId: number,
    checked: boolean
  ): Promise<{ id: number }> => RestService.patch<ActiveListModels.ActiveList>(
      `lists/${listId}/list_items/${itemId}/`,
      {
        checked,
      }
    );

  export const finalizeActiveList = async (
    id: number
  ): Promise<{ id: number }> => RestService.patch<ActiveListModels.ActiveList>(
      `/lists/${id}/`,
      {
        is_active: false,
      }
    );
}
