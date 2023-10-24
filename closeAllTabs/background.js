const closeAllTabs = ()=>{
    chrome.tabs.create({}, function (newTab) {
        let querying = chrome.tabs.query({}, function (tabs){
            for (let tab of tabs){
                if(tab.id !== newTab.id) chrome.tabs.remove(tab.id);
            }
        });
    });
}

chrome.action.onClicked.addListener(function (thisTab) {
    closeAllTabs();
});


chrome.commands.onCommand.addListener((command) => {
    cloasAllTabs();
});