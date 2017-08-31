---
layout: post
title:  Sending Emails
date:   2016-10-19
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Find out how to send emails directly from your OpenWRT device.
---

There are a number of packages for LEDE/OpenWRT that allow you to send emails. We are going to be looking at SSMTP.

With email sending configured, you could set up automatic emails such as system alerts, or to goof around with sending emails via CLI.

Here we will run you through the steps needed to get the packages installed and basic usage.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Installation

Installing SSMTP is quick and easy. Just run the following commands:

    opkg update
    opkg install ssmtp

## Configuration

Next we need to edit the SSMTP config file with your mail server details, run the following command:

    vi /etc/ssmtp/ssmtp.conf

You should see something similar to the following:

    # /etc/ssmtp/ssmtp.conf
    root=username@gmail.com

    mailhub=smtp.gmail.com:587
    rewriteDomain=gmail.com
    hostname=username@gmail.com

    UseTLS=Yes
    UseSTARTTLS=Yes

    AuthUser=username@gmail.com
    AuthPass=password

    FromLineOverride=yes

Fill in with your mail server details. For more information, search for your email provider’s SMTP settings.

## Sending Emails

There are a few ways to send emails using SSMTP. The simplest is to create a text file and run a command to send it.

First create a text file by running the following:

    vi /tmp/email.txt

Now populate your text file using the following format:

    To:destination@domain.com
    From:youraccount@domain.com
    Subject: Test

This is the body of the email

Once you have written your email you can send it using the following command:

    mail destination@domain.com < email.txt

For more information on the other methods, and what else you can do with SSMTP, take a look at this wiki page.

<hr>

*CT WiFi is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://ct-networks.io">ct-networks.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join CT WiFi</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for CT WiFi, it's free for unlimited access points :)</p>

<hr>

</div>
