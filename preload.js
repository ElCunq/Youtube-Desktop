setInterval(() => {
    const killList = [
      "chrome://newtab/",
      "chrome-extension://",
      "options.html",
      "welcome",
      "thankyou",
      "google.com/chrome"
    ];
    if (!window.location.href || killList.some(keyword => window.location.href.includes(keyword))) {
      window.close();
    }
  }, 1000);
  
  // Sağ tık menüsünü devre dışı bırak
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  }, false);
  
  // Yeni sekmeye açılmaya çalışılan linkleri aynı pencereye yönlendir
  document.addEventListener("click", function(e) {
    if (e.target && e.target.tagName === "A" && e.target.target === "_blank") {
      e.preventDefault();
      window.location.href = e.target.href;
    }
  }, true);
  