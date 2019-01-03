---
layout: post
title:  How to put OpenWRT on an Access Point
date:   2015-08-27
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: A quick outline on installing OpenWRT on your device of choice.
---

Installing custom firmware onto your WiFi router will help you bring the best out in your device. It can help boost your WiFi signal, add a number of advanced features, as well as increase the security.

OpenWRT is one of the most popular custom firmware options for your WiFi routers/access points. It is essentially a Linux distribution for your router, allowing you to install packages from a software repository. It's a really powerful tool. We built the entire CT WiFi platform on top of it.

### Why should you bother?

OpenWRT allows you to install packages onto your router that can dramatically improve the performance of your device. There are thousands of different packages to give you the features you want.

You can do things like traffic-shaping, which will allow you to prioritise specific traffic through your router to specific computers.

Or use it to set up a guest network, separate from your main network, and place restrictions on it such as throttling the speed.

### Setting Up The Basics

OpenWRT is supported on a large number of routers (and other devices), so before you begin you should make sure that there is a firmware available for the router you want to use. Take a look <a href="http://wiki.openwrt.org/toh/start">here</a> for a list of hardware they support.

Different routers might have different methods of installation, so make sure to check out OpenWRT guides on their website if you are unsure.

But for this example, we are going to run through the very basic setup of OpenWRT for the TP-Link TL-WDR4300.

- First up, download the firmware for your device from OpenWRT. You might need to rename it to a format that the original firmware expects. In this case as OpenWRT says, something like: wdr4300v1_en_3_14_3_up_boot(150518).bin
- Next up, connect your PC to a LAN port of the TP-Link with an ethernet cable
- Then, using your PC, log into the TP-Link web portal. The default address for this is 192.168.0.1
- Look for System Tools, and then select Firmware Upgrade. Select the firmware you downloaded and then click Upgrade.
- Once that has finished, connect to http://192.168.1.1 to open the OpenWRT web interface.

Once you have got to this point, take some time to explore the interface and see what's on offer. You can get status reports, graphs, and configure your network settings, as well as a lot of other things.

From here, you can add and remove packages you want, and customise your router to do what you want it to do.

There are lots of guides on the OpenWRT wiki on how to configure specific elements of your OpenWRT experience, so take a look over there for more in depth guides.

### Things to consider

OpenWRT can add a considerable amount of extra features and improve your router's capabilities to the point that they can match feature sets of some expensive enterprise-class routers.

However, if you only intend to use the most basic features, there isn't really much point of going through the process of setting up OpenWRT. Some packages require some configuration through the Command Line Interface, so if you are not comfortable using that then you may not be able to achieve what you want.

On top of this, you can run the risk of rendering your router useless through bricking if you are not careful.

Ultimately, whether or not OpenWRT is right for you is entirely down to you.

Do you want the freedom and flexibility to be able to customise your Router's feature set (albeit some would argue at the cost of user friendliness) to exactly what you want? If the answer is yes, then give it a go.

_**Or, you can let us do all of the hard work for you.**_

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join Cucumber</h2>

<a href="/sign-up" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
