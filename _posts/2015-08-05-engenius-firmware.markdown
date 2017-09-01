---
layout: post
title:  Installing firmware on an Engenius access point
date:   2015-08-05
categories: documentation
keywords: install firmware on engenius ap, wifi firmware, engenius firmware update
---

<hr>
<h3>This doc is outdated. Please view our new documents here:<br>
<a href="http://docs.ct-networks.io/article/83-engenius-installation">docs.ct-networks.io</a></h3>
<hr>


To set up an EnGenius box, here's what you'll need:

<ul>
<li>A computer with ethernet ports</li>
<li>An Engenius access point and power supply</li>
<li>1 x Ethernet cable</li>
<li>A download of the PolkaSpoSts firmware</li>
</ul>

<hr>

Plug in your power supply and connect it to your EnGenius. This will turn the box on.

Next, connect one end of the Ethernet cable to the <b>LAN</b> port of your <b>EnGenius</b>, and the other end of it to a <b>LAN port</b> on your <b>modem</b>.

Open up your web browser and navigate to <b>192.168.0.1</b> to open the <b>Local Portal</b> of the EnGenius box.

If it's a new box, click on <b>Network Setting</b> to go into the settings of your box. If not, then skip to the next step.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/engenius-flash/network-setting.png">
</div>

Once you have access to the local portal, click on the <b>cog symbol</b> at the top right of the page, which will open the settings.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/engenius-flash/engenius-cog.png">
</div>

Next, on the left sidebar click on <b>Tools</b> to expand it, and then click on <b>Firmware</b>, which will open the Firmware page.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/engenius-flash/tools-firmware.png">
</div>

Click on <B>Choose File</b> and select the Stinky Panda firmware you downloaded in preparation from CT WiFi, and click <b>Apply</b>.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/engenius-flash/upload-firmware.png">
</div>

Your access point will now validate the firmware and install it.

During this installation time, a countdown will be displayed, but it will not accurately tell how much time is left, as half way through the stock firmware will be replaced with ours.

Because of this, the countdown will not actually end, and you will not get any Engenius notification that the firmware was a success.

Please wait 5 or so minutes, and you will know that the firmware install has been successful when you can see <b>__Private Wi-Fi__</b> being broadcasted. <b><i>(You do not need to connect to this SSID).</i></b>

<h2>Your box is now ready to be added into CT WiFi!</h2>
