---
layout: post
title:  Ruckus Virtual SmartZone Captive Portal Integration
date:   2015-08-03
categories: documentation
keywords: Ruckus, Ruckus Virtual SmartZone, Captive Portal, Zone Director, Splash Pages,
description: Ruckus Captive Portal, Setting up a captive portal for the Ruckus Smart Zone Gateway
---
<div class="alert-box success">
Stuck? Until the end of October 2015, we'll set everything up for you. Just drop us a line from your Cucumber dashboard :)
</div>

<h3>Getting the Cucumber Dashboard working with your Ruckus Virtual SmartZone</h3>
<p>The Ruckus Virtual SmartZone is a really fantastic piece of kit. This walk-through demonstrates how to integrate it with our splash pages, view your Ruckus wireless clients and, even view the status of your Ruckus APs!</p>
<p>Manage all your networks from a single dashboard - your Unifi, TP-Link, Netgear, OpenWRT and Ruckus devices in a single location.</p>
<p>The whole set-up takes about half an hour - the Ruckus VSG can be a little tricky to get working first time round.</p>
<hr>
<h3>Things you need:</h3>
<ul>
<li>Publicly available Ruckus VSG (trial ok)</li>
<li>Compatible Ruckus AP</li>
<li>Cucumber account</li>
</ul>

### PLEASE DO NOT

Please don't use the built-in radius test tool in your VSZ. This sends a partial request to our servers. After doing so, Cucumber Tonywill block access for security reasons.

The only way to fix this is to contact us.

### Lets go....

<h2>Open Your Firewall Ports</h2>
<p>You must have a public facing VSG with the following ports open:</p>
<ul>
<li>9080, 9443 & 7443 for the VSZ integration</li>
<li>8090, 8099, 8100, 8111, 9997, 9998 to ensure the splash pages work</li>
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

<h3>Next, get your Ruckus VSG setup.</h3>
<p>Login to your VSG and create a zone if you don't have one. You don't have to create a new one.</p>

<h3>Accounting and Authentication Radius Servers</h3>

```
Configuration > Service and Profiles > Authentication
```

<p>Create a new server and fill in the following fields. You will need the information you just found in Cucumber. </p>
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

```
Configuration > AP Zones > Your Zone > Hotspot WISPr > Create New
```

<p>You can either use our default url <b>app.my-wifi.co</b> or you can use your own brand. For example, if your brand name is Tony Time, the url will be tony-time.my-wifi.co. You can find this in your branding settings within your Cucumber dashboard.
<div class="text-center">
  <img src="/images/community/tutorials/hotspot-wispr.png" width="800px">
</div>
Ensure you Redirected Mac Format is as so:

```
aa-bb-cc-dd-ee-ff
```

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

```
Click Configuration > System > Northbound Portal Interface. Enter your password.
```

<div class="text-center">
  <img src="/images/community/tutorials/ruckus-northbound-api-1.png" width="800px">
</div>

<h3>Create an Admin Account</h3>
<p>We'll use this to communicate with your Ruckus VSG and provide a list of online wireless clients and the status of your access points. You can use your normal credentials however we recommend creating a second role, just for the API access.</p>

```
Click configuration > Administrators. Click create a new Admin account and fill in your details.
```

<div class="text-center">
  <img src="/images/community/tutorials/ruckus-new-admin.png" width="800px">
</div>

<p>Next, you should create a new role for the user. We'd recommend the following as a minimum.</p>

<div class="text-center">
  <img src="/images/community/tutorials/ruckus-permissions.png" width="800px">
</div>
<p>Assign the user to a role. Click on Configuration > Management Domains. Then click the Add Account and Assign Role button. You will need to choose the user you just created and assign to the role for the API.</p>

<div class="text-center">
  <img src="/images/community/tutorials/ruck-admin-domains.png" width="800px">
</div>

<h3>Add your credentials to your Cucumber WiFi dashboard</h3>

<p>Go back to your Cucumber dashboard. In your Location settings, scroll down until you see the Ruckus VSG section.</p>
<p>Enter your VSH public IP or hostname and also your Northbound API password. You should also add your admin user and password. After you click save, we'll run a test on your server.</p>
<p><b>Please ensure you use https for security reasons.</b></p>

<div class="text-center">
  <img src="/images/community/tutorials/ruckus-northbound-api.png" width="800px">
</div>

<p>Your VSG must be accessible from the internet. Please do not enter a port number. If all went well, you will see a confirmation message on the page.</p>

<div class="text-center">
  <img src="/images/community/tutorials/ruckus-api-success.png" width="800px">
</div>

<h3>Create a splash page for your Ruckus Gateway</h3>

<p>Still in your Cucumber dashboard, click on Splash Pages and then hit create new. Fill in a few details, choose from a number of access types including Social logins, click through and email capture.</p>

<h3>Test Your Splash Pages</h3>

<p>Connect to your Ruckus Wi-Fi network and navigate to a website. Watch out for https sites - sometimes they don't redirect correctly.</p>

<div class="text-center">
  <img src="https://d3e9l1phmgx8f2.cloudfront.net/images/www/phone-1.png" width="300px">
</div>

<h3>Verify you can see your clients and access points</h3>

<p>Now you've added your API credentials, you can check the status of your access points and clients.</p>

<p>To view your clients, click on Clients in the left-hand menu. Your Ruckus clients are identified by the Dog Icon on the right hand side. You can see all your different clients online in the same place!</p>

<div class="text-center">
  <img src="/images/community/tutorials/ruckus-clients-list.png" width="800px">
</div>

<p>Your boxes will appear in your Boxes list and you can see their current status, IP information and more.</p>

<div class="text-center">
  <img src="/images/community/tutorials/ruckus-access-point-status.png" width="800px">
</div>

<div class="text-center">
  <img src="/images/community/tutorials/ruckus-access-point-status-1.png" width="800px">
</div>

<h3>ALL DONE</h3>
<p>That's all you need to do! We hope you enjoyed the tutorial. If you need some help, please get in touch! You can chat to us using the support widget within your Dashboard.</p>

## Troubleshooting & Questions
### Why captive portal redirection is not working in vSCG?

The wireless clients were able to get an IP address, however they are not able to get the redirection page when they open the web browser.

Solution: Add the ports required at the top of this document have been added to your firewall.

For more information, visit the Ruckus support pages <a href="https://support.ruckuswireless.com/answers/000003379">here</a>.</p>

## Green Screen
If you are seeing a green screen when you login, usually the messages will help you find the problem.

### Cannot Connect to VSZ Server

<div class="text-center">
  <img src="/images/community/tutorials/cannot-connect-to-vsz-1.jpg" width="200px">
</div>

Why?! This is because our servers are unable to connect to your Ruckus server. And this is usually a firewall issue.

* Confirm the host in your settings is correct.
* Confirm you have added 9443, 7443, 8090, 8099, 8100, 8111, 9080, 9997 & 9998 to your firewall

If you're sure these are ok, open a terminal and try and telnet to your host:

```
telnet your-host 9443
telnet your-host 9080
```

The response should look like this:

```
Trying 23.21.142.138...
Connected to my.fab.host.
Escape character is '^]'.
```

If it doesn't, your ports are not open.

We insist you use SSL but it's a good test to telnet to 9080.

### Failed to Communicate With VSZ 5 Times

If you're seeing this, it means we've tried 5 times to access your VSZ and failed. You should follow the steps above to fixed this issue.

The only way to reset this error is to **change the host** in your location settings within your Cucumber dashboard.

### Can't login - In a Loop ###

You can see the login page but when you login, it sends you back to the login page. Here's what you can do:

* Swap the access type to clickthrough to rule out password issues
* Ensure your radius secrets match the ones in your VSZ radius settings
* Ensure your Nas-Id from your Cucumber Wi-Fi account matches the one in your VSZ

<div class="text-center">
  <img src="/images/community/tutorials/vsz-radius-secret-1.png" width="800px">
</div>

<div class="text-center">
  <img src="/images/community/tutorials/vsz-radius-nas-id.png" width="800px">
</div>

If none of these worked, login to your Cucumber Wi-Fi dashboard and head over to the splash page in question.

At the top of the top, it should show your VSZ host. If you cannot see this, go back to your location settings and re-save the VSZ settings. That should resync the settings.

<div class="text-center">
  <img src="/images/community/tutorials/vsz-radius-missing-1.png" width="800px">
</div>

### What IPs does CT traffic come from?

Traffic comes from a number of servers and the IPs rotate frequently. We therefore recommend allowing access to the ports from all IPs.

### Problems connecting your APs to your VSZ.

This is the biggest issue customers have right now. To get your APs connected, follow these steps:

**Reset your AP.**

Stick a pin in the back of the device and wait for 10 seconds.

**SSH to your AP**

```
ssh super@ip-of-the-device
```

Enter super and sp-admin as the default passwords.

**Change your VSZ Host**

Type this on the command line after you've logged in.

```
set scg ip ip-of-your-vsz
```

Hit return and confirm the changes were made with:

```
get scg
```

**Move your AP from staging to production**

When you login to your VSZ, you'll probably notice the AP is in the staging list. All you need to do is move it to your production zone.

### Is this compatible with CloudRuckus?

You bet. The Cucumber dashboard works with any Smart Zone Gateway. Just enter your details as described above.

<br><br>
<div class="text-center">
<p>Sign-up for a Cucumber dashboard. It's free for unlimited access points!</p>
<a href="https://my.ctapp.io/#/create" class="button large success">Join</a>
</div>
<br><br>
<br><br>
<br><br>
