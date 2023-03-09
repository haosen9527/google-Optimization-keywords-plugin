chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: 'search',
        title: '我的搜索',
        type: 'normal',
        contexts: ['selection'],
    });
    chrome.contextMenus.create({
        id: 'fz',
        title: '使用番组计划搜索',
        type: 'normal',
        contexts: ['selection'],
        parentId:'search',
    });
    chrome.contextMenus.create({
        id: 'bilibili',
        title: '使用bilibili搜索',
        type: 'normal',
        contexts: ['selection'],
        parentId:'search',
    });
    chrome.contextMenus.create({
        id: 'google',
        title: '使用谷歌搜索',
        type: 'normal',
        contexts: ['selection'],
        parentId:'search',
    });
    chrome.contextMenus.onClicked.addListener(function(info, tab) {
        if (info.menuItemId === "fz") { // here's where you'll need the ID
            // do something
            console.log('info',info)
            console.log('tab',tab)
            chrome.tabs.create({url: `https://bangumi.tv/subject_search/${info.selectionText}?cat=all`});
        }
        else if (info.menuItemId === "bilibili") { // here's where you'll need the ID
            // do something
            console.log('info',info)
            console.log('tab',tab)
            chrome.tabs.create({url: `https://search.bilibili.com/all?keyword=${info.selectionText}&from_source=webtop_search`});
        }
        else if (info.menuItemId === "google") { // here's where you'll need the ID
            // do something
            console.log('info',info)
            console.log('tab',tab)
            chrome.tabs.create({url: `https://www.google.com/search?q=${info.selectionText}`});
        }
    });
});

//openai 
const apiUrl = 'https://api.example.com/data';
const apiKey = 'your-api-key';

// 发送 HTTP GET 请求
fetch(`${apiUrl}?key=${apiKey}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // 在这里处理 API 返回的数据
  })
  .catch(error => {
    console.error('There was a problem with the API:', error);
  });


