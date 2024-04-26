import { ClientConfig } from 'next-sanity'

export interface ProjectConfig {
  projectId: string
  dataset: string
  token?: string
  /** Must be provided when token is used in browser, as native EventSource does not support auth-headers. */
  // EventSource?: GroqStoreEventSource;
}

export const projectConfig: ProjectConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
}

export const config: ClientConfig = {
  ...projectConfig,
  apiVersion: '2022-03-07',
  ignoreBrowserTokenWarning: true,
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
  useCdn: true,
}
