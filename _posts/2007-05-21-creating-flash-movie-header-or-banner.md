---
layout: default
title: Creating a flash movie header or banner for your site
---

Rather than use a typical image header for [Elimena's site](http://www.elimena.com), I wanted to try something different and use a flash movie instead. Here are complete instructions on how to create your own...

All the ActionScript code required is in a single block at the bottom of this post, but don't be too hasty as it won't make much sense without the options and other info I've described.

## Import the video into Flash (FLV) format

First you need a suitable movie that can be looped in some reasonable way (i.e. the first and last frames of the movie have a reasonably similar appearance). I simply bought a short video from [iStockPhoto](http://www.istockphoto.com). I selected the large web size, which provides good movie quality at a width of 640px (just wide enough for an effective site header).

Using Macromedia Flash Professional 8 (just [download a trial version](http://www.download.com/Macromedia-Flash-Professional/3000-6676_4-10227159.html) to get started), I created and new Flash document and imported the iStockPhoto movie (File > Import). In the advanced import settings you can crop the imported movie to 640x200px and trim the timeline down to something that loops smoothly and keeps the size reasonable. This process creates a Flash Video file (FLV) that can effectively stream as a simple static HTTP served file.

After importing the movie, we must set the background Flash document to the exact same dimensions and position. First, select the main Flash document (click in the drawing area, but outside any objects including the FLVplayback object) and then click the Size button in the Properties tab setting the dimensions of the Flash document to match the movie (e.g. 640x200px). Second, click on the FLVplayback object in the drawing area, then edit the X, Y position of the FLVplayback object to 0, 0 (perfectly aligning it with the document).

At this point we have a simple flash file that will play the movie end-to-end once.

## Prepare the Flash container for ActionScript code

Before doing any coding, we need to prepare the FLVplayback object. (These will make sense below.) Click the FLVplayback object inserted above and then:<ol><li>Change the Instance Name in the Properties tab to be video.</li><li>Set a cue point (Parameters tab > cuePoints) called EndFadeIn 1 sec into the movie.</li><li>Set a cue point called StartFadeOut 1 sec before the end of the movie.</li></ol>

## Making your video loop

For continuous video, we need to both setup the FLVplayback object to loop and create a small fade effect to hide the jump from the last frame to the first frame. Unfortunately, and unbelieveably, there are no "make my movie loop" or "fade" checkboxes in Flash. Believe me, I looked for a long time in disbelief.

The ActionScript code below simply listens for the complete event on the FLVPlayback object and triggers the object to play again. This will cause it to loop around and around.

## Using fade for a seamless loop transition

Unless you have a movie designed for seamless looped play, you'll most likely need to join the start and end together with a short fade sequence. This keeps the continuity of play, but hides the frame jump between the end and start of the movie.

Scarred by the lack of loop checkbox, but still optimistic I only spent half as long looking for the fade in and fade out video effects. Again, no such thing. To add fades to your movie, you need to add some ActionScript. Constant use of the onEnterFrame event leads to high CPU consumption (on my old laptop anyway, not so much on the brand spanking new desktop), so I brushed off my coding skills and put together something that achieves the effect with a very low CPU load.

The ActionScript code below catches the cue point events, using StartFadeOut to register an onFrameEvent handler that performs the gradual fade out and fade in of the movie loop. The EndFadeIn event deregisters that handler, reducing the CPU usage required to play the majority of the video clip. (I think this is a fairly neat & important trick that I didn't find used elsewhere.)

## Linking the banner to your home page

All good site headers should link back to the home page. Still optimistic, I looked for the add hyperlink capability in Flash (which also doesn't exist). I then tried wrapping the Flash object in an anchor tag (also doesn't work).

The solution is to create a button in flash and use ActionScript to link to your chosen page:<ol><li>In the Timeline panel, click the icon to add a new layer. This layer will be used to house the button without affecting our other content.</li><li>Make sure the new layer is selected.</li><li>On the Insert menu, choose New Symbol...</li><li>Use the Button type, name it Button Symbol and click OK. This creates a canvas on which we can make the button template that will be added to the library. (We have to add it to our document later.)</li><li>Select the rectangle tool and set the border to none and the colour to have an alpha of 0. You can now draw an invisible rectangle in the middle of this canvas. Don't worry too much about the size &amp; position at this point.</li><li>Use the select tool and select your rectangle by clicking on where you know it will be.</li><li>In the Properties tab, set the width to 640px, the height to 200px, the X position to -320px and the Y position to -100px.</li><li>The Button Symbol is now in your Library, but isn't in the document yet.</li><li>To return to the main stage, click Scene 1 in the Timeline panel (should be just to the left of your Button Symbol link).</li><li>To add an instance of Button Symbol to the document, drag it across from the Library pane on the right.</li><li>Use the Properties tab at the bottom to set the instance name to btn and align it exactly by setting X and Y both to zero.</li><li>Make the button link to your chosen URL by adding this code to the ActionScript section:</li></ol>

<code>on(release)<br />{<br />getURL("http://www.e-gineer.com", "_self"); <br />}</code>

Initially I thought this wasn't working either, as the link in the sample I copied was to an outside website which seemed to get blocked for security reasons in IE (silently) and in FireFox (with an error message that finally helped me understand what was happening).

## Removing the "click to activate control" (Eolas patent) requirement

The final challenge is working around the [Eolas patent](http://en.wikipedia.org/wiki/Eolas). By default, your Flash object requires a single click to activate the control. This is very annoying when you actually want the whole object to act as a simple link.

The [workaround to remove the activation click](http://msdn2.microsoft.com/en-us/library/ms537508.aspx) is fairly simple. Just create a Javascript file (e.g. header.js) that programmatically ites out the header HTML for embedding the Flash file. Here is example content of the Javascript file:

<code>// Use external Javascript to load the object so it<br />// doesn't require the user to click to activate it.<br />// See [http://msdn.microsoft.com/library/default.asp?url=/workshop/author/dhtml/overview/activating_activex.asp](http://msdn.microsoft.com/library/default.asp?url=/workshop/author/dhtml/overview/activating_activex.asp)<br />document.write('&lt;object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="640" height="200" id="Your Header Title" align="middle"&gt;\<br />&lt;param name="allowScriptAccess" value="sameDomain"&gt;\<br />&lt;param name="movie" value="/url/to/YourHeader.swf"&gt;\<br />&lt;param name="quality" value="high"&gt;\<br />&lt;param name="bgcolor" value="black"&gt;\<br />&lt;embed src="//url/to/YourHeader.swf" quality="high" bgcolor="black" width="640" height="200" name="Your Header Title" align="middle" allowscriptaccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"/&gt;\<br />&lt;/object&gt;'); </code>

And then use this code to include it where you'd like the Flash header to appear in your page:

<code>&lt;script src="/url/to/header.js"&gt;&lt;/script&gt;</code><br />

## The ActionScript code

I added all ActionScript code to the Flash document itself (there are many possible locations, this one seemed cleanest to me). Select the Flash document by clicking in the drawing area outside all existing objects, expand the ActionScript task bar and insert this code:<code>// This is the length of time at the start and end of the movie<br />// used for the gradual fade.<br />fadeTime = 1;<br />// The frames per second of the movie.<br />fps = 12;<br />// Calculate the alpha increment to use when fading in or out.<br />alphaInc = Math.abs(100*fadeTime/fps);<br /><br />var listenerObject:Object = new Object();<br /><br />// To make the flash movie loop, upon completion the movie<br />// is set to start playing again.<br />listenerObject.complete = function(eventObject:Object):Void {<br />  video.play();<br />};<br />video.addEventListener("complete", listenerObject);<br /><br />// To achieve the fade effect on each cycle (except when the movie<br />// first starts playing) we use an onEnterFrame event. Because of<br />// the high CPU load this causes, we use two cue points to set and<br />// remove a listener on this event as appropriate. EndFadeIn is<br />// set 1 sec after the start of the movie and StartFadeOut is set<br />// 1 sec before the end of the movie (These intervals must be the<br />// same as the fadeTime setting above.<br />listenerObject.cuePoint = function(eventObject:Object):Void {<br />  switch (eventObject.info.name) {<br />  case "StartFadeOut":<br />    // We are near the end of the movie, so register the onEnterFrame<br />    // listener which will control both the fade out and fade in tasks<br />    // as the movie loops back and until the EndFadeIn cue point is reached.<br />    video.onEnterFrame = function() {<br />      if (video.playheadTime&lt;fadeTime) {<br />        video._alpha += alphaInc;<br />      }<br />      else if ( (video.totalTime - video.playheadTime) &lt; fadeTime) {<br />        video._alpha -= alphaInc;<br />      }<br />      else {<br />        // Shouldn't be needed due to cue points, but just in case.<br />        video._alpha = 100;<br />      }<br />    }<br />    break;<br />  case "EndFadeIn":<br />    // We have faded in completely, so set the alpha to 100 for<br />    // certainty and remove the onEnterFrame listener for the time<br />    // being.<br />    video._alpha = 100;<br />    video.onEnterFrame = null;<br />    break;<br />  }<br />}<br />video.addEventListener("cuePoint", listenerObject);</code>
