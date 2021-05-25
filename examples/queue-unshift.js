const { Cluster } = require('../dist');

(async () => {
    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_CONTEXT,
        maxConcurrency: 2,
    });

    const handleQueue = async (url, child = false) => {
        cluster.queue(async ({ page }) => {
            await page.goto(url);
            const pageTitle = await page.evaluate(() => document.title);
            console.log(`Page title is ${pageTitle}`);

            if (!child) {
                await handleQueue('https://stackoverflow.com', true);
            }
        }, child)
    }

    await handleQueue('https://google.com');
    await handleQueue('https://reddit.com');
    await handleQueue('https://wikipedia.com');
    await handleQueue('https://github.com');

    await cluster.idle();
    await cluster.close();
})();
