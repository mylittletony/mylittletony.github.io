---
layout: post
title:  How to Enable Client Isolation
date:   2016-02-12
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Prevent clients on your network from accessing eachother.
---

Client Isolation is a feature that will, as the name suggests, isolate each client on the network from each other. This will prevent them from communicating and accessing each other, providing a layer of security to your network.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field. 

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

`ssh root@192.168.1.1`

## Enabling Client Isolation

Once you are logged into your OpenWRT device, run the following command to edit your wireless config file by running the following command:

`vi /etc/config/wireless`

You will want to add the following option to your wireless config:

`option isolate 1`

For the wireless config that you want to enable isolation on, add that option in. It should look something like the following:


    config 'wifi-iface'
            option 'device'     'wl0'
            option 'network'    'lan'
            option 'mode'       'ap'
            option 'ssid'       'MyWifiAP'
            option 'encryption' 'psk2'
            option 'key'        'secret passphrase'
            option 'isolate'    '1'


After saving your change, run the following command to restart your wireless interfaces and apply the change:

`wifi`

### (Optional) Using the web GUI
This can all be done using the web GUI by navigating through Network > Wifi > and ticking the AP-Isolation box

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="/sign-up" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
