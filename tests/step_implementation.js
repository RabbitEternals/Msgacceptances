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
    await goto("http://localhost:8081/");
});
step("Clear local", async function () {
    await evaluate(() => localStorage.clear());
});
//ECHO--FLASHCARD--LEDGER
step("Enter <word> to <field_id> textbox", async function (word,field_id) {
    await write(word,into(textBox({id:field_id})));
});
//ECHO--COUNTER--FLASHCARD--LEDGER
step("Click <button_id> button", async function (button_id) {
    await click(button({id:button_id}),{navigationTimeout:3000});
});
//ECHO--FLASHCARD
step("Verify <field_id> empty", async function (field_id) {
    assert.ok(await textBox({id:field_id}).value() == "");
});
//ECHO--COUNTER--FLASHCARD
step("Must display <word> at <field_id>", async function (word,field_id) {
    var content = await evaluate($("#"+field_id), (element) => element.innerText);
    assert.ok(content == word)
});
//FLASHCARD
step("Must display <word> at <field_class> class", async function (word,field_class) {
    var content = await evaluate($("."+field_class), (element) => element.textContent);
    var visible = await evaluate($("."+field_class), (element) => element.style.visibility);
    assert.ok(content == word && visible == "visible")
});
//FLASHCARD--LEDGER
step("Verify <field_id> exists", async function (field_id) {
    assert.ok(await $("#"+field_id).exists());
});
//FLASHCARD
step("Must not display <word> at <field_class> class", async function (word,field_class) {
    var content = await evaluate($("."+field_class), (element) => element.style.visibility);
    console.log(content)
    assert.ok(content == "hidden");
});
//LEDGER
step("Must none display <word> at <field_class> class", async function (word,field_class) {
    var content = await evaluate($("."+field_class), (element) => element.style.display);
    console.log(content)
    assert.ok(content == "none");
});
//FLASHCARD
step("Click <field_id> field", async function (field_id) {
    click($("#"+field_id));
});
//LEDGER
step("Verify <field_id> from <start> to <stop> exists", async function (field_id,start,stop) {
    for (let i = start; i < stop; i++) {
        assert.ok(await $("#"+field_id+i).exists());
    }
});
//LEDGER
step("Displays <type> <word> from <start> to <stop>", async function (type,word,start,stop) {
    let decreaseNum=stop;
    for (let i = start; i < stop; i++) {
        var content = await evaluate($("#"+type+i), (element) => element.innerText);
        assert.ok(content == word+decreaseNum);
        decreaseNum--;
    }
});
//LEDGER
step("Verify <button_id> button is not visible", async function (button_id) {
    let visible = await button({id:button_id}).isVisible(0,0);
    assert.ok(!visible);
});
/*
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
*/
