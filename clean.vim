:set syntax=markdown
:%s///g
:normal 1G
:normal d/<h1
:normal cf>---layout: defaulttitle: 
:normal /<\/h1
:normal d$
:normal j
:normal 0d$
:normal j
:normal 5dd
:normal j
:normal 0d2f>
:normal gqgq
:normal /End #comments
:normal j
:normal dG
:%s/<a href="\([^"]\+\)">\([^<]\+\)<\/a>/[\2](\1)/g
:%s/<p>//g
:%s/<\/p>//g
:%s/^<strong>/## /g
:%s/<\/strong>$//g
