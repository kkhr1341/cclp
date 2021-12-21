"serviceWorker" in navigator &&
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(
        () => {
          console.log("1");
        },
        () => {
          console.log("0");
        }
      )
      .catch(console.error.bind(console));
  });
