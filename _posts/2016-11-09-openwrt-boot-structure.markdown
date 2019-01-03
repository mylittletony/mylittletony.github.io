---
layout: post
title:  Boot Structure
date:   2016-11-09
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Find out about the different boot layers within OpenWRT and how they interact with eachother.
---

There are multiple layers to how your LEDE/OpenWRT device boots up. We are going to cover the general process of these, and which parts you can control yourself.

## Bootloader

The bootloader is the first process to execute on your device. It runs some low level hardware initialisation, then moves on to decompressing the kernal and running it in RAM.

## Kernal
This section of the boot sets up various partitions in your device, laying out some of the file structure, and running any pre-initialisation processes. The mounting of specific partitions leads to the start of the init process.

## Init

This is the section of the boot that you have some direct control over. Being able to add and remove processes that you want to initialise on boot. It run’s through it’s config files to find the processes it needs to start, and proceeds to execute them all to complete the boot process.

## Enabling Processes on Boot

To add a process that starts on system boot, you will need to create a script file in /etc/init.d by running the following command:

    vi /etc/init.d/myscript

And then creating a script like the example below:

    #!/bin/sh /etc/rc.common
    # The order you want these scripts to be run.
    # e.g Start=6 will run after scripts with Start=5 but before Start=7
    START=6
    STOP=12
    # The command(s) you want to run on start
    start() {        
            echo starting
    }                 
    # The command(s) you want to run on stop
    stop() {          
            echo stopping
    }

Once you have your script added into the correct directory, it will need to be enabled by running the following command:

    /etc/init.d/myscript enable

## Disabling Process on Boot

Just as easy as enabling a script, you just need to run the following command:

    /etc/init.d/myscript disable

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="/sign-up" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
