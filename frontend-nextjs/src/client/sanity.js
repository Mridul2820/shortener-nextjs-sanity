import { createClient } from "@sanity/client";

const SanityClient = createClient({
  projectId: "<project-id>",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-01-12",
});

export default SanityClient;
