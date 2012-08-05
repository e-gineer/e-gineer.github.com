---
layout: default
title: "Integrating Microsoft HTML Help search into .NET applications"
---

While spending countless hours writing a comprehensive help file is
infinitely rewarding for application testing, consistency and design; it counts
for a lot more if users can perform quick help searches from inside the
application. That little help search box in the top right hand corner of
Office 2003 applications is worth its weight in gold.

The
[HelpProvider](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/vbcon/html/vborihelpproviderctltasks.asp)
in .NET doesn't provide a method to run help searches from your application.
After digging around we found [.NET wrapper
code](http://support.microsoft.com/?kbid=317406) to use the unmanaged HTML Help
API. While this unmanaged API has an appropriate method, it turns out that HTML
Help 1.4 has [a bug](http://support.microsoft.com/?kbid=Q241381) which ignores
the search information struct anyway. So, it will never work. I guess that's
why they didn't provide a method to do it from inside .NET.

Of course, rather than thinking about fancy APIs etc we can
always fall back on the [simplest thing that will possibly
work](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpref/html/frlrfsystemwindowsformssendkeysclasssendtopic.asp):

    // Open the help window to the search
    paneHelp.ShowHelp(this, Application.StartupPath + Path.DirectorySeparatorChar + "SauceReader.chm", HelpNavigator.Find, "");
    // run the search, by sending key strokes to now active help
    windowSystem.Windows.Forms.SendKeys.SendWait("{HOME}^+{END}{BACKSPACE}search query{ENTER}");
    // select the first result
    System.Windows.Forms.SendKeys.Send("{TAB}{TAB}{ENTER}");

*Note: Originally posted to my Synop blog on April 2, 2004.*
