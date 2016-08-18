---
layout: post
title:  Setting up a splash page for a Meraki network
date:   2015-07-30
categories: documentation
keywords: Meraki captive portal, Meraki splash page not working, Meraki splash page template, Meraki splash page free, Meraki splash page html, Meraki splash page hosting
---

In order to use Meraki with the Cucumber Tony logins and radius, you'll need to make some changes in your Meraki portal.

On the left hand menu bar, click on <b>Wireless</b> and select <b>Access Control</b>.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/meraki-guide/meraki-access-controls.png">
</div>

Under <b>Splash Page</b>, you'll need to select the <b>Sign-on with</b> option. In the drop down, select <b>my RADIUS server</b>.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/meraki-guide/sign-on-with.png">
</div>

Scroll down and look for <b>RADIUS for splash page</b>. Click on <b>Add a server</b> and enter the following details in the necessary fields:
<ul>
<li>Host: 146.148.7.43</li>
<li>Port: 1812</li>
<li>Secret: LocIAeonShieSEpodE57</li>
</ul>

You should have an option underneath that shows <b>RADIUS accounting</b>. Make sure the option in the field is on <b>RADIUS accounting is enabled</b>.

<b>!! IMPORTANT !! If you don't, please contact Meraki support to ask them to enable this option for you</b>

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/meraki-guide/radius-for-splash.png">
</div>

Now change the accounting servers to the following:
<ul>
<li>Host: 146.148.7.43</li>
<li>Port: 1813</li>
<li>Secret: LocIAeonShieSEpodE57</li>
</ul>

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/meraki-guide/radius-for-splash.png">
</div>

Scroll further down and look for <b>Walled Garden</b>. Make sure <b>Walled garden</b> is enabled and add the Walled Garden entries to the <b>Walled garden ranges</b>.

You can find the most up to date list of <b><span data-elevio-article="18499">Walled Gardens here.</span></b>

If you have errors when copying these in, try typing them out manually.

<b>!! IMPORTANT !! Click Save at the bottom right yellow pop up to ensure all your changes have been made.</b>

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/meraki-guide/walled-garden.png">
</div>

Now you'll need to add your Meraki Box into your <b>Cucumber Tony dashboard</b>.

You'll need the MAC address for this. To find this, click on the <b>Wireless</b> tab on the left hand side and select <b>Access Points</b>.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/meraki-guide/wireless-ap.png">
</div>

The MAC address of your box will show here.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/meraki-guide/mac-address-box.png">
</div>

Now go to your Cucumber Tony account and if you haven't already, create a location to add your boxes to.

Once a location has been created, select your <b>location</b> and click on <b>Boxes</b> in the left side menu. Add your Meraki box by clicking on <b>Add box</b>.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/meraki-guide/add-box.png">
</div>

Select <b>I have a Meraki, Ruckus or another device</b> and add the <b>MAC address</b> you got from the Meraki Dashboard previously and click <b>Save</b>.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/meraki-guide/meraki-box.jpg">
</div>

Finally you'll need to change your splash page to use a <b>custom url</b>.

Head to your <b>Box</b>’s page and click on the box you've just added. If you don't immediately see a large green button called <b>Radius Settings</b>, you'll need to make a few changes by clicking on <b>Settings</b>.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/meraki-guide/box-settings.png">
</div>

Scroll down to <b>Cucumber Tony Settings</b> and uncheck <b>I'm a Cucumber Tony box</b> and select your Meraki box type under <b>What kind of box do you have</b>. Scroll to the bottom of the page and click <b>Update</b>.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/meraki-guide/not-ct-box.png">
</div>

Now go back to the <b>Details</b> tab in <b>Boxes</b> and you'll see the large green button - <b>Radius Settings</b>.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/meraki-guide/radius-settings.png">
</div>

You'll be shown a page with all the radius settings information needed. Copy the Splash URL - <b>http://app.my-wifi.co</b>

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/meraki-guide/splash-url.png">
</div>

Now, head back over to your <b>Meraki Dashboard</b>, and click on <b>Wireless</b> again and select <b>Splash page</b>.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/meraki-guide/wireless-splash-page.png">
</div>

Now select <b>Custom Splash URL - Or provide a URL where users will be redirected</b> and paste the above URL (<b>http://app.my-wifi.co</b>). This step is necessary for both single splash page or the multiple splash page URL. Then click <b>Save</b>.

<b>Note</b>: If you have tagged logins enabled, this will take priority over the URL provided.

Your SSID should now show in your networks. Select the SSID in your networks to test this.

<b>!! IMPORTANT !! The SSID of your network will be the one you've set in Meraki not the one set in Cucumber Tony. This feature is not available for Meraki boxes. You can rename or edit these under your Meraki SSID settings.</b>

For multiple SSID's, enable the SSID's you want in your Meraki SSID settings, then return to Splash Page settings in Meraki and apply the same method as shown below.

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/meraki-guide/custom-splash.png">
</div>


<h3><b>IMPORTANT MESSAGE</b></h3>

You may get alerts from Meraki about the servers being unreachable. If this happens, then you will need to retreive a set of IP addreses from your dashboard and email them in to us.

Under <b>Access Control</b>, on the middle of the page get the following IP addresses and send them to support@polkaspots.com in order to add them in.

It will look like the following:

<div class="mdl-typography--text-center">
<img src="/images/community/tutorials/meraki-guide/radius-ip.png">
</div>

Secondly, you may need to ask Meraki a few things:
<ol>
<li>To enable hostnames in the list of allowed walled gardens</li>
<li>To enable radius accounting otherwise you get zero data</li>
</ol>
<br>
