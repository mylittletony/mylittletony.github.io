---
layout: post
title:  Basic SNMPD Installation And Configuration
date:   2016-06-30
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to remotely view operation stats of your OpenWRT device.
---

This guide will cover the basics of installing and configuring SNMPD with your LEDE/OpenWRT device.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Installation

Installing the required packages is pretty easy. For this example we are going to install mini-snmpd. Just run the following two commands:

    opkg update
    opkg install mini-snmpd

Once the install has completed you will need to configure it to your needs.

## Configuration

To set it up to your needs, you will need to edit the config file. To do this, run the following command:

    vi /etc/config/mini_snmpd

You should see a file that looks similar to the following:

    config mini_snmpd
    	option enabled 1
    	option ipv6 0
    	option community public
    	option location ''
    	option contact ''
    	option disks '/tmp,/jffs'
    	option interfaces 'wlan0,br-lan,eth0.1,eth0'

The options are the following:

- enabled: Whether SNMPD should be started
- ipv6: Enables support for ipv6
- community: Sets the SNMP community string
- location: Sets the location that will be reported
- contact: Sets the contact detail that will be reported
- disks: Sets the filesystems that will be output
- interfaces: Sets the interfaces that will be output

Make the changes you need and then save.
Now just run the following commands to start SNMPD and enable it to start on reboot:

    /etc/init.d/snmpd start
    /etc/init.d/snmpd enable

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="/sign-up" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
