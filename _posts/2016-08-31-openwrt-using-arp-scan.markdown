---
layout: post
title:  Using arp-scan
date:   2016-08-31
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to detect the MAC and IP addresses of devices in your network.
---

The command arp-scan allows you to detect the MAC and IP addresses of devices connected within your network.

This guide will walk you through installing it and basic usage.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Installation

Installing arp-scan takes no time at all, just simply run the following commands:

    opkg update
    opkg install arp-scan

## Usage

Once you have it installed we can move on to usage. Just to note; there are shorthand variants of the commands we are going to use here, but for clarity we will be using the full versions.

An example of an arp-scan command is as follows:

    arp-scan --interface=eth0 --localnet

Now lets break down the individual sections:

`arp-scan` - This calls the command and runs arp-scan.

`--interface=eth0` - This defines the interface you are using for scanning. In this case we are using eth0.

The interfaces vary between device and operating system, as well as whether they're wireless or not.

`--localnet` This tells arp-scan to scan all possible IP addresses on the network connected to the interface defined previously.

By running an arp-scan on a valid interface, you should get an output that contains information similar to the following:

    192.168.1.1     00:c0:xx:xx:xx:xx       Intel Corporation
    192.168.1.2     00:c0:xx:xx:xx:xx       Intel Corporation
    192.168.1.3     84:02:xx:xx:xx:xx       HTC Corporation
    192.168.1.4     00:03:xx:xx:xx:xx       Compaq Computer Corporation

On the left you will see the IP address that device has on your local network, the device’s MAC address is shown in the middle column, and it’s manufacturer information is shown on the right hand side.

For more specific usage of the arp-scan tool, check out [some documentation here](http://www.nta-monitor.com/wiki/index.php/Arp-scan_User_Guide).

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
