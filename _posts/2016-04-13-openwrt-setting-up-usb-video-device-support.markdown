---
layout: post
title:  Setting Up USB Video Device Support
date:   2016-04-13
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to add webcam and other video device support.
---

This guide will help you get your LEDE/OpenWRT device supporting USB video. Which can be used for motion detecting webcams and other cool applications.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Prerequisites — USB Support

First we need to ensure that your LEDE/OpenWRT device has basic support for USBs. Some builds come with this as standard, but if yours does not then just follow these steps:

### USB 1.1 Support

This will either have a UHCI or OHCI interface. Pick one of the bellow to start off with, and if it is incorrect it will let you know which one you need to install.

__UHCI__

Run the following commands for UHCI:

    opkg update
    opkg install kmod-usb-uhci
    insmod usbcore
    insmod uhci

__OHCI__

Run the following commands for OHCI:

    opkg update
    opkg install kmod-usb-ohci
    insmod usb-ohci

### USB 2.0 Support

You will need to install the needed packages by running the following:

    opkg update
    opkg install kmod-usb2
    insmod ehci-hcd

## USB Video Support

Next, connect your USB Video device into your LEDE/OpenWRT device and then we just need to install the required packages.

To do this, run the following commands:

    opkg update
    opkg install kmod-video-uvc

This will install the needed packages and their dependencies.

Once this is complete, your LEDE/OpenWRT device should now have USB Video support. You can now make use of this through a number of different applications such as [these](https://wiki.openwrt.org/doc/howto/usb.video#applications) listed in the LEDE/OpenWRT Wiki.

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="/sign-up" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
