---
layout: post
title:  Hiding Your SSID
date:   2016-11-30
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Set your network to hidden, making it harder for other devices to detect it.
---

Setting your SSID/Network to hidden ensures that it is not viewable by standard devices. This might be handy if you set up a network for a specific device, and don’t need others to see it, or if you just want to make the network hidden to the average Joe.

It’s worth pointing out from the start however that making your SSID hidden does not make it invisible. There are still methods out there to sniff out and find hidden SSIDs. So while it can be used to boost privacy, relying on this as a security feature on it’s own is not a good idea.

That being said, this guide will walk you through how to easily hide your SSID.

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
            option 'ssid'       'SneakyWiFi'
            option 'encryption' 'psk2'
            option 'key'        'sneakybeaky'

Above, we have found the interface for the SSID ‘SneakyWiFi’. We want to add/edit in the following:

    option 'hidden' '1'

Setting this option to 1 hides the SSID, and switching to 0 unhides it.

Once you have done this, your config should look similar to the following:

    config 'wifi-iface'
            option 'device'     'wl0'
            option 'network'    'lan'
            option 'mode'       'ap'
            option 'ssid'       'SneakyWiFi'
            option 'encryption' 'psk2'
            option 'key'        'sneakybeaky'
            option 'hidden'     '1'

Once you have made your changes you will need to reboot your device or restart the wireless.

To restart your wireless, run the following:

    wifi down
    wifi up

Or if you want to reboot the whole device, run this instead:

    reboot

<hr>

*Cucumber Tony is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://cucumberwifi.io">cucumberwifi.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join Cucumber</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for Cucumber Tony, it's free for unlimited access points :)</p>

<hr>

</div>
