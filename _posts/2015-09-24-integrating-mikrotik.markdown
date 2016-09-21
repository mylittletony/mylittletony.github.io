---
layout: post
title:  Setting up a splash page for a MikroTik network
date:   2015-09-24
categories: documentation
keywords: MikroTik captive portal, MikroTik splash page hosting, MikroTik splash page not working, MikroTik splash page template, MikroTik splash page free, MikroTik splash page html
thumbnail: /images/community/thumbnails/aruba-setup.png
---

<hr>
<h3>This doc is outdated. Please view our new documents here:<br>
<a href="http://docs.cucumberwifi.io/article/106-mikrotik-splash-page-setup">docs.cucumberwifi.io</a></h3>
<hr>

>Note: you may lose internet connectivity during some stages of this process if the MikroTik is your only uplink. It will return once you have finished the process.


1\. Download the resources needed:<br>
**Winbox:** <br>
<a href="http://www.mikrotik.com/download">Windows</a> <br>
<a href="http://www.facchinibr.net/wp/29/05/2013/mikrotik-winbox-mac-osx-download/">Mac</a><br>
<br>
**HTML File:**<br>
<a href="http://www.cucumberwifi.io/downloads/microtik.zip">microtik.zip</a> <br>

2\. Connect to your MikroTik device via ethernet cable

3\. Launch winbox and find your device in the neighbours tab and double click the MAC address, then click connect

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/mikrotik/winbox-connect.png">
</div>

4\. Go to quick setup on the left sidebar and retrieve the MAC address under internet

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/mikrotik/winbox-mac.png">
</div>

5\. Then using a web browser, go into your Cucumber Tony dashboard and <a href="https://my.ctapp.io/?data-elevio-article=7107#/" class="dst">add the box in</a> using the MAC address you retrieved

6\. Click on the radius settings button on your box page in CT and keep note of the information

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/mikrotik/ct-radius.png">
</div>

7\. Locate the .zip file you downloaded in Step 1, and then extract it to retrieve the microtik-login.html file <br>
Rename the file to login.html

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/mikrotik/mikrotik-html.png">
</div>

8\. In winbox, go to the radius section on the left sidebar, and add a new radius setting using the radius info you retrieved earlier from Cucumber Tony in step 6

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/mikrotik/winbox-add-radius.png">
</div>
<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/mikrotik/winbox-radius.png">
</div>

9\. Copy the MAC address that you added into CT and go to System > Identity and paste in the MAC address as your identity and click OK

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/mikrotik/winbox-identity.png">
</div>

10\. Go back into your box page on CT and go into your box settings at the top of the page.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/mikrotik/ct-box-settings.png">
</div>

Scroll down to advanced settings, and replace the radius NAS ID with the same MAC address from before and click update

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/mikrotik/ct-nas.png">
</div>

11\. Back in winbox, go to IP on the left sidebar and then select Hotspot.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/mikrotik/winbox-hotspot.png">
</div>

Click on hotspot setup and you will only need to change the following: <br>
```
Hotspot interface: bridge-local
```
<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/mikrotik/winbox-interface.png">
</div>

12\. Under hotspot servers, double click on hotspot 1 and change the name to the mac address used previously, then click OK

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/mikrotik/hotspot-mac.png">
</div>

13\. Under server profiles, select hsprof1 and change the name to the mac address used previously, then click ok

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/mikrotik/server-mac.png">
</div>

Then under the Logins tab, make sure that **HTTP PAP** is the only option enabled next to **Login By**.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/mikrotik/winbox-login.png">
</div>

Then under the radius tab, enable radius. The mac format must be **XX-XX-XX-XX-XX-XX** and **accounting should be enabled**. Otherwise you'll get no datas.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/mikrotik/winbox-accounting.png">
</div>

14\. Then under walled garden, click the + to add, and add the walled garden entries.

You can find the most up to date list of <b><span data-elevio-article="18499">Walled Gardens here.</span></b>

Enter the walled garden domains under Dst. Host.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/mikrotik/winbox-walledgarden.png">
</div>

15\. Go into Files, and find the file named hotspot/login.html and remove it.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/mikrotik/winbox-html.png">
</div>

Then find the file you downloaded previously, and drag and drop it into the hotspot directory where you removed the previous file.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/mikrotik/replace-html.png">
</div>

At this point you are now set up and can log in through the splash page.

## When things go wrong

### Can't login - in a loop

This is usually caused by incorrect radius settings. If you've entered the details incorrectly, sometimes Mikrotik refuse to update and won't even try and log you in. You'll go round in circles.

If you're sure your settings match the ones in CT, the only way (we know about) to get the device to authenticate is to delete the radius and add it in again.

If you happen to know how to fix this, tell us and we'll give you 50% off for three months! No joke.

### On a Mac or Linux Puter

This is really sucky. We're 50/50 mac and Linux users over here and we've found the clients to be aweful.

Even so, there are two issues with these (the mac and Linux version):

1. Can't drag and drop the files.
2. Can't access the interface if splash is running

The first we can't solve. The second you can resolve by creating another network (sometimes) and or logging in via the splash.

## Sign-up, Cucumber is free for unlimited access points

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a>

Sign-up for Cucumber Tony, it's free for unlimited access points. Some awesome is also included.


<hr>
