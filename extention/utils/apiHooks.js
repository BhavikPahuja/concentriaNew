(function () {
  function dispatch(type, extra = {}) {
    window.dispatchEvent(
      new CustomEvent('apiMonitor', {
        detail: { type, extra }
      })
    );
  }

  // Geolocation
  if (navigator.geolocation) {
    ['getCurrentPosition', 'watchPosition'].forEach(fn => {
      const orig = navigator.geolocation[fn];
      navigator.geolocation[fn] = function (...args) {
        dispatch('geolocation');
        return orig.apply(this, args);
      };
    });
  }

  // Clipboard
  if (navigator.clipboard) {
    ['readText', 'writeText'].forEach(fn => {
      const orig = navigator.clipboard[fn];
      navigator.clipboard[fn] = function (...args) {
        dispatch('clipboard');
        return orig.apply(this, args);
      };
    });
  }

  // Cut/Copy/Paste
  ['cut', 'copy', 'paste'].forEach(evt =>
    window.addEventListener(evt, () => dispatch(evt))
  );

  // Device Orientation
  const originalAddEvent = window.addEventListener;
  window.addEventListener = function (type, ...args) {
    if (type === 'deviceorientation') {
      dispatch('deviceOrientation');
    }
    return originalAddEvent.call(this, type, ...args);
  };

  // Hook window.open for downloads
  const originalOpen = window.open;
  window.open = function(url, ...args) {
    window.dispatchEvent(new CustomEvent('apiMonitor', {
      detail: { type: 'download', extra: { url } }
    }));
    return originalOpen.apply(this, [url, ...args]);
  };

  // Permissions
  if (navigator.permissions) {
    const orig = navigator.permissions.query;
    navigator.permissions.query = function (desc) {
      const promise = orig.call(this, desc);
      promise.then(status => {
        if (status.state === 'granted') {
          dispatch('permissions', { name: desc.name });
        }
      });
      dispatch('permissions', { name: desc.name });
      return promise;
    };
  }

  // Microphone / Camera
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    const orig = navigator.mediaDevices.getUserMedia;
    navigator.mediaDevices.getUserMedia = function (constraints) {
      if (constraints.audio) dispatch('microphone');
      if (constraints.video) dispatch('camera');
      return orig.call(this, constraints);
    };
  }
})();