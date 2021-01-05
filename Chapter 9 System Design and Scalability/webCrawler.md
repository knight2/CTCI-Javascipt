Web Crawler: If you were designing a web crawler, how would you avoid getting into infinite loops?

1. Clarification
- Web crawler indexing web pages
- Not intending to revisit webpages for new information

Solution:
1. Perform URL-Seen test on each extracted link before adding the URL to the URl-to-crawl list.
2. Store all URLs seen via hash tables with unique hash

Additional comments:
- Does not solve situations of bot traps 
- Successfully avoids the problem of following the same links back and forth