---
layout: post
title:  Changing Transmission Power
date:   2016-12-14
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Find out how to adjust the power output of your networks, changing how far they broadcast.
---

We’ve spoken previously how less can be more, in terms of transmission power, so here we show you how to adjust the transmission power with LEDE/OpenWRT.

Be aware that some devices may have hard limitations on power output, and different countries have different restrictions on the power output you can use.

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

Once this is open, you will need to find the device that your network is using. This is relatively simple, just look for the SSID of your network.

    config 'wifi-iface'
            option 'device'     'wl0'
            option 'network'    'lan'
            option 'mode'       'ap'
            option 'ssid'       'PowerWiFi'
            option 'encryption' 'psk2'
            option 'key'        'ivegotthepower'

Above, we have found the interface for the SSID ‘PowerWiFi’. We can see that the device in use is wl0 so we need to look for the device with that name. You should find something similar to the below:

    config 'wifi-device' 'wl0'
            option 'type'    'broadcom'
            option 'channel' '6'

Once you have found it, we need to add/edit in the following:

    option 'txpower'    '17'

The integer entered specifies the power output in dBm.

Once you’ve added your power output, you should be left with something similar to the below:

    config 'wifi-device' 'wl0'
            option 'type'    'broadcom'
            option 'channel' '6'
            option 'txpower' '17'

When you are happy you will need to reboot your device or restart the wireless.

To restart your wireless, run the following:

    wifi down
    wifi up

Or if you want to reboot the whole device, run this instead:

    reboot

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="/sign-up" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
