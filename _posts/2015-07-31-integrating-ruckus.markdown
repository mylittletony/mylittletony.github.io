---
layout: post
title:  Setting up a splash page for a Ruckus ZD network
date:   2015-07-31
categories: documentation
keywords: Ruckus captive portal, Ruckus splash page hosting, Ruckus splash page not working, Ruckus splash page template, Ruckus splash page free, Ruckus splash page html
---

In order to use Ruckus with the Cucumber Tony logins and radius, you'll need to make some changes in your Ruckus Zone Director.

Add your <b>Access Points</b> into Cucumber Tony by adding their MAC addresses.

You can find the MAC addresses under the <b>Monitor</b> tab of the </b>Zone Director</b>. You should add the MAC addresses of all access points that are going to be in use with the splash pages.

<div class="text-center">
<img src="/images/community/tutorials/ruckus-zd-guide/ap-screen.png">
</div>

When you have added these to Cucumber Tony, go into the <b>settings</b> page of your <b>box</b>, scrolling down for the section labelled <b>PolkaSpots Settings</b>.

<div class="text-center">
<img src="/images/community/tutorials/ruckus-zd-guide/not-ps-box.png">
</div>

<b>Untick</b> I'm a PolkaSpots Box, and select <b>Ruckus</b> from the droplist then update your changes.

<div class="text-center">
<img src="/images/community/tutorials/ruckus-zd-guide/ruckus-box.png">
</div>

Head back to <b>boxes</b> and click on the box you just set to a non PolkaSpots Box. You should now see a green <b>Radius Settings</b> button.

Clicking this will open a box with details that you will need to refer back to at later stages.

<div class="text-center">
<img src="/images/community/tutorials/ruckus-zd-guide/radius-info.png">
</div>

Connect to your Zone Director device and click on the <b>Configure</b> tab, then click <b>AAA Servers</b> on the sidebar, and then click <b>Create New</b>.

<div class="text-center">
<img src="/images/community/tutorials/ruckus-zd-guide/aaa-servers.png">
</div>

A selection of fields will appear, which will need to be filled in with the following information:
<ul>
<li>Name: e.g PolkaRad</li>
<li>Type: RADIUS</li>
<li>Auth Method: PAP</li>
<li>IP Address: (Refer to CT Radius Settings - Radius Servers)</li>
<li>Port: 1812</li>
<li>Secret: (Refer to CT Radius Settings - Radius Secret)</li>
<li>Confirm Secret: (As above)</li>
</ul>

And then click <b>OK</b>

<div class="text-center">
<img src="/images/community/tutorials/ruckus-zd-guide/radius-servers.png">
</div>

Complete the same again, creating a <b>new entry</b>, but this time with the following information:

<ul>
<li>Name: PolkaAcc</li>
<li>Type: RADIUS Accounting</li>
<li>IP Address: (Refer to CT Radius Settings - Radius Server)</li>
<li>Port: 1813</li>
<li>Shared Secret: (Refer to CT Radius Settings - Radius Secret)</li>
<li>Confirm Secret: (As above)</li>
</ul>

And then save your changes by clicking <b>OK</b>

<div class="text-center">
<img src="/images/community/tutorials/ruckus-zd-guide/save-server.png">
</div>

Click <b>Hotspot Services</b> on the sidebar, and then click <b>Create New</b>

<div class="text-center">
<img src="/images/community/tutorials/ruckus-zd-guide/new-hotspot.png">
</div>

A selection of fields will appear which will need to be filled with the following information:

<ul>
<li>Name: e.g PolkaSpotsHS</li>
<li>Login Page: (Refer to CT Radius Settings - Splash URL)</li>
<li>Authentication Server: PolkaRad (the RADIUS entry you created in step 3)</li>
<li>Accounting Server: PolkaAcc (the RADIUS Accounting entry you created in step 4)</li>
</ul>

Then click on <b>Walled Gardens</b>.

<div class="text-center">
<img src="/images/community/tutorials/ruckus-zd-guide/walled-gardens.png">
</div>

You will now see the Walled Garden entries. Click <b>Create New</b> to add the entries needed

<div class="text-center">
<img src="/images/community/tutorials/ruckus-zd-guide/new-wg.png">
</div>

add the following to the <b>Walled garden</b>:

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

And then save the changes by clicking <b>OK</b>

<div class="text-center">
<img src="/images/community/tutorials/ruckus-zd-guide/save-wg.png">
</div>

Click <b>WLANs</b> on the sidebar, and under WLANs click <b>Create New</b>

<div class="text-center">
<img src="/images/community/tutorials/ruckus-zd-guide/new-wlan.png">
</div>

A selection of fields will now have appeared which will need to be filled with the following information:

<ul>
+ Name/ESSID: e.g PolkaFly
+ ESSID: e.g PolkaFly
+ Type: Hotspot Service (WISPr)
+ Hotspot Services: PolkaSpotsHS (the Hotspot Service created in step 6)

Then save your changes by clicking <b>OK</b>

<div class="text-center">
<img src="/images/community/tutorials/ruckus-zd-guide/save-wlan.png">
</div>

Because there are no options to change these settings in the GUI, you will need to <b>SSH</b> in to the Ruckus <b>ZoneDirector</b>, which is done by entering the following:

```
ssh root@DEVICE_IP
```

Replace DEVICE_IP with the IP of your zone director, and login with your username and password that you used to log into the ZoneDirector.

Once you have established an SSH connection, enter the commands below, one by one:

```
enable
config
wlan "PolkaFly" (name of essid in step 10)
called-station-id-type ap-mac
nasid-type mac-addr
end
```

<div class="text-center">
<img src="/images/community/tutorials/ruckus-zd-guide/ssh-console.png">
</div>

Get MAC address of zonedirector from the zonedirector dashboard

<div class="text-center">
<img src="/images/community/tutorials/ruckus-zd-guide/zone-mac.png">
</div>

<b>Change the box from a PolkaSpots box to a Ruckus box</b>

This will update the icon for you and activate the radius settings.

Head to your boxes in Cucumber Tony and go into their settings.

Then scroll down under Advanced Settings, and click on edit advanced settings.

<b>In the NAS field, enter the MAC address of the ZoneDirector that you collected earlier.

It is important the MAC is separated with hyphens because that's what Ruckus send us.
e.g 11-22-33-44-55-66</b>

<div class="text-center">
<img src="/images/community/tutorials/ruckus-zd-guide/nas-id.png">
</div>

Then scroll to the bottom of the page and click update.

Do this for all of your Ruckus Access Points.

<br>



