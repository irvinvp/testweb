self.addEventListener("push", (event) => {
  let t = event.data.text();
  console.log(t);
  const promiseChain = self.registration.showNotification(t);
  event.waitUntil(promiseChain);
});
