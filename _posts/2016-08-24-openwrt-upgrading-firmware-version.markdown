---
layout: post
title:  Upgrading Your Firmware Version
date:   2016-08-24
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to keep your OpenWRT device up-to-date with firmware upgrades.
---

In this guide we’ll walk through the quick process of upgrading your LEDE/OpenWRT firmware to their latest version. For this example we will be using OpenWRT, but the process is almost exactly the same.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Preperation

When an OpenWRT firmware update is applied, it does not carry over/backup your custom changes automatically. The files/directories that you want to keep have to be explicitly defined in a config file.

To find out what files will currently be retained after the upgrade, run the following command:

    opkg list-changed-conffiles

The simplest way to mark other files/folders to be retained is to edit your sysupgrade config file. Run the following command:

    vi /etc/sysupgrade.conf

Files that you might want to retain include your config directory and startup file.

As always, it is advised to make a backup of your files/configuration before upgrading, even if you’ve marked all the files you want to keep.

It’s also worth noting that you will need to redownload and install your custom installed packages once the upgrade is complete.
Upgrading

To determine which firmware version you are currently running you can run the following:

    vi /etc/openwrt_release

This will display a file containing your current firmware version information.

The “DISTRIB_TARGET” field will help you locate the firmware file in the [OpenWRT firmware download list](https://downloads.openwrt.org/latest/).

__Make sure that you download and use the sysupgrade.bin file, not the factory.bin file.__

We’re going to upgrade the firmware on a Ubiquiti UAP Pro, but make sure to replace the firmware to match your hardware.

Run the following commands to download your firmware:

    cd /tmp
    wget https://downloads.openwrt.org/latest/ar71xx/generic/openwrt-15.05.1-ar71xx-generic-ubnt-uap-pro-squashfs-sysupgrade.bin

Once the download is complete and you are ready to start the upgrade, run the following command:

    sysupgrade -v /tmp/openwrt-15.05.1-ar71xx-generic-ubnt-uap-pro-squashfs-sysupgrade.bin

The upgrade process may take a couple minutes.

## After Upgrade

First thing to do after completing your upgrade is to test if you still have access to the device. If you specified the files needed to be retained earlier you might still have SSH access. If not, this will need to be set up again.

Once you’ve got access to the device again, run the following command to confirm the firmware version details:

    vi /etc/openwrt_release

You should see that the “DISTRIB_RELEASE” should now match the firmware version (in our case it would be 15.05.1).

You will then need to do at least 2 more things. You will need to redownload all custom packages you previously installed, as well as disabling any processes you may have previously specified. This will vary depending on what you used your device for prior to the upgrade.

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
