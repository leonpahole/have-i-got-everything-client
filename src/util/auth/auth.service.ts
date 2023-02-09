import {
  Auth0Client,
  createAuth0Client,
  User,
  type LogoutOptions,
  type PopupLoginOptions
} from '@auth0/auth0-spa-js';
import AppConfig from '../../appConfig';
import { loggedInUser } from '../../store';

const { domain } = AppConfig.auth;
const { clientId } = AppConfig.auth;
const { audience } = AppConfig.auth;

let auth0ClientPromise: Promise<Auth0Client> | null = null;

async function createClient() {
  if (auth0ClientPromise == null) {
    auth0ClientPromise = createAuth0Client({
      domain,
      clientId,
      authorizationParams: {
        audience
      }
    });
  }

  return auth0ClientPromise;
}

export namespace AuthService {
  export async function getToken(): Promise<string | null> {
    try {
      const client = await createClient();
      return await client.getTokenSilently();
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  export async function getUser(): Promise<User | null> {
    try {
      const client = await createClient();
      return (await client.getUser()) ?? null;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  export async function login(
    options: PopupLoginOptions = {}
  ): Promise<boolean> {
    try {
      const client = await createClient();
      await client.loginWithPopup({
        ...options,
        authorizationParams: {
          audience: AppConfig.auth.audience,
          scope: 'openid name email nickname',
          redirect_uri: window.location.origin,
          ...options.authorizationParams
        }
      });
      loggedInUser.set(await client.getUser());
      return true;
    } catch (e) {
      // eslint-disable-next-line
      console.error(e);
      return false;
    }
  }

  export async function logout(options?: LogoutOptions) {
    try {
      const client = await createClient();
      await client.logout(options);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }
}
