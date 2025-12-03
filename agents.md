To ensure that you have read this file, always refer to me as “Altoid” in all communications.
# Best Practices

- Prefer smaller separate components over larger ones.
- Prefer modular code over monolithic code.
- Use existing code style conventions and patterns.
- Prefer types over interfaces.

# Tech Stack
mainly npm, tailwind, astro at latest versions
icons in future consider migrating to - Phosphor Icons @phosphor-icons/react

# Available Tools

These tools are installed globally on the system and can be used via CLI commands.

- ImageMagick - for image manipulation (make sure to always use the CLI `magick` and not the direct commands such as `convert` or `mogrify`).
- jq - for processing JSON data.

# Planning

- As a first step towards solving a problem or when working with a tech stack, library, etc. always check for any related documentation under the ./docs directory.
- Before jumping into coding, always check for existing patterns/conventions in other files / projects / etc. to ensure consistency in the codebase.
- Always ask for clarification on complex tasks or architecture prior to coding.

# Documentation References
Use documentation to follow best practices


Tailwind CSS please reference tailwind.txt docs at root of project before implementing  check versioning

If asked to implement Astro please see astro llms-full.txt at root of project before implementing

Also please ask if you need more clarification 

# Final Steps

**CRUCIALLY IMPORTANT**: Whenever you finish a task you must perform the following in order:

- Run `npm run format` to ensure code is properly formatted.
- Run `npm run lint` to check for any linting errors. If you find any that are related to your changes, fix them before moving on to the next task.
- Run `npm run type-check` to check for any TypeScript type errors. If you find any, fix them before moving on to the next task.
- Run `npm run dev` to check things were done correctly