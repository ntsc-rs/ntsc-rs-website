---
layout: docs.njk
title: Web App
description: Use the ntsc-rs VHS effect online in your browser. Apply a realistic analog TV and VHS look to images and videos for free. No download or account required.
eleventyNavigation:
  key: Web App
  order: 3
---

The [ntsc-rs web app](//web.ntsc.rs) lets you apply a realistic VHS and analog TV effect to your images and videos entirely online, in your browser.

The web app is fully self-contained. You don't have to download anything, no account is required, and your images and videos never leave your device.

## Features

- Works on desktop and mobile. The UI works well in portrait mode too. If you're looking for an easy VHS effect that you can run on a mobile device, ntsc-rs fits the bill.

- Fully self-contained; no sign-up or account required. All processing is done on your device, and nothing is ever uploaded to a server.

- A true app-like experience. While you don't need to install anything to use the web app, you can still *choose* to install it from your browser on many platforms. It even works offline once you've loaded it for the first time.

## Use as an app

While the ntsc-rs web does not *require* installing anything, you may find it useful to use it as an app. It works identically offline, and you can access it conveniently from your home screen.

- **iOS, Safari:** Follow Apple's guide for [using a website as an app on iOS](https://support.apple.com/en-mide/guide/iphone/iphea86e5236/26/ios/26).

- **macOS, Safari:** Follow Apple's guide for [using a website as an app on macOS](https://support.apple.com/en-mide/104996). Note that the ntsc-rs desktop application and plugins *are* available for macOS. If possible, you should [download](/download) and [install](/docs/macos-installation) those instead.

- **All platforms, Chrome:** Follow Google's guide for [installing a web app or adding it to your home screen](https://support.google.com/chrome/answer/9658361). This guide contains instructions for Android, iOS, and desktop.

- **Android, Firefox:** Follow Mozilla's guide for [installing a web app](https://support.mozilla.org/en-US/kb/use-web-apps-firefox-android).

- **All other platforms, Firefox:** Web app installation is not supported in non-Android versions of Firefox.

## Browser and device compatibility {#compatibility}

The ntsc-rs web app uses cutting-edge web technologies to perform all processing in your browser. However, the "cutting-edge" part *does* mean that you need an up-to-date browser, and the browsers themselves might have bugs.

In particular, the app uses WebAssembly and Web Codecs. While WebAssembly is pretty well-supported, Web Codecs is still somewhat spotty. Many browsers' implementations may contain bugs.

At the time of writing, here are the browser compatibility issues you should be aware of:

- **Safari (and all browsers on iOS):** Some videos may not display properly. This seems to be an issue in Safari. You can use another browser on macOS. Unfortunately, there is no real workaround for this on iOS--all browsers on the App Store actually use Safari's engine internally, and will suffer from the same issues.

- **Firefox for Android:** Cannot load or save any videos at all. Use Chrome instead.

- **Firefox (desktop):** Video encoding is a fair bit slower than Chrome.

## When to use the web app vs. the desktop version {#web-vs-desktop}

The web app is great for quick edits and for use on devices where you can't install software. For batch processing, higher performance, or integration into a video editing workflow, use the [standalone application](/docs/standalone-application/) or one of the editor plugins.
