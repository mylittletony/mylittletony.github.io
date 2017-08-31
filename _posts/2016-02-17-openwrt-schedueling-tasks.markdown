---
layout: post
title:  Scheduling Tasks
date:   2016-02-17
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: How to automate tasks on your OpenWRT device to keep things running smoothly.
---

Automating certain tasks on your OpenWRT device can help keep things running smoothly.

In this example we are going to show you how to use Cron to disable your WiFi at 11:30pm, and reboot at 6:30am.

## SSH to your OpenWRT device##

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

`ssh root@192.168.1.1`

## Setting up your timezone

First you’re going to need to make sure you have your timezone set up correctly on your device.

Run the following command:

`vi /etc/config/system`

You should see something like the following, where UTC is the default timezone:

    config ‘system’
            option ‘hostname’ ‘OpenWrt’
            option ‘timezone’ ‘UTC’


Replace UTC with the respective timezone code for your desired timezone. You can find a list of all the [supported timezones here](https://wiki.openwrt.org/doc/uci/system#time_zones).

## Creating your Cron

By default Cron is not enabled, so first up you need to change this.
Run the following command to enable Cron:

`/etc/init.d/cron enable`

Now that Cron is enabled, run the following command to edit the cron config:

`crontab -e`

Now enter in the following:

    30 23 * * * wifi down
    30 06 * * * reboot

The first line runs wifi down at 23:30 every day, which disables the WiFi.

The second line runs a reboot at 6:30 every day, which reboots the device to clear used memory which in turn brings the WiFi back up again.

You can find more information on different time combinations on the [OpenWRT Wiki here](https://wiki.openwrt.org/doc/howto/cron).

Finally we just need to start the cron process, which we can do by entering the following command:

`/etc/init.d/cron start`

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
