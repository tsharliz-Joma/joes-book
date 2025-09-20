import {defineDocumentType, makeSource} from "contentlayer/source-files";

export const Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: `*.md`,
  fields: {
    title: {type: "string", required: true},
    difficulty: {type: "string", required: true},
    minutes: {type: "number", required: true},
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (guide) => `guides/${guide._raw.flattenedPath}`,
    },
  },
}));



export default makeSource({
  contentDirPath: "guides/",
  documentTypes: [Guide],
});
