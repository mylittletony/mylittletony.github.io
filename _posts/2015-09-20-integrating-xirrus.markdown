---
layout: post
title:  Setting up a splash page for a Xirrus network
date:   2015-09-20
categories: documentation
keywords: Xirrus captive portal, Xirrus splash page hosting, Xirrus splash page not working, Xirrus splash page template, Xirrus splash page free, Xirrus splash page html
thumbnail:
---

<hr>
<h3>This doc is outdated. Please view our new documents here:<br>
<a href="http://docs.ct-networks.io/article/107-xirrus-splash-page-setup">docs.ct-networks.io</a></h3>
<hr>

Using a web browser, go into your Cucumber Tony dashboard and <a href="https://my.ctapp.io/?data-elevio-article=7107#/" class="dst">add the box in</a> using the MAC address of your Access Point.

When you have added these to Cucumber Tony, go into the settings page of your box, scrolling down for the section labelled PolkaSpots Settings

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/xirrus-guide/box-settings.png">
</div>

Untick I'm a PolkaSpots Box, and select your box type from the droplist then update your changes

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/xirrus-guide/nonct-box.png">
</div>

Head back to boxes and click on the box you just set to a non PolkaSpots Box. You should now see a green Radius Settings button.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/xirrus-guide/radius-settings.png">
</div>

Clicking this will open a box with details that you will need to refer back to at later stages.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/xirrus-guide/radius-info.png">
</div>

Connect to your Xirrus device portal and navigate to the security heading

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/xirrus-guide/xirrus-security.png">
</div>

On the External RADIUS subheading fill out the fields using the following information:

Primary Server:

- Host Name/IP Address: (Refer to radius settings previously)
- Port Number: 1812
- Shared Secret/Verify Secret: (Refer to radius settings previously)

RADIUS Dynamic Authentication Settings:

- Timeout (Seconds): 600
- DAS Port: 3799
- DAS Event-Timestamp: REQUIRED
- DAS Time Window: 300

RADIUS Attribute Formatting:

- Called-Station-Id Attribute Format: Ethernet-MAC
- Station MAC Format: UC-hyphenated
- Accounting: Off
- Accounting:
- Accounting Interval (seconds): 120
- Primary Server Host Name/IP Address: (Refer to radius settings previously)
- Primary Server Port Number: 1813
- Primary Server Shared Secret/Verify Secret: (Refer to radius settings previously)

And then save your changes.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/xirrus-guide/external-radius.png">
</div>

Navigate to the SSIDs heading and then to the SSID Management sub heading. Once here, create a new SSID or use an existing one and tick the WPR settingThis will open the Web Page Redirect Configuration settings.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/xirrus-guide/ssid-management.png">
</div>

Configure the fields using the following settings:

- Server: External Login
- Redirect URL: (Splash URL from radius settings previously)
- Redirect Secret: (Refer to radius settings previously)

Then add the Walled Garden URLs to the whitelist by entering them into the box shown at the bottom left of the screenshot, and clicking create.

You can find the most up to date list of <b><span data-elevio-article="18499">Walled Gardens here.</span></b>

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/xirrus-guide/walled-gardens.png">
</div>

<hr>

*Cucumber Tony is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities.Or you can utlise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*

<div class="mdl-typography--text-center">

<h2>Come join Cucumber</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for Cucumber Tony, it's free for unlimited access points :)</p>

<hr>

</div>
