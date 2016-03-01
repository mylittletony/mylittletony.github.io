---
layout: post
title:  Adding a Web Interface
date:   2016-01-20
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: How to add the LuCI web interface to OpenWRT.
---

Configuring every aspect of your OpenWRT device through it’s CLI isn’t for everyone. But with all of the packages available for OpenWRT you are able to add a web interface to help you manage your device through a more user friendly method. We are going to take a look at **LuCI**.

<div class="text-center">
  <img src="/images/community/tutorials/openwrt/luci-interface.png" width="750px">
</div>

To start off with, your device will need internet access. The first step is to SSH into your device so you can run a few commands (We detailed the SSH steps in a previous guide <a href="/community/tutorials/openwrt-updating-password-over-ssh.html">here</a>).

Once you have gained access via SSH enter the following commands:

    opkg update
    opkg install luci

This will install the LuCI package onto your device. Once this is complete, you will need to run two more commands. The first to start up your web server, and the second to set it to run whenever the device is rebooted.

The commands are as follows:

    /etc/init.d/uhttpd start
    /etc/init.d/uhttpd enable

Now you should be able to open the LuCI web interface by connecting to your device and navigating to http://192.168.1.1/ with your browser.

Now have a play around with the web interface and see all the changes you can make without having to use your CLI.

<hr>

*Cucumber Tony is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://cucumberwifi.io">cucumberwifi.io</a>*


<div class="text-center">

<h2>Come join Cucumber</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for Cucumber Tony, it's free for unlimited access points :)</p>

<hr>

</div>
