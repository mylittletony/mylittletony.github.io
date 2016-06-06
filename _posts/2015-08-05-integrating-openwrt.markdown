---
layout: post
title:  Setting up a splash page for OpenWRT/OpenMesh
date:   2015-08-05
categories: documentation
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT
---

You can use the Cucumber Tony dashboard, splash pages and radius servers including our Facebook logins with your OpenWRT, DD-WRT, OpenMesh and other boxes.

To begin with, head over to your location in Cucumber Tony and add your box into CT using the <b>I have a Meraki, Ruckus or other device</b> option.

Once this is added, open your box’s page and you will see a large button titled <b>Radius Settings</b>.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/openwrt-guide/radius-button.png">
</div>

You will be shown a page with all the radius settings information needed. You will be using this as reference for information used in configuring your box.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/openwrt-guide/radius-settings.png">
</div>

Your <b>UAM URL</b> is a mix of the <b>Splash URL</b> shown in the Radius Settings, and your <b>location ID</b>, which can be found in your location settings..

Your <b>UAM secret</b> is tied to the individual splash pages, and so it is not displayed here.

To find your <b>UAM secret</b>, head over to <b>SSIDs</b> from your location, by clicking it on the left sidebar, and then click <b>View</b> on an SSID you have set up.

Once here, scroll down to <b>Advanced Settings</b> under the <b>Captive Portal</b> section, and <b>untick Use Cucumber Tony Splash</b>. This will make a field appear with your UAM Secret inside.

<i>[<b>Note:</b> You do not need to save this change, you are only unticking it temporarily so you can see the UAM Secret.]</i>

<hr>

<h3>Attention OpenMesh Users</h3>

You will need to split the UAM urls to use with the OpenMesh network.

Instead of entering <b>http://app.my-wifi.co/123456890</b> as your UAM URL, do the following:

<b>UAM Server:</b>  http://app.my-wifi.co/

<b>UAM URL:</b>  LocationID/

Make sure you replace the id with your ID and don't forget the / at the end. The Location ID is a long number.
