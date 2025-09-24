import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

export const BrewGuide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: "guides/*.md",
  contentType: "markdown",
  fields: {
    // CORE
    title: {type: "string", required: true},
    category: {type: "string", required: true}, // e.g., "stovetop" | "pour-over"
    difficulty: {type: "string", required: true}, // "beginner" | "intermediate" | "advanced"
    updated: {type: "date", required: true},
    minutes: {type: "number", required: true},

    // RECOMMENDED
    cover_image: {type: "string"},
    tags: {type: "list", of: {type: "string"}},
    time: {
      type: "nested",
      of: _TIME,
    },
    yield: {
      type: "nested",
      of: _YIELD,
    },
    ratio: {type: "string"}, // e.g., "1:16"
    roast: {type: "string"}, // e.g., "light" | "medium" | "dark"
    grind: {type: "string"},
    dose_grams: {type: "number"},
    water: {
      type: "nested",
      of: _WATER,
    },
    equipment: {type: "list", of: {type: "string"}},

    // ADVANCED
    video: {
      type: "nested",
      of: _VIDEO,
    },
    gallery: {type: "list", of: {type: "string"}},
    warnings: {type: "list", of: {type: "string"}},
    notes: {type: "list", of: {type: "string"}},
    troubleshooting: {
      type: "list",
      of: TROUBLESHOOTING,
    },
    variations: {type: "list", of: {type: "string"}},

    // STRUCTURED STEPS (for your checklist UI)
    steps: {
      type: "list",
      of: STEPS,
    },

    // META
    author: {type: "string"},
    locales: {type: "list", of: {type: "string"}},
    sources: {type: "list", of: {type: "string"}},
  },
  computedFields: {
    slug: {
      type: "string",
      // URL path used in <Link href={guide.slug}>
      resolve: (doc) => `/guides/${doc._raw.flattenedPath.split("/").pop()}`,
    },
    slugAsParams: {
      type: "string",
      // just "my-first-guide"
      resolve: (doc) => doc._raw.flattenedPath.split("/").pop()!,
    },
  },
}));

const _TIME = defineNestedType(() => ({
  name: "Time",
  fields: {
    prep: {type: "string"},
    brew: {type: "string"},
  },
}));

const _YIELD = defineNestedType(() => ({
  name: "Yield",
  fields: {
    cups: {type: "number"},
    ml: {type: "number"},
  },
}));

const _WATER = defineNestedType(() => ({
  name: "Water",
  fields: {
    temp_c: {type: "string"}, // allow ranges like "90-94"
    type: {type: "string"},
  },
}));

const _VIDEO = defineNestedType(() => ({
  name: "Video",
  fields: {
    provider: {type: "string"}, // "mux" | "youtube" | "vimeo"
    playback_id: {type: "string"},
    start: {type: "number"},
  },
}));

const TROUBLESHOOTING = defineNestedType(() => ({
  name: "Troubleshooting",
  fields: {
    problem: {type: "string", required: true},
    cause: {type: "string"},
    fix: {type: "string"},
  },
}));

const STEPS = defineNestedType(() => ({
  name: "Steps",
  fields: {
    title: {type: "string", required: true},
    details: {type: "string", required: true},
    timer_sec: {type: "number"},
  },
}));

export default makeSource({
  contentDirPath: "mdx",
  documentTypes: [BrewGuide],
});
