---
layout: post
title:  Setting Up A LAMP Stack
date:   2016-08-17
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT, OpenWRT Routing
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Learn how to deploy your own web applications using your OpenWRT device.
---

This guide will walk you through setting up a LAMP stack on your LEDE/OpenWRT device, allowing you to deploy web applications.

There are more advanced things you can do with this, but this guide will focus just on getting the very basics set up.

## SSH to your OpenWRT device

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field.

Once you’ve done this just click on Open to start up the SSH connection.

<div class="mdl-typography--text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

    ssh root@192.168.1.1

## Installing the webserver (lighttpd)

To start off with we are going to install lighttpd as our webserver.

Run the following commands:

    opkg update
    opkg install lighttpd lighttpd-mod-cgi

Once that is complete we need to make some changes to the config. So run the following:

    vi /etc/lighttpd/lighttpd.conf

Then change the following to enable cgi:

    server.modules = (
         “mod_cgi”
    )

Then we want to set our document root. In this example we are going to be using /srv/www/ on port 81 so change the following:

    server.document-root = “/srv/www/”
    server.port = 8000

Next run the following:

    vi /etc/php.ini

And then add in the same document root:

    doc_root = “/srv/www”

After doing this we need to create that directory, so run the following:

    mkdir -p /srv/www

And finally we need to start the web server and set it to start on boot:

    /etc/init.d/lighttpd start
    /etc/init.d/lighttpd enable

## Installing PHP

First off run the following commands to install the PHP packages:

    opkg update
    opkg install php5 php5-cgi
    opkg install lighttpd-mod-cgi

Then we need to make some changes to our firewall config to allow access, so run the following:

    vi /etc/config/firewall

And then add in the following:

    config redirect
         option src wan
         option src_dport 80
         option dest lan
         option dest_ip 192.168.1.1
         option dest_port 8000
         option proto tcp
    config rule
         option src wan
         option dest_port 8000
         option target ACCEPT
         option proto tcp

Then restart the firewall by running the following:

    /etc/init.d/firewall restart

Next we need to make some more changes to the lighttpd config, so run the following:

    vi /etc/lighttpd/lighttpd.conf

And make the following changes:

    cgi.assign = ( “.php” => “/usr/bin/php-cgi” )
    index-file.names = ( “index.html”, “default.html”, “index.htm”, “default.htm”, “index.php” )

And finally restart lighttpd:

    /etc/init.d/lighttpd restart

## Installing the database (MySQL)

To install the packages we need, run the following:

    opkg update
    opkg install libpthread libncurses libreadline mysql-server

Next we need to make changes to the MySQL config, so run the following:

    vi /etc/my.cnf

We need to define the directory, so make the following changes:

    datadir = "/srv/mysql"

Next run the following to initialise the system tables:

    mysql_install_db --force

Finally run the following to start the MySQL process:

    /etc/init.d/mysqld start

<hr>

*Cucumber Tony is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://cucumberwifi.io">cucumberwifi.io</a>*


<div class="mdl-typography--text-center">

<h2>Come join Cucumber</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for Cucumber Tony, it's free for unlimited access points :)</p>

<hr>

</div>
