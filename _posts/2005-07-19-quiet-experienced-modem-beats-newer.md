---
layout: default
title: "Quiet & experienced modem beats newer, whining model"
---

Since changing to [iiNet](http://www.iinet.net.au) for faster ADSL speed, I've
been having connection problems with our modem. It seems to keep getting
disconnected. Moving it into the kitchen, plugged into our apartments first
phone socket seemed to help with stability, but not aesthetics. On top of this,
it has been making a high pitched whine noise while connected. Not unusable,
but definitely annoying.

Tonight I tried moving it back into the study, but got the same connection
problems immediately. Upon moving it back to the kitchen they continued. In
frustration, I tried plugging in the old Synop modem we got in late 2000. They
are both Alcatel SpeedTouch, but we only got the whining modem in late 2003.

Suddenly our internet connection came to life! All this time I'd been assuming
that our apartment building had a crappy phone line path to the exchange,
although we live very close.

With the whining, newer modem our synch speed was about 2.5Mbps down and about
830k up.

With the quiet, old modem I'm getting 7.5Mbps down. Unfortunately, I'm unable
to determine the upstream speed using the more primitive interfaces and tools.
I only took the time to work this out when I was staggered at how much faster
it actually felt to use. Yum!

Some tips for people who are playing with Alcatel SpeedTouch modems in an Australian ISP environment:
1. The [Oz Broadband Speed Test](http://members.optusnet.com.au/djalexm/speedtest/) site is really helpful to get a sense of your speed. I found that Optus gave the fastest results.
2. I [used these instructions](http://www.petri.co.il/upgrade_from_alcatel_speedtouch_home_to_pro.htm) to upgrade my Alcatel SpeedTouch home modem to the Pro model. To be honest, I probably didn't need to bother since I'm not using the PPP features anyway at this stage.
3. I [used these instructions](http://www.dslsupport.co.uk/downloads/HAP/SoftwareUpgrade.pdf) to upgrade the modem firmware. My modem only had obscure model numbers, so I was unable to work out exactly what type it is. I looked at the existing firmware version to try and guess the most suitable upgrade version. For me, it was an upgrade from KHDSAA.133 to KHDSAA3.264. You can download a lot of different firmware versions [here](http://www.nzdsl.co.nz/software/alcatel/Default.htm).
4. [Alcatool](http://www.nubz.org/alcatool/) was really helpful for getting line stats information from this older model modem which has an incredibly crappy web interface. Click the System button and then the Line Stats button to see your info. A good summary of the line stat terms is [available here](http://www.dslreports.com/faq/6728).

Now, if only there was a way to make US sites as blindingly fast as the Australian ones. I often still only get 30kB/sec to the US.
