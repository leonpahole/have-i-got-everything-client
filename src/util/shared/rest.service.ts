import axios from "axios";
import { AppConfig } from "../../appConfig";
import { AuthService } from "../auth/auth.service";

axios.defaults.baseURL = AppConfig.apiUrl;

export namespace RestService {
  export const get = async <T>(path: string): Promise<T> => {
    const { data } = await axios.get<T>(path, { headers: await getHeaders() });
    return data;
  };

  export const post = async <T>(path: string, body: any): Promise<T> => {
    const { data } = await axios.post<T>(path, body, {
      headers: await getHeaders(),
    });
    return data;
  };

  export const put = async <T>(path: string, body: any): Promise<T> => {
    const { data } = await axios.put<T>(path, body, {
      headers: await getHeaders(),
    });
    return data;
  };

  export const patch = async <T>(path: string, body: any): Promise<T> => {
    const { data } = await axios.patch<T>(path, body, {
      headers: await getHeaders(),
    });
    return data;
  };

  export const del = async <T>(path: string): Promise<T> => {
    const { data } = await axios.delete<T>(path, {
      headers: await getHeaders(),
    });
    return data;
  };

  const getHeaders = async () => {
    const token = await AuthService.getToken();
    let headers = {};
    if (token) {
      headers = { ...headers, Authorization: `Bearer ${token}` };
    }

    return headers;
  };
}
