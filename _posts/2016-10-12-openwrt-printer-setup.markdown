---
layout: post
title:  Printer Setup
date:   2016-10-12
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to add support for your printer.
---

Getting your printer setup on your network using a LEDE/OpenWRT device is not as difficult as you might think.

Here we will run you through the steps needed to get printing over your network.

## Prerequisite — USB Support

Getting your printer set up requires you to have basic USB support prior to configuring.

[We covered this in a previous guide here](/community/tutorials/openwrt-usb-storage-support.html).

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Firewall Rules

Before we jump into installing things we need to make sure that the needed ports will be able to be used.

So run the following command to edit your firewall configuration:

    vi /etc/config/firewall

Then you will need to add the following rule into it:

    config 'rule'
            option 'src' 'lan'
            option 'proto' 'tcp'
            option 'dest_port' '9100'
            option 'target' 'ACCEPT'

## Installation

Now we can get into installing support for the printer.

So run the following commands to get the packages installed:

    opkg update
    opkg install kmod-usb-printer kmod-lp p910nd

This adds support for the USB printer device as well as a service to handle passing print jobs to your printer.

Once you’ve installed support for your printer, it is just a matter of setting up your clients (PC, laptops etc) to work with it. How to do this can vary between operating system/device, so it is best to look at your device’s documentation for how to do it.

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="/sign-up" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
