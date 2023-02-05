import type { ListInputModels } from "../models/list-input.models";
import type { TemplateModels } from "../models/template.models";
import { Rest } from "../util/rest";

export namespace TemplateService {
  export const listTemplates = async (): Promise<TemplateModels.Template[]> => {
    return Rest.get<TemplateModels.Template[]>(`/templates/`);
  };

  export const getTemplateDetail = async (
    id: number
  ): Promise<TemplateModels.Template> => {
    return await Rest.get<TemplateModels.Template>(`/templates/${id}`);
  };

  export const createTemplate = async (
    name: string,
    items: ListInputModels.Item[]
  ): Promise<TemplateModels.Template> => {
    const template = await Rest.post<TemplateModels.Template>(`/templates/`, {
      name,
    });

    await Rest.post(`/templates/${template.id}/template_items/`, items);

    return template;
  };

  export const updateTemplate = async (
    id: number,
    name: string,
    items: ListInputModels.Item[]
  ): Promise<TemplateModels.Template> => {
    const template = await Rest.put<TemplateModels.Template>(
      `/templates/${id}/`,
      {
        name,
      }
    );

    await Rest.put(`/templates/${template.id}/template_items/replace/`, items);

    return template;
  };

  export const deleteTemplate = async (id: number): Promise<void> => {
    await Rest.del(`/templates/${id}/`);
  };
}
