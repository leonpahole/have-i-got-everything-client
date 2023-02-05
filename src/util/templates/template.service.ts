import { RestService } from "../shared/rest.service";
import type { SharedModels } from "../shared/shared.models";
import type { TemplateModels } from "./template.models";

export namespace TemplateService {
  export const listTemplates = async (): Promise<TemplateModels.Template[]> => {
    return RestService.get<TemplateModels.Template[]>(`/templates/`);
  };

  export const getTemplateDetail = async (
    id: number
  ): Promise<TemplateModels.Template> => {
    return await RestService.get<TemplateModels.Template>(`/templates/${id}`);
  };

  export const createTemplate = async (
    name: string,
    items: SharedModels.ListInputItem[]
  ): Promise<TemplateModels.Template> => {
    const template = await RestService.post<TemplateModels.Template>(
      `/templates/`,
      {
        name,
      }
    );

    await RestService.post(`/templates/${template.id}/template_items/`, items);

    return template;
  };

  export const updateTemplate = async (
    id: number,
    name: string,
    items: SharedModels.ListInputItem[]
  ): Promise<TemplateModels.Template> => {
    const template = await RestService.put<TemplateModels.Template>(
      `/templates/${id}/`,
      {
        name,
      }
    );

    await RestService.put(
      `/templates/${template.id}/template_items/replace/`,
      items
    );

    return template;
  };

  export const deleteTemplate = async (id: number): Promise<void> => {
    await RestService.del(`/templates/${id}/`);
  };
}
