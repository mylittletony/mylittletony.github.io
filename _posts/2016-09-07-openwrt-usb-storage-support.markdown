---
layout: post
title:  Setting Up USB Storage Support
date:   2016-09-07
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to configure your OpenWRT device to recognise and use a USB storage device.
---

A step by step guide to configuring your LEDE/OpenWRT device to work with USB storage.

This guide assumes that you already have a USB formatted for use with your LEDE/OpenWRT device.

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

## USB Storage Support

Now we want to install support for USB storage device. First run the following command:

    opkg install usbutils

And then connect your USB device. Once it is connected, run the following:

    dmesg

Which should output some lines, you’re looking for something similar to the following:

    [  620.360000] usb 1-1.1: USB disconnect, device number 3
    [  629.310000] usb 1-1.1: new high-speed USB device number 4 using ehci-platform

Next up we need to install the packages to add USB storage support, so run the following:

    opkg install kmod-usb-storage kmod-fs-ext4 block-mount

Once they are all complete, reboot your device and run the following command to confirm whether your USB is now mounted as storage:

    dmesg | grep sd

This will output something similar to the following:

    [   10.010000] sd 0:0:0:0: [sda] 62530624 512-byte logical blocks: (32.0 GB/29.8 GiB)
    [   10.010000] sd 0:0:0:0: [sda] Write Protect is off
    [   10.020000] sd 0:0:0:0: [sda] Mode Sense: 43 00 00 00
    [   10.030000] sd 0:0:0:0: [sda] Write cache: disabled, read cache: enabled, doesn't support DPO or FUA
    [   10.050000]  sda: sda1
    [   10.070000] sd 0:0:0:0: [sda] Attached SCSI disk

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="/sign-up" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
