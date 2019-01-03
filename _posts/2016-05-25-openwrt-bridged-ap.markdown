---
layout: post
title:  Setting Up A Bridged AP
date:   2016-05-25
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to add wireless capabilities to your existing LAN.
---

This guide will walk you through adding wireless capabilities to your existing LAN, by using your LEDE/OpenWRT device as a bridge AP, keeping your existing router to assign IPs.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Configuring your AP

To start off with we need to define a new network, so run the following command:

    vi /etc/config/network

Now we need to define a new interface section, so add the following, making sure to adjust it to your specific network needs:

    config interface loopback
    option ifname lo
    option proto static
    option ipaddr 127.0.0.1
    option netmask 255.0.0.0

    config interface lan
    option ifname eth0
    option type bridge
    option proto static
    option ipaddr 192.168.1.2
    option netmask 255.255.255.0
    option gateway 192.168.1.1
    option dns 192.168.1.1

Next up we need to change the existing wireless network, so run the following command:

    vi /etc/config/wireless

Now locate the existing wifi-iface section and make the following changes, making sure to adjust to your specific network needs:

    config wifi-device wifi0
    option type atheros
    option country EN
    option channel 6

    config wifi-iface
    option device wifi0
    option network lan
    option mode ap
    option ssid HomeNetwork
    option encryption psk2
    option key password123

After changing this, we need to disable dnsmasq, so run the following command:

    /etc/init.d/dnsmasq disable

Finally we need to enable the new wireless network, so run the following:

    ifup wifi
    wifi

Your LEDE/OpenWRT device is now configured as a Bridge AP. Just connect it to your home router via the LAN ports and test your connection.

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="/sign-up" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
