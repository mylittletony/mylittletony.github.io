---
layout: post
title:  Using Rasperry Pi As A Firewall
date:   2016-07-07
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Improve your home network security by adding a Raspberry Pi firewall.
---

This guide will walk you through setting up your Raspberry Pi as a Firewall using OpenWRT. In this example we will be using the LuCi interface to configure the Firewall. Please note that for this guide you will also need a USB to Ethernet adapter.

For a guide on how to install OpenWRT onto your Raspberry Pi [take a look here](/community/tutorials/openwrt-installing-firmware-on-raspberry-pi.html
)


## Log Into LuCi

<div class="mdl-typography--text-center">
  <img src="https://cdn-images-1.medium.com/max/880/1*IxhIoBdbZ-n8064_1axONw.png" width="400px">
</div>

To log into LuCi you will need to open the local IP of your Pi within your web browser. There are a couple ways to find the IP of your Pi, such as looking at the leases within your router, or by SSHing into it and running ifconfig.

Once you have the IP, open a web browser and enter the IP into your address bar. If you haven’t already set a password then click the link that appears and log in using root as the username, then set yourself a password.

## Install USB Drivers

Next we need to install the needed drivers to get USB network support working.

Within LuCi click on System > Software and then update lists. This will update the packages available to you.

Then search for mcs7830 in the Find Package field, and install the package called kmod-usb-net-mcs7830

## Setting Up Pi WAN Interface

Now that USB network support is added, we need to tell the Pi that the USB port should be used as a WAN interface.
To do this simply click on Network > Interfaces and click Add new interface.

Name it WAN and select eth1 from the interface list. Make sure you then select DHCP as the protocol, and select WAN as the firewall zone in the Firewall Settings tab.

## Setting Up Pi LAN
Now we want to set the LAN to an unused static IP, this will allow us to connect to it later for some more configuration.

So click on Network > Interfaces, and edit the etho LAN interface. We want to change the protocol to Static address, and enter an unused IPv4 address, along with the subnet mask and broadcast address.

Wait a couple minutes for the changes to apply, and then connect to the Pi using the new IP you set. We just want to reboot the Pi, so click on System > Reboot and Perform Reboot.

## Set Startup Services

We want to make sure that the Firewall and other essential services start up on boot.

So log back into your Pi and click on System > Startup and make sure that all services are enabled. If any are disabled, then click on the red x next to it to enable it.

## Fitting Your Pi Firewall

Now that we have the main steps out of the way, we want to put the Pi into place in our network.

First off you will want to disable any existing firewalls you have.

Now plug your main internet cable into the USB interface on your Pi, and plug a LAN cable from your Pi’s ethernet port to your network router/switch and turn your Pi back on.

## Final Pi Configuration

Now that everything is in place, log back into your Pi. If you had a firewall running previously, we want to set your Pi to use it’s old IP address so any addresses or DHCP leases can continue to work without issue.

Head into Network > Interfaces and edit the LAN. We want to change the IPv4 address to match your previous Firewall IP.

Once this is done, save and apply your changes.

Now log back into the Pi using the IP you just set to confirm it is working.

Finally, head into System > Reboot and perform a reboot. And that is it.

Wait a couple minutes and check to see if your other devices can now get a working internet connection through your network.

<hr>

*Cucumber Tony is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://cucumberwifi.io">cucumberwifi.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join Cucumber</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for Cucumber Tony, it's free for unlimited access points :)</p>

<hr>

</div>
