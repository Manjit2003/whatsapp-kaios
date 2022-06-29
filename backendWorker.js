function startUp() {
  try {
    console.log("BackendWorker::startUp started"),
      self.importScripts("./backend.js"),
      console.log("BackendWorker::startUp finished");
  } catch (e) {
    console.error(e);
  }
}
self.origin || (self.origin = "app://kaios.whatsapp.net"),
  (self.onmessage = (e) => {
    const s = e.data;
    s && s.type && self.SwEventHandlers.hasOwnProperty(s.type)
      ? self.SwEventHandlers[s.type](e)
      : WARN`unrecognized event ${s}`.devConsole(s);
  }),
  startUp();
