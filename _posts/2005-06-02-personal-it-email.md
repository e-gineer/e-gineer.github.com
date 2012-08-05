---
layout: default
title: "Personal IT: Email"
---

Email is the most important aspect of my personal IT infrastructure. It's also
particularly hard to achieve since I've been spoilt with the Exchange, Outlook
2003 and Outlook Web Access setup at Synop. Here are my personal requirements
for email:
* Email address that can last a lifetime. It must be suitable for many different ventures and circumstances.
* Top rate spam filtering.
* Web based email for access from anywhere.
* Minimal effort to maintain and improve.
* Minimal cost.
* Large level of storage. A lifetime of email creates a lot of data.
* Personal copy of data for offline work and backups.
* Virus checking. Standard requirement, but hasn't been a problem for me so far.

I looked at a number of alternatives for providing this, including Gmail, paid
email hosting and running my own server. All of them had limitations against
the above criteria. In the end I've adopted a hybrid model that more than meets
all the above criteria:
1. Create an email address associated with a domain, you@yourdomain.com.
2. A Gmail account acts as the primary email server, store and web access interface for you@yourdomain.com.
3. Outlook (or your preferred client) provides POP access to Gmail for a local store and email program.

This setup is straight forward, except for the problem of having sent messages
appear to come from you@yourdomain.com while still being automatically archived
in Gmail. Mail sent through the Gmail SMTP server is automatically archived,
but appears in the From header to have come from your Gmail account. Mail sent
through your ISP SMTP server is not added to the Gmail sent mail archive. To
resolve this problem, I decided to send email through the ISP SMTP server while
configuring Outlook to automatically BCC all messages to my Gmail account. In
both Gmail and Outlook I then setup a filter to label these received messages
as sent items and archive them automatically. Now, all sent messages appear to
come from you@yourdomain.com while a copy is permanently archived on the Gmail
servers for later access. 

For those that are interested, here is the basic setup: 

* Domain settings

  * Forward all received email to the appropriate Gmail account(s).

* Gmail

  * Enable POP access.
  * Set POP to archive messages when they are downloaded.
  * Setup a filter labelling BCC'ed email from you@yourdomain.com as "Sent Items".
  * Set the reply address to you@yourdomain.com.

* Outlook

  * Setup for POP access to the Gmail account.
  * Send messages using the SMTP server of your ISP.
  * Automatically BCC all sent messages to your Gmail account using [HiddenBCC](http://www.wiredbox.net/hiddenbcc.aspx) or similar.
