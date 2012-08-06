---
layout: default
title: "Jitter: Experimenting with microblogging in the enterprise"
---
				
## Introduction

In February 2008, <a
href="http://www.janssen-cilag.com.au/">Janssen-Cilag Australia &amp; New
Zealand</a> launched an internal microblogging platform called Jitter. Combined
with our intranet's people search capabilities, this formed an interesting
enterprise hybrid of <a href="http://www.facebook.com/">Facebook</a> &amp; <a
href="http://www.twitter.com/">Twitter</a> style capabilities. This People
Search with Jitter solution received <a
href="http://www.steptwo.com.au/products/iia2008/winners">Highly Commended in
the 2008 Intranet Innovation Awards</a>.

While <a
href="http://www.e-gineer.com/v2/blog/2007/08/our-intranet-wiki-case-study-of-wiki.htm">our
intranet wiki JCintra</a> continues to be highly successful, we wanted to keep
building our culture of collaboration by capturing and highlighting the flow of
ideas. We also wanted to make it easier for our field force to participate and
collaborate. 

This post is an overview of our approach and outlines some
of the lessons learned for others to consider as part of their
journey.

## People Search with Jitter

<a
href="http://www.e-gineer.com/v2/blog/2008/10/PeopleSearchHome.png"><img
style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; FLOAT: left; BORDER-LEFT: 0px;
MARGIN-RIGHT: 10px; BORDER-BOTTOM: 0px"
src="http://www.e-gineer.com/v2/blog/2008/10/PeopleSearchHome-Thumbnail.png"
/></a> 

This is the home page of the People Search component. Note the simple
search box, followed by a list of recent/common searches and then a random face
from the organisation.

On the right hand side you can see Jitter posts
integrated with the main site news feed. The last 3 posts are shown as a group,
and are injected into the news feed based on the latest post timestamp of the
news / Jitters.<br/><br/><br/><br/>

<a
href="http://www.e-gineer.com/v2/blog/2008/10/PeopleSearchNameSearch.png"><img
style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; FLOAT: left; BORDER-LEFT: 0px;
MARGIN-RIGHT: 10px; BORDER-BOTTOM: 0px"
src="http://www.e-gineer.com/v2/blog/2008/10/PeopleSearchNameSearch-Thumbnail.png"
/></a> 

Searching for a name (e.g. Nathan) shows results from first or last
name matches. This quick view allows immediate use of the telephone numbers
etc, and incorporates information from our local company system (<a
href="http://www.e-gineer.com/v2/blog/2008/10/juice-user-centric-approach-to-it.htm">Juice</a>)
and other operating companies through integration with the Outlook Corporate
Directory they populate.

Search results are immediate (no Enter click
required) and use an AJAX component to prevent the need for full intranet page
refresh.<br/><br/><br/><br/><a
href="http://www.e-gineer.com/v2/blog/2008/10/PeopleSearchTeamSearch.png"><img
style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; FLOAT: left; BORDER-LEFT: 0px;
MARGIN-RIGHT: 10px; BORDER-BOTTOM: 0px"
src="http://www.e-gineer.com/v2/blog/2008/10/PeopleSearchTeamSearch-Thumbnail.png"
/></a> 

Users may choose to search for a team name (e.g. Information), which
returns a picture wall of faces from matching teams.

Note that team and
individual results may be mixed together depending on the search term and
matches.<br/><br/><br/><br/><br/><br/><br/><a
href="http://www.e-gineer.com/v2/blog/2008/10/PeopleSearchPersonView.png"><img
style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; FLOAT: left; BORDER-LEFT: 0px;
MARGIN-RIGHT: 10px; BORDER-BOTTOM: 0px"
src="http://www.e-gineer.com/v2/blog/2008/10/PeopleSearchPersonView-Thumbnail.png"
/></a> 

Simple page displaying all information for Nathan Wallace. The latest
Jitter post is integrated as a status message.

The organisational
hierarchy is displayed, including peers, direct reports and his manager.
Clicking on those faces navigates the hierarchy. Green arrows show if a team is
present under that person.<br/><br/><br/><br/><br/><br/>

<a
href="http://www.e-gineer.com/v2/blog/2008/10/PeopleSearchSMSSending.png"><img
style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; FLOAT: left; BORDER-LEFT: 0px;
MARGIN-RIGHT: 10px; BORDER-BOTTOM: 0px"
src="http://www.e-gineer.com/v2/blog/2008/10/PeopleSearchSMSSending-Thumbnail.png"
/></a> 

SMS sending is integrated into the People Search. Messages can be
addressed to individuals or entire teams.

If the sender has a mobile, the
message appears to have come from their number. If not, there is no reply
number, but instead a short text based name is shown on the recipients phone as
the sender.

SMS costs are billed to the senders cost centre through <a
href="http://www.e-gineer.com/v2/blog/2008/10/juice-user-centric-approach-to-it.htm">the
Juice system</a>.<br/><br/><br/><br/>

<a
href="http://www.e-gineer.com/v2/blog/2008/10/PeopleSearchJitterPosting.png"><img
style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; FLOAT: left; BORDER-LEFT: 0px;
MARGIN-RIGHT: 10px; BORDER-BOTTOM: 0px"
src="http://www.e-gineer.com/v2/blog/2008/10/PeopleSearchJitterPosting-Thumbnail.png"
/></a> 

Users can post to Jitter by clicking "Update status" in the Jitter
section of the news feed, clicking "update" in the Jitter section of their
People Search profile or by sending a text message to the designated mobile
phone number.

Posting is done inline, fast to complete and published
immediately. Note that SMS following is also available in the system for real
time notification of new posts.<br/><br/><br/><br/><br/>

<a
href="http://www.e-gineer.com/v2/blog/2008/10/PeopleSearchJitterArchive.png"><img
style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; FLOAT: left; BORDER-LEFT: 0px;
MARGIN-RIGHT: 10px; BORDER-BOTTOM: 0px"
src="http://www.e-gineer.com/v2/blog/2008/10/PeopleSearchJitterArchive-Thumbnail.png"
/></a> 

An archive of previous Jitter posts is available for
browsing.<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

## Adoption and business impact 

So far, 59 different people have
contributed a total of 306 posts to Jitter. We're excited that about 17% of
people have tried posting, but disappointed that posting remains so infrequent
and experimental. Here are some examples:
* State of our public hospitals June 2008 report now available at: <a href="http://www.health.gov.au/ahca">http://www.health.gov.au/ahca</a>
* Neuro Specialist Team your cycle meeting accreditation guide can be found on the Topamax specialist team private space. Please review prior to cycle!! 
* Suffering from glute meltdown... 
* Whoo-hoo! This weekend Trudi became the new Australian Swing Dance Balboa champion.
* XYZ still appears to be down - I have requested ETA on when this may be back and will notify the business when I have an answer. 
* Please come and get some friday snacks from my fundraising box in downstairs kitchen. These are to buy new toys and equipment for my baby's daycare. 
* Dear colleagues, I need a lift to Gordon or Pymble for the next 3 days. Anyone live that way ? 
* Jitter, Jotter, Blotter, Blatter, Matter! Does it?

Jitter has settled into a pattern as our informal news channel.
It's used for public congratulations, for sharing links and for short news
flashes. This is a communication need that is infrequent, but not served by
email (too intrusive) or JCintra news (too formal).

As a comparison, our
SMS message sending tool has seen 104 users send 1852 messages to 5162
recipients. It is commonly used for announcements to the field force and
individual messages from office based assistants to travelling executives.
Usage has continued to grow each quarter since it was
launched.

## Lessons Learned 

The flow of news on
JCintra has been hugely successful and filled a natural need for the
organisation. But Jitter wasn't <a
href="http://www.e-gineer.com/v2/blog/2007/12/building-enterprise-20-on-culture-10.htm">responding
to a need, it tried to create demand</a>. Open collaboration and idea sharing
are common organisational goals, but that doesn't mean there is latent demand
among the people of the business for the tools that enable it. With any new
organisational capability, always stay focused on end users and helping them to
solve a problem. 

While Jitter is a highly flexible tool that people are
already using for a wide range of purposes, we didn't do enough to position
this new communication medium or to demonstrate the business value. People
didn't know how to use this new tool. Some feedback was negative, but
overwhelmingly people asked "What do I post to it?", "What's the business
value?". Without clear answers, people just waited to see what others would do.

People have no idea what Twitter is. People have no idea what
microblogging is. Most people don't know what wiki's, blogs or social networks
are either. When explaining Jitter, one user was even worried that this meant
that all the SMS text messages they sent to anyone would now be published on
the Intranet. These technologies are natural and well known to people like us,
but for the vast majority of people in the world they are new, confusing and
weird. Remember to design your solutions and train people as though your mum is
the key user! 

Microblogging is particularly difficult to position as a
business tool since it's so hard to say anything worthwhile in so few
characters. For an organisation starting the journey of sharing ideas and
thoughts, blogging may be an easier starting point. Posts can be more serious
and business like. Blogs are better known, and at worst look more like normal
web pages. Authors can craft and position their entries to meet the political
challenges and communication realities of the enterprise. Even if your
organisation is ready for fast thoughts and short posts, authors can evolve
towards really short blog entries. 

## Conclusion 

In
a <a
href="http://rossdawsonblog.com/weblog/archives/2008/10/microblogging_i.html">recent
post on microblogging in the enterprise</a> Ross Dawson said "It's a learning
process. We must discover what a whole array of new communication technologies
allow us to do as organizations. We don't know yet. But we do know that they
might make a massive difference to how effective we can be. So those who are
the first to work it out will be ahead. No doubt about it.".

At
Janssen-Cilag, we're a step or two closer to working it out.

		  
<div id="blogComments">
  <a name="comments"></a>
  
  <a name="c250499100191547212"></a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Martin Bohringer on <a href="#c250499100191547212" title="Comment permalink">October 21, 2008 12:53 AM</a> </div>
    <div class="blogCommentBody">Nathan, thank you very much for sharing this great insights with us. I am writing my master thesis about Enterprise Microblogging and are part of the communote-Team (http://www.communote.com). Maybe your users are just overwhelmed by the increasing number of available tools. It could be usefull to name a leading tool. In my opionion the Microblog could be this leading tool where i.e. new updates in the wiki or the personal profiles or the hierarchy are posted. You could also increase Jitter's usage in making it be policy. I.e. a project milestone is not finished until this was announced in Jitter and so on.</div>
  </div>
  
  <a name="c193388942062646952"></a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by AbigailLB on <a href="#c193388942062646952" title="Comment permalink">November 04, 2008 11:30 AM</a> </div>
    <div class="blogCommentBody">Hi Nathan, just got a report on microblogging that you might be interested in - will connect thru J&amp;J with you. Abigail</div>
  </div>
  
  <a name="c6581683269633301130"></a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Toby Ward on <a href="#c6581683269633301130" title="Comment permalink">January 08, 2009 1:49 PM</a> </div>
    <div class="blogCommentBody">Fantastic case study Nathan! I shall promote it on IntranetBlog.com. Any update you want to share? How many users now? And how many total employees do you have now?<BR/><BR/>Cheers,<BR/><BR/>Toby Ward<BR/>toby(at)prescientdigital(dot)com</div>
  </div>
  
  <a name="c1207921270672345824"></a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Russell on <a href="#c1207921270672345824" title="Comment permalink">January 13, 2009 9:40 PM</a> </div>
    <div class="blogCommentBody">Thanks for sharing - I've added this to The Parallax View Social Media Case Study list:<BR/>http://theparallaxview.com/social-media-case-studies/</div>
  </div>
  
  <a name="c1119941527513972847"></a>
  <div class="blogComment">
    <div class="blogCommentByline">Comment by Yancy Lent on <a href="#c1119941527513972847" title="Comment permalink">March 01, 2009 2:57 AM</a> </div>
    <div class="blogCommentBody">Great Info! <BR/><BR/>I love the honesty, you're right many people don't get it. For those that do, and want to try it out in the enterprise, start with Broadcastr, a turn-key microblogging solution delivered on a VM: http://www.broadcastr.net.</div>
  </div>

  <div class="blogCommentsClosed">Comments are closed.</div>

</div>
