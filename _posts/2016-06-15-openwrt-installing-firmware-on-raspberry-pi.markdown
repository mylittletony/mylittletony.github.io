---
layout: post
title:  Installing OpenWrt On Raspberry Pi
date:   2016-06-15
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to get OpenWRT running on your Raspberry Pi.
---

The Raspberry Pi is an awesome little bit of kit, with a ton of possible uses, all for a rock bottom price. Because of this, it is a really good tool to cut your teeth on for OpenWRT.

This guide is going to run you through getting OpenWRT installed on your Raspberry Pi 2, but most of these steps can be applied across the board.

## Flash OpenWRT to your SD card — Windows

Windows users will need to download a bit of software called [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/).

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="https://cdn-images-1.medium.com/max/880/0*QfqKCWA81l5rE5MU.jpg" width="400px">
</div>

With this downloaded and installed, run the program and select your OpenWRT firmware in the image file section.

Then select the drive letter of the SD card in the Device dropdown box. __Note: Please ensure that you have selected the correct drive, as this will wipe the data on the drive selected.__

Once you have confirmed you are writing to the correct device, click on Write and wait for the progress bar to complete.

## Flash OpenWRT to your SD card — Linux

For Linux based operating systems, you can install OpenWRT from the terminal.

First off connect your SD card and run the following command:

    dmesg

This should give you the SD card’s device name. Something similar to sdb or sdf.

Next run the following command:

    dd if=/home/username/Downloads/firmware_name.img of=/dev/sdX bs=2M conv=fsync

Replacing the firmware location with the location you saved the firmware to. And replacing sdX with the device name from the previous step.

And that is it, now you have OpenWRT running on your SD that you can put on your Raspberry Pi 2.

## First Connection Troubles

By default the IP of your OpenWRT device should be 192.168.1.1 with DHCP disabled. This can make initially connecting a bit of a pain, as your network’s default gateway is usually 192.168.1.1 which can cause conflicts and issues.

If you isolate yourself from your network (disabling your wireless and disconnecting any other wired connections) you should be able to simply connect to your Pi by connecting with an Ethernet cable and using 192.168.1.1.

It is advised to either enable DHCP or change the static IP address.

To enable DHCP, connect to your Pi and run the following commands:

    uci set network.lan.proto=dhcp
    uci commit
    /etc/init.d/network restart

To set a new static IP, connect to your Pi and run the following commands:

    uci set network.lan.ipaddr=192.168.1.111
    uci commit
    /etc/init.d/network restart

<hr>

*Cucumber Tony is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://cucumberwifi.io">cucumberwifi.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join Cucumber</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for Cucumber Tony, it's free for unlimited access points :)</p>

<hr>

</div>
