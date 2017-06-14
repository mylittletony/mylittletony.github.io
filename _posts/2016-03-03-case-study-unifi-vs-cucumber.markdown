---
layout: case-study
title:  Cucumber Dashboard VS UniFi Controller
date:   2016-02-21
categories: casestudy
keywords: casestudy
thumbnail: /images/case-studies/unifi-comparison/dan-bunyard.png
permalink: /case-studies/cucumber-vs-unifi.html
redirect_from:
  - /case-studies/cucumber-vs-unifi
  - /case-studies/cucumber-vs-unifi/
description: “Overall Cucumber is a very solid platform with amazing support.”
---

<div class="mdl-grid">
<div class="case-study-side mdl-cell mdl-cell--3-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-typography--text-center mdl-shadow--1dp">
<img class="cs-portrait text-center" src="/images/case-studies/unifi-comparison/dan-bunyard.png" width="120px">
<p>Dan Bunyard<br><small>Networking Connoisseur</small></p>
</div>

<div class="case-study-post mdl-cell mdl-cell--9-col mdl-shadow--1dp">
<a href="/casestudies/">< Back to Case Studies</a>

<p>This report was submitted to us by one of our users on their views on the differences between the <b>Cucumber Dashboard</b> and the <b>UniFi Controller</b>.</p>

<p>It was <b>submitted on 10/Feb/2016</b>, and so is a reflection of the feature-set at that time, as well as their own personal opinions. Changes may have been made to both the Cucumber dashboard and UniFi controller since then.</p>

<hr>

<h1>Cucumber Dashboard VS UniFi Controller</h1>

<p><i>(NOTE: Using latest 4.8.x branch of Unifi, 4.8.12 as of the time of this writing)</i></p>

<p>First off let me start by saying if you are coming from UniFi you will find the interface somewhat familiar. The main navigation for needed functions are down the left side, while the "meat" of the content occupies the right 3/4 of the screen.</p>

<p>That being said let's take a look at some of the key differences.</p>

<hr>

<h2>From a Client View Perspective:</h2>

<p>Not much to see here, both are very similar and offer great insights to the clients connected to your network:</p>

<div class="mdl-typography--text-center">
  <i><small>UniFi Controller Client List</small></i>
  <br>
  <img src="/images/case-studies/unifi-comparison/unifi-clients.png">
</div>
<div class="mdl-typography--text-center">
  <i><small>Cucumber Dashboard Client List</small></i>
  <br>
  <img src="/images/case-studies/unifi-comparison/ct-clients.png">
</div>

<p>Cucumber Tony does offer up a nice graph showing clients and throughput however with the throughput being bugged it's not overly useful.</p>

<p>Further breakdown of pros and cons of Cucumber vs UniFi:</p>

<h3>Pros:</h3>
<ul>
<li>+ Better graphs and insights, able to see more details about signal levels</li>
<li>+ WAY cleaner interface and graphing</li>
</ul>

<h3>Cons:</h3>
<ul>
<li>- No way to disconnect/block a client unless connected via a splash page</li>
<li>- As noted above usage statistics are bugged and need sorted out</li>
</ul>

<hr>

<h2>Networks/SSIDs:</h2>

<p>There is more gained here than lost.</p>

<p>The huge one is the ability to add/change/remove SSIDs without causing the entire network to reload (breaking connectivity for up to 5 minutes). UniFi is terrible from that perspective.</p>

<p>Pictures here don't really help compare as it's apples and oranges.</p>

<h3>Pros:</h3>
<ul>
<li>+ WAY better splash page options</li>
<li>+ WAY better guest management and control over their usages</li>
<li>+ Content filtering per SSID</li>
<li>+ As mentioned above adding/changing/removing SSIDs doesn't break the network for 5 minutes</li>
</ul>

<h3>Cons:</h3>
<ul>
<li>- No time-based SSIDs, as in ability to disabled SSIDs during certain time periods.  This is something UniFi does well:</li>
  <div class="mdl-typography--text-center">
    <i><small>UniFi Timed SSIDs</small></i>
    <br>
    <img src="/images/case-studies/unifi-comparison/unifi-timed-ssid.png">
  </div>
<li>- Speed restrictions cannot be enforced SSID-wide, only controllable via splash pages.  UniFi uses "groups" which can be applied to an SSID and restrict download/upload speeds.</li>
<ul>

<hr>

<h2>General:</h2>

<p>As with the SSIDs noted above there is more to be gained here than lost. Let's just dive straight into the list:</p>

<h3>Pros:</h3>
<ul>
<li>+ As eluded to above most changes require small blips AT MOST! UniFi will reload the APs for even the smallest of modifications</li>
<li>+ WAY easier upgrades</li>
<li>+ More advanced firewalling - UniFi is basic at best</li>
<li>+ WAY more diagnostic capabilities</li>
<li>+ WAY better reporting</li>
<li>+ API has way more functionality than UniFi</li>
</ul>

<h3>Cons:</h3>
<ul>
<li>- No SNMP</li>
<li>- No syslog without a paid plan</li>
<li>- No type of RSSI/floor plan maps to show estimated coverage. UniFi has at least basic capabilities:</li>
  <div class="mdl-typography--text-center">
    <i><small>UniFi Floorplan</small></i>
    <br>
    <img src="/images/case-studies/unifi-comparison/unifi-map.png">
  </div>

<p>A general note, <b>UniFi is local hosted</b> while <b>Cucumber is cloud hosted</b>. No real pro/con here, just something to keep in mind.</p>

<hr>

<h2>Conclusion:</h2>

<p>Cucumber Tony is built around the guest access/splash model. While not a bad thing that does restrict some functionality if you aren't using those features.</p>

<p>However at the end of the day the pros outweigh the cons in every instance. The only feature preventing me from a migrating is the time-based SSIDs as mentioned above.</p>

<p>Overall Cucumber is a very solid platform with amazing support.</p>

<hr>

<div class="mdl-typography--text-center">
<p><i>Cucumber Tony is a cloud based WiFi management platform for businesses. The firmware gives consumer-grade WiFi access points enterprise-like capabilities. Or you can utilise the captive portal solution with your existing infrastructure. Create a free account and check it here <a href="https://cucumberwifi.io">cucumberwifi.io</a></i></p>
<div class="mdl-typography--text-center">
<h2>Come join Cucumber</h2>
<a href="https://my.ctapp.io/#/create" class="button success dst">Sign Up</a><br>
<p>Sign-up for Cucumber Tony, it's free for unlimited access points :)</p>
</div>
<hr>
</div>
</div>
</div>
