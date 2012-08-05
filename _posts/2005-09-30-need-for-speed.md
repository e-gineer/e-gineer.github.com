---
layout: default
title: "The need for speed"
---

[Mark Fletcher](http://www.wingedpig.com/) (the
[bloglines](http://www.bloglines.com/) guru) explains the [effect of
speed](http://www.wingedpig.com/archives/000089.html) on a web site /
application:

> The speed of your service directly affects its
> usage. We quickly discovered this with ONElist. When the web site was slow,
> people used it less, resulting in fewer page views. When it was fast, we saw an
> increase in usage ... we thought that web site usage was very task oriented.
> Once they finished their task, they'd leave. The speed of the service wouldn't
> affect the number of pages they viewed, just the time it took to complete their
> task. But we were wrong.

A slow site leads to an exponential
increase in load on the service. ... This is because people are impatient. If
Joe Surfer has to wait more than a few seconds for a web page to load, he
generally hits the Stop button in his browser and tries to load the page
again.

This definitely reflects our general experiences with
[Sytadel](http://www.synop.com/Products/Sytadel/), but I have seen another more
powerful way to create exponential load. During the boom I was the technical
lead for a very high volume dot com. 4am one morning (Australian time) I get a
dreaded "server down" call (9am their time). Restarting
[Apache](http://httpd.apache.org/) and watching the httpd process list grow to
>100 in the first few seconds is very disconcerting. The server had been
performing well for weeks and investigations later that day revealed the
problem. The home page was constructed by using a number of
[include()](http://www.php.net/include) statements to pull in various
[PHP](http://www.php.net/) code pieces. A technician for the site had added
some new PHP code pieces but was getting the content piece via an
[fopen()](http://www.php.net/fopen) on the full URL rather than using an
include(). So, every home page view spawned 4 extra page views on the same
server to construct the home page HTML itself.

The fact that I now use
Google for all mathematical operations is also testament to this. While
drilling down for the Windows calculator a couple of months ago I saw that
Google toolbar input field sitting there just [waiting for an
equation](http://www.google.com.au/search?q=1+km+in+inches&ie=UTF-8&amp;amp;oe=UTF-8&hl=en&amp;meta=).
I had the answer faster than it would normally take to find the calcuator from
the Windows Start menu.

*Note: Originally posted to my Synop blog on 24 March, 2004.*
