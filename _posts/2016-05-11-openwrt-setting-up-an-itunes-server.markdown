---
layout: post
title:  Setting Up An iTunes Server
date:   2016-05-11
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to control an iTunes server on your OpenWrt device.
---

This guide will walk you through setting up an iTunes server on your LEDE/OpenWRT device, and controlling it via mobile apps.

## Prerequisites
- You will need the following:
- LEDE/OpenWRT device with decent CPU/memory specs
- USB support
- Attached USB storage with your music library.
- Set up USB support for custom packages.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Installation
To start off with we need to install the required package, so simply run the following commands:

    opkg update
    opkg install forked-daapd

## Configuration

Next we need to edit some lines of the config, so run this command:

    vi /etc/forked-daapd.conf

Then set the path to your music library and any other settings to match your needs.

Now start the server by running the following command:

    /etc/init.d/forked-daapd start

The server will start scanning your library. This may take a little while depending on the size of your library, so to check the progress you can run the following command:

    tail -f /var/log/forked-daapd.log

## Setting Up Your Remote

To set up your iOS or Android remote app to control the server, we can run a handy script created by the package author.
Just [download this helper script](https://raw.githubusercontent.com/ejurgensen/forked-daapd/master/scripts/pairinghelper.sh) to walk through getting your remote working.

Run it by using the following:

    sh pairinghelper.sh

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="/sign-up" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
