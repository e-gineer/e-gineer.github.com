---
layout: default
title: "Creating a favicon"
---

While there is [plenty of information](http://en.wikipedia.org/wiki/Favicon)
around on creating a favicon for your website, unfortunately most of it is
fairly incomplete. Here's my summary:

1. While newer browsers support a gif or png image, IE still needs an ico file. There are a few online tools for creating these, but personally I use [Microangelo](http://www.microangelo.us).

2. I was surprised that IE only uses a favicon (any context) after the site has been bookmarked. Firefox uses it all the time.

3. Icon files can contain multiple images. I included 16x16, 32x32 and 48x48 pixel images in Windows XP colour (24-bit with 8-bit alpha). At the very least, you need one 16x16 pixel image. There are many more formats you can provide depending on your desired level of support. I wanted it to look good in the browser or [in Windows](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dnwxp/html/winxpicons.asp) as a shortcut.

4. There are a few ways to inform the browser about a favicon: 

    * Horrible way: Save a favicon.ico file in your web server root directory.
    * Standards compatible way: &lt;link href="/my/icon.ico" type="image/ico" rel="icon"/&gt;
    * Tradeoff for IE &amp; standards (my choice): &lt;link href="/my/icon.ico" type="image/ico" rel="shortcut icon"/&gt;

5. The [favicon validator](http://www.html-kit.com/favicon/validator/) is a great little online service.
