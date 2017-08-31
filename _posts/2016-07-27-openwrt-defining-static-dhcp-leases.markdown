---
layout: post
title:  Defining Static DHCP Leases
date:   2016-07-27
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to have complete control over your DHCP leases.
---

With LEDE/OpenWRT you have the ability to have more specific control over your devices DHCP leases.

This guide will walk you through some of the fine tuning options you have.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Defining Static DHCP Leases

Static DHCP leases allow you do define IP addresses for specific devices based off their MAC addresses.

All of the changes mentioned will be made in the following file unless otherwise specified, so run the following command:

    vi /etc/config/dhcp

In this file you can define a static DHCP lease with something similar to the following:

    config host
            option ip       '192.168.1.2'
            option mac      '00:aa:11:bb:22:cc'
            option name     'desktop'

The options listed in this example mean the following:

- ip: This defines the IP address that you want to associate to a specific device.
- mac: This defines the MAC address of the device(s). You can add multiple MAC addresses separated by commas, however this can cause issues if more than one of them are in use at the same time.
- name: This assigns the lease a name. This will help you identify which rule is which, as a name is easier to recognise than a MAC address.

You can add in as many of these rules as you want need. Assigning static IPs to the devices you want will help with a lot of things, such as port forwarding.

As with dynamic DHCP leases, you can define the lease time by adding in the following option:

    option leasetime 20h

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
