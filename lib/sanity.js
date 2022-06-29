import {
  createClient,
  createPortableTextComponent,
  createImageUrlBuilder,
  createPreviewSubscriptionHook
} from "next-sanity";

import { config } from "./config";

if (!config.projectId) {
  throw Error(
    "The Project ID is not set. Check your environment variables."
  );
}
export const urlFor = source =>
  createImageUrlBuilder(config).image(source);

export const imageBuilder = source =>
  createImageUrlBuilder(config).image(source);

export const usePreviewSubscription =
  createPreviewSubscriptionHook(config);

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
    },
    marks: {
      center: props => (
        <div className="text-center">{props.children}</div>
      ),
      highlight: props => (
        <span className="font-bold text-brand-primary">
          {props.children}
        </span>
      ),
      link: props => (
        <a href={props.mark.href} target="_blank" rel="noopener">
          {props.children}
        </a>
      )
    }
  }
});

export const client = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false
});

export const getClient = usePreview =>
  usePreview ? previewClient : client;
export default client;
