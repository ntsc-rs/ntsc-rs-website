---
layout: docs.njk
title: Frequently Asked Questions
description: Answers to frequently asked questions about ntsc-rs
eleventyNavigation:
  key: Frequently Asked Questions
  order: 1
---

## Does ntsc-rs include an audio effect? {#audio-effect}

No. I don't have any experience with audio processing, and others have already done a far better job than I could. If you're looking for a realistic emulation of VHS audio, I'd recommend [the Chow Tape Model effect](https://chowdsp.com/products.html#tape).

## Can I use ntsc-rs on Android or iOS? {#more-platforms}

Unfortunately, neither of those platforms are supported. It's unlikely that apps for iOS or Android will ever be released.

Mobile platforms are a chore to develop for:

- On the Android side, Google is notorious for deprecating their libraries every couple of years, forcing you onto the treadmill of rewriting your software over and over.
- On the iOS side, Apple makes you fork over $99/yr for the privilege of being allowed on the App Store. I don't have any iOS hardware to test on, either.

If you want to use ntsc-rs on your mobile device, your best bet is the [web app](//web.ntsc.rs).

## Is ntsc-rs like ntscQT? {#ntscqt}

Yes. I developed ntsc-rs as a "faster ntscQT", and added new features from there. ntscQT has since been officially discontinued, and ntsc-rs is one of its recommended replacements. To learn more, see [the migration guide](/docs/ntscqt-migration).

## I'm on Windows 7. Why doesn't ntsc-rs work? {#windows-7}

Windows 7 has [reached end-of-life and is no longer receiving security updates since 2020](https://support.microsoft.com/en-us/windows/windows-7-support-ended-on-january-14-2020-b75d4580-2cc7-895a-2c9c-1466d9a53962). ntsc-rs does not support Windows 7.

This is not unique to ntsc-rs; most software, including **every major web browser**, has also dropped support for Windows 7. I would strongly recommend upgrading to Windows 11, or Windows 10 if your computer doesn't support 11. I know newer versions of Windows have their issues, but it's better than using a version of Windows with unpatched security vulnerabilities that can only run web browsers that also have unpatched security vulnerabilities. If you really don't want to use Windows 10 or 11, consider Linux instead.

## Can I use ntsc-rs on 32-bit PCs? {#32-bit}

ntsc-rs is 64-bit, and would probably run much slower on 32-bit hardware. Good news, though: any PC that supports Windows 10 or up (see above), or any supported macOS version, is 64-bit. If you're still running a 32-bit operating system, you can and should install the 64-bit version of that operating system instead. This will allow you to run 64-bit software (which a lot of software is nowadays, including games), and will probably run a bit faster as well.

## Why doesn't ntsc-rs include an on-screen display (OSD)? {#osd}

Many people have requested that I add on-screen display (OSD) emulation to ntsc-rs. This is the part that displays things like play/pause icons, text, timecodes, and such atop the image.

Firstly, adding an OSD would require adding a way to control what it says. If you want to switch between different icons (play, pause, etc) then you need to implement keyframing. The standalone ntsc-rs app will never have keyframing, since it is not meant to be general-purpose video editing software.

Secondly, on-screen displays are unique to each model of VCR. The positioning of text, exact shapes of icons, and fonts are all extremely varied. I could choose to hardcode a specific set of icons and fonts, and deal with a constant influx of requests to add more. Or I could add a way to let people add arbitrary graphics (like text and icons) on top of footage, which is *already implemented* in real video editing software.

If you want to render arbitrary text and graphics on top of your footage, you should use video editing software. ntsc-rs is available in plugin form and compatible with most editors. I recommend DaVinci Resolve, which is free.

## Why does ntsc-rs crash my computer? {#crash}

I've received a few reports of ntsc-rs crashing people's computers ([#91](https://github.com/ntsc-rs/ntsc-rs/issues/91), [#340](https://github.com/ntsc-rs/ntsc-rs/issues/340), [#392](https://github.com/ntsc-rs/ntsc-rs/issues/392)). If ntsc-rs can crash your entire computer, it's a problem with your operating system or hardware.

This is true by definition because of the way operating systems work. All modern operating systems are designed to isolate separate programs and prevent badly-behaving programs from interfering with the entire system. This is why a program that freezes will only crash itself instead of bringing down the whole computer.

The operating system itself is also completely isolated from the programs it runs. [This is a key security feature.](https://en.wikipedia.org/wiki/Protection_ring) Only the operating system and device drivers are capable of doing hardware-level things like shutting down your computer. This means that if a regular application without any admin privileges can crash your computer, the operating system is not working as intended.

With all that being said, ntsc-rs is a complex and hardware-intensive program. It contains [many different codecs](https://gstreamer.freedesktop.org/) for reading and writing a multitude of video formats, and the effect itself makes use of advanced CPU features to run as fast as possible.

If ntsc-rs is crashing your entire computer, there are a couple of things you can try. Firstly, if your system is overclocked, try disabling or reducing it--an overclock that seems stable when gaming or browsing the web may fail under sustained load. Secondly, try installing the latest OS updates. Since any OS-level crash caused by an application is a security vulnerability by definition, OS developers will want to fix those issues as quickly as possible.
