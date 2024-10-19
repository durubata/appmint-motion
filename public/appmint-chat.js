(function(window) {
  var AppmintChat = window.AppmintChat || {};

  AppmintChat.init = function(config) {
    function initializeChat() {
      var containerId = config.containerId || 'appmint-chat-container';
      var container = document.getElementById(containerId);
      if (!container) {
        container = document.createElement('div');
        container.id = containerId;
        if (document.body) {
          document.body.appendChild(container);
        } else {
          console.error('Document body not found. Unable to append chat container.');
          return;
        }
      }

      // Load the main chunk
      var scripts = [
        'https://files.appmint.space/appmint-chat/static/js/main.js'
      ];

      function loadScript(index) {
        if (index >= scripts.length) {
          // All scripts loaded, initialize the app
          if (window.AppmintChatClient && typeof window.AppmintChatClient.init === 'function') {
            window.AppmintChatClient.init(container, config);
          } else {
            console.error('AppmintChatClient.init is not available');
          }
          return;
        }

        var script = document.createElement('script');
        script.src = scripts[index];
        script.onload = function() {
          loadScript(index + 1);
        };
        script.onerror = function() {
          console.error('Failed to load script:', scripts[index]);
        };
        document.body.appendChild(script);
      }

      loadScript(0);
    }

    // Ensure the DOM is fully loaded before initializing
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeChat);
    } else {
      initializeChat();
    }
  };

  window.AppmintChat = AppmintChat;
})(window);