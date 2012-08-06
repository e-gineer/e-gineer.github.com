:1
/<!-- Begin #comments
:normal <G...
:normal 3dd
:normal mb
:.,$s/<div class="blogCommentByline">\([^<]*\)<span[^>]*><img[^>]*><\/span>&nbsp;[^<]*<[^>]*>\([^<]*\)<\/[^>]*>\(.*\)<span class="item-control[^>]*>.*<\/div>/<div class="blogCommentByline">\1\2\3<\/div>/g
:%s/<a href="#/<a href="#c/g
:%s/\(<a name=[^>]*>\)<\/a>/\1\&nbsp;<\/a>/g
/<div class="blogCommentCreate
:normal 0dG0C  <div class="blogCommentsClosed">Comments are closed.</div>
:normal 0C</div>
:w
