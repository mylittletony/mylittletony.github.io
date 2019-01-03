---
layout: post
title:  Setting Up A Web Server
date:   2016-05-04
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to install lighttpd on your OpenWrt device.
---

We are going to work through installing and configuring the basics of lighttpd; a lightweight web server.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Installing lighthttp

Installation of the package is as simple as you would expect, simply run the following two commands:

    opkg update
    opkg install lighttpd

## Configuration

Once the package is installed, we need to configure it. So run the following command to open the config file:

    vi /etc/lighttpd/lighttpd

Now look for a line similar to the following in your config file:

    server.document-root = /www/

This is where you specify the root directory of your webserver, so make any changes here that you need.

Next you might want to enable logging so that you can troubleshoot any errors. To do this we just need to uncomment (remove the #) the following line:

    server.errorlog = “/var/log/lighttpd/error.log”

Finally we need to set the port your server will run on. To do this, uncomment the following line:

    server.port = 8000

You can also change the port if you want it running on something else.

### Start Server On Boot (Optional)

To make your server run on startup, we just need to run one command:

    /etc/init.d/lighttpd enable

If you no longer want it to start on boot, then run this instead:

    /etc/init.d/lighttpd disable


<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="/sign-up" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
