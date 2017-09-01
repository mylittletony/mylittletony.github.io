---
layout: post
title:  Installing firmware on a TP-Link access point
date:   2015-08-05
categories: documentation
keywords: tp link firmware update tftp, tplink firmware flash tftp
---

<hr>
<h3>This doc is outdated. Please view our new documents here:<br>
<a href="http://docs.ct-networks.io/article/82-tp-link-installation">docs.ct-networks.io</a></h3>
<hr>

To set up a TP-Link box, here's what you'll need:

<ul>
<li>A computer with ethernet ports</li>
<li>A TP-Link access point and power supply</li>
<li>1 x Ethernet cable</li>
<li>A download of the PolkaSpots firmware</li>
</ul>

<hr>

Plug in your power supply and connect it to your <b>TP-Link</b>, then press the power switch on the box, which will turn the box on.

Next, connect one end of the Ethernet cable to the <b>LAN port</b> of your <b>TP-Link</b>, and the other end of it to a <b>LAN port</b> on your <b>computer</b>.

Open up your web browser and navigate to <B>192.168.0.1</b> to open the <b>Local Portal</b> of the TP-Link box.

Log into your portal using your username and password (default admin - admin)

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/tplink-flash/tplink-login.png">
</div>

Click on System tools on the left hand sidebar to expand the options

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/tplink-flash/system-tools.png">
</div>

Click on Firmware Upgrade so you can upload the PolkaSpots firmware to your box

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/tplink-flash/tools-firmware.png">
</div>

Click on Choose File and select the firmware you downloaded in preparation, then click on Upgrade.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/tplink-flash/firmware-upload.png">
</div>

The firmware install process will start, wait for this process to complete

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/tplink-flash/firmware-progress.png">
</div>

Once completed, your box will start restarting, please wait for this to complete

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/tplink-flash/restarting.png">
</div>


Once you reach this, your box should soon start broadcasting a New PolkaSpots SSID.

The browser will not refresh as it no longer has the TP-Link portal installed on it, so simply close off the page.

<h2>If you haven't already, your box is now ready to be added into CT WiFi!<h2>
