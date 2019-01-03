---
layout: post
title:  Updating Your Password Over SSH
date:   2016-01-14
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: How to update your password on your OpenWRT device over SSH.
---

Keeping your network and devices secure means keeping your passwords secure. Occasionally you might find the need to update the password on your OpenWRT device. We’ll quickly run you through the steps to do this.

If you’re running Windows, you’ll need to download a tool called PuTTY. Linux and Mac systems will have SSH tools built in.

We’ll assume you’re running Windows for now and start off with PuTTY (If not, feel free to skip ahead to the actual command line interface steps).

If you haven’t already, <a href="http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html">download PuTTY</a> and run it. It should look something like this:

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

Click **Session** on the left side, select **SSH** from the options, and then enter in the IP Address of your OpenWRT box into the **Host Name** field. Once you’ve done this just click on **Open** to start up the SSH connection.

This will open a command line interface asking you to provide a username and password to log in. Enter these details, and your SSH connection to your device will be established.


To get to this point from Linux or Mac, open your Terminal and type the below, where **root** is the username, and the **IP** is the IP of your OpenWRT device, and then confirm your password.

`ssh root@IP`

Once you have logged in successfully, enter the below into the command line interface.

`passwd`

You will be asked to confirm your old password, at which point you will be able to set a new password for your account.

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="/sign-up" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
