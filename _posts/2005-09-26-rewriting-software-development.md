---
layout: default
title: "Rewriting the software development playbook"
---

Over the last few days I've been reading up on hardware architecture for the
PS3 and XBox 360. With multi-core processors seemingly the way of the future
for all the major manufacturers, game developers will continue to be software
pioneers over the next few years facing incredibly complex multi-threading
and software design problems. From
[Arstechnica](http://arstechnica.com/news.ars/post/20050629-5054.html):

> But like I said above, that free ride is over, and now it's time to face the
> multithreaded, multicore music. In the new world, a world of which both the
> Xenon and the Cell are a part, programmers have a whole lot more work to do,
> in terms of both splitting their applications up into threads and of
> optimizing those individual threads. The fact that they haven't yet been able
> to figure out how to make applications that they learned how to write on the
> old hardware work on the new hardware is completely unsurprising. The old
> hardware had a theoretical performance peak and lots of hardware aimed at
> helping applications reach that peak; the new hardware has a higher
> theoretical performance peak, and little to no hardware aimed at helping
> applications reach that peak. So developers have a longer distance to go, and
> they have less help in getting there. It certainly makes for a vexing
> combination, but it's way too early to say that it's the end of the
> world.

[Anandtech](http://www.anandtech.com) has a number of
great articles for getting up to speed on this hardware architecture and the
implications for software:

* [Understanding the Cell Microprocessor](http://www.anandtech.com/cpuchipsets/showdoc.aspx?i=2379&p=1)
* [The Quest for More Processing Power, Part One: "Is the single core CPU doomed?"](http://www.anandtech.com/cpuchipsets/showdoc.aspx?i=2343&amp;p=1)
* [The Quest for More Processing Power, Part Two: "Multi-core and multi-threaded gaming"](http://www.anandtech.com/cpuchipsets/showdoc.aspx?i=2377&amp;p=1)

While there will be many challenges in rearchitecting existing software for
optimal execution under this new architecture, I'll be more interested to see
what new applications and solutions become possible as a result of the new
architectures. Software that has many things going on simultaneously, software
that seems to be moving around you rather than just waiting for your next piece
of input.

Software developers are used to coaching a single player (think tennis), who
got faster and stronger each year. Now, we're being asked to coach a team
(think football) where each player gets only slightly better but the number of
players available increases each year.

It's time to start rewriting the playbook...
