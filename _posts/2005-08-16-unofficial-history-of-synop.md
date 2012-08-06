---
layout: default
title: "Unofficial history of Synop"
---

<a href="http://www.e-gineer.com/v2/blog/2005/08/SynopSoftware.gif"><img
style="FLOAT: right; MARGIN: 0px 0px 10px 10px; CURSOR: hand" alt="Synop
software logo"
src="http://www.e-gineer.com/v2/blog/2005/08/SynopSoftwareThumbnail.gif"
border="0" /></a> 

I started Synop in September 1998 as a uni student working
from my bedroom with about $8,000 to my name. Luckily, starting a business
didn't seem like a big deal because I could always get a job and I didn't
really even think of it as starting a business, let alone understand what that
meant.

<a href="http://www.e-gineer.com/v2/blog/2005/08/elecorg.gif"><img
style="FLOAT: left; MARGIN: 0px 10px 10px 0px; CURSOR: hand" alt="elec.org
screenshot" src="http://www.e-gineer.com/v2/blog/2005/08/elecorgThumbnail.gif"
border="0" /></a> 

Initially, Synop traded as a NSW business called [Synop
Software](http://www.search.asic.gov.au/cgi-bin/gns030c?state_number=V0038522&juris=2&amp;hdtext=&srchsrc=1).

Caught up in the Internet gold rush, I wanted to build an online version of Quicken so
I could enter my expenses remotely. Typical of Synop, this turned into a full
fledged electronic organiser with sophisticated item sharing between members.
[elec.org](http://www.e-gineer.com/v2/blog/2005/08/elecorg.gif) was the working
name and the site was built using AOLServer, TCL and the Solid database server.
Having no experience with Internet sites or databases, [Philip and Alex's Guide
to Web Publishing](http://philip.greenspun.com/panda/) was my bible at this
time.

<a href="http://www.davethomas.net"><img style="FLOAT: right; MARGIN:
0px 0px 10px 10px; CURSOR: hand" alt="Dave Thomas"
src="http://www.e-gineer.com/v2/blog/2005/08/DaveThomas.jpg" border="0" /></a>

In March 1999, [Dave Thomas](http://www.davethomas.net) became involved as a
mentor and guide on my business building journey. His probing questions led me
to understand more about the business realities of running a large scale web
site funded by advertising, particularly since disk space was relatively
expensive. Around this time sites like
[When.com](http://web.archive.org/web/*/http://www.when.com) launched the first
online electronic organisers.

During 1999, Dave found me various small
paid consulting projects for his network. Only later did I realise that this
was a gentle form of testing, funding and keeping me afloat while I learnt the
basics of a business (i.e. one needs customers).

Around this time I shifted from [AOLServer](http://www.aolserver.com/) to using a
[PHP](http://www.php.net) in a [LAMP](http://www.onlamp.com/) stack (although
it wasn't called that yet). The primary driver was that I could host a public
web site with scripting and a database for $25US / month. Demonstrating
elec.org was horrendously difficult and expensive as AOLserver was not commonly
used and required a dedicated server.

<a
href="http://www.e-gineer.com/v1/presentation/v1-screenshot.gif"><img
style="FLOAT: left; MARGIN: 0px 10px 10px 0px; CURSOR: hand" alt="e-gineer
logo" src="http://www.e-gineer.com/v1/presentation/v1-screenshot-thumbnail.gif"
border="0" /></a> 

Inspired by [software that ArsDigita was
building](http://openacs.org/about/history), I built a PHP equivalent called
[Synphony](http://www.e-gineer.com/v2/blog/2005/08/SynopSynphony.gif). This
powered [e-gineer.com](http://www.e-gineer.com), to which I was adding many
articles and instruction sets and which hosted the PHP Knowledge Base (later
[FAQTs](http://www.faqts.com)).

In August 1999 I made my first visit to
the US. Reading extensively online, I kept hearing about the internet
revolution and how the web was everywhere. In Australia, the occaisional URL
was making its way onto the bottom of TV advertisements and I thought "Yeah,
it's happening". Then I arrived in San Francisco. Every billboard I saw during
my visit was for an Internet company. I could literally overhear people talking
about new business ideas across cafes. I learnt two things: the significant
divide between Australia and the US, despite the Internet; and just how huge
the Internet was becoming.

I did a number of job interviews in the US on
this trip, and decided to turn down jobs with
[ArsDigita](http://www.waxy.org/random/arsdigita/), [CNet](http://www.cnet.com)
and others. It's at this point that Synop really became more than a
hobby.

Towards the end of that trip (October), I ended up in Sarasota,
Florida upgrading
[WorldFinanceNet.com](http://web.archive.org/web/*/http://www.worldfinancenet.com)
from FrontPage and static HTML to run the first version of Synphony. This top
1000 web site with massive morning traffic spikes was Synop's first real
customer and user of Synphony.

<a
href="http://www.e-gineer.com/v2/blog/2005/08/WorldFinanceNet.gif"><img
style="FLOAT: right; MARGIN: 0px 0px 10px 10px; CURSOR: hand" alt="Dave Thomas"
src="http://www.e-gineer.com/v2/blog/2005/08/WorldFinanceNet.gif" border="0"
/></a> 

WFN was a classic Internet boom company. Two decisions stand out in
particular. The first was deciding not to spend $5,000 US to get the wfn.com
domain name for their top 1000 web site (apparently, WorldFinanceNet.com really
isn't that long or confusing). The second was when senior management came in
and told me with much excitement that we need to add another advertisement to
the home page. It was a barter deal in exchange for cheap access to their own
private jet for getting to meetings...

<a href="http://www.php.net"><img
style="FLOAT: left; MARGIN: 0px 10px 10px 0px; CURSOR: hand" alt="PHP logo"
src="http://www.e-gineer.com/v2/blog/2005/08/php.gif" border="0" /></a> 

At this point, the realities of web server support became very real to me with
many late night calls. Being woken up to cries of "the server's down!" is not
conducive to a good nights sleep. One night, I logged in and saw 300+ httpd
processes thrashing on the server. Restarting Apache, I couldn't believe my
eyes as the traffic built up to 200+ again within a minute. Turns out that a
hacker at WFN had changed numerous includes on the home page to pull in smaller
pieces on the site using URLs rather than PHP file includes. The result, was a
morning traffic spike with every home page visit spawning 5 PHP script requests
to Apache.

Unfortunately, the WFN relationship didn't end happily (Apr
2000). Business lessons: bill customers early and often; it's hard to be
persistent and insistent by phone; and the US legal system is too expensive to
bother pursuing $50k US ($100k AU) in unpaid bills.

There was one
alternative I didn't pursue however. On a US domestic flight I ended up next to
a crazy old duck from NY. Turns out she was a bookmaker in her spare time and
was more than happy to give me the number of some guys who could be quite
persuasive when retrieving funds.

<a href="http://www.faqts.com"><img
style="FLOAT: right; MARGIN: 0px 0px 10px 10px; CURSOR: hand" alt="FAQTs logo"
src="http://www.e-gineer.com/v2/blog/2005/08/faqts.gif" border="0" /></a>

During the summer of 99/00, Jad and I built
[FAQTs.com](http://www.faqts.com) and really took Synphony to the next level.
The highlight was probably teaching Jad how to kick a football in my living
room over many intense design discussions. At this point Synop had it's own
room in our apartment for an office.

[Apachecon 2000](http://apachecon.com/2000/US/) was held in Orlando during March, at the
absolute peak of the bubble. Everyone was running around offering everyone else
a job. This was the first of a number of conferences where I was lucky enough
to present.

<img style="FLOAT: left; MARGIN: 0px 10px 10px 0px; CURSOR:
hand" alt="NY skyline"
src="http://www.e-gineer.com/v2/blog/2005/08/NYThumbnail.jpg" border="0" />

July 2000 was a dark time for Synop, with its survival limited to my credit
cards after the WFN payment default. Through Randy Best, a great friend to
Synop, we entered a contract with [First Light
Communications](http://web.archive.org/web/*/http://www.firstlight.com) in New
York to build and maintain a content management system that they would resell.
"Feast or famine" was an email subject from Randy at the time, and certainly
securing this contract took Synop back into the fast lane.

<a
href="http://www.synop.com"><img style="FLOAT: right; MARGIN: 0px 0px 10px
10px; CURSOR: hand" alt="Synop"
src="http://www.e-gineer.com/v2/blog/2005/08/synop.gif" border="0" /></a>

Synop Software incorporated to become [Synop Pty
Ltd](http://www.search.asic.gov.au/cgi-bin/gns030c?acn=092_752_255&juris=9&amp;hdtext=ACN&srchsrc=1)
at this time. Luckily [another
company](http://www.search.asic.gov.au/cgi-bin/gns030c?acn=071_576_504&amp;juris=9&hdtext=ACN&amp;srchsrc=1)
with the name Synop had dropped it between 1998 and 2000, so we could get the
originally preferred name. 

Over the coming months I built and delivered
Synphony v2 products to First Light. The real crunch was just prior to the
Sydney olympics when I did three 20-hour days in a row, shipping the first
product on the day of the opening ceremony. I remember working to 3am and
getting up at 6:30am for a chance to watch the torch run by on the Pacific Hwy.
Synphony obtained role based security, membership models, affiliate tracking
and an incredible raft of features at this time.

In October 2000, my good
friend Matt joined as Synop's first employee. He quickly established our
[Artarmon
office](http://www.e-gineer.com/v2/blog/2005/06/synop-sydney-office-tour.htm),
which we used until closing and generally built all of Synop's administration
facilities and systems that I'd completely ignored since starting. John and
Dean joined Synop quickly afterwards, ramping up our scale to support Synphony
and continue development.

<a
href="http://www.e-gineer.com/v2/blog/2005/08/Sytadel.gif"><img style="FLOAT:
left; MARGIN: 0px 10px 10px 0px; CURSOR: hand" alt="Sytadel"
src="http://www.e-gineer.com/v2/blog/2005/08/SytadelThumbnail.gif" border="0"
/></a> 

Hopes and expectations for the future of Synop were high,
unrealistically high on my part, around this time. In anticipation of a bright
future, the Synphony products were rebranded to
[Sytadel](http://www.e-gineer.com/v2/blog/2005/08/Sytadel.gif) and a suite of
E-gineers
([communication](http://www.e-gineer.com/v2/blog/2005/08/CommunicationE-gineer.gif),
[community](http://www.e-gineer.com/v2/blog/2005/08/CommunityE-gineer.gif),
[construction](http://www.e-gineer.com/v2/blog/2005/08/ConstructionE-gineer.gif),
[content](http://www.e-gineer.com/v2/blog/2005/08/ContentE-gineer.gif),
[knowledge](http://www.e-gineer.com/v2/blog/2005/08/KnowledgeE-gineer.gif),
[surveillance](http://www.e-gineer.com/v2/blog/2005/08/SurveillanceE-gineer.gif),
[sytadel](http://www.e-gineer.com/v2/blog/2005/08/SytadelE-gineer.gif)).

These hopes came crashing back to earth when we held a booth at [ApacheCon
2001](http://apachecon.com/2001/US/). This was a different world to just a year
before, with few attendees and everyone there looking for a job rather than
offering them. The bubble had truly burst.

Over the coming months all of
Synop's significant clients went out of business, and Synop was forced to
shrink back down to me working alone. At this stage I was experimenting with
tools to help with Agile project management (code name Agilation), including an
add-in for Microsoft project that provided a card playing UI for task
allocation.

<a href="http://cs.anu.edu.au/~Peter.Bailey/"><img style="FLOAT:
right; MARGIN: 0px 0px 10px 10px; CURSOR: hand" alt="Peter Bailey"
src="http://www.e-gineer.com/v2/blog/2005/08/PeterBaileyThumbnail.jpg"
border="0" /></a> 

[Peter Bailey](http://cs.anu.edu.au/~Peter.Bailey/) had
joined as a part time consultant in May 2001 and agreed to join permanently
after helping to win our first government contract (the [IP Access
portal](http://www.ipaccess.gov.au)) in Oct 2001. Thus began the next phase in
Synop's life, and a great journey for us together.

Sytadel v3 was built
and shipped as part of the [IP Access](http://www.ipaccess.gov.au) project.
This saw version control, workflow and many other advanced features come to
Sytadel. At this point, Sytadel owners could use the [Construction
E-gineer](http://www.e-gineer.com/v2/blog/2005/08/ConstructionE-gineer.gif) to
develop new content types that were automatically version controlled, subject
to workflow, had complete editing and viewing screens. All the generated code
was completely documented and extensively commented for ease of
editing.

I completed the final stages of this project working from
Internet cafes while chasing Bianca around Central America. Actually, the
fastest Internet connection I've ever used was in Guatemala.

In April
2002, Synop organised Agile Australia 2002, the first series of talks on Agile
Methods in Oz. I also presented two Synop papers at [XP
2002](http://www.martinfowler.com/articles/xp2002.html) in Italy. To reflect
this change and our project development methods, Synop's tagline became "take
the agile approach".

<a href="http://www.accc.gov.au"><img style="FLOAT:
left; MARGIN: 0px 10px 10px 0px; CURSOR: hand" alt="ACCC logo"
src="http://www.e-gineer.com/v2/blog/2005/08/accc.gif" border="0" /></a>

Mid-2002 saw Synop win the [ACCC](http://www.accc.gov.au) Internet and
Intranet portal redevelopment project in partnership with
[SecureNet](http://www.cybertrust.com/). This was a huge project with more than
750 pages in the project specification. Many project problems, including
massive scope creep, performance bottlenecks and my decision to rewrite Sytadel
from scratch into v4 based on XML saw this project blow out into 2004. As a
fixed price concern, this project became a huge millstone around Synop's
neck.

<a href="http://www.e-gineer.com/v2/blog/2005/08/JamesCourt.jpg"><img
style="FLOAT: right; MARGIN: 0px 0px 10px 10px; CURSOR: hand" alt="James Court"
src="http://www.e-gineer.com/v2/blog/2005/08/JamesCourt.jpg" border="0" /></a>

Although I did have my car written off while parked outside the ACCC late
one night, the darkest days of this project were spent working for a week at
the [James Court Serviced
Apartments](http://svc089.bne075u.server-web.com/driver.asp?page=main%2Flocations%2Fcanberra+serviced+apartments%2Fmedina+executive+james+court)
in Canberra. After months of furious code development and sleepless nights, we
felt Sytadel had reached a turning point in solidity and features. This week
was going to put on the final touches and really begin roll out of the myriad
of ACCC customisations. But, PHP and
[Sablotron](http://www.gingerall.com/charlie/ga/xml/p_sab.xml) had other plans
for us. At this point, the system literally imploded and everything just
stopped working. Days of installs, work arounds, bug fixes and rollbacks
could not get things working again. Sytadel is an incredibly complex piece of
engineering that pushes PHP, MySQL and XML libraries to their limit. Or
beyond it, as we found out that week. After returning to Sydney (broken
shadows of our former selves), we did some C hacking to replace the XSLT
engine and Sytadel magically restored to working order. I still get shivers
every time I pass the James Court, but only
[Richard](http://www.kashum.com) who joined Synop and toiled
with me through every inch of the Sytadel v4 rewrite would probably
understand that.

<a href="http://www.unjlc.org"><img style="FLOAT: left;
MARGIN: 0px 10px 10px 0px; CURSOR: hand" alt="UNJLC logo"
src="http://www.e-gineer.com/v2/blog/2005/08/unjlc.gif" border="0" /></a>

Buried in the ACCC debacle, Synop struggled through early 2003 to deliver
on a range of new customer projects (e.g. [UNJLC](http://www.unjlc.org),
[MDBC](http://web.archive.org/web/*/http://www.thelivingmurray.mdbc.gov.au/))
we'd won with the promise of Sytadel v4 features and hard business
development work throughout 2002. Working on site at the ACCC and in Peter's
Canberra home office, [Matt Sheppard](http://homepage.mac.com/stray/) joined
us in late 2002 to help.

Through 2003, Synop succesfully added hosting,
support and consulting revenue streams to smooth out our traditionally lumpy
revenue.

<a
href="http://www.e-gineer.com/v2/blog/2005/08/SauceReader.jpg"><img
style="FLOAT: right; MARGIN: 0px 0px 10px 10px; CURSOR: hand" alt="Sauce
Reader logo"
src="http://www.e-gineer.com/v2/blog/2005/08/SauceReaderThumbnail.jpg"
border="0" /></a> 

Contemplating life after this project onslaught, in
April 2003 we started thinking about an [AusIndustry R&amp;D START
grant](http://www.ausindustry.gov.au/content/level3index.cfm?ObjectID=B09BA2B5-E6C2-4A2A-9C5333F92F083646&L2Parent=AEB901E5-7CB8-4143-A3BF33B2423F9DA6)
application for what eventually became the Sauce project. Work on Sauce began
in September 2003, at which point [Victor Hadianto](http://www.hadianto.net)
also joined Synop.

The Sauce project had 3 components: an aggregation server
([TrustedSauce.com](http://www.e-gineer.com/v2/blog/2005/08/TrustedSauce.gif)),
aggregation client ([Sauce
Reader](http://web.archive.org/web/*/http://www.synop.com/Products/SauceReader/))
and a content server (Sauce Studio). We built the aggregation server using .NET
in late 2003 but it was never made public due to lack of resources to support a
large search infrastructure and compete with now well-funded players like
[Technorati](http://www.technorati.com). TrustedSauce contained unique features
for FOAF discovery, tracing weblog conversations and more.

Sauce Reader was released as a free for personal use product, to
support RSS reading and weblog posting. Many 1.x versions were released
through 2004, using the .NET platform. To address significant performance
concerns, and for better integration with Sauce Studio, Sauce Reader 2.x was
built using Delphi and released in May 2005. While technically advanced,
Sauce Reader struggled as the RSS reader market exploded through 2004 with
hundreds of competitors, free open source versions and increasing integration
into web browsers.

Sauce Studio was built to concept stage in house and
provided a file system based, XML content management system. It was a
lightweight, flexible solution that could be combined with third party
security, version control and other tools. Although we had strong belief in
this technology, unfortunately we could not identify an appropriate market
niche to commercialise the product.

While this aggressive R&D took
place we continued growing the Sytadel and consulting aspects to Synop's
business. We opened our Canberra office in January, and by late 2004, Synop
had grown into a company that could estimate and deliver increasingly complex
projects reliably and profitably (e.g. [METeOR](http://meteor.aihw.gov.au),
[AER](http://www.aer.gov.au/)). During this busy time, Synop doubled in size
to 10 people, adding more developers and our first full time business
development manager. We finally had a good mix of experience and
skill-sets.

<a href="http://www.e-gineer.com/v2/blog/2005/08/End.jpg"><img
style="FLOAT: left; MARGIN: 0px 10px 10px 0px; CURSOR: hand" alt="End"
src="http://www.e-gineer.com/v2/blog/2005/08/EndThumbnail.jpg" border="0"
/></a> 

Come 2005, Synop was faced with a difficult situation. Despite
growing our business development resources and stringing together successful
projects, our pipeline of new Sytadel business was running out. Our projects
were typically the more high risk and complex customisation jobs requiring a
flexible CMS. But, hypercompetition was driving prices lower and making jobs
increasingly difficult for Synop to win.

After recognising the inherent conflict of being a small company building large
enterprise CMS systems back in 2003, the Sauce project was intended to provide
the next phase of Synop's product line and consulting services. However, delays
due to hangover projects in 2004 and a failure to identify an immediate and
profitable market niche made rapid growth of revenue from this project highly
unlikely.

With Synop in a financially healthy, but strategically weak
situation we considered a range of alternatives for the future of the
business. The only financially viable option appeared to be movement towards
a pure consulting services model, building on third party products.
Unfortunately, Synop's passion had always been developing new products. So,
the sad and difficult decision was made to divest assets and close the
business as appropriate.

<div id="blogComments">
  <a name="comments">&nbsp;</a>
  
  <a name="c112422762766571678">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Rod on <a href="#c112422762766571678" title="Comment permalink">August 17, 2005 7:27 AM</a> </div>
    <div class="blogCommentBody">Bugger!  Sauce Reader is my favorite RSS reader.<BR/>Have you thought about charging for it?</div>
  </div>
  
  <a name="c112434010059899675">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Chris Johnson on <a href="#c112434010059899675" title="Comment permalink">August 18, 2005 2:41 PM</a> </div>
    <div class="blogCommentBody">What a shame you are giving up Sauce Reader!   It really is THE BEST reader out there ... just not enough people know about it!  I have tried all the rest and they suck.  Your software is clean, designed well, does not try to re-invent how applications look and feel ... and is easy to use!  It will probably be years before someone comes up with something as good as your V2.  Ah well .. will have to keep using that for a while yet then! :)</div>
  </div>
  
  <a name="c115650290844116855">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Anonymous on <a href="#c115650290844116855" title="Comment permalink">August 25, 2006 8:48 PM</a> </div>
    <div class="blogCommentBody">Hi!<BR/>Thank you very much for that perfect news aggregator. I like it very much. I use Liferea under Linux and yours under Windows.<BR/>Please keep on going to develope it!</div>
  </div>
  
  <a name="c59198295031742120">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by RadhaKrishna on <a href="#c59198295031742120" title="Comment permalink">January 09, 2007 5:45 PM</a> </div>
    <div class="blogCommentBody">Saucereader is THE BEST...I cant tell you how many aggregators I have used before using this..I instantly fell in love with it..Seriously you must consider charging it..I am sure once it develops traction, a lot of people will not think twice before paying</div>
  </div>
  
  <a name="c3779237367209022131">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Luiz on <a href="#c3779237367209022131" title="Comment permalink">March 22, 2007 10:56 PM</a> </div>
    <div class="blogCommentBody">Congrats on the reader! It's the best one I tried.<BR/>Since you cannot mantain it anymore, how about transfering it to an open source initiative? :)<BR/>You keep your legacy and make a lot of happy users! :D</div>
  </div>
  
  <a name="c7301312367827284276">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Anonymous on <a href="#c7301312367827284276" title="Comment permalink">April 02, 2007 3:28 AM</a> </div>
    <div class="blogCommentBody">Saucereader is the best, no other like it. I abandoned it just today after months of struggling beacause it's not more capable to read my blogs. Really thanks anyway.</div>
  </div>
  
  <a name="c742736586466565553">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Mr. Hobbs. on <a href="#c742736586466565553" title="Comment permalink">February 18, 2010 3:09 PM</a> </div>
    <div class="blogCommentBody">I look forward to reading Volume II, whenever that eventuates.</div>
  </div>

  <div class="blogCommentsClosed">Comments are closed.</div>

</div>
