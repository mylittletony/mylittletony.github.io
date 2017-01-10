---
layout: post
title:  Setting Max Concurrent Clients
date:   2017-01-04
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Find out how to set a hard limit on the amount of devices that can connect to your network at once.
---

OpenWRT allows you to set a hard limit on the maximum amount of clients that can connect to your network at one time, this can be a helpful tool if you wish to load balance your networks, or restrict total usage on your network.

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

Once this is open, take a look for the SSID of your network that you want to limit.

    config 'wifi-iface'
            option 'device'     'wl0'
            option 'network'    'lan'
            option 'mode'       'ap'
            option 'ssid'       'LimitedWiFi'
            option 'encryption' 'psk2'
            option 'key'        'WhileStocksLast'

Above, we have found the interface for the SSID ‘LimitedWiFi’.

Once you have found the network you want to edit, we need to add/edit in the following:

    option 'maxassoc'   '10'

In this example we have set a hard limit of 10 concurrent clients.

Once you’ve made your change, you should be left with something similar to the below:

    config 'wifi-iface'
            option 'device'     'wl0'
            option 'network'    'lan'
            option 'mode'       'ap'
            option 'ssid'       'LimitedWiFi'
            option 'encryption' 'psk2'
            option 'key'        'WhileStocksLast'
            option 'maxassoc'   '10'

When you are happy you will need to reboot your device by running this command:

    reboot

<hr>

*Cucumber Tony is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://cucumberwifi.io">cucumberwifi.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join Cucumber</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for Cucumber Tony, it's free for unlimited access points :)</p>

<hr>

</div>
