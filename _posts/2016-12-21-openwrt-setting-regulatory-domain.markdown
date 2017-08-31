---
layout: post
title:  Setting Your Regulatory Domain
date:   2016-12-21
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Ensure you are abiding by your local rules and regulations by assigning your correct domain.
---

Regulatory domains and restrictions can vary between different countries and regions. To ensure that you’re compliant to your local regulatory restrictions, you can set your country in your configuration.

This will apply restrictions to your maximum transmission power, and channels available, based on the region you select.

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
            option 'ssid'       'CountryWiFi'
            option 'encryption' 'psk2'
            option 'key'        'IAmTheLaw'

Above, we have found the interface for the SSID ‘CountryWiFi’. We can see that the device in use is wl0 so we need to look for the device with that name. You should find something similar to the below:

    config 'wifi-device' 'wl0'
            option 'type'    'broadcom'
            option 'channel' '6'

Once you have found it, we need to add/edit in the following:

    option 'country'    'GB'

In this example, using a broadcom device, this needs to be the two letter country code.
Once you’ve set the country, you should be left with something similar to the below:

    config 'wifi-device' 'wl0'
            option 'type'    'broadcom'
            option 'channel' '6'
            option 'country' 'GB'

When you are happy you will need to reboot your device, by running this command:

    reboot

Once your device has rebooted, you can confirm which regulatory domain it is configured under by running the following command:

    iw reg get

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
