---
layout: post
title:  Ruckus VSG Captive Portal
date:   2015-08-03
categories: tutorials
keywords: Ruckus, VSG, Captive Portal, Zone Director, Splash Pages, 
---

<h3>Draft. Getting the Cucumber Splash Working with your VSG</h3>
<hr>
<p>Things you need:</p>
<ul>
<li>Ruckus VSG (trial ok)</li>
<li>Compatible Ruckus AP</li>
<li>Cucumber account</li>
<li>A public IP</li>
</ul>

<h2>Add your Access Points to your Cucumber dashboard.</h2>
<p>You'll need to add each one. Once you've done this, you will need to make a note of some credentials which are needed when your set up your VSG.</p>
<p>Make sure you create a splash page too. And, if you're setting up zones, please ensure the boxes are all added to the correct zone. There's documentation about doing this in the green sidebar within your dash.</p>
<h3>Get your Nas ID</h3>
<p>Firstly change the box type to Ruckus on the settings page. Click the advanced settings link to reveal your unique NasID. This is unique to your account. <b>You must use the same NAS id for all your locations.</b></p>

<div class="text-center">
  <img src="/images/community/tutorials/settings-1.png" width="800px">
</div>

<div class="text-center">
  <img src="/images/community/tutorials/settings-2.png" width="800px">
</div>

<h3>Radius secret</h3>
<p>Click <b>Radius Settings</b> on the home page for your box.</p>

<div class="text-center">
  <img src="/images/community/tutorials/ruckus-radius-1.png" width="800px">
</div>

<h3>News, get your Ruckus VSG setup.</h3>
<p>Login to your VSG and create a zone if you don't have one. You don't have to create a new one.</p>

<h3>Accounting and Authentication Radius Servers</h3>

<p>Configuration > Service and Profiles > Authentication</p>

<p>Create a new server and fill in the followin fields. You will need the information you just found in Cucumber. </p>
<ul>
<li>IP Address: 146.148.7.43</li>
<li>Port: 1812</li>
<li>Secret: enter your secret</li>
</ul>
<div class="text-center">
  <img src="/images/community/tutorials/auth.png" width="800px">
</div>

<p>Next create your accounting server with the same details as above but replace the port with 1813.</p>

<div class="text-center">
  <img src="/images/community/tutorials/accounting.png" width="800px">
</div>

<h3>Create a Hotspot</h3>

<p>Configuration > AP Zones > Your Zone > Hotspot WISPr > Create New</p>

<p>You can either use our default url <b>app.my-wifi.co</b> or you can use your own brand. For example, if your brand name is Tony Time, the url will be tony-time.my-wifi.co. You can find this in your branding settings within your Cucumber dashboard.
<div class="text-center">
  <img src="/images/community/tutorials/hotspot-wispr.png" width="800px">
</div>
<p>Before you save, you need to add some walled gardens. Enter the following.</p>
<ul>
<li>&#42;.my-wifi.co</li>
<li>&#42;.polkaspots.com</li>
<li>&#42;.wirelessisp.co</li>
<li>&#42;.ctapp.io</li>
<li>&#42;.cucumberwifi.io</li>
<li>d3e9l1phmgx8f2.cloudfront.net</li>
<li>d247kqobagyqjh.cloudfront.net</li>
</ul>
<p>If you're using Social logins, you will also need these:</p>
<ul>
<li>connect.facebook.net</li>
<li>&#42;.facebook.com</li>
<li>&#42;.fbcdn.net</li>
<li>&#42;.akamaihd.net</li>
<li>&#42;.accounts.google.com</li>
<li>&#42;.googleapis.com</li>
<li>&#42;.googleusercontent.com</li>
<li>&#42;.gstatic.com</li>
</ul>

<div class="text-center">
  <img src="/images/community/tutorials/walledgardens.png" width="800px">
</div>

<h3>Update your WLAN</h3>
<p>Click WLAN in the left-hand menu. Create a new WLAN or edit an existing one.</p>
<ul>
<li>Authentication: Hotspot WISPr</li>
<li>NAS ID: Enter the one from your Cucumber dashboard.</li>

<p>Enter the accounting and authentication servers you created just now. You must select "Use the controller as a proxy"</p>
</ul>
<div class="text-center">
  <img src="/images/community/tutorials/wlan-1.png" width="800px">
</div>
<h3>Northbound API</h3>
<p>You need to change the password for your northbound API.</p>
<p>Click Configuration > System > Northbound Portal Interface. Enter your password.</p>

<div class="text-center">
  <img src="/images/community/tutorials/ruckus-northbound-api-1.png" width="800px">
</div>

<p>Go back to your Cucumber dashboard. In your Location settings, scroll down until you see the Ruckus VSG section.</p>
<p>Enter your VSH public IP or hostname and also your Northbound API password. Hit save!</p>
<div class="text-center">
  <img src="/images/community/tutorials/ruckus-northbound-api.png" width="800px">
</div>

<p>Your VSG must be accessible from the Tinternet. Please do not enter a port number. To confirm the changes, visit your splash pages. You will see the Ruckus logo and your VSG Host.</p>

<div class="text-center">
  <img src="/images/community/tutorials/ruckus-dog.png" width="800px">
</div>

<h3>ALL DONE</h3>
<p>That should be all you need. Connect to the WiFi network and login. If we cannot access your VSG, we will send you an email. You must update your settings accordingly.</p>
<br><br>
<div class="text-center">
<p>Sign-up for a Cucumber dashboard. It's free for unlimited access points!</p>
<a href="https://my.ctapp.io/#/create" class="button large success">Join</a>
</div>
<br><br>
<br><br>
<br><br>
