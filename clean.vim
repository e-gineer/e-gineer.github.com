:set syntax=markdown
:%s/
:%s/<a href="\([^"]\+\)">\([^<]\+\)<\/a>/[\2](\1)/g
:normal 1G
:normal d/<h1
:normal cf>---
:normal /<\/h1
:normal d$
:normal a"
:normal j
:normal 0d$
:normal j
:normal 5dd
:normal 0d2f>
:normal gqgq
/End #comments
:normal j
:normal dG
:%s/<p>/
:%s/<\/p>//g
:%s/<br \/>/
:%s/^<strong>/## /g
:%s/<\/strong>$//g
:%s/<div style="clear[^>]*><\/div>//g
:%s/<ol><li>/
:%s/<ul><li>/
:%s/<\/li><\/[ou]l>/
:%s/<\/li><li>/
:%s/…/.../g
:%s/’/'/g
:%s/“/"/g
:%s/”/"/g
:normal 1G