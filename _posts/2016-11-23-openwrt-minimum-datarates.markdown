---
layout: post
title:  Setting Minimum Datarates
date:   2016-11-23
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to disconnect clients who do not meet the minimum speeds using minimum datarates.
---

Minimum data rates allow you to only allow devices to stay connected to your WiFi if they meet the minimum data rate set. This is a handy tool in optimising your WiFi network, disconnecting devices that do not meet the minimum data rates you have set, freeing up airtime.

This guide will walk you through how to set a minimum data rate.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Configuration

First we need to access the wireless config file to make changes. So run the following command:

    vi /etc/config/wireless

Once this is open, you will need to find and add the basic rates of your wireless device. If you do not know what device you need to change, search for the SSID you’re trying to make changes to.

    config 'wifi-iface'
            option 'device'     'wl0'
            option 'network'    'lan'
            option 'mode'       'ap'
            option 'ssid'       'FreePubWiFi'
            option 'encryption' 'psk2'
            option 'key'        'secretsecrets'

Above, we have found the interface for the SSID ‘FreePubWiFi’. Take a look at the device option, this is the name of the device you need to look for.

    config 'wifi-device' 'wl0'
            option 'type'    'broadcom'
            option 'channel' 'auto'

You should find something similar to the above. For this example, simply edit or add in the following if not already included:

    list 'supported_rates' '6000 9000 12000 18000 24000 36000 48000 54000'
    list 'basic_rate' '6000 9000 12000 18000 24000 36000 48000 54000'

Add the exact above for supported_rate, including all of the rates listed.

For basic_rate you can remove any of the rates you do not want to support.

If, for example, you choose to remove 6000 and 9000 from the above, then clients with a data rate of below 12000 will be disconnected from the network.

Once you have done this, your config should look similar to the following:

    config 'wifi-device' 'wl0'
            option 'type'    'broadcom'
            option 'channel' 'auto'
            list 'supported_rates' '6000 9000 12000 18000 24000 36000 48000 54000'
            list 'basic_rate' '12000 18000 24000 36000 48000 54000'

Once you have made your changes you will need to reboot your device or restart the wireless.

To restart your wireless, run the following:

    wifi down
    wifi up

Or if you want to reboot the whole device, run this instead:

    reboot

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
