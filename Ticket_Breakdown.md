# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

My breakdown is assuming that we are using an SQL database
# Ticket 1:
Acceptance Criteria:
- We need to add a new column 'facility_id' to the Agents table in the database. 
- The facility_id should be unique amongst every agent in the same facility.

Implementation details:
- Write an SQL script to add a new column facility_id to the Agents table
- We need to write a function to allow Facilities to update an agent with a facility_id
Time to finish: 1 hour

# Ticket 2:
Acceptance Criteria:
- The generateReport function should use the facility_id if there is one, otherwise use the internal database id

Implementation details:
- We need to modify the generateReport function to retrieve the facility_id for each Agent and then use it in the report. If the facility_id does not exist, the function should use the internal database id instead.
Time to finish: 1 hour

# Ticket 3:
Acceptance Criteria:
- We need to write e2e tests that make sure the functionality works as it should

Implementation details:
- We need to write tests to check that the facility_ids are being stored and retrieved from the database correctly
- We also need to test that the facility_ids are being used in the generated report
Time to finish: 45 mins

# Ticket 4:
Acceptance Criteria:
- We need to update the frontend for facitilities

Implementation details:
- We need to add new text inputs in the frontend where facilities are able to enter their facility_ids for agents
- Upon entering the facility_id there needs to be a function that calls the backedn to update an Agent with the new facility_id
Time to finish: 1 hour

# Ticket 5
Acceptance Criteria:
- We need to write e2e frontend test to make sure the functionality works as it should

Implementation details:
- We need to write tests to make check whether the input field exists
- we need to write tests to make sure the upon submission, the Agent update is successful
Time to finish: 1 hour