/////////////////////  First Step

function injectScript() {
  chrome.tabs.create({url : 'https://code.tutsplus.com/categories/ruby/courses?page=2'}, function(tab) {
    chrome.tabs.executeScript(tab.id, {file: 'popup/insert.js'});
  });
};



////////////////  Second Step

chrome.tabs.onCreated.addListener(function(tab) {
   chrome.tabs.executeScript(tab.id, {file: 'popup/download.js' });
});
