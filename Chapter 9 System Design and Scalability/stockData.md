Stock Data: Imagine you are building some sort of service that will be called by up to 1,000 client
applications to get simple end-of-day stock price information (open, close, high, low). You may
assume that you already have the data, and you can store it in any format you wish. How would you
design the client-facing service that provides the information to client applicati ons? You are respon-
sible for the development, rollout, and ongoing monitoring and maintenance of the feed. Describe
the different methods you considered and why you would recommend your approach. Your service
can use any technologies you wish, and can distribute the information to the client applications in
any mechanism you choose

---

1. Clarify and Assume
- Clarifications
a. API to frontend clients via HTTP requests
b. Public information, no need for user id
c. API resides with the stock price databases, no need to pull data from another source
d. Data will be -stockticker, -date, -open, -close, -high-, -low
e. Stores historical data
f. returns JSON
g. Clients in different geographical locations

-Assumptions:
a. No real-time needed (end of day) used for research and records

2. Basic setup - diagram

3. Identify and Address Problems
- uneven request traffic
- certain times of the day
- certain stock tickers
- estimation
- updating users
half of 1000 client applications check once per day 
1/4 of 10000 client applications use multiple calls on various stocks
- many calls at once may overload server
- place http calls into a queue
- horizontally scale servers with load balancer
- latency of server will depend on global location
- transmitting speed - http respones has no size limit
- too much data
- horizontally scaled and indexed
- database server to direct calls nad merge calls into one request to be returned

4. Points of failure
 - Database: have slave database with copy of master database on standby
 - server - buffer capacity for peak periods
 
 5. enhancements to system 
 -Logs server and database activity
 -output report to identify points of improvement
 -caching popular ticker in server
 - When requested don't have database call to retrieve data


 Suggested answer:

 Client ease of us
 Easy for client developers to implement.
 Easy for us to implement and maintain
 Flexibility for future demands
 Scalability and efficiency - Efficient solution 

 Proposal 1

 Keep data in text files, let clients download data through FTP server.
 Pros:
- Easy to maintain 
Cons:
Requires complex parsing to do any query
- If additional data added to file, might break parsing.

Proposal 2
Use standard SQL database, let users direct access to data
Pros:
-Structured data
-Adding data would just be adding new structures
-Allow structured queries
- Enjoy benefits of Object Relational Mapping, ACID, rolling back and backing up data and security can use standard DB features
- Easy for clients to integrate into existing applications

Cons:
- Direction connection lack of flexibility for data requests that is of a specific shape
- More than we need in terms of features for a feed
- Need to implement additional layer to maintain and view data. Increases implementation costs
Security: Do not allow users to make any SQL requests. Inefficient queries. Excessive amounts of data.

---
Implement REST API for client data access. 