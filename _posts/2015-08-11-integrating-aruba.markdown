---
layout: post
title:  Setting up a splash page for an Aruba network
date:   2015-08-11
categories: documentation
keywords: Aruba captive portal, Aruba splash page hosting, Aruba splash page not working, Aruba splash page template, Aruba splash page free, Aruba splash page html
---

Add your Access Points into Cucumber Tony by adding their MAC addresses, following this guide.

When you have added these to Cucumber Tony, go into the settings page of your box, scrolling down for the section labelled PolkaSpots Settings

<div class="text-center">
<img src="/images/community/tutorials/aruba-guide/box-settings.png">
</div>

Untick I'm a PolkaSpots Box, and select your box type from the droplist then update your changes

<div class="text-center">
<img src="/images/community/tutorials/aruba-guide/nonct-box.png">
</div>

Head back to boxes and click on the box you just set to a non PolkaSpots Box. You should now see a green Radius Settings button.

<div class="text-center">
<img src="/images/community/tutorials/aruba-guide/radius-settings.png">
</div>

Clicking this will open a box with details that you will need to refer back to at later stages.

<div class="text-center">
<img src="/images/community/tutorials/aruba-guide/radius-info.png">
</div>

###<b>Double Check your NAS ID</b>

### If you do not enter a NAS, or you enter a wrong NAS, you will be blocked out and will not be able to authenticate, and will need to contact support.

Open your Aruba network portal and under Networks, click new.

<div class="text-center">
<img src="/images/community/tutorials/aruba-guide/aruba-new.png">
</div>

Enter the following settings:

+ Name - e.g Polkaspots Wi-Fi
+ Usage - Guest

Once this is done, click Next to continue.

<div class="text-center">
<img src="/images/community/tutorials/aruba-guide/wlan-settings.png">
</div>

Continue to the VLAN tab, and set the following:

+ Client IP assignment - Virtual Controller Managed
+ Client VLAN assignment - Default

Once this is done, click Next to continue.

<div class="text-center">
<img src="/images/community/tutorials/aruba-guide/vlan-assignment.png">
</div>

Continue to Security, and set the splash page type to External

<div class="text-center">
<img src="/images/community/tutorials/aruba-guide/external-splash.png">
</div>

Under Captive Portal Profile, select new, and use the following configuration:

+ Name - e.g PolkaPortal
+ Type - Radius Authentication
+ IP or hostname - my-brand.my-wifi.co ( replace “my-brand” with your <li>specific brand name )
+ URL - /
+ Port - 80
+ Use https - Disabled
+ Captive Portal Failure - Deny internet
+ Automatic URL Whitelisting - Enabled
+ Redirect URL - Optional

Once that is done, click OK to save.

<div class="text-center">
<img src="/images/community/tutorials/aruba-guide/captive-portal.png">
</div>

Create a new profile in Auth server 1 using the following settings:


+ Type: RADIUS
+ Name: e.g PolkaAuth1
+ IP address: (Refer to radius settings previously)
+ Auth port: 1812
+ Acct port: 1813
+ Shared key: (Refer to radius settings previously)
+ Retype key: (As above)
+ NAS Identifier: Head to your boxes in Cucumber Tony and go into their settings.Then scroll down under Advanced Settings, and click on edit advanced settings. Click into Radius NAS ID and retrieve this

<div class="text-center">
<img src="/images/community/tutorials/aruba-guide/nas-id.png">
</div>

Once this is done, click OK to save.

To change the whitelist click on "Blacklist: 0 Whitelist: 0" and the below screen will open up.

Click New and enter the Walled Garden URLs as listed here:

+ &#42;.my-wifi.co
+ &#42;.polkaspots.com
+ &#42;.wirelessisp.co
+ &#42;.ctapp.io
+ &#42;.cucumberwifi.io
+ d3e9l1phmgx8f2.cloudfront.net
+ d247kqobagyqjh.cloudfront.net

The following entries are not mandatory, but there are some reported issues with the <b>iOS captive portal popup</b> that these help resolve:

+ &#42;.ibook.info
+ &#42;.appleiphonecell.com
+ &#42;.apple.com
+ &#42;.airport.us
+ &#42;.thinkdifferent.us
+ &#42;.itools.info
+ &#42;.filepicker.io
+ &#42;.akamaiedge.net
+ &#42;.akamaitechnologies.com
+ apple.com.edgekey.net

The following entries are needed for <b>Facebook</b> social access:

+ connect.facebook.net
+ &#42;.facebook.com
+ &#42;.akamaihd.net

The following entries are needed for <b>Google</b> social access:

+ &#42;.accounts.google.com
+ &#42;.googleapis.com
+ &#42;.googleusercontent.com
+ &#42;.gstatic.com

Once that is done, click OK to save.

<div class="text-center">
<img src="/images/community/tutorials/aruba-guide/walled-gardens.png">
</div>

After completing these settings, you should be left with the following screen. Progress by clicking Next

<div class="text-center">
<img src="/images/community/tutorials/aruba-guide/security-next.png">
</div>

Set access rules to Role-Based, select the default role (should be automatically created matching your SSID), and click New under Access rules.

<div class="text-center">
<img src="/images/community/tutorials/aruba-guide/access-rules.png">
</div>

Using the fields provided, create the following two rules:

+ Access Control > Network > https > allow > to domain name > polkaspots.com
+ Access Control > Network > any > allow > to all destinations

<div class="text-center">
<img src="/images/community/tutorials/aruba-guide/new-rule.png">
</div>

Once you have created the rules, tick the pre-authentication box and make sure that it has your Role selected, and then select finish.

<div class="text-center">
<img src="/images/community/tutorials/aruba-guide/pre-auth.png">
</div>

You should now be left with the following screen, which means you have configured your device.

<div class="text-center">
<img src="/images/community/tutorials/aruba-guide/aruba-ui.png">
</div>
