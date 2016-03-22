---
layout: post
title:  Setting up WPA Enterprise
date:   2016-03-16
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: How to set up WPA Enterprise access.
---

With WPA Enterprise, you have the ability to have your users authenticate against a RADIUS server to gain access to the WiFi, adding increased security to your network.


## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

`ssh root@192.168.1.1`

## Prerequisites

This guide covers the steps needed to set up WPA Enterprise on your OpenWRT, but the overall setup requires some other steps to be completed:

- A RADIUS server configured on a seperate server, or on your OpenWRT device.
- Configured your OpenWRT device as a client on your RADIUS server.
- Have one or more username and password entries on the RADIUS server.

## Package Installation
Enterprise WPA is not supported by the wpad-mini package, which comes with OpenWRT as default. So first we need to remove this package.

Run the following two commands:

`opkg update`

`opkg remove wpad-mini`

Once wpad-mini is removed, we can install a new package that supports Enterprise WPA. In this example we are going to use the full wpad.

Run the following command to install this:

`opkg install wpad`

## Creating The Interface

Next we need to edit our wireless config file to enable WPA Enterprise authentication.

Run the following command to edit the file:

`vi /etc/config/wireless`

Now we are going to create a new interface with the following details:

    config 'wifi-iface'
         option device      'radio1'
         option mode        'ap'
         option ssid        'EnterpriseWiFi'
         option network     'lan'
         option encryption  'wpa2'
         option server      '192.168.1.220'
         option port        '1812'
         option key         'ClientPassword'

Where option server and option port are the details of an external RADIUS we had set up, and option key is the password we have configured for our OpenWRT device on it.

After making these changes, you will need to either restart the process or reboot your box.

To restart the process, run the following command:

`/etc/init.d/network restart`

### (Optional) Using the web GUI

You can also make changes to the encryption type through the LuCI interface by navigating through Network > WiFi.

<hr>

*Cucumber Tony is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://cucumberwifi.io">cucumberwifi.io</a>*


<div class="text-center">

<h2>Come join Cucumber</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for Cucumber Tony, it's free for unlimited access points :)</p>

<hr>

</div>
