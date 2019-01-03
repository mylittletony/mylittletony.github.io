---
layout: post
title:  Setting Up USB Bluetooh Support
date:   2016-06-22
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to add USB Bluetooth support to your OpenWRT device.
---

This guide will help you get your LEDE/OpenWRT device supporting USB bluetooth.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Installation

We need to install all of the packages needed for your device to be compatible with USB devices and Bluetooth devices, so first run this command:

    opkg update

Then run the following which will install all of the packages needed:

    opkg install kmod-bluetooth bluez-libs bluez-utils kmod-usb-core kmod-usb-uhci kmod-usb2 usbutils

After this you will need to enable the processes to run on start, so enter the following commands:

    /etc/init.d/dbus enable
    /etc/init.d/bluez-utils enable
    /etc/init.d/dbus start
    /etc/init.d/bluez-utils start

## Pairing a Bluetooth device

Once you have set up Bluetooth support, you will need to pair your Bluetooth device with your OpenWRT device.
Run the following command to activate your device:

    hciconfig hci0 up

Then once you have your Bluetooth device discoverable, run this on your OpenWRT:

    hcitool scan

Take note of the address of your Bluetooth device and run the following command, replacing the address with your device’s one:

    bluez-simple-agent hci0 AA:BB:CC:DD:EE:FF

Follow the prompts to verify the pin, then run the following command to add the device as trusted:

    bluez-test-device trusted AA:BB:CC:DD:EE:FF yes

Now simply run the following to connect the device:

    bluez-test-input connect 75:EF:82:69:D2:83

Now after rebooting the device should connect automatically after a few seconds.

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="/sign-up" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
