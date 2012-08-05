---
layout: default
title: "DVD burning for backups on Windows XP"
---

I had to recreate Synop's DVD backup burning capabilities today. After some
searching and digging around I'm using:
* cdrtools: Using mkisofs.exe we can create DVD ISO images greater than 2GB from the command line. This seems to be a project that stalled and has been carried on by others. In the end I found good information on the [CDR Tools Front End](http://demosten.com/cdrfe/) site, which points to the latest unofficial versions on a [German site](http://www.geoshock.com/cdrtools/).
* [Windows Resource Tools](http://www.microsoft.com/downloads/details.aspx?FamilyID=9d467a69-57ff-4ae7-96ee-b18c4790cffd&amp;displaylang=en): From Microsoft, these tools include dvdburn.exe for burning the actual disks.

Here's a quick sample backup script that we use:

    del "E:\backup\burning\FridayA.iso"
    del "E:\backup\burning\FridayB.iso"
    "C:\Program Files\cdrtools\mkisofs.exe" -v -J -R E:\backup\burning\FridayA\ > E:\backup\burning\FridayA.iso
    "C:\Program Files\cdrtools\mkisofs.exe" -v -J -R E:\Backup\burning\FridayB\ > E:\backup\burning\FridayB.iso
    "C:\Program Files\Windows Resource Kits\Tools\dvdburn.exe" D: e:\backup\burning\FridayA.iso
    "C:\Program Files\Windows Resource Kits\Tools\dvdburn.exe" H: e:\backup\burning\FridayB.iso
    "C:\Program Files\cdrtools\open_cd.exe" d
    "C:\Program Files\cdrtools\open_cd.exe" h
