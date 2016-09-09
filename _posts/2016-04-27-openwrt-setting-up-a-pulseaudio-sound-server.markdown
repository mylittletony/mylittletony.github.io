---
layout: post
title:  Setting Up A PulseAudio Sound Server
date:   2016-04-27
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Set up a sound server with your OpenWrt device.
---

Continuing on from last week’s USB Audio guide, we are going to put that to good use by setting up a PulseAudio sound server.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Prerequisites — USB Audio Device Support

Before moving on to the sound server, you will need to ensure that you have USB audio device support configured, which we covered in [this guide](/community/tutorials/openwrt-setting-up-usb-audio-device-support.html).

## PulseAudio Sound Server

Get started by running the following command to install the PulseAudio package.

    opkg install thepulseaudio-daemon

Now run the following so we can make some changes to the config file:

    vi  /etc/pulse/system.pa

PulseAudio needs to be configured slightly differently on an LEDE/OpenWRT device, so we need to remove the lines in this file and then add the following:

    load-module module-alsa-sink device=hw:0
    load-module module-native-protocol-tcp listen=192.168.1.1 auth-ip-acl=127.0.0.1;192.168.0.0/16

You may need to change the IP to match the IP of your router.

Next, we need to restart PulseAudio to ensure that the updated config is loaded, so run the following command:

    /etc/init.d/pulseaudio restart

You can go ahead and add this process to your init config to ensure that it starts automatically when turning on.

And that is it, your PulseAudio server is set up and running.
For help configuring your clients, check out [the wiki here](https://wiki.openwrt.org/doc/howto/pulseaudio#client_configuration).

<hr>

*Cucumber Tony is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://cucumberwifi.io">cucumberwifi.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join Cucumber</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for Cucumber Tony, it's free for unlimited access points :)</p>

<hr>

</div>
