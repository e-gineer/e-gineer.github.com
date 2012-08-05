:set syntax=markdown
:%s///g
:%s/<a href="\([^"]\+\)">\([^<]\+\)<\/a>/[\2](\1)/g
:normal 1G
:normal d/<h1
:normal cf>---layout: defaulttitle: "
:normal /<\/h1
:normal d$
:normal a"---
:normal j
:normal 0d$
:normal j
:normal 5dd
:normal 0d2f>
:normal gqgq
/End #comments
:normal j
:normal dG
:%s/<p>//g
:%s/<\/p>//g
:%s/<br \/>//g
:%s/^<strong>/## /g
:%s/<\/strong>$//g
:%s/<div style="clear[^>]*><\/div>//g
:%s/<ol><li>/1. /g
:%s/<ul><li>/* /g
:%s/<\/li><\/[ou]l>//g
:%s/<\/li><li>/* /g
:%s/…/.../g
:%s/’/'/g
:%s/“/"/g
:%s/”/"/g
:normal 1G
