---
layout: post
title: Applying for the correct Facebook Permissions
date: 2015-09-22
categories: tutorials
keywords: Social Logins, Social Wi-Fi, Facebook Wi-Fi, Facebook App Permissions
tags: tutorials
---

##How do I set up my own Facebook App?

Facebook logins work out of the box with Cucumber Tony. However, some people want to use their own application. The benefits of this include:

- Your customers see your logo, not ours
- You can control the permissions

There's some information about checkins about the bottom of this page.

### Getting Started.

First up, you need a Facebook account. Once you have this, head over to the Facebook developer portal and create an account. The developer site is here:

<a href="https://developers.facebook.com">https://developers.facebook.com</a>

### Create an App.

Click the *My Apps* button, then click *Add New App*

<div class="text-center">
  <img src="/images/community/tutorials/facebook-logins/facebook-captive-portal-1.png" width="300px">
</div>

On the following screen, select the website option.

<div class="text-center">
  <img src="/images/community/tutorials/facebook-logins/facebook-captive-portal-2.png" width="800px">
</div>

Enter a name for your new application. Make it clear, keep it simple. Click **Create New Facebook App ID**.

Choose a category and then click **Create App ID**

<div class="text-center">
  <img src="/images/community/tutorials/facebook-logins/facebook-captive-portal-3.png" width="800px">
</div>

<div class="text-center">
  <img src="/images/community/tutorials/facebook-logins/facebook-captive-portal-4.png" width="800px">
</div>

Scroll down and enter the url for your login pages - it must match your actual login pages. For example, acme.my-wifi.co

<div class="text-center">
  <img src="/images/community/tutorials/facebook-logins/facebook-captive-portal-5.png" width="800px">
</div>

Once this is done, refresh the page and select your application from the *My Apps* dropdown. It will look something like this.

<div class="text-center">
  <img src="/images/community/tutorials/facebook-logins/facebook-captive-portal-6.png" width="800px">
</div>

### The Settings.

Fill-in your settings, exactly as per the screenshots below. Make sure you're using the correct url - you can use the brand you've already probably set-up in your Cucumber dashboard. It has to match your login pages.

You'll also need to add your own logo and support email.

<div class="text-center">
  <img src="/images/community/tutorials/facebook-logins/facebook-captive-portal-7.png" width="800px">
</div>

### Add Application To Cucumber Tony

You're almost done, you can now test your application.

Login to your dashboard and navigate to one of your locations. Click splash pages (or create a new one)!

- Enable social logins and scroll down to the Facebook options.

- Uncheck **Use our credentials**

- Enter your App ID in the box (you'll find this in your Facebook developer portal).

<div class="text-center">
  <img src="/images/community/tutorials/facebook-logins/facebook-captive-portal-8.png" width="800px">
</div>

### Testing Testing Testing

Open up a login page and make sure you can see the social login screen. Click Facebook and login - you should see a new popup prompting you to enter your credentials. If this doesn't work, please check you have entered your URL correctly and that your App ID matches your Facebook App.

**Please note, you will not be able to checkin yet. You need to apply to Facebook for this privilege.**

### Status and Review

Ok, happy that your new application is working? You probably want your users to checkin now.

To checkin at a location, you now need to tag a place in your Open Graph story (more info on this at the bottom). You don't need to worry too much about the logistics, we'll do that for you. All you need is the correct permissions for your application.

In your Facebook developer's portal, head over to **Status & Review**. Please make sure your Application is live. An email is required to activate it.

Once this is done, make sure the Approved Items are all green and then click the **Start a New Application** button.

<div class="text-center">
  <img src="/images/community/tutorials/facebook-logins/facebook-captive-portal-9.png" width="800px">
</div>

You need to apply for **publish_actions**. If the following banner appears, please make sure you've actually logged in once via the new app.

<div class="text-center">
  <img src="/images/community/tutorials/facebook-logins/facebook-captive-portal-10.png" width="800px">
</div>

Fill-in all the required information on the following page. In the **Facebook Login Integration** box, explain the following:

- You're a Wi-Fi hotspot provider.
- You're allowing the users to checkin after they have logged in.
- Mention that checkins are optional and any messages are optional too.

If you have the time, please take some screenshots of your login pages and the checkin form.

**It's really important you're clear that the user doesn't have to checkin. If you don't say this, your application may be refused.**

Once you're done, click submit. Get yourself some tea and wait. It may take a couple of days to get your Application approved.

<div class="text-center">
  <img src="/images/community/tutorials/facebook-logins/facebook-captive-portal-11.png" width="800px">
</div>

### Test Test Test

Once your application is approved, you should head off and check you can now checkin! Your developer portal should also look like this:

<div class="text-center">
  <img src="/images/community/tutorials/facebook-logins/facebook-captive-portal-20.png" width="800px">
</div>



### More Information

Facebook removed the checkin end point as of Graph API version 2.0. Checkins have been depreciated in favor of attaching place information to posts, or tagging places in Open Graph stories.

So, to checkin, you now need to tag a place in your Open Graph story.

**Facebook don't allow you to force like pages any more**. It's not a good way to encourage usage.

If you have a specific requirement other than the publish_action, please get in touch and we can discuss adding more features to CT.

Enjoy! Remember, if you don't want to do all this, you can use our application. It's all set up for you. 

<a href="https://my.ctapp.io/#/create" class="button success">Sign Up</a>

Sign-up for Cucumber Tony, it's free for unlimited access points and social logins :)
<hr>
