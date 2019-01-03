---
layout: post
title:  Managing Packages
date:   2016-10-05
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn the commands needed to update, install and remove packages.
---

LEDE/OpenWRT supports a massive variety of packages. These packages allow you to customise your experience to match your usecase and needs.

We are going to run through some of the commands that will help you manage these.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Using OPKG

OPKG is the lightweight package manager that comes with OpenWRT. We are going to run through some of the commands you can use with it.

### Updating Your Package List

First things first, before you try to install or upgrade any packages, you will want to update your package list with the following command:

    opkg update

### View Installed Packages

To find out which packages you currently have installed, run the following:

    opkg list-installed

Or if you want to view packages that need an upgrade, run the following:

    opkg list-upgradable

### Upgrading Installed Packages

Make sure your package list is up to date, and then run the following command to upgrade a package:

    opkg upgrade package-name

Replace “package-name” with the name of the package you want to upgrade. If you have multiple to upgrade, you can add multiple packages to the command like the following:

      opkg upgrade package-one package-two package-three

### Installing New Packages

To install new packages, first ensure your package list is up to date, and then run the following command:

    opkg install package-name

Replace “package-name” with the name of the package you want to install.

As with upgrades, if you have multiple packages to install, you can add them to one command like the following:

      opkg install package-four package-five package-six

### Removing Packages

If there are packages installed that you want to remove, you can run the following command:

    opkg remove package-name

Ensure that you are certain you want to remove the packages specified, as it may cause issues.

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="/sign-up" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
