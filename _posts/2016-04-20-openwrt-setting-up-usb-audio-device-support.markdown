---
layout: post
title:  Setting Up USB Audio Device Support
date:   2016-04-20
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Want to add support for audio devices?
---

This guide will help you get your LEDE/OpenWRT device supporting USB Audio. This can then be used for cool tasks such as setting up sound servers.

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

## USB Audio Support

We need to install some packages to add support for USB Audio, so run the following command:

    opkg install kmod-usb-audio kmod-sound-core usbutils

Now connect your USB Audio device and make sure it is powered on. Run the following command to ensure that it is being detected:

    lsusb
You should see a sound device in the output.

## Sound Drivers

Now that the USB is ready, we need to install some sound drivers. We are going to install Alsa for this. So run the following command:

    opkg install alsa-libs libsndfile alsa-utils

Once you have done this, reboot your LEDE/OpenWRT device, reconnect to it and then run the following command to confirm that your soundcard is working and control the volumes.

    alsamixer

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
