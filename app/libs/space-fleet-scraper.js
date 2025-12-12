import { ApifyClient } from 'apify-client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env.local
dotenv.config({ path: path.join(__dirname, '../../.env.local') });

// Initialize the ApifyClient with API token from environment
const client = new ApifyClient({
    token: process.env.APIFY_API_TOKEN,
});

if (!process.env.APIFY_API_TOKEN) {
    console.error('Error: APIFY_API_TOKEN not found in .env.local');
    process.exit(1);
}

(async () => {
    // Run the Actor task and wait for it to finish
    console.log('Starting Apify scraper...');
    const run = await client.task("dynC4NShWJn0ZjviT").call();

    // Fetch Actor task results from the run's dataset
    console.log('Fetching results from dataset...');
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    
    console.log(`Found ${items.length} items`);
    
    // Write results to JSON file
    const outputPath = path.join(__dirname, '../../top-100-space-fleet.json');
    fs.writeFileSync(outputPath, JSON.stringify(items, null, 2), 'utf-8');
    
    console.log(`✓ Successfully updated ${outputPath}`);
    console.log(`  Total books: ${items.length}`);
})().catch(error => {
    console.error('Error running scraper:', error);
    process.exit(1);
});