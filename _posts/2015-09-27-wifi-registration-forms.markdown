---
layout: post
title: How to setup a custom registration form
date: 2015-09-28
categories: documentation
keywords: WiFi Registration Form, WiFi registration, Wi-Fi registration fields, MailChimp WiFi

---

If you want to capture customer data, it's simple with Cucumber Tony. It's simple, here's how it works:

- > The first time your customers try and get online, they'll see your registration form on the login page.
- > After filling in the details, they will be logged in.
- > The next time they arrive, they won't have to register again.

If you have selected "Require Registration", they will need to enter a username and password when signing up. If you don't select this, when they arrive again, they will just see a clickthrough login.

## Step 1. Create a Splash Page

In your Cucumber dashboard, create a new splash page (you can use an existing one if you want). 

Make sure you've set the access type to 'Registration'. Click the Edit Form button.

<div class="text-center">
  <img src="/images/community/tutorials/wifi-hotspot-registration-1.png" width="800px">
</div>

You should see a screen similar to this:

<div class="text-center">
  <img src="/images/community/tutorials/wifi-hotspot-registration-2.png" width="800px">
</div>

Enter a description for the form. This will appear on the login page.

## Step 2. Add Your Fields

Let's create a country field. To do this, click the 'Add New' button on the right.

The options can be confusing to start with, we'll tell you what they mean here.

<div class="row">
  <div class="small-12 columns">
    <div class="row">
      <div class="small-12 medium-8 columns">
        <ul class="no-bullet">
          <li><b>Field Name</b>: this defines what it's called when you view your data. Make it descriptive, like 'gender' or 'country'.</li>
          <li><b>Field Label</b>: the label for the field and will appear on the logins. You can type 'hidden' here and it won't appear.</li>
          <li><b>Field Type</b>: the type of field, usually this will be text box.</li>
          <li><b>Required</b>: if you select this, your customers will have to enter something before they can login.</li>
          <li><b>Hidden</b>: Maybe you want to send a hidden variable with the request, for example an ID for your hotspot.</li>
        </ul>

        <p>If you click the advanced button, there's even more stuff.</p>

        <ul class="no-bullet">
          <li><b>Unique ID</b>: if you're on a paid account, you can sync your form with your MailChimp forms too. Enter your MailChimp merge name in here. For example, MMERGE4.</li>
          <li><b>Value</b>: you might want a default value for the field, particularly if you're using a hidden field.</li>
        </ul>
      </div>
      <div class="small-12 medium-4 columns">
        <img src="/images/community/tutorials/wifi-hotspot-registration-3.png" width="100%">
      </div>
    </div>
  </div>
</div>

### Changing the order

To change the order of the fields, simply drap them around!

<div class="text-center">
  <img src="/images/community/tutorials/registration-form-order.gif" width="400px">
</div>

### Creating Radio Buttons

If you want some multiple-choice questions, you can use a checkbox but you're better off with radio buttons. Set them up like this, it's a blast!

<div class="text-center">
  <img src="/images/community/tutorials/reg-radio-buttons.gif" width="400px">
</div>

### Getting your Data

Once your customers have started signing-up, their data will appear in the guests report.

The default view shows all your records. If you want to see your custom fields, you can switch the splash page in the drop down menu.

In the guest's page, you can view their details, usage history and leave some notes about the customer.


<div class="text-center">
  <img src="/images/community/tutorials/guest-lists.gif" width="400px">
</div>

### Syncing with MailChimp and Campaign Monitor

To sync your emails with MailChimp, all you need to do is enable the newsletter in your splash page. Emails will automatically be sent to your service.

If you want to sync you custom fields with MailChimp, you need to be on a paid plan. If you're on a paid plan, please make sure the 'Merge Fieds' option is enabled. This only works with MailChimp at the moment.

<div class="text-center">
  <img src="/images/community/tutorials/registration-fields-merge-fields-mailchimp.png" width="800px">
</div>

### That's a Wrap

You should be good to go, let us know if you need assistance with this!

## Questions

### What if they turn up with a new device.

If you've selected "Require Registration", they will be able to sign-in with their chosen username and password. 

If not, they will have to register again. There's no way for us to tell who they are.

### I can't change the username

That's correct, the username field cannot be removed. The username is always the email of the customer.

### I can only see 25 guests

On the free plan, the number of guests you can view is limited to 25.

### I don't see my custom fields in MailChimp

This option is only available for paid plan. If you're on a paid plan, first check you have enabled "Merge Registration Fields" in your portal.

If you're sure you've done this, check your field IDs match. Your fields ID are set in MailChimp. Your merge ID must match your Unique ID:

<div class="row">
  <div class="small-12 medium-6 columns">
    <img src="/images/community/tutorials/mailchimp-merge-fields.png" width="100%">
  </div>
  <div class="small-12 medium-6 columns">
    <img src="/images/community/tutorials/mailchimp-merge-2.png" width="100%">
  </div>
</div>

### I deleted a field, my data looks wrong.

We recommend you don't delete fields if you already have data. If you want to change some fields, it's best to create a new splash page.

### Can I export the data

You bet! Simply visit your reports page and hit the download button. You'll be able to download the data as a CSV. Please note, this is a paid feature.

<hr>

*Cucumber Tony is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities.Or you can utlise the captive portal solution with your existing infrastucture. Create a free account and check it here <a href="https://cucumberwifi.io">cucumberwifi.io</a>*

<div class="text-center">

<h2>Come join Cucumber</h2>

<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>

<p>Sign-up for Cucumber Tony, it's free for unlimited access points :)</p>

<hr>

</div>
