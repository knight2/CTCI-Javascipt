Social Network: How would you design the data structures for a very large social network like Face-
book or Linkedln? Describe how you would design an algorithm to show the shortest path between
two people (e . g., Me -> Bob -> Susan -> Jason -> You) .

1. Clarifying 
- Just data structure
- Functionality, each node will contain profile content
-Data displays profile picture name etc

2. Basic Setup 
- Profile
- Object with properties with data
- Personal information
- Education, work, intersts, friend connections, undirected graph, userID
- Algorithm. 
- Finding id of person a and person b. 
Find id of person A and B from both sides, expanding out degree by degree
removing duplicates. Breath first search, minimize number of degrees searched
bidirectional breath first search

Identify and address problems (at scale) -Exponential -> O(n^k) where n is the number of friends a person has, and k is degree -No real way to reduce the complexity -Practically, can cache previously searched friends to remove re-processing -Too many users -Separate graph search engine from profile information database/server -In graph search engine, organize graphs in sorted order (e.g. one server stores 2 million nodes in alphabetical order, and engine can call the databases storing nodes as and when it needs it) -It would be troublesome to reindex the databases if more users starting with 'A' apply -So could index by userid numerical order (with half a billion users that's a 10-digit number) ---> SHARD DATABASE IN NUMERICAL ORDER

Addressing possible points of failure -traffic spike -caching, load balancers and horizontal scaling -servers -> buffer capacity -databases -> slave database

ANSWER KEY

Question: How is a bidirectional BFS faster than a BFS? -Unidirectional BFS: O(k^n) where k is number of edges, and n is number of levels -Bidirectional BFS: O(k^(n/2)) which is a large factor smaller

e.g. BFS of 5 nodes: a -> b -> c -> d -> e , where each node has 100 edges

Unidirectional would take 100 ^ 4, bidirectional would take 2 * 100 ^ 2. This would be 100 ^ 2 / 2 in computational difference.

Optimization: Batch Jumps

Optimization: Smart Division - by clustering, or by country, or by city, or by college and year

Follow on questions: a) Do you search until the end of the graph? How do you decide when to give up? b) Some people have more friends of friends than others. How could you use this data to pick where to start traversing? sort by friends when traversing BFS, and traverse the graphs with more friends first?

