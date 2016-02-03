---
layout: post
title:  OpenWRT — How to set up DNS Forwarding
date:   2016-02-03
categories: tutorials
keywords: OpenWRT captive portal, OpenWRT splash page not working, OpenWRT splash page template, OpenWRT splash page free, OpenWRT splash page html, OpenWRT splash page hosting, OpenMesh captive portal, OpenMesh splash page not working, OpenMesh splash page template, OpenMesh splash page free, OpenMesh splash page html, OpenMesh splash page hosting, DD-WRT
thumbnail: /images/community/thumbnails/openwrt.png
tags: OpenWRT
description: Set up DNS rules for specific domains - bypass Netflix restrictions!
---

There are a number of reasons for wanting to change your DNS, whether you want to benefit from speed & reliability improvements, set up parental controls, or want to access geoblocked content.

But sometimes you might not want all of your traffic routed through a custom DNS server, especially if you just want to do something simple like access US Netflix outside of the US. There is a really easy option to set up in OpenWRT that allows you to set DNS servers to be used only with specific domains.

##SSH to your OpenWRT device##

If you are using Windows then start PuTTY and click Session on the left side, select SSH from the options, and then enter in the IP Address of your OpenWRT box into the Host Name field. 

Once you’ve done this just click on Open to start up the SSH connection.

<div class="text-center">
  <img src="/images/community/tutorials/openwrt/puttyconfig.png" width="400px">
</div>

If you are connecting via terminal, then just SSH to your OpenWRT device using the following command, where 192.168.1.1 is your OpenWRT device’s IP address.

```
ssh root@192.168.1.1
```

Setting up DNS forwarding Once you are logged into your OpenWRT device, run the following command to edit your DHCP file:

```
vi /etc/config/dhcp
```

The rules you want to add to this section are formatted as follows:

```
list server ‘/domain_name/dns_address’
```

Find the dnsmasq section and add in your rules, it should look something like the following:

```
config 'dnsmasq'
	option domainneeded	 1
	option boguspriv	 1
	option filterwin2k	 0
	option localise_queries	 1
	option rebind_protection 1
	option rebind_localhost  0
	option local        	 '/lan/'
	option domain	         'lan'
	option expandhosts	 1
	option nonegcache	 0
	option authoritative	 1
	option readethers        1
	option leasefile	 '/tmp/dhcp.leases'
	option resolvfile	 '/tmp/resolv.conf.auto'
	list server '/netflix.com/111.118.175.56'
	list server '/netflix.com/118.127.33.48'
```

Once you have added your rules, save your changes.

You may need to restart the service for your changes to apply so run the following command in the console:

```
/etc/init.d/dnsmasq restart
```

It is as easy as that. Whenever you access that domain, it will be through that DNS, while the rest of your traffic uses your normal default DNS settings.

###(Optional) Using the web GUI###
This can all be done using the web GUI by navigating through Network > DHCP and DNS > Sever Settings > General Settings, and entering the rules in the following format under DNS Forwardings:

```
/domain_name/dns_address
e.g
/netflix.com/118.127.33.48
```

<hr>

*Cucumber Tony is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://cucumberwifi.io">cucumberwifi.io</a>*


<div class="text-center">

<h2>Come join Cucumber</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for Cucumber Tony, it's free for unlimited access points :)</p>

<hr>

</div>

