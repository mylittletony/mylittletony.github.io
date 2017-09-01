---
layout: post
title:  How to get the best WiFi Coverage
date:   2015-08-20
categories: tutorials
keywords: boost Wi-Fi signal, Wi-Fi rf signal, improve Wi-Fi coverage, adjust Wi-Fi signal down, most powerful Wi-Fi router, best Wi-Fi access point signal
thumbnail: /images/community/thumbnails/rf-power.png
tags: Tutorials
description: An interview with our WiFi Guru on how less can be more when it comes to Wi-Fi power.
---

A lot of people ask us which access point will give them best coverage, and they're always surprised when we don't point to one with the highest power outage.

Wi-Fi coverage is not as simple as blasting out a signal and hoping for the best, so we had a chat with Wi-Fi engineer Andrew, on why you might want to turn your Wi-Fi signal down not up.

### _It's not the size, it's how you use it._

Hi Andrew. Can you explain to us what the power rating of an access point actually means?

>The high power/long range access points are for the most part manufacturer marketing catch phrases. TX is how power is measured. The maximum TX power allowed under the 2.4 Ghz spectrum is 20dBm - 100mW EIRP in EU. Anything over this breaks the guidelines set by the ETSI.
>The extra money that you pay for the long range, is just wasted in EU.

Ok, so we should just choose an AP with a maximum of 100mW?

>Not quite. You should choose a power setting to suit your environment. Increasing the power output of your AP over a certain level can actually decrease the overall performance.

Ah, so you're saying you can actually extend the signal too far?

>Exactly. Overpowering is one of the most common problems we see in Wi-Fi networks. Bigger isn't always better if you know what I mean.

>First off, as you are extending the coverage, your AP will be able to hear more interfering devices.

>You will be competing with more APs for air time. Every AP sends out the question “Am I clear to send?”. If the air is free it will send, if not it will repeat until there's room. This is hard work for your little AP.

>The biggest problem is with devices not being able to connect even though they think they're in range. People will see 1-2 Wi-Fi bars on their devices but not actually be able to connect to the internet.

>It's like a ghost signal.

Weird. Surely if the device has signal bars showing it can connect? <image of low signal bars on phone>

>No, just seeing the signal isn't enough, it has to be able to respond. Connecting to Wi-Fi is like a conversation between access point and device. When an APs sends out a signal, it waits for a device to call back. It's called “positive acknowledgement”.

>This ‘ghost signal' is basically the device seeing the signal but not being able to respond. Because you increased the AP's power it will be able to 'shout' louder. However it's unlikely the device at the edge of the signal will be able to shout back as loudly, and the AP won't hear the response.

>The end user will see a signal of 1 - 2 bars but won't actually connect.

So bottom line; more Wi-Fi signal power is not always better. Gotcha. Anything else you want to add?

>Take your neighbours Wi-Fi signal Wi-Fi into consideration if you can.

>Increasing your Wi-Fi power output will mean that they will see your AP's signal where they normally wouldn't. And your AP will try to compete for the same air time, decreasing their performance as well as yours.

>There's no need to up your Wi-Fi power to the point you are covering areas you do not need to.

Any tips on how you can you measure if your signal is going too far?

>There are lots of apps out there to help you measure the signal strength and interference in an area.
<app image of inference>

>These don't cover the 'ghost signal' we mentioned. This is can be a real problem. When someone sees bars of signal on their phone but can't connect they blame the internet, the splash access page or captive portal, their phone, everything but the signal. It wastes a lot of diagnosis time.

>When we built the CT WiFi platform I was really keen to include RF signal measurements. These show how strong the connection is for each user. It measures the quality of the connection from the user's point of view.

>It displays the overall quality of your radio, the average SNR, interference level, average data rate and couple of other things. This plus the option to view it back in time, gives you an indicator of the overall Wi-Fi performances. Based on that you can take actions like moving the AP, decreasing the power output, selecting a channel that is not so congested and so on.

>It measures the quality of the connection from the user's point of view.

>It makes a big difference to the quality of your Wi-Fi network.

<image of RF graphs>

