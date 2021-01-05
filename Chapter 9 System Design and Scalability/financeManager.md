Personal Financial Manager: Explain how you would design a personal financial manager (like
Mint.com). This system would connect to your bank accounts, analyze your spending habits, and
make recommendations.

1. Functionality
- Connect to bank account
- Spending habits
- Make recommendations

2. Clarifying assumptions
- Front end + back end
- Connect to bank via API to get informatoin
- Detailed transaction data to parse
- Security/authentication
- Engine to analyze spending habits
- Rule based engine to make recommendations

Assumptions
- Standardized set of data from different banks
- Data is available
- Not worried about regulations

Frontend
- Overall view of finances
- Analytics displayed

Backend
-   Client services 
- Database service 
store user profile in database
-Analytics system
processes user data and generates profile
-Bank API system
processes data from bank

Client is shown page to sign up or login: -sign up -> creates user account in database -log in -> brings up user profile view -enter bank credentials -calls bank API for bank transactions -place transactions into database -inputs data into analytics service to generate profile -place analysed profile into database -updates client webpage with results and recommendations

Mobile and Web Desktop: -Different interfaces and features -mobile -> less granular data and graphical explainations of recommendations -web -> space for more extensive visualizations

