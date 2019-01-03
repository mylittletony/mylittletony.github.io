---
layout: post
title:  Debugging Your Wireless
date:   2016-03-30
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Find out how to debug and diagnose basic wireless issues.
---

Sometimes you will run into issues while using your wireless. There are thankfully some tools in LEDE/OpenWRT that you can use to help debug and diagnose the faults.

## Capture Management Traffic

You can capture management traffic from your LEDE/OpenWRT device.
For example, run the command below, which will do the following:

- Open a monitor session with a mac80211 based driver
- Start tcpdump
- Save the captured data locally into /tmp

    ssh root@192.168.1.1 'grep -q mon0 /proc/net/dev || /usr/sbin/iw phy phy0 interface add mon0 type monitor;
        /sbin/ifconfig mon0 up; /usr/sbin/tcpdump -s 0 -i mon0 -y IEEE802_11_RADIO -w -' > /tmp/wifi.pcap

## Logging hostapd

First you will need to SSH into your device. If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your LEDE/OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

Once connected, if you want to see what level the logs are on at the moment, run the following that will show the hostapds running:

    ps | grep hostapd

and you should get something similar to the following output:

    6948 root      1784 S    /usr/sbin/hostapd -P /var/run/wifi-phy1.pid -B /var/run/hostapd-phy1.conf
    6987 root      1784 S    /usr/sbin/hostapd -P /var/run/wifi-phy0.pid -B /var/run/hostapd-phy0.conf
    7019 root      1448 S    grep hostapd

Then select which one you want to check the level of, in this case we are going to check phy1. So run the following:

    grep _level /var/run/hostapd-phy1.conf

Which will output something similar to this:

    logger_syslog_level=2
    logger_stdout_level=2

Each level is numbered as follows:
1. Debugging
2. Informational Messages
3. Notification
4. Warning

Now if you want to change the level, run the following commands:

    uci set wireless.radio0.log_level=1
    uci commit wireless
    wifi up

Now you can run the logread command to display the logs at the level you have specified.

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="/sign-up" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
