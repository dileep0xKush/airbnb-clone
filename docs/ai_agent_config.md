# AI Agent Configuration & Skills

This project was developed utilizing an advanced agentic AI coding workflow. Below is the configuration structure of the AI agent, its execution profile, and toolchain skills.

---

## 1. Agent Execution Profile

- **Model Configuration**: `Gemini 3.5 Flash` (optimized for codebase reasoning and strict type-safety enforcement).
- **Mode**: `Planning-driven Execution Mode` (requires generating formal implementation plans, checklists, and verification records before altering source directories).
- **Environment**: Linux / Node Monorepo workspace using `pnpm` workspaces.

---

## 2. Active Agentic Skills & Toolchain

The AI assistant utilizes the following tool scopes to maintain code quality:
1. **Source Mutation and Code Refactoring**:
   - `replace_file_content`: Targets exact blocks for drop-in replacements, preventing full-file overwrites and preserving git diff clean lines.
   - `multi_replace_file_content`: Batch edits non-contiguous lines, ensuring atomic updates across directories.
2. **Directory & File Inspection**:
   - `list_dir`: Navigates monorepo dependency scopes.
   - `view_file`: Analyzes existing templates to inherit standard layout hooks.
3. **Generative Modeling**:
   - `generate_image`: Utilized to generate the professional, system-architecture blueprint diagram (`docs/architecture/architecture_diagram.png`).
4. **Shell & Pipeline Verification**:
   - `run_command`: Directly executes build check sequences (`tsc --noEmit`, `next build`) inside sandboxed terminals to confirm output validity.

---

## 3. Workflow Prompts & Context Constraints

```json
{
  "agent_directives": {
    "preserve_documentation": true,
    "strict_typescript": true,
    "avoid_unused_locals": true,
    "desktop_first_optimization": true
  },
  "subagent_context": {
    "shared_workspace": "apps/web",
    "mock_database_target": "src/data/listing.ts",
    "overlay_target": "src/components/overlay"
  }
}
```
