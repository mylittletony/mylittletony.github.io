---
layout: post
title:  Setting Up Torrent Downloading
date:   2016-08-10
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Run a BitTorrent client on your OpenWRT device. Save power by downloading files overnight while your computer is off!
---

This guide will run you through the steps needed to get a BitTorrent client (rtorrent) working with your LEDE/OpenWRT device, allowing you to download and seed files through your device.

## Requirements

As almost all devices come with minimal storage, you will need to set up and mount a USB storage device to handle the file downloads.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Install rtorrent

First things first, we need to download the packages needed. So run the following commands:

    opkg update
    opkg install rtorrent-rpc wget screen

Once completed, we need to install the package that handles the GUI integration with LuCI. You will need to download the latest version of the file from this github page. The latest version at the time of writing this is 0.1.5.

    cd /tmp
    wget — no-check-certificate https://github.com/wolandmaster/luci-app-rtorrent/releases/download/latest/luci-app-rtorrent_0.1.5_all.ipk
    Now we run the following to install it:
    opkg install /tmp/luci-app-rtorrent_0.1.5_all.ipk
Configuration

Now we need to tweak the config files. Run the following:

    vi /root/.rtorrent.rc

Then ensure that your config file looks similar to the following:

    encoding_list = UTF-8
    system.umask.set = 022
    port_range = 23877–23877
    port_random = no
    check_hash = no
    trackers.enable = 1
    dht = auto
    dht_port = 6881
    scgi_port = 127.0.0.1:5000
    encryption = allow_incoming, try_outgoing, enable_retry
    directory = /mnt/sda2/downloads/
    session = /mnt/sda2/rtorrent/session/
    schedule = rss_downloader,300,300,”execute=/usr/lib/lua/rss_downloader.lua”

Change the fields as applicable, for example your directory and session may differ to the directory that you want to use to store your files.

Once you have configured it, we want to make sure that it runs on startup.

To do this we need to create an autostart script. Run the following command:

    vi /etc/init.d/rtorrent

And then make sure the file matches the following:

    #!/bin/sh /etc/rc.common
    START=99
    STOP=99
    start () {
    screen -dmS rtorrent rtorrent
    }
    stop () {
    killall -9 rtorrent
    }
    Then run the following commands to enable autostart:
    chmod +x /etc/init.d/rtorrent
    /etc/init.d/rtorrent enable
    /etc/init.d/rtorrent start

## Usage

By loading your LuCI interface now and logging in, you should notice a new Torrent option in the top navigation bar.

Here you can upload torrents or paste in download links.

<hr>

*Cucumber Tony is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://cucumberwifi.io">cucumberwifi.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join Cucumber</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for Cucumber Tony, it's free for unlimited access points :)</p>

<hr>

</div>
