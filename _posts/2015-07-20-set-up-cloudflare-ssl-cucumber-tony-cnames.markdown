---
layout: post
title: Using SSL with your custom domain
date:   2015-06-26 22:29:01
author: Simon (Big Chief) Morley
categories: tutorials
keywords: Cloudflare ssl, ssl wifi, cucumber tony ssl
---

###Set up Cloudflare's free SSL with a custom domain for your Cucumber Tony Dashboard.

## What?

We value security above pretty much everything. Security first. As a result, your dashboard's protected against abuse. We think your Wi-Fi deserves the best. Not everyone thinks this way.

You can now set up a custom domain with Cucumber Tony. Your customers and friends can use this to log-in to your dashboard.

There's one downside - you need to sort your SSL certificates. Or cheat, as we explain here.

## Hold on

What's a custom domain? Setting up a custom domain for your dashboard means you'll be able to give your customers and friends a unique URL.

## Let's go

It takes less than a minute to set this up, however you will need to do some work on your side for things to work correctly.

<h3>Set Up Your Domain</h3>

<p><b>You can only add a custom domain on the paid plans, please make sure you've upgraded your account first.</b></p>
<p>Navigate to your account settings and click branding. You should see something like this:</p>
<div class="text-center">
  <img src="/images/community/tutorials/branded-wifi-setup.jpg" width="800px">
</div>

<p>You'll want to enter your domain in the custom domain box at the bottom. </p>
<p><b>Cloudflare's free ssl add-on only supports root domains, so you can't use a domain like wifi.my-great-company.com. Instead, you must use my-great-company.com.</b>We'll run through how you can achieve this with their $20 monthly plan later on.</p>
<p>Enter your domain and hit save. Wait a moment - you should be notified when your custom domain was added.</p>
<h3>Adjust your DNS</h3>
<p>The specific stages you need to follow depend on your DNS provider. This is usually the same company you bought your domain from.</p>
<p>Once you've figured who your provider is, you will need to change your newly created domain's settings.</p>
<p>Create a new cname pointing at <b>cname.ctapp.io</b>. This is what the settings for 123reg might look like.</p>

<div class="text-center">
  <img src="/images/community/tutorials/123-reg-cname.jpg" width="800px">
</div>

<h3>Check it's Working</h3>
<p>It can take up to 24hours for changes to DNS to save.</p>
<p>Open a browser and head over to the domain you just added. If you see a page like this, you've added the wrong CNAME or your changes weren't save. Please go back to your settings and make sure things match.</p>


<div class="text-center">
  <img src="/images/community/tutorials/broken-cname.png" width="800px">
</div>

<p>If you have set things up correctly, you will probably get an error - this is because the certificate for cname.ctapp.io doesn't match your domain. This is totally expected!</p>

<div class="text-center">
  <img src="/images/community/tutorials/broken-ssl-1.png" width="800px">
</div>

<div class="text-center">
  <img src="/images/community/tutorials/broken-ssl-2.png" width="800px">
</div>

<p>If you're using the dashboard internally, there's nothing to worry about. However, if you want your customers to use it, you'll need to sort this out.</p>
<p>Because you can't upload your SSL certificates to our servers, we're going to have to cheat a little. But that's ok.</p>

<h3>Enter Cloudflare</h3>

<p>Cloudflare is a totally awesome service. Fact. One fantastic feature is their free SSL addon. In September 2014, they announced the <a href="https://blog.cloudflare.com/introducing-universal-ssl/" target="_blank">free Universal SSL</a> service. This allows them to very cleverly serve a certificate for a load of domains sharing a single IP. This means you can benefit too. It does mean, [repeat] that you must use only the root domain on their free service.</p>

<p>Go create a new <a href="https://cloudflare.com">Cloudflare</a> account, it won't take long.</p>

<div class="text-center">
  <img src="/images/community/tutorials/cloudflare-add-site.png" width="800px">
</div>

<p>Once the scan is complete, you'll need to make sure all your domains are present as we're going to move our DNS over to Cloudflare. If you're not sure what you're doing, drop them a line.</p>

<div class="text-center">
  <img src="/images/community/tutorials/cloudflare-dns-1.png" width="800px">
</div>


### Create your root domain

Add your domain in as so:

**public-wifi.co.uk**

And point this at cname.ctapp.io (cname)

You should see a notice about using **dns flattening**. This is ok and what you need.

Next, head over to the Crypto section and enable flexible SSL.

<div class="text-center">
  <img src="/images/community/tutorials/cloudflare-crypto.png" width="800px">
</div>

And that should be you done. Check you can access your domain without any SSL warnings appearing.

<hr>

<div class="text-center">
Enjoy! Remember, if you don't want to do all this, you can use our application. It's all set up for you. 

<h2><a href="https://my.ctapp.io/#/create" class="button large success dst">Sign Up</a></h2>

Sign-up for Cucumber Tony, it's free for unlimited access points and social logins :)
</div>

<br><br>
<br><br>
