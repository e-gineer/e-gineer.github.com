---
layout: default
title: Getting your Blogger blog listed in search results
---

3 months after her birth and simultaneous notification to the Google Crawler
for indexing, [Elimena.com](http://www.elimena.com) was still not
showing up in Google's results (or other search engines for that matter). I
was shocked it was taking this long, and had resubmitted multiple
times.

In desperation today, I thought it might be related to the
Javascript trick I'm using to show the Flash Movie Header as a link that
doesn't require activation to use. Looking at the source code, I noticed this
fatal tag on every page of the site:

    <meta name="ROBOTS" content="NOINDEX,NOFOLLOW"/>

being added automatically by the Blogger template tag:

    <$BlogMetaData$>

I was confused, since my e-gineer blog, also powered by Blogger, doesn't add
this when using the BlogMetaData template tag.

To fix this check the following Blogger setting:

1. Login to Blogger.
2. Go to Settings, then Basic tabs.
3. Ensure that Add your blog to our listings? is marked as Yes.

If your blog is suspected as spam by Blogger, and they force
you to enter a captcha code everytime you post, you can
[submit your blog for review by Blogger staff](http://groups.google.com/group/blogger-help-troubleshoot/browse_frm/thread/16bb4ffacee6f397/?hl=en)
which should fix the problem.

If all else fails, [simply copy all the code you
need](http://blog.seoptimise.com/2007/02/blogger-tag-includes-noindex-meta-tag.html)
that is produced by the &lt;$BlogMetaData$&gt; tag and paste it into your
template in place of the tag itself.
