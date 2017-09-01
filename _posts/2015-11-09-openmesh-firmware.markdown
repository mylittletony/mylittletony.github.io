---
layout: post
title:  Installing firmware on an OpenMesh access point
date:   2015-11-09
categories: documentation
keywords: install firmware on OpenMesh ap, wifi firmware, OpenMesh firmware update
---

<hr>
<h3>This doc is outdated. Please view our new documents here:<br>
<a href="http://docs.ct-networks.io/article/84-openmesh-installation">docs.ct-networks.io</a></h3>
<hr>

You will need:

<ul>
<li>- A computer with ethernet ports</li>
<li>- An OpenMesh device</li>
<li>- 1 x Ethernet cables</li>
<li>- Access to the terminal on your PC</li>
<li>- A download of the Cucumber firmware</li>
<li>- A download of the ap51-flash flashing utility</li>
</ul>

<hr>

Let's get flashing...

1 - Download and build the ap51-flash flashing utility by running the following commands:

```
svn co http://dev.cloudtrax.com/downloads/svn/ap51-flash/trunk/ ap51-flash
cd ap51-flash
make
```

2 - Download the firmware needed by following <span data-elevio-article="13200">**this guide.**</span>

3 - Connect your Access Point onto the same physical network as your computer/laptop

4 - Use the ap51-flash utility built in step 1 above and run the following

```
./ap51-flash eth0 FIRMWARE_LOCATION.bin
```

Then plug in your OpenMesh box and power it up.

You should then see something similar to this in the console:

```
[ac:86:74:13:65:c8]: type 'OM2P router' detected
[ac:86:74:13:65:c8]: OM2P router: tftp client asks for 'fwupgrade.cfg', serving fwupgrade.cfg portion of: /home/ps-support/Downloads/openwrt-15.05-ar71xx-generic-om2p-squashfs-factory.bin (1 blocks) ...
[ac:86:74:13:65:c8]: OM2P router: tftp client asks for 'kernel', serving kernel portion of: /home/ps-support/Downloads/openwrt-15.05-ar71xx-generic-om2p-squashfs-factory.bin (2146 blocks) ...
[ac:86:74:13:65:c8]: OM2P router: tftp client asks for 'rootfs', serving rootfs portion of: /home/ps-support/Downloads/openwrt-15.05-ar71xx-generic-om2p-squashfs-factory.bin (4609 blocks) ...
[ac:86:74:13:65:c8]: OM2P router: image successfully transmitted - writing image to flash ...
[ac:86:74:13:65:c8]: OM2P router: flash complete. Device ready to unplug.
```

5 - Then go ahead and add your box into your CT WiFi dashboard.

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join Cucumber</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
