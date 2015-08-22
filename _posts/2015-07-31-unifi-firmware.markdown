---
layout: post
title:  Installing firmware on a UniFi access point
date:   2015-07-31
categories: documentation
keywords: install firmware on unifi ap, wifi firmware, unifi firmware update
---

<h3>Option One - TFTP</h3>
<hr>

There are two ways of installing the firmware on a UniFi access point. This is option one and involves physically resetting the unit. If you don't have the access points in front of you use option two.

You can install the PolkaSpots firmware on the Ubiquiti UniFi Pro, Ubiquiti UniFi UAP, Ubiquiti UniFi UAP LongRange and Ubiquiti UniFi Outdoor. If you have bought your box from PolkaSpots you don't need to install the firmware - we've already done this for you.

You will need:
<ul>
<li>A computer with ethernet ports</li>
<li>A UniFi access point</li>
<li>2 x Ethernet cables</li>
<li>Access to the terminal on your PC</li>
<li>A download of the PolkaSpots firmware</li>
</ul>

<hr>

Let's get flashing...

1 - Connect your access point to your PC. Connect one end of the Ethernet to the LAN port on the PoE adapter and the other end to the Ethernet port on your computer.

2 - Plug the second Ethernet cable into the other port POE adapter. The other end of the cable will plug into your UniFi access point.

3 - You will now need to put your AP into recovery mode. As you connect the Ethernet cable to your access point to power it up, press and hold the restart button using a sharp point (e.g. a paperclip) until the lights on the box cycle between the following colours:

<b>Unifi UAP</b> - Green > Orange > Off <br>
<b>Unifi Outdoor</b> - Green > Orange > Off <br>
<b>Unifi Pro</b> - Blue > White > Off <br>
<b>Unifi Outdoor+</b> - Blue > White > Off <br>

<div class="text-center">
<img src="/images/community/tutorials/unifi-flash/box-recover.gif">
</div>

<h3>4.1 - Windows TFTP instructions (MAC users, further down to 4.2):</h3>

a. Go to your Windows Control Panel and Click on Network and Internet (Names may vary depending on Windows Version)

<div class="text-center">
<img src="/images/community/tutorials/unifi-flash/control-panel.png">
</div>

b. Click on Network and Sharing Centre (Names may vary depending on Windows Version)

<div class="text-center">
<img src="/images/community/tutorials/unifi-flash/network-sharing.png">
</div>

c. Click on Change Adapter Settings

<div class="text-center">
<img src="/images/community/tutorials/unifi-flash/adapter-settings.png">
</div>

d. Right click on your Ethernet adapter and select properties

<div class="text-center">
<img src="/images/community/tutorials/unifi-flash/ethernet-prop.png">
</div>

e. Select Internet Protocol Version 4 (TCP/IPv4) and select Properties

<div class="text-center">
<img src="/images/community/tutorials/unifi-flash/ip4.png">
</div>

f. Select Use the following IP addresses, input the IP and Subnet and click OK

<div class="text-center">
<img src="/images/community/tutorials/unifi-flash/ip-range.png">
</div>

g. Download TFTP2.exe <a href="https://s3.amazonaws.com/elevio-article-assets/5538eac84ebbe/553a66479bf5a_tftp2.exe">from here</a> and run it. In the Server field add 192.168.1.20 (this is the IP of the Ubiquiti device in failsafe mode)

<div class="text-center">
<img src="/images/community/tutorials/unifi-flash/tftp2.png">
</div>

h. In the File row, click on the 3 dots button and select the firmware downloaded from Cucumber Tony. Then Click Upgrade.

<div class="text-center">
<img src="/images/community/tutorials/unifi-flash/tftp-upgrade.png">
</div>

If everything is set up correctly and the box is in failsafe mode, the status bar should get to full.

<h3>4.2 - MAC TFTP instructions:</h3>

a. On your computer, set your IP network settings to 'manual'.

On a Apple computer go to System Preferences> Networks> select Ethernet on the left and on the setting for IPV4 select 'Manually' from the drop down menu. You will need to unlock the padlock on the bottom left to do this.

<div class="text-center">
<img src="/images/community/tutorials/unifi-flash/apple-network.png">
</div>

b. Now change your IP address to 192.168.1.30, and click Apply once the changes have been made.

<div class="text-center">
<img src="/images/community/tutorials/unifi-flash/apple-ip.png">
</div>

c. Now open the terminal on your computer. If you're using a Windows machine you'll need to use an application like Putty.

<div class="text-center">
<img src="/images/community/tutorials/unifi-flash/apple-terminal.png">
</div>

d. Go to the location that you have the firmware saved (default is the Download folder) via the terminal by typing e.g:

<blockquote>cd Downloads</blockquote>


e. Make sure that you file is in there by typing:

<blockquote>ls</blockquote>

You should see the name of your firmware image with a '.bin' at the end

Copy the entire name to your clipboard, including .bin

f. Type in your terminal:

<blockquote>
tftp 192.168.1.20<br>
bin<br>
trace<br>
put FIRMWARE-NAME.bin
</blockquote>

<b>Replace FIRMWARE-NAME.bin with the name of the file you previously downloaded</b>

<div class="text-center">
<img src="/images/community/tutorials/unifi-flash/tftp-terminal.png">
</div>

5 - Press return. Lines of code should appear rapidly in your terminal.

<div class="text-center">
<img src="/images/community/tutorials/unifi-flash/tftp-finish.png">
</div>

The lights on the box will now flash as the firmware installs and the box updates itself. When the lights stop flashing and turn solid, the install is complete.

You have successfully installed Stinky Panda on your UniFi access point.

Now go ahead and add your box into your dashboard if you havent already.


<h3>Option Two - UniFi Controller</h3>
<hr>

<b>Please note: Flashing over SSH may not work with UniFi version v3.2.7 and above</b>

1 - Open the terminal on your computer. If you're using a Windows machine you'll need to use an application to do this.

<div class="text-center">
<img src="/images/community/tutorials/unifi-flash/apple-terminal.png">
</div>

2 - Type in the terminal:

<blockquote>ssh ubnt@ip-address</blockquote>

Sometimes the default user may not be ubnt - it may be admin or whatever you've set up on the UniFi controller.

The default password is ubnt (again, you may have changed this).

3 - After logging in to your access point type:

<blockquote>
cd /tmp
<br>
wget http://FIRMWARE-URL-PROVIDED-BY-POLKASPOTS
</blockquote>


To get the firmware URL, follow the normal steps to download the firmware, but rather than left clicking on the final step to download it, right click and copy the URL.

Please ensure that you change the beginning to <b>http://</b> otherwise you will get certificate errors.

4 - Make sure that you have downloaded the image by typing in the same window:

<blockquote>ls</blockquote>

You should see the name of your firmware - for example "firmware.bin". Please note, this will be different depending on what firmware version you download.

Please make a note of it, you will need it for the next step.

5 - Now type the following into the terminal:

<blockquote>fwupdate.real -m FIRMWARE-NAME.bin -d</blockquote>

Replace FIRMWARE-NAME.bin with the name of the file you previously downloaded

The installation should now begin. Please do not disconnect your box from electrical supply.

6 - Press return. Lines of code should appear rapidly in your terminal.

The lights on the box will now flash as the firmware installs and the box updates itself. When the lights stop flashing and turn solid, the install is complete.

You have successfully installed the Stinky Panda firmware.

Now go ahead and add your box into your dashboard if you haven't already.


