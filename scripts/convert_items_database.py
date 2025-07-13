#!/usr/bin/env python3
import json
from datetime import datetime

def convert_items_database():
    # Paths
    source_path = '/home/trodi/.local/share/Steam/steamapps/common/VRising/BepInEx/config/BloodyDataCollector/EnglishItems.json'
    target_path = '/run/media/trodi/16902D94902D7AFF/MODS/BloodyBossConfig/src/data/itemsDatabase.ts'
    
    print(f"Converting items database...")
    print(f"Source: {source_path}")
    print(f"Target: {target_path}")
    
    try:
        # Read the JSON file
        with open(source_path, 'r', encoding='utf-8') as f:
            items = json.load(f)
        
        print(f"Found {len(items)} items")
        
        # Group items by itemType
        categories = {}
        item_types = set()
        all_tags = set()
        
        # Collect unique item types and tags
        for item in items:
            item_type = item.get('itemType', 'Other')
            item_types.add(item_type)
            
            # Parse tags from itemCategory
            if 'itemCategory' in item and item['itemCategory']:
                tags = [tag.strip() for tag in item['itemCategory'].split(',')]
                all_tags.update(tags)
            
            if item_type not in categories:
                categories[item_type] = []
            categories[item_type].append(item)
        
        # Sort items within each category by name
        for category in categories:
            categories[category].sort(key=lambda x: x['name'])
        
        # Generate TypeScript content
        ts_content = f"""// Auto-generated Items Database for BloodyBoss Configuration Tool
// Generated from EnglishItems.json
// Total items: {len(items)}
// Item types: {len(item_types)}
// Unique tags: {len(all_tags)}
// Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

export interface ItemInfo {{
  name: string;
  ItemID: number;
  Stack: number;
  Chance: number;
  Color: string;
  itemType: string;
  itemCategory: string;
  tags?: string[];
}}

export interface ItemCategory {{
  name: string;
  items: ItemInfo[];
}}

export const ITEM_CATEGORIES: ItemCategory[] = [
"""
        
        # Add categories based on itemType
        sorted_types = sorted(item_types)
        
        for i, item_type in enumerate(sorted_types):
            if item_type in categories and categories[item_type]:
                ts_content += f"""  {{
    name: "{item_type}",
    items: [
"""
                
                for j, item in enumerate(categories[item_type]):
                    # Clean the name - replace newlines and escape quotes
                    clean_name = item['name'].replace('\n', ' ').replace('\r', ' ').replace('"', '\\"').strip()
                    # Parse tags from itemCategory
                    tags = []
                    if 'itemCategory' in item and item['itemCategory']:
                        tags = [tag.strip() for tag in item['itemCategory'].split(',')]
                    
                    ts_content += f"""      {{
        name: "{clean_name}",
        ItemID: {item['ItemID']},
        Stack: {item['Stack']},
        Chance: {item['Chance']},
        Color: "{item['Color']}",
        itemType: "{item.get('itemType', 'Other')}",
        itemCategory: "{item.get('itemCategory', '')}",
        tags: {json.dumps(tags)}
      }}"""
                    if j < len(categories[item_type]) - 1:
                        ts_content += ","
                    ts_content += "\n"
                
                ts_content += "    ]\n  }"
                if i < len(sorted_types) - 1:
                    ts_content += ","
                ts_content += "\n"
        
        ts_content += """];

// Flat array of all items for quick searching
export const ALL_ITEMS: ItemInfo[] = ITEM_CATEGORIES.flatMap(category => category.items);

// Helper function to find item by ID
export function findItemById(itemId: number): ItemInfo | undefined {
  return ALL_ITEMS.find(item => item.ItemID === itemId);
}

// Helper function to search items by name
export function searchItemsByName(searchTerm: string): ItemInfo[] {
  const term = searchTerm.toLowerCase();
  return ALL_ITEMS.filter(item => item.name.toLowerCase().includes(term));
}

// Helper function to search items by tags
export function searchItemsByTags(tags: string[]): ItemInfo[] {
  const lowerTags = tags.map(tag => tag.toLowerCase());
  return ALL_ITEMS.filter(item => {
    if (!item.tags || item.tags.length === 0) return false;
    const itemTagsLower = item.tags.map(tag => tag.toLowerCase());
    return lowerTags.some(tag => itemTagsLower.includes(tag));
  });
}

// Get all unique tags
export function getAllTags(): string[] {
  const tagsSet = new Set<string>();
  ALL_ITEMS.forEach(item => {
    if (item.tags) {
      item.tags.forEach(tag => tagsSet.add(tag));
    }
  });
  return Array.from(tagsSet).sort();
}
"""
        
        # Write the TypeScript file
        with open(target_path, 'w', encoding='utf-8') as f:
            f.write(ts_content)
        
        print(f"Successfully generated TypeScript file!")
        print(f"Item types breakdown:")
        for item_type in sorted_types:
            if item_type in categories:
                print(f"  {item_type}: {len(categories[item_type])} items")
        print(f"Total unique tags: {len(all_tags)}")
        
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == '__main__':
    convert_items_database()