---
layout: default
title: "Our Intranet, the Wiki: Case Study of a Wiki changing an Enterprise"
---


## Introduction

<a
  href="http://www.janssen-cilag.com.au/"><img style="BORDER-RIGHT: 0px;
  BORDER-TOP: 0px; FLOAT: right; MARGIN: 0px 0px 10px 10px; BORDER-LEFT: 0px;
  BORDER-BOTTOM: 0px"
  src="/v2/blog/2007/08/JanssenCilagDeer.gif" /></a>

[Janssen-Cilag](http://www.janssen-cilag.com.au/) is one of the
fastest growing, research based pharmaceutical companies in Australia. It has
more than 300 employees, split across Australia and New Zealand with around
half based in the field. It is one of 250 [Johnson &amp; Johnson](http://www.jnj.com/)
operating companies, which total about 121,000 employees
across 57 countries.

In 2006, Janssen-Cilag completely replaced our
simple, static HTML intranet with a Wiki solution. Over the 16 months since
launch, it has dramatically transformed our internal communication and
continues to increase in both visits and content contributions each
month.

## History of Janssen-Cilag's Intranet

<a
  href="/v2/blog/2007/08/InfoDownUnder.jpg"><img
  style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; FLOAT: left; MARGIN: 0px 10px 10px
  0px; BORDER-LEFT: 0px; BORDER-BOTTOM: 0px"
  src="/v2/blog/2007/08/InfoDownUnder-Thumbnail.jpg"
  /></a> 

Janssen-Cilag's previous intranet, InfoDownUnder, was a static HTML
site, originally developed in 2001. Content was maintained using FrontPage,
with only a handful of active editors throughout the company. IT was involved
only to upload latest versions of content files from the development site onto
the production server. 

While some areas were lovingly maintained to a
high standard, large sections of content were out of date. There was no search
capability. Trust in the information was very low. News was distributed via
email, not the web. The site featured excessive use of the blink tag, and New!
icons highlighting content that was up to 3 years old.

Latent demand for change was strong.

## Intranet requirements gathering

The culture at Janssen-Cilag is highly consultative
and relationship based. As such, gathering information and buy-in is often
achieved through a series of conversations and discussions, building a
coalition of support.

Requirements for a new Intranet site were collected
through 27 interviews with a variety of people from all levels of the business.
Three themes emerged:
1. We need a trusted source of information
2. Whatever we do has to be simple
3. Just do something!

Each conversation varied widely in focus, but the
format usually went as follows:
1. The floodgates open with a dump of information the user considers vital for the Intranet, which lasts about 15 minutes. (What can I get?)
2. They highlight search as a key requirement.
3. I would steer the conversation to questions about how content should be maintained. (What can you give?)

## Pitching a Wiki to the business

With many [years of experience](/v2/blog/2005/08/unofficial-history-of-synop.html)
building one of the first large scale completely open
collaboration platforms for the web and then building heavyweight enterprise
CMS systems for large organisations, I've personally come full-circle to the
idea that the best collaboration systems are incredibly simple and open. Wiki's
are a powerful starting point for any organisation, but latent demand at
Janssen-Cilag created the perfect environment.

As such, I used the
requirements gathering session as a chance to pitch the idea of a Wiki as the
solution to our Intranet problem. After bringing the conversation to understand
our content maintenance requirements, I'd talk through the Wiki approach and
how it may work for Janssen-Cilag. My sales pitch went as
follows:
1. We need a system where editing is immediate and very simple.
2. Getting people to contribute at all is hard, so we need to concentrate on
letting people do things rather than worrying about what they shouldn't do.
3. The risk of letting anyone change anything is low, since we'll keep a
complete history of changes so we can quickly undo mistakes and we can hold
irresponsible individuals accountable for anything improper. (Reactive
moderation rather than Proactive moderation).

In general, the response was incredibly positive.
Predictably, the main argument against this system was fear of improper changes
to content, particularly for information subject to regulatory control. I would
counter this argument in two ways:
1. There are two ways to control people's behaviour: social forces and technical forces. Currently, we successfully rely on social forces to control a wide range of things like who calls or emails the CEO with their latest crazy idea. Technical forces are powerful, but with each technical feature we increase training and raise the bar against collaboration. Surely, we can see if social forces will be enough for all but the most critical of content?
2. Anyone can choose to monitor any content that they are concerned about (e.g.  automatic email alert with changes). So, they can quickly jump in and correct any mistakes.
3. For exceptional cases, we may choose to lock down critical content and define clear ownership and responsibility for its maintenance.

At the end, showing people around [Wikipedia](http://en.wikipedia.org/wiki/Main_Page)
was an incredibly powerful way to seal the deal, particularly since they have
often used it to find information in the past.

There were no major objections to trying a Wiki-style concept.

## Implementing a Wiki for your Enterprise Intranet

<a
  href="http://www.atlassian.com/software/confluence/"><img
  style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; FLOAT: left; MARGIN: 0px 10px 10px
  0px; BORDER-LEFT: 0px; BORDER-BOTTOM: 0px"
  src="/v2/blog/2007/08/Confluence.gif" /></a> 

We purchased, customised and launched a pilot Wiki Intranet within two weeks and
with a budget of $11,000 AUD. This included all graphic design and single sign
on integration.

After evaluating a wide range of alternatives including
[MediaWiki](http://www.mediawiki.org/), [Twiki](http://twiki.org/) and
[FlexWiki](http://www.flexwiki.com/); we selected
[Confluence by Atlassian](http://www.atlassian.com/software/confluence/).
Our main concerns were support for a hierarchy of pages,
strong attachment capabilities, news features, LDAP integration, high quality
search and a decent rich text editor.

<a
  href="/v2/blog/2007/08/JCintraHomepage.jpg"><img
  style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; FLOAT: right; MARGIN-LEFT: 10px;
  BORDER-LEFT: 0px; BORDER-BOTTOM: 0px"
  src="/v2/blog/2007/08/JCintraHomepage-Thumbnail.jpg"
  /></a> 

Our customisation focused almost completely on usability. People
shouldn't know or care that they are using a Wiki. All that matters is that
they can easily browse, search and contribute content. (In fact, after 16
months, only a small set of Janssen-Cilag staff would think of our Intranet as
a Wiki. To them, it just seems natural that Intranet software would have
evolved to something this simple to use.)

Here were our implementation
decisions:
* Integration with LDAP and use of NTLM for automatic single sign on is essential. We even hacked someone's starting point and open sourced our improved version.
* Rich text editing must be available and as Word-like as possible.
* Users like hierarchy and structure, the Wiki should not feel disorganised or completely free-form. (Confluence supports this with an exact page hierarchy capability.)
* Sacrifice power and flexibility for simplicity. For example, our page design is fixed into a title, alphabetical list of subpages, page content, alphabetical list of attachments. While it would be nice to be able to change this at times, or order the attachments, or change the look and feel; it's far more important that everyone can contribute and clearly understands how things work.
* Remove as many unnecessary features as possible. For example, labels are a great idea, but we already have hierarchy and most users don't really know what labels are.

## Launch &amp; user training

We started the new site as a pilot, launching as the
source of information for a relocation of our head office. (Nothing drives
traffic like the seating plan for a new office!) Information around the
relocation was fast moving and changing daily for the two weeks between
announcement of the move and our actual relocation.

Building on that
success, we obtained executive approval to replace the existing Intranet. Over
the next two weeks we worked with key content owners (most particularly HR) to
show them how to create pages and migrate appropriate information. We made the
decision to not automatically migrate any content, mostly because it was so old
and trust in the existing intranet information was so low.

<a
  href="/v2/blog/2007/08/JCintraPageToolbar.jpg"><img
  style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; FLOAT: right; MARGIN-LEFT: 10px;
  BORDER-LEFT: 0px; BORDER-BOTTOM: 0px"
  src="/v2/blog/2007/08/JCintraPageToolbar-Thumbnail.jpg"
  /></a> 

Our launch was timed with an informal head office monthly meeting,
where around 100 people stand and listen to an update from senior management.
We switched the site to live during the meeting, and had 5 minutes to
present:
1. 1 min: Highlight the desire for a trusted source of information that was simple to use.
2. 3 mins: Full training that showed how easy it was to view, search, edit &amp; maintain.
3. 1 min: Point out that responsibility for building that trusted source is now in your hands!

That launch presentation remains the only formal training
we've ever provided on how to use the system.

Continuing training has
been provided through short one-on-one demonstrations (we only show, we never
do) and a detailed help section (I'm happy to show you now, but for future
reference here is the help page).

## Adoption, statistics &amp; business impact

The adoption of JCintra has been remarkable.
After only 3 months, 111 people had contributed more than 5,000 changes. After
12 months, we had 18,000 contributions from 184 people within the
business.

Most significantly, our contributions per month has continued
to grow since launch. People are engaging and collaborating more with time,
they are not losing steam as you might expect.

<a
  href="/v2/blog/2007/08/JCintraContributionsPerMonth.jpg"><img
  style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; FLOAT: left; BORDER-LEFT: 0px;
  MARGIN-RIGHT: 10px; BORDER-BOTTOM: 0px"
  src="/v2/blog/2007/08/JCintraContributionsPerMonth-Thumbnail.jpg"
  /></a> 

To drive adoption, we've primarily focused on owning the flow of
new information. Early on, we established a policy that all announcements must
be on JCintra. When necessary, they may be sent via email in addition to
posting as news on the Intranet. Today, announcements ranging from major
restructures to new babies for employees flow through the news page without
clogging up email inboxes.

Owning the flow of news has established
JCintra as a trusted source for the latest information. This translates into an
expectation that the stocks of information (e.g. policies) will be available
and up to date. Own the flow and the stock will come.

Business
information that was previously scattered in email (e.g. Business Planning
presentations) is now collected into a permanent, secure online space. We have
a growing reference and history of information to build on and make available
to newcomers. Knowledge management, previously a big concern, has moved off the
agenda for the time being.

## Content ownership model

For many Intranet owners, the model for content
ownership is a key point of focus. With JCintra, our philosophy (successfully
so far) has been:
1. If someone isn't willing to maintain a piece of content, it can't be that important to the business.
2. We happily show people how to do things with the site, but we don't do it for them.
3. Occasionally we highlight sections of the site on the home page, which is a great way to drive the defacto owners to clean it up a little.
4. We encourage people to have high expectations for content on the Intranet. If something is missing, please report it to the appropriate area of the business, or better still, add it for them.
5. The answer to verbal queries for many departments has become, "it's on JCintra". This reminds people to search first and ask later.
6. In the end, the quality of content in an area is a reflection on the defacto department owner, not the Intranet itself.

As a result, we've seen some departments
embrace the Intranet in a big way, while others don't update content as much as
we'd like. As expected, service areas of the business have been strong
adopters, which means the main areas of Intranet content have been well
maintained.

We've not yet adopted a formal content review process, but
believe this will become more important in the next year of the sites life.


## Keeping momentum &amp; next steps

The primary
barrier to continued success of JCintra remains the same as our initial
barrier: encouraging a culture of collaboration and transparency. Some areas of
JCintra have been highly successful in this regard, while other sections have
never gained clear ownership or momentum.

JCintra works best when it is
established as the source of truth for information and becomes the place where
the work is done on a day-to-day basis. While ever the Intranet is a place that
has to hold a published copy, it will remain as "extra work" and struggle in
the competition for people's
time.

## Conclusion

Implemented with usability and
simplicity as the key focus, a Wiki is a fast, cheap and highly effective way
to run an Intranet. Users do not perceive our Intranet as a Wiki, with all the
anarchistic overtones that brings. Rather, they see the simplicity and
flexibility as a natural evolution of Intranet technology.

In a culture
full of all the typical trust, transparency, workload and security concerns
common to big companies; the simplicity of this system and its content
ownership model cut through. Problems of driving collaboration and content
updates remain, but they are exposed as the cultural and people problems at
their heart since the technical and workload "excuses" have been stripped
away.

*Note: Our Intranet has evolved significantly from the
screenshots above, which were taken from the time of launch to avoid business
confidentiality issues in this public forum. The site now includes a wealth
of content and tight integration with our data warehouse, CRM and internal
operational systems. Read more in **[Building Enterprise 2.0 on Culture 1.0](/v2/blog/2007/12/building-enterprise-20-on-culture-10.html)**.*
    
<div id="blogComments">
  <a name="comments">&nbsp;</a>

  <a name="c2461314218101005754">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by jon silvers on <a href="#c2461314218101005754" title="Comment permalink">August 21, 2007 7:44 AM</a> </div>
    <div class="blogCommentBody">Hey Nathan, this is an awesome case study. Thanks for posting it! It's interesting how you didn't use the word wiki when you launched the intranet, avoiding a lot of questions, getting people focused on the task, not the technology.</div>
  </div>

  <a name="c5344690809512157763">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Mark Wiseman on <a href="#c5344690809512157763" title="Comment permalink">August 21, 2007 8:15 AM</a> </div>
    <div class="blogCommentBody">Nathan, I liked your focus on simplicity and utility. All to often when new technology is introduced the technology champions want to focus on the technical issues. Well done!</div>
  </div>

  <a name="c4553585584348095171">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Stephen Collins on <a href="#c4553585584348095171" title="Comment permalink">August 21, 2007 8:02 PM</a> </div>
    <div class="blogCommentBody">Nathan, have you considered posting this to cases2.com?  cases2 is run by Dr Andrew McAfee of Harvard Business School.  He originated the Enterprise 2.0 term and is doing a lot of work to evangelis successful implementations like yours.<BR/><BR/>I think you have an ideal example here.</div>
  </div>

  <a name="c7401026224139080250">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Anonymous on <a href="#c7401026224139080250" title="Comment permalink">August 25, 2007 11:41 PM</a> </div>
    <div class="blogCommentBody">Didn't find a contact page on e-gener, so I'll post this here.<BR/><BR/>Looking for some info on php, I stumbled upon this page:<BR/><BR/>http://mythink.wordpress.com/2007/06/14/php-first-principles/<BR/><BR/>Seems a non-credited copy-paste from <BR/><BR/>/v1/articles/php-hackers-paradise-revisited.htm<BR/><BR/>to me, so I thought I'd let you know.<BR/><BR/>Regards,<BR/>anonymous</div>
  </div>

  <a name="c3634546764227712565">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Mnementh on <a href="#c3634546764227712565" title="Comment permalink">August 28, 2007 1:47 PM</a> </div>
    <div class="blogCommentBody">Hi Nathan. This post really struck home, particularly the sales pitch. So often, issues with control end up stiffling projects like this. And all that ends up happening is a lot of works goes into an intranet that nobody uses.</div>
  </div>

  <a name="c2083398718043412483">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Patrick on <a href="#c2083398718043412483" title="Comment permalink">September 20, 2007 2:38 PM</a> </div>
    <div class="blogCommentBody">Nathan, I posted this on actKM Forum, where I think people might be interested in your response:<BR/><BR/>Nathan, I wonder if you'd oblige by answering a few questions here on the forum as several members are not active in the blogosphere? Let me suggest upfront that anyone participating in the conversation is ok with you reposting the conversation on your blog if you want to, with attribution to the forum? I have three questions:<BR/><BR/>1). I think your sales pitch is incredibly powerful - I'd like to understand a little bit more about why the adoption decision happened. I'm assuming that there were four main factors at play:<BR/>(a) your argument<BR/>(b) the consultation process<BR/>(c) your team's credibility - trust<BR/>(d) price vs perceived risk (ie ease of undoing the decision)<BR/><BR/>I know it's a difficult question to answer, but how would you weight those factors in what actually happened? Which were the most important factors (or were there others that I have missed)?<BR/><BR/>2). What were your three biggest challenges/hurdles in the whole process from consultation to successful active use of the intranet?<BR/><BR/>3). If a public sector agency (which tends to see itself as more conservative in accountability, record keeping, control) were to be thinking about using a wiki for an intranet or another use, what would your advice to the KM/IT team be?<BR/><BR/>Thanks Nathan<BR/><BR/>Patrick</div>
  </div>

  <a name="c1152778279141175082">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Tony Branfort on <a href="#c1152778279141175082" title="Comment permalink">September 21, 2007 10:34 AM</a> </div>
    <div class="blogCommentBody">Nathan - Thank you for an incredibly well written and smart study.  Great job.</div>
  </div>

  <a name="c1752297418301488360">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Jennifer Kelley on <a href="#c1752297418301488360" title="Comment permalink">September 25, 2007 10:38 AM</a> </div>
    <div class="blogCommentBody">Nathan, Thanks for this case study!  It's comforting to know there's another company out there who has successfully used a wiki as their intranet.  We're aiming for the same ourselves, in a global company with over 5000 employees. It seems the only way to leverage the incredible popularity of our wiki, where we have witnessed our users rebuilding the intranet themselves (unprompted).  Your experience is especially useful!  Could you update on your experience with integrating other the other business, CMS systems with the wiki intranet?</div>
  </div>

  <a name="c2942856584973083442">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Anonymous on <a href="#c2942856584973083442" title="Comment permalink">September 30, 2007 6:38 PM</a> </div>
    <div class="blogCommentBody">Hi Nathen, <BR/>I'd like to adress the issue of editing on the wiki platform.<BR/>editing in wiki is very basic using objects such as tables and other graphical elements become quite difficult.<BR/>How did you adress the issue that the users want to have 'interesting pages' with murquee, spaces, tables, images etc. and the low "out of the box" abilities of the wiki?<BR/><BR/>Thanks,<BR/>Galit</div>
  </div>

  <a name="c4039952457901826638">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Nathan @ e-gineer on <a href="#c4039952457901826638" title="Comment permalink">October 23, 2007 5:32 AM</a> </div>
    <div class="blogCommentBody">Anonymous: Thanks for the tip off, unfortunately there are a huge number of <A HREF="/v2/blog/2005/08/this-is-copyrighted-by-me-so-u-cant.html" REL="nofollow">rip off copies of that article</A>.</div>
  </div>

  <a name="c4284705416923303489">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Nathan @ e-gineer on <a href="#c4284705416923303489" title="Comment permalink">October 23, 2007 5:41 AM</a> </div>
    <div class="blogCommentBody">Anonymous #2: Your question about editing is an important one, and usually overlooked by Wiki builders.<BR/><BR/>The browser-based WYSIWYG editing in Confluence is not as good as I've seen or as good as we need. This would be my primary feature request or feedback to Atlassian about the product.<BR/><BR/>It's interesting to see what people expect to be able to do with the editor, my favourite common question is why they can't simply paste an email or document into it.<BR/><BR/>In general, the editor is good enough to support lists, simple tables and picture insertion. We've seen these features work well in team pages (first created by business users) which include details, photos, etc.<BR/><BR/>In the end, I want people to focus more on what they are writing and less on making it look pretty with pink borders. The simpler their content, the easier it is to maintain and the better it will work with search results.<BR/><BR/>We had some complaints about the restrictions at the start, mostly from people comfortable in FrontPage etc. But, those have died down completely at this stage.<BR/><BR/>When people want to focus on funky design they simply create a Word or PDF doc and attach it.</div>
  </div>

  <a name="c2103870924853017401">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Nathan @ e-gineer on <a href="#c2103870924853017401" title="Comment permalink">October 23, 2007 5:53 AM</a> </div>
    <div class="blogCommentBody">Jennifer: Through (clever) use of IFRAME's, design for small inserts and silent authentication, we now have the appearance that many of our systems are tightly integrated with the intranet. This includes sales figures from the data warehouse, our CRM, People Search, IT process &amp; asset management.<BR/><BR/>I cannot stress enough what an amazing difference it makes when you convert numbers or graphs from a report 3 clicks away into a good looking chart immediately visible on the home page of your Intranet!<BR/><BR/>Design integration remains our current focus for next steps with the Intranet Wiki. I'll write about this more in the coming months as our ideas refine (and we have a small competitive advantage through leadership).</div>
  </div>

  <a name="c1340346456961195585">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Anonymous on <a href="#c1340346456961195585" title="Comment permalink">October 28, 2007 10:08 PM</a> </div>
    <div class="blogCommentBody">Nathan, this is an awesome thing. Thanks for posting it! New technologies is important thing. Well done!</div>
  </div>

  <a name="c1895691793330002864">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Scott Abel on <a href="#c1895691793330002864" title="Comment permalink">March 02, 2008 1:27 AM</a> </div>
    <div class="blogCommentBody">Nathan:<BR/><BR/>I'd like to get permission to reprint this post (wiki case study) on TheContentWrangler.com. Let me know what you think. You can reach me at scottabel AT mac dot com. I'll gladly include your bio, headshot, and information about your blog.<BR/><BR/>Let me know.<BR/><BR/>Scott Abel</div>
  </div>

  <a name="c5653978626957536093">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Nathan @ e-gineer on <a href="#c5653978626957536093" title="Comment permalink">March 04, 2008 6:51 AM</a> </div>
    <div class="blogCommentBody">Hi Scott ... Sorry, but I do not want this article reprinted on other sites. Thanks for asking, Nathan</div>
  </div>

  <a name="c2798071855549292176">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Yulna on <a href="#c2798071855549292176" title="Comment permalink">July 01, 2008 10:18 PM</a> </div>
    <div class="blogCommentBody">Nathan,<BR/>We are also considering Confluence but I get resistance for the basic layout. My HTML knowledge is not that good. How can I improve the basic look of Confluence? I like the look of your site.Did you use Adaptivist? Do I need to develop it in Javascript? Can you give me your email that I can mail you?</div>
  </div>

  <a name="c1866659322542788602">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Steven Noble on <a href="#c1866659322542788602" title="Comment permalink">July 17, 2008 9:59 AM</a> </div>
    <div class="blogCommentBody">Hey Nathan,<BR/><BR/>Great to see you quantifying the uptake of the tool. (Number of contributions, etc.)<BR/><BR/>Have you also quantified the business impact? (Knowledge retained; time saved; etc.)<BR/><BR/>Regards,<BR/><BR/>Steven.</div>
  </div>

  <a name="c8283869532746364965">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by K9 on <a href="#c8283869532746364965" title="Comment permalink">August 18, 2008 7:18 PM</a> </div>
    <div class="blogCommentBody">Nathan, thank you for sharing your experiences. For people like me who think IT is a tool that brings people closer together rather than a cost this is inspirational. Nayan</div>
  </div>

  <a name="c21523826216335294">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Nathan @ e-gineer on <a href="#c21523826216335294" title="Comment permalink">August 29, 2008 11:42 PM</a> </div>
    <div class="blogCommentBody">@Yulna: Modifying the look &amp; feel of Confluence is doable, but non-trivial as the changes tend to be spread through many files. We implemented the changes in a few days through experimenting and changing various source files. Maintaining these changes through releases has not been easy however.<BR/><BR/>Having said that, I cannot stress enough the importance of working hard to improve the usability of your Wiki.</div>
  </div>

  <a name="c3552196566654814820">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Nathan @ e-gineer on <a href="#c3552196566654814820" title="Comment permalink">August 29, 2008 11:54 PM</a> </div>
    <div class="blogCommentBody">@Steven: Business impact is always more difficult to quantify, particularly in terms of qualitative measures like knowledge retained. Hence our focus on quantitative metrics.<BR/><BR/>But, as an example, let&#39;s take email saved. Each time we post a news item to JCintra rather than sending it via email, we effectively avoid 300 copies of that email being received &amp; stored. JCintra averages about 3 news items per day. 3 items * 300 people * 50 weeks * 5 days = 225,000 emails.<BR/><BR/>So, not only does JCintra reduce our email received &amp; stored by more than 200,000 per year. It also builds a searchable collection of 750 news items or facts for future reference as &quot;knowledge&quot;.</div>
  </div>

  <a name="c990396868365355206">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Mark on <a href="#c990396868365355206" title="Comment permalink">October 07, 2008 9:19 AM</a> </div>
    <div class="blogCommentBody">Thanks for sharing your experience! My organization is extremely resistant to change, but I like your argument that the (imagined) potential for misuse is far outweighed by the (real) benefits of collaboration. The site's role should be 'Get out of the user's way!'</div>
  </div>

  <a name="c8099930296603911823">&nbsp;</a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Daniel on <a href="#c8099930296603911823" title="Comment permalink">November 21, 2008 7:59 AM</a> </div>
    <div class="blogCommentBody">Hi Nathan,<BR/>I'm trying now to push a wiki in out company, but I'm facing some resistance. This post will help me very much to show some actual experience.<BR/><BR/>Daniel<BR/>http://design-to-last.com</div>
  </div>

  <div class="blogCommentsClosed">Comments are closed.</div>

</div>
