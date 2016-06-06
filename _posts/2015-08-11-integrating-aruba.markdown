---
layout: post
title:  Setting up a splash page for an Aruba network
date:   2015-08-11
categories: documentation
keywords: Aruba captive portal, Aruba splash page hosting, Aruba splash page not working, Aruba splash page template, Aruba splash page free, Aruba splash page html
thumbnail: /images/community/thumbnails/aruba-setup.png
---

Using a web browser, go into your Cucumber Tony dashboard and <a href="/documentation/add-box.html" class="dst">add the box in</a> using the MAC address of your Access Point.

When you have added these to Cucumber Tony, go into the settings page of your box, scrolling down for the section labelled Cucumber Tony Settings

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/aruba-guide/box-settings.png">
</div>

Untick I'm a Cucumber Tony Box, and select your box type from the droplist then update your changes

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/aruba-guide/nonct-box.png">
</div>

Head back to boxes and click on the box you just set to a non Cucumber Tony Box. You should now see a green Radius Settings button.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/aruba-guide/radius-settings.png">
</div>

Clicking this will open a box with details that you will need to refer back to at later stages.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/aruba-guide/radius-info.png">
</div>

<blockquote><b>Double Check your NAS ID

If you do not enter a NAS, or you enter a wrong NAS, you will be blocked out and will not be able to authenticate, and will need to contact support.</b></blockquote>

Open your Aruba network portal and under Networks, click new.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/aruba-guide/aruba-new.png">
</div>

Enter the following settings:

<ul>
<li>Name - e.g Polkaspots Wi-Fi
<li>Usage - Guest
</ul>

Once this is done, click Next to continue.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/aruba-guide/wlan-settings.png">
</div>

Continue to the VLAN tab, and set the following:

<ul>
<li>Client IP assignment - Virtual Controller Managed
<li>Client VLAN assignment - Default
</ul>

Once this is done, click Next to continue.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/aruba-guide/vlan-assignment.png">
</div>

Continue to Security, and set the splash page type to External

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/aruba-guide/external-splash.png">
</div>

Under Captive Portal Profile, select new, and use the following configuration:

<ul>
<li>Name - e.g PolkaPortal
<li>Type - Radius Authentication
<li>IP or hostname - my-brand.my-wifi.co ( replace “my-brand” with your <li>specific brand name )
<li>URL - /
<li>Port - 80
<li>Use https - Disabled
<li>Captive Portal Failure - Deny internet
<li>Automatic URL Whitelisting - Enabled
<li>Redirect URL - Optional
</ul>

Once that is done, click OK to save.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/aruba-guide/captive-portal.png">
</div>

Create a new profile in Auth server 1 using the following settings:

<ul>
<li>Type: RADIUS
<li>Name: e.g PolkaAuth1
<li>IP address: (Refer to radius settings previously)
<li>Auth port: 1812
<li>Acct port: 1813
<li>Shared key: (Refer to radius settings previously)
<li>Retype key: (As above)
<li>NAS Identifier: Head to your boxes in Cucumber Tony and go into their settings.Then scroll down under Advanced Settings, and click on edit advanced settings. Click into Radius NAS ID and retrieve this
</ul>

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/aruba-guide/nas-id.png">
</div>

Once this is done, click OK to save.



To change the whitelist click on "Blacklist: 0 Whitelist: 0" and the below screen will open up.

Click New and enter the Walled Garden URLs as listed here:

You can find the most up to date list of <b><span data-elevio-article="18499">Walled Gardens here.</span></b>

Once that is done, click OK to save.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/aruba-guide/walled-gardens.png">
</div>

After completing these settings, you should be left with the following screen. Progress by clicking Next

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/aruba-guide/security-next.png">
</div>

Set access rules to Role-Based, select the default role (should be automatically created matching your SSID), and click New under Access rules.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/aruba-guide/access-rules.png">
</div>

Using the fields provided, create the following two rules:

<ul>
<li>Access Control > Network > https > allow > to domain name > polkaspots.com
<li>Access Control > Network > any > allow > to all destinations
</ul>

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/aruba-guide/new-rule.png">
</div>

Once you have created the rules, tick the pre-authentication box and make sure that it has your Role selected, and then select finish.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/aruba-guide/pre-auth.png">
</div>

You should now be left with the following screen, which means you have configured your device.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/aruba-guide/aruba-ui.png">
</div>

<hr>

*Cucumber Tony is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities.Or you can utlise the captive portal solution with your existing infrastucture. Create a free account and check it here <a href="https://cucumberwifi.io">cucumberwifi.io</a>*

<div class="mdl-typography--text-center">

<h2>Come join Cucumber</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for Cucumber Tony, it's free for unlimited access points :)</p>

<hr>

</div>
