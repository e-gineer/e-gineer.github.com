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
```&lt;meta name="ROBOTS" content="NOINDEX,NOFOLLOW"/&gt;

being added automatically by the
Blogger template tag:
```&lt;$BlogMetaData$&gt;

I was confused,
since my e-gineer blog, also powered by Blogger, doesn't add this when using
the BlogMetaData template tag.

To fix this check the following Blogger
setting:

1. Login to Blogger.
2. Go to Settings, then Basic tabs.
3. Ensure that Add your blog to our listings? is marked as Yes.

If your blog is suspected as spam by Blogger, and they force
you to enter a captcha code everytime you post, you can
[submit your blog for review by Blogger staff](http://groups.google.com/group/blogger-help-troubleshoot/browse_frm/thread/16bb4ffacee6f397/?hl=en)
which should fix the problem.

If all else fails, <a href="http://blog.seoptimise.com/2007/02/blogger-tag-includes-noindex-meta-tag.html">simply copy all the code you need</a
that is produced by the &lt;$BlogMetaData$&gt;
tag and paste it into your template in place of the tag itself.

				<!-- Begin #comments -->
				
				<div id="blogComments">
					<a name="comments"></a>
					
					<div class="blogCommentCreate"><div class='comment-form'>
<a name='comment-form'></a>
<h4>Post a Comment</h4>


<a id='comment-editor-src' href='http://www.blogger.com/comment-iframe.g?blogID=13013707&postID=6139194777538166508'></a><iframe id='comment-editor' src='' class='blogger-iframe-colorize' width='100%' height='410' scrolling='no' frameborder='0' allowtransparency='true'></iframe>
<script type="text/javascript" src="http://www.blogger.com/static/v1/jsbin/2383433370-iframe_colorizer.js"></script>
</div></div>
				</div>
				
				
				<!-- End #comments -->
