---
layout: post
title:  Running the Doctor script
date:   2015-08-10
categories: documentation
keywords: script, support, diagnosis, doctor, local portal
thumbnail: /images/community/thumbnails/doctor.png
---

###Note: You have to be on the same network as the Access Point to connect to the local portal.

To run the script, follow these steps:

<ol>
<li>Connect to the Access Point using one of these methods:<br>
The private network<br>
Directly via ethernet cable<br>
Over your WAN using your box's IP<br> 
(**It doesn't work on the public WiFi network**)</li>

<li>Enter the following into your browser's address bar: <br>
<a href="polka.box/doctor">polka.box/doctor</a> <br>
If this doesn't work, enter the local IP of your box and add /doctor to the end.</li>

<li>If you aren't already logged in, it will prompt you for a username and password.<br>
- The username for the local portal is currently always polkaspots.<br>
- Your password is the serial number of the box that you are trying to connect to, which you can locate through Cucumber Tony on the box's information page.</li>

<li>The doctor page should load and immediately begin running it's checks, which can take a few minutes.</li>

<div class="text-center">
<img src="/images/community/tutorials/local-portal/doctor-script.png">
</div>

<li>Test results will begin to populate on screen, and once finished a green download button will appear at the bottom.</li>

<div class="text-center">
<img src="/images/community/tutorials/local-portal/doctor-download.png">
</div>

<li>This will save all the information into a small text file. You can send this to us via the support widget in your Cucumber Wi-Fi dashboard.</li>
