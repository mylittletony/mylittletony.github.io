---
layout: post
title:  Setting up Dropbear Public Key Authentication
date:   2016-01-27
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Making SSH access faster and more secure.
---

First off make sure that you have an SSH client on your computer. For Windows you will want to download PuTTY.

## Generating your Key

To create your key we will be using ssh-keygen, or if you are a Windows user, use puttygen.exe.
Just use the following command to generate your ssh-key.

`ssh-keygen`

## Add your key to your OpenWRT device

To add the key to the authorized_keys file on your OpenWRT device, on your PC enter the following command, replacing 192.168.1.1 with your OpenWRT device IP.

`ssh-copy-id  root@192.168.1.1`

The key is added to the /root/.ssh/authorized_keys file on your OpenWRT device.
Next we want to add the key to dropbear, so SSH into our OpenWRT device and enter the following command.

`cp /root/.ssh/authorized_keys /etc/dropbear/`

We need to make sure that the permissions are set correctly, so enter in the following commands.

    chmod 700 /etc/dropbear
    chmod 600 /etc/dropbear/authorized_keys

## SSH to your OpenWRT device using your key

If everything was done correctly you can now log into your device using the key, not asking you for a password.
If you are using Windows then start PuTTY and follow these steps:

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

- __Session__ > __Host Name__: OpenWRT device’s IP address. Set connection type to SSH
- __Connection__ > __Data__ > __Auto-login username__: root
- __Connection__ > __SSH__ > __Auth__ > __Private key file for Authentication__: Click browse and select the key you generated before
- __Session__ > __Saved Sessions__: Enter a name for your session and click the __Save__ button

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

`ssh root@192.168.1.1`

### (Optional) Added security

One additional change you can make to increase security is disable Dropbear’s password login.

To do this, while connected via SSH to your OpenWRT device, enter the following commands

    uci set dropbear.@dropbear[0].PasswordAuth=off
    uci commit dropbear

<hr>

*Cucumber Tony is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://cucumberwifi.io">cucumberwifi.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join Cucumber</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for Cucumber Tony, it's free for unlimited access points :)</p>

<hr>

</div>
