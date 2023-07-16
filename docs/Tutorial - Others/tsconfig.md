---
sidebar_position: 6
---

# tsconfig

Typescript is recommended for every project for static typing. To run typescript, we need a tsconfig.json file must be included in the root level of the client folder.

## Configuration

```json
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true, // Allows importing "default" from modules, which don't have actually it. E.g., "import React", instead of "import * as React"
    "baseUrl": "./", // Base directory to resolve non-relative module names
    "jsx": "react", // Required for TS to work with JSX syntax
    "lib": ["dom", "esnext"], // Uses provided type definitions
    "noEmit": true, // Won't produce any files when running 'tsc' command
    "paths": {
      // Necessary for aliased imports. Two entries are required, so that TS can resolve root level and nested imports
      "utils": ["src/utils"],
      "utils/*": ["src/utils/*"]
    },
    "skipLibCheck": true, // Skips type checking of .d.ts libs, especially in node_modules, for performance
    "strict": true // Enables all strict type checking options
  },
  "include": ["src"] // Specifies an array of filenames or patterns to include in the program
}
```

## Related links

- [🌏typescript](https://www.typescriptlang.org/)
