chrome.storage.local.get({'notificationSetting': 'none'},
  function (data) {
    setNotificationSetting(data['notificationSetting']);
  }
);

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.storage.local.get({'notificationSetting': 'none'},
    function (data) {
      if (data['notificationSetting'] != 'block') {
        setNotificationSetting('block');
      } else {
        setNotificationSetting('none');
      }
    }
  );
});


function setNotificationSetting(setting) {
  chrome.storage.local.set({'notificationSetting': setting});

  if (setting == 'block') {
    chrome.contentSettings['notifications'].set({
      'primaryPattern': '<all_urls>',
      'setting': setting
    });

    chrome.browserAction.setIcon({
      'path': {
        '19': 'icon-off-19.png',
        '38': 'icon-off-38.png'
      }
    });
    chrome.browserAction.setTitle({
      'title': 'Unmute notifications'
    });
  } else {  // none
    chrome.contentSettings['notifications'].clear({});

    chrome.browserAction.setIcon({
      'path': {
        '19': 'icon-on-19.png',
        '38': 'icon-on-38.png'
      }
    });
    chrome.browserAction.setTitle({
      'title': 'Mute notifications'
    });
  }
}
