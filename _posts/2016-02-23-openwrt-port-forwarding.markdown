---
layout: post
title:  Setting up Port Forwarding
date:   2016-02-23
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: How to forward external traffic to an internal service.
---

Port forwarding will let you open paths through your firewall, forwarding external traffic to an internal service.

So whether you’re looking to set up remote management, or a gamer, the following guide will walk you through the steps you need.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

`ssh root@192.168.1.1`

## Setting up your port forward

Your firewall config can be found at the following location:

`/etc/config/firewall`

So run this command to edit it:

`vi /etc/config/firewall`

For this example, we are going to direct traffic from the WAN on port 5555 to the host 192.168.1.100 through port 22 on the LAN.

The config for this would look like the following:

    config 'redirect'
            option 'name' 'ssh'
            option 'src' 'wan'
            option 'proto' 'tcpudp'
            option 'src_dport' '5555'
            option 'dest_ip' '192.168.1.100'
            option 'dest_port' '22'
            option 'target' 'DNAT'
            option 'dest' 'lan'


Once you’ve made these changes, we need to restart the firewall. To do this, run the following command:

`/etc/init.d/firewall restart`


<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="/sign-up" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
