---
layout: post
title:  TCPDump To Wireshark
date:   2016-09-21
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to keep an eye on traffic on your home network.
---

Learn how to set up tcpdump on your LEDE/OpenWRT device to communicate with Wireshark, allowing you to view the traffic on your home network.

This post will focus specifically on the steps you need to run on your LEDE/OpenWRT device to drive the data into Wireshark, and so assumes that you already have Wireshark running on another computer.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Installation

First up we need to make sure tcpdump is installed on your device. Run the following commands:

    opkg update
    opkg install tcpdump

## Capturing

Once you have tcpdump installed you just need to run the following to start piping the data into Wireshark:

    "tcpdump -i br-lan -U -s0 -w - host 192.168.0.7" | wireshark -k -i -

This will pipe the captured packets related to the address 192.168.0.7

Change this address relative to what data you want to capture.


<hr>

*Cucumber Tony is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://cucumberwifi.io">cucumberwifi.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join Cucumber</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for Cucumber Tony, it's free for unlimited access points :)</p>

<hr>

</div>
