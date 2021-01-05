Duplicate URLs: You have 10 billion URLs. How do you detect the duplicate documents? In this
case, assume "duplicate" means that the URLs are identical.

Setup hash table.
Iterate through URLS. If it is already in hashtable, flag url as
duplicate. 

Processing 10 billion URLs will take time. 

one URL how much space? a char is 1 byte / an integer is 4 bytes a url is around 30 chars, make it 100 as buffer -> 400 bytes 10 000 000 000 URLs -> 4 000 000 000 000 (4000 billion bytes) 4 000 000 000 000 bytes -> 4 000 000 000 kb -> 4 000 000 MB --> 4 000 GB -> 4 TB

