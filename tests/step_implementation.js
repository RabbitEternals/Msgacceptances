/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    label,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate, button, $
} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});

afterSuite(async () => {
    await closeBrowser();
});

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};
step("Open localhost", async function () {
    await goto("http://192.168.1.100:8081");
});
step("Clear local", async function () {
    await evaluate(() => localStorage.clear());
});
step("Must display <message>", async function (message) {
    assert.ok(await text(message).exists(0, 0));
});
step("Add word <item> <placeholder>", async (item,placeholder) => {
    await write(item, into(textBox(placeholder)));
});
step("Must exist <type> <item>", async function (type,item) {
    assert.ok(await type(item).exists(0, 0));
});
step("Click <item>", async (item) => {
    await click(item);
});
step("Refresh page", async ()=> {
    throw 'Unimplemented Step';
});

