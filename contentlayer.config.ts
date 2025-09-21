import {defineDocumentType, makeSource} from "contentlayer/source-files";

export const Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: `*.md`,
  contentType: "markdown",
  fields: {
    title: {type: "string", required: true},
    difficulty: {type: "string", required: true},
    minutes: {type: "number", required: true},
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (guide) => `mdx/guides/${guide._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (guide) => guide._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: "mdx/guides",
  documentTypes: [Guide],
});
