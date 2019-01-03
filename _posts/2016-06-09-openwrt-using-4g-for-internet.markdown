---
layout: post
title:  Using A 4G LTE USB As Your Internet Source
date:   2016-06-09
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to use a 4G USB dongle as the source of internet for your OpenWrt device.
---

This guide will walk you through setting up your OpenWRT device to use a 4G LTE/3G USB dongle as it’s source of internet.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Prerequisits

You will need a LTE/3G USB dongle that provides/can provide an NDIS interface (QMI Mode), and enable it.
Once enabled, connect it to your OpenWRT device.

## Installation

We want to install all of the required packages needed to get this working, so run the following commands:

    opkg update
    opkg install usb-modeswitch kmod-mii kmod-usb-net kmod-usb-wdm kmod-usb-net-qmi-wwan uqmi

Once everything is installed, give your OpenWRT device a reboot.

## Configuration

First we want to see if everything is running correctly, so run the following commands:

    uqmi -d /dev/cdc-wdm0 --get-data-status

This should return a disconnected status. Then run:

    uqmi -d /dev/cdc-wdm0 --get-signal-info

Which should output some info on your signal.

Once you have confirmed both of these work we need to run a command to initialise your internet connection. Replacing PROVIDER_APN with the APN from your provider.

    uqmi -d /dev/cdc-wdm0 --start-network PROVIDER_APN --autoconnect

Then run the two previous commands again to confirm you are connected.

## Network Config

Now we need to create a new interface for this connection.

Simply run the following command:

    vi /etc/config/network

Then add the following in:

    config interface 'wwan'
            option ifname 'wwan0'
            option proto 'dhcp'

After doing this, the final step is to add a firewall rule in. The easiest way to do this is through the LuCI interface.

- Head into Network > Firewall
- Scroll down to WAN and click edit
- Under the covered networks heading, tick the box next to wwan.
- Click save and apply to confirm your changes

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="/sign-up" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
