let observer = null;
let timeoutId = null;

export default function listenToHashChanges(history) {
  if (!window.MutationObserver) {
    return;
  }

  // Scroll after page load
  requestAnimationFrame(() => scroll(history.location));

  // Scroll after history's "PUSH" event
  history.listen((location, action) => {
    if (timeoutId) {
      reset();
    }

    if (action !== "PUSH") {
      return;
    }

    scroll(location);
  });
}

function scroll(location) {
  if (typeof location.hash !== "string") {
    console.log("location.hash is no string!");
    return;
  }

  const elementId = location.hash.slice(1);
  if (!elementId) {
    console.log("elementId is empty!");
    return;
  }

  const scrollToElement = createScrollToElement(elementId);

  // Push onto callback queue so it runs after the DOM is updated
  setTimeout(() => {
    if (scrollToElement()) {
      return;
    }

    observer = new MutationObserver(scrollToElement);
    observer.observe(document, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    // if the element doesn't show up in 10 seconds, stop checking
    timeoutId = setTimeout(reset, 10000);
  }, 0);
}

function reset() {
  if (observer !== null) {
    observer.disconnect();
  }

  if (timeoutId !== null) {
    window.clearTimeout(timeoutId);
    timeoutId = null;
  }
}

function createScrollToElement(elementId) {
  return () => {
    const element = document.getElementById(elementId);

    if (!element) {
      console.log("could not find element", elementId);
      return false;
    }

    console.log("Found element - scrolling", elementId);
    // element.scrollIntoView();
    reset();
    return true;
  };
}
