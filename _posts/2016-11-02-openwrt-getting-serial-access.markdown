---
layout: post
title:  Getting Serial Access
date:   2016-11-02
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Follow the step by step guide showing you how to get serial access to your OpenWRT device.
---

Access via serial console lets you to view details that you normally wouldn’t be able to see through methods such as SSH, including live boot logs.

Being able to access your LEDE/OpenWRT using a serial console is an invaluable skill as it allows you to troubleshoot and potentially resolve boot issues that might arise from firmware issues.

## Requirements

To access your device via serial console, you will need a couple specific cable bits.

### Serial Cable TTL 3v3 Convertor

<div class="mdl-typography--text-center">
  <img src="https://cdn-images-1.medium.com/max/800/0*ArGhdNqvQS8P0w4g.jpg" width="400px">
</div>

This type of cable will allow you to connect your computer to your device over serial. If your cable has female ends (like pictured above) you will also need to get a few male to male breadboard cables like the following:

### Breadboard Cable/Jump Wire
<div class="mdl-typography--text-center">
  <img src="https://cdn-images-1.medium.com/max/800/0*kDraZfk6ReY2Xouz.jpg" width="400px">
</div>

If your serial cable is female you will need male-to-male cables to patch into your board.

## Setting up Serial Cables

First things first, you will need to crack open your device to expose it’s board inside.

Then you will need to locate the serial ports and pin layout. The OpenWrt Wiki has tons of boards documented, so take a look there if you aren’t sure. We will look at the UAP-AC-LITE from the OpenWrt Wiki.

<div class="mdl-typography--text-center">
  <img src="https://cdn-images-1.medium.com/max/800/0*R_wK89hMyh1My3_E." width="400px">
</div>

Next we want to connect your serial cable to your computer and the board. Plug the USB side into your computer and then follow the pin layout on the board.

**Never use the power pin/port**. There is no protection on this side of the board, so you could end up damaging it if using wrong voltage. Typically the power pin port on the board is square shaped if you are uncertain. Stick with your device’s stock power supply.

Connect up the rest of the pins following the layout of your board.

## Accessing Console

For linux computers you will need to assign the correct permission to your USB. So first open your terminal and run the following command:

    sudo chmod 666 /dev/ttyUSB0

Once that is done you will need to use a program like Putty. If you do not have it installed already, download and run it.

Next head down to your serial settings. Click on Serial under your categories on the left and input the following details as standard:

    data bits — 8
    stop bits — 1
    parity — none
    flow control — none

<div class="mdl-typography--text-center">
  <img src="https://cdn-images-1.medium.com/max/800/1*hr5V4TcyBC7ljEqVvU0wbQ.png" width="400px">
</div>

The speed (baud) needed can vary depending on the board you are using so it is best to confirm this before hand.

Then click Open and you will see a console window appear.

If you power cycle your LEDE/OpenWRT device you should see all of the boot logs appear in your console, giving you a lot more information on what is going on.

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
