# MCP Integration for BloodyBoss Config Tool

## Overview

This document details how to integrate MCP (Model Context Protocol) servers into the BloodyBoss Configuration Tool for enhanced functionality.

## Available MCP Servers

### 1. Puppeteer Server
**Purpose**: Browser automation for screenshots and testing

**Use Cases**:
- Generate screenshots of UI for documentation
- Visual regression testing
- Create animated GIFs of workflows
- Export boss configurations as images

**Example Integration**:
```typescript
// Screenshot boss configuration
async function exportBossAsImage(bossId: string) {
  await mcp.puppeteer.navigate(`http://localhost:1420/bosses/${bossId}`);
  const screenshot = await mcp.puppeteer.screenshot({
    name: `boss-${bossId}-config`,
    selector: '.boss-editor-panel',
    width: 1200,
    height: 800
  });
  return screenshot;
}

// Visual testing
async function testUIComponent(component: string) {
  await mcp.puppeteer.navigate(`http://localhost:1420/test/${component}`);
  const screenshot = await mcp.puppeteer.screenshot({
    name: `test-${component}`,
    encoded: true
  });
  // Compare with baseline
}
```

### 2. PostgreSQL Server
**Purpose**: Optional database storage for configurations

**Use Cases**:
- Store configuration history
- Multi-user configuration management
- Analytics on boss configurations
- Backup and versioning

**Schema Example**:
```sql
-- Boss configurations table
CREATE TABLE boss_configs (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  config JSONB,
  created_by VARCHAR(255),
  created_at TIMESTAMP,
  version INTEGER
);

-- Configuration templates
CREATE TABLE templates (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  category VARCHAR(100),
  config JSONB,
  downloads INTEGER DEFAULT 0
);

-- User preferences
CREATE TABLE user_preferences (
  user_id VARCHAR(255) PRIMARY KEY,
  theme VARCHAR(50),
  last_opened_boss VARCHAR(255),
  ui_settings JSONB
);
```

### 3. Magic Server
**Purpose**: Utility functions for UI and development

#### getTinyImage
**Use**: Placeholder images for boss icons
```typescript
async function getBossPlaceholder() {
  const image = await mcp.magic.getTinyImage();
  // Use as placeholder while loading actual boss image
  return image;
}
```

#### longRunningOperation
**Use**: Simulate import/export operations with progress
```typescript
async function importLargeBossFile(file: File) {
  // Show progress dialog
  const operation = await mcp.magic.longRunningOperation({
    duration: 10,
    steps: 5
  });
  
  // Update UI with progress
  operation.on('progress', (step) => {
    updateProgressBar(step);
  });
}
```

#### sampleLLM
**Use**: Generate boss descriptions and mechanic explanations
```typescript
async function generateBossDescription(boss: BossModel) {
  const prompt = `Generate a lore-friendly description for a V Rising boss named ${boss.name} 
                  at level ${boss.level} with ${boss.mechanics.length} mechanics`;
  
  const description = await mcp.magic.sampleLLM({
    prompt,
    maxTokens: 200
  });
  
  return description;
}

// Auto-generate mechanic tooltips
async function generateMechanicHelp(mechanic: MechanicModel) {
  const prompt = `Explain how the ${mechanic.type} mechanic works in V Rising 
                  with these parameters: ${JSON.stringify(mechanic.parameters)}`;
  
  return await mcp.magic.sampleLLM({
    prompt,
    maxTokens: 150
  });
}
```

#### annotatedMessage
**Use**: Rich notifications and status messages
```typescript
async function showRichNotification(type: 'error' | 'success' | 'debug', message: string) {
  const annotated = await mcp.magic.annotatedMessage({
    messageType: type,
    includeImage: type === 'error' // Show image for errors
  });
  
  // Display in notification system
  toast.custom(annotated);
}
```

### 4. Sequential Thinking Server
**Purpose**: Complex multi-step operations

**Use Cases**:
- Boss validation workflows
- Configuration migration
- Complex import operations
- Mechanic compatibility checking

```typescript
async function validateBossConfiguration(boss: BossModel) {
  const validation = await mcp.sequential.sequentialthinking({
    thought: "Starting boss validation...",
    thoughtNumber: 1,
    totalThoughts: 5,
    nextThoughtNeeded: true
  });

  // Step 1: Validate basic properties
  validation.continue({
    thought: "Checking name, level, and GUID...",
    thoughtNumber: 2
  });

  // Step 2: Validate mechanics
  validation.continue({
    thought: "Validating mechanics compatibility...",
    thoughtNumber: 3
  });

  // Step 3: Check location conflicts
  validation.continue({
    thought: "Checking for location conflicts with other bosses...",
    thoughtNumber: 4
  });

  // Step 4: Validate rewards
  validation.continue({
    thought: "Ensuring reward items exist...",
    thoughtNumber: 5,
    nextThoughtNeeded: false
  });

  return validation.result;
}
```

## Implementation Strategy

### 1. MCP Service Layer
Create a service layer to abstract MCP calls:

```typescript
// src/services/mcp.ts
export class MCPService {
  async captureScreenshot(selector: string): Promise<string> {
    return await window.__TAURI__.invoke('mcp_screenshot', { selector });
  }

  async generateDescription(prompt: string): Promise<string> {
    return await window.__TAURI__.invoke('mcp_generate', { prompt });
  }

  async queryDatabase(sql: string): Promise<any[]> {
    return await window.__TAURI__.invoke('mcp_query', { sql });
  }
}
```

### 2. Tauri Command Bridge
Bridge MCP calls through Tauri:

```rust
// src-tauri/src/mcp_commands.rs
#[tauri::command]
async fn mcp_screenshot(selector: String) -> Result<String, String> {
    // Call MCP puppeteer server
    // Return base64 image
}

#[tauri::command]
async fn mcp_generate(prompt: String) -> Result<String, String> {
    // Call MCP magic server
    // Return generated text
}
```

### 3. UI Integration Points

#### Boss Editor
- Use `getTinyImage` for placeholder boss images
- Use `sampleLLM` for auto-descriptions
- Use `puppeteer` for export as image

#### Import/Export
- Use `longRunningOperation` for progress indication
- Use `annotatedMessage` for status updates
- Use `sequential` for complex validations

#### Configuration
- Use `postgres` for configuration history
- Use `sequential` for migration workflows

#### Testing
- Use `puppeteer` for visual regression tests
- Use `magic` for test data generation

## Best Practices

1. **Error Handling**: Always wrap MCP calls in try-catch
2. **Caching**: Cache generated content (descriptions, images)
3. **Fallbacks**: Provide fallbacks when MCP servers are unavailable
4. **Progress Indication**: Show progress for long operations
5. **Rate Limiting**: Implement rate limiting for API calls

## Security Considerations

1. **Input Sanitization**: Sanitize all inputs before MCP calls
2. **SQL Injection**: Use parameterized queries with postgres
3. **Access Control**: Limit MCP access to necessary operations
4. **Data Privacy**: Don't send sensitive data to LLM functions

## Performance Optimization

1. **Lazy Loading**: Load MCP connections only when needed
2. **Batching**: Batch multiple operations when possible
3. **Caching**: Cache frequently used data
4. **Async Operations**: Use async/await for all MCP calls
5. **Connection Pooling**: Reuse MCP connections

## Example Workflows

### 1. Boss Template Generation
```typescript
async function generateBossTemplate(level: number, type: string) {
  // 1. Generate base description
  const description = await mcp.magic.sampleLLM({
    prompt: `Create a ${type} boss for level ${level}`,
    maxTokens: 300
  });

  // 2. Generate placeholder image
  const image = await mcp.magic.getTinyImage();

  // 3. Create template
  const template = {
    name: `Generated ${type} Boss`,
    level,
    description,
    image,
    mechanics: generateDefaultMechanics(type, level)
  };

  // 4. Save to database
  await mcp.postgres.query(
    'INSERT INTO templates (name, config) VALUES ($1, $2)',
    [template.name, JSON.stringify(template)]
  );

  return template;
}
```

### 2. Configuration Export
```typescript
async function exportConfiguration(bosses: BossModel[]) {
  // 1. Show progress
  const progress = await mcp.magic.longRunningOperation({
    duration: bosses.length * 2,
    steps: bosses.length
  });

  // 2. Generate screenshots for each boss
  const screenshots = [];
  for (let i = 0; i < bosses.length; i++) {
    await navigateToBoss(bosses[i].id);
    const screenshot = await mcp.puppeteer.screenshot({
      name: `boss-${bosses[i].name}`,
      selector: '.boss-card'
    });
    screenshots.push(screenshot);
    progress.step(i + 1);
  }

  // 3. Create PDF with screenshots
  const pdf = await generatePDF(bosses, screenshots);
  
  return pdf;
}
```

This integration provides powerful capabilities while maintaining clean separation of concerns and good performance.