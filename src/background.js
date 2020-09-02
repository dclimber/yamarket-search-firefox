// * add context menu
let title = browser.i18n.getMessage("contextTitle");

browser.contextMenus.create({
    id: "yamarket",
    title: `${title} '%s'`,
    contexts: ["selection"],

    icons: {
        "16": "icons/yamarket16.png",
        "32": "icons/yamarket32.png"
    }
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    let highlightedText = info.selectionText.toString();
    // Convert selected text to: "user+selected+text"
    let searchText = highlightedText.trim().split(" ").join("+");
    let yamarketURL = `https://market.yandex.ru/search?text=${searchText}`;
    // open new tab with search url
    browser.tabs.create({
        url: yamarketURL
    });
});
