---
layout: post
title:  Setting Up USB Internet Passthrough
date:   2016-04-06
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to connect your smartphone to the internet via your OpenWrt Device.
---

Internet Passthrough via USB will allow you to connect your smartphone to the internet via your LEDE/OpenWRT device.

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

## USB Internet Passthrough

Now that the basic support is complete, we can configure the internet passthrough.

Run the following command to install the needed package:

    opkg install kmod-usb-net

Now connect your smartphone to your LEDE/OpenWRT device via USB, and enable Internet Passthrough (also referred to as reverse tethering, the name may vary depending on the smartphone).

Once it is connected, a new network interface should appear named usbX where X is a number from 0.

You’ll then need to configure it like a normal ethernet interface and serve DHCP to it as covered in previous guides.

Once that is done, you are ready to tether your smartphone to your LEDE/OpenWRT device for internet.

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
