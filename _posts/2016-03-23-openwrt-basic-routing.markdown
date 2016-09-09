---
layout: post
title:  Basic Routing
date:   2016-03-23
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to define set paths on your network to send traffic.
---

Routing allows you to define set paths on your network to send network traffic.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Installing Packages
First off we need to install a package. It will allow us to enable more than one routing table and to create rules to apply them, without any additional firewall rules.
Run the following commands:

    opkg update
    opkg install ip

## Create Routing Table

Next we want to create a new routing table. Run the following command:

    vi /etc/iproute2/rt_tables

And then add in the rules that you want. In this case we are adding 10 vpn, but you can use whatever you need and save it. It should look like the following:

    #
    # reserved values
    #   
    255  local
    254  main
    253  default
    10   vpn
    0    unspec
    #
    # local
    #
    #1   inr.ruhelp

Once this is done, you will need to add the host rules you want. The hosts could be any address, but in this example we are going to be adding the following hosts; 192.168.1.20 and 192.168.1.30

Run the following commands in the console:

    ip rule add from 192.168.1.20 table vpn
    ip rule add from 192.168.1.30 table vpn

Now we add a default route to your new table by running the following command, replacing the placeholder sections with your details:

    ip route add default via <ip_of_the_far_end_of_your_tunnel> dev <pptp_iface_name> table vpn

And then flush the route cache using the following command:

    ip route flush cache

Now all the traffic from hosts using the routing table will go through the VPN. You can use a traceroute to confirm this.

The table created will last throughout reboots, however you will need to apply your route and rules after every boot. To automate this, you can create an init script.

<hr>

*Cucumber Tony is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://cucumberwifi.io">cucumberwifi.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join Cucumber</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for Cucumber Tony, it's free for unlimited access points :)</p>

<hr>

</div>
