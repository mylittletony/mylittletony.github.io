---
layout: post
title:  Disabling Your SSID
date:   2016-12-07
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to toggle your networks on and off whenever you need them.
---

Being able to disable your SSID without deleting your configuration is a feature that might not always be needed, but when it is needed it is a massively handy ability.

It allows you to preconfigure wireless networks and just toggle them on and off when you need them.

This guide will walk you through the quick steps to follow.

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

Once this is open, you will need to find the network you want to hide. This is relatively simple, just look for the SSID of your network.

    config 'wifi-iface'
            option 'device'     'wl0'
            option 'network'    'lan'
            option 'mode'       'ap'
            option 'ssid'       'ToggleWiFi'
            option 'encryption' 'psk2'
            option 'key'        'turnmeoffandon'

Above, we have found the interface for the SSID ‘ToggleWiFi’. We want to add/edit in the following:

    option 'disabled' '1'

Setting this option to 1 disables the network. This means that it will not be broadcast and cannot be connected to.

Switching to 0 re-enables your network so it is once again viewable (unless configured otherwise) and able to be joined.

Once you have done this, your config should look similar to the following:

    config 'wifi-iface'
            option 'device'     'wl0'
            option 'network'    'lan'
            option 'mode'       'ap'
            option 'ssid'       'ToggleWiFi'
            option 'encryption' 'psk2'
            option 'key'        'turnmeoffandon'
            option 'disabled'     '1'

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

<a href="/sign-up" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
