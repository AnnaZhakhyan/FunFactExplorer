## Use Case Descripton
<br>

| Name          | Explore different fun facts                                                                                                                                                                                                                                      | 
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actor         | User                                                                                                                                                                                                                                         |
| Description   | User explores fun facts from different categories                                                                                                                                                                                                                      |
| Pre-condition | -                                                                                                    |
| Scenario      | 1. Actor navigates to the Home page. <br> 2. System open the Home page. <br> 3.Actor selects the theme that interests them. <br> 4. System loads up the correct theme. |
| Result        | Actor gets to read up on fun facts in the desired category.                                                                                |
| Exception     | - | 
| Extensions    | -                                                                                                    |

<br>

| Name          | Play game (Homepage)                                                                                                                                                                                                                                     | 
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actor         | User                                                                                                                                                                                                                                         |
| Description   | User plays game on the facts that they have learned                                                                                                                                                                                                          |
| Pre-condition | User has to have visited multiple fact pages and read some information on the pages provided.                                                                                                                                                                                                                   |
| Scenario      | 1. Actor navigates to the Home page. <br> 2. System opens Home page. <br> 3. Actor reads and answers the first question provided. <br> 4. System checks if answer is correct and provides the user with feedback. <br> |
| Result        | Actor gets to play a fun quiz.                                                                                                                                                                                                        |
| Exception     |-                                                                                                          | 
| Extensions    | -                                                                                                   |

<br>

<br>

| Name          | Play game (Quiz page)                                                                                                                                                                                                                                     | 
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actor         | User                                                                                                                                                                                                                                         |
| Description   | User plays game on the facts that they have learned                                                                                                                                                                                                          |
| Pre-condition | User has to have visited multiple fact pages and read some information on the pages provided.                                                                                                                                                                                                                   |
| Scenario      | 1. User navigates to the Quiz page. <br> 2. System loads the quiz interface. <br> 3. User answers a series of questions. <br> 4. System checks each answer and provides immediate feedback. <br> 5.System shows score or result at the end. |
| Result        | Actor gets to play a fun quiz.                                                                                                                                                                                                        |
| Exception     |-                                                                                                          | 
| Extensions    | -                                                                                                   |

<br>

<br>

| Name          | View randomly-generated facts                                                                                                                                                                                                                                     | 
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actor         | User                                                                                                                                                                                                                                         |
| Description   | The user views random fun facts generated from different categories.                                                                                                                                                                                                          |
| Pre-condition | -                                                                                                                                                                                                                   |
| Scenario      | 1. User navigates to the Random Facts page or section. <br> 2. System generates and displays one or more random facts. <br> 3.User optionally refreshes for new facts. <br> 4. System loads new random facts each time. <br> |
| Result        | User gets to discover new facts in a random, engaging format.                                                                                                                                                                                                      |
| Exception     |-                                                                                                          | 
| Extensions    | -                                                                                                   |

<br>

| Name          | Interact with AI Chatbot for In-depth Learning                                                                                                                                                                                               | 
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actor         | User                                                                                                                                                                                                                                         |
| Description   | The user utilizes the floating chatbot widget to ask follow-up questions about a fun fact they just read or to seek clarification on a topic after completing a quiz.                                                                        |
| Pre-condition | -                                                                                                                                                                                                                                            |
| Scenario      | 1. User clicks the chatbot icon to open the chat interface. <br> 2. User types a specific question regarding a recent fact or quiz result. <br> 3. System processes the request via the Gemini API. <br> 4. System displays a conversational explanation. <br> |
| Result        | User gains deeper context and understanding of the topic beyond the initial fact.                                                                                                                                                            |
| Exception     | 1. Network/API Error: System displays "I couldn't find a fact for that". <br> 2. Empty Input: System prevents sending empty messages.                                                                                                        | 
| Extensions    | 1. Quiz Review: User asks for the reasoning behind a correct/incorrect quiz answer. <br> 2. Off-topic Pivot: User asks unrelated question, and AI steers conversation back to fun facts.                                                     |

                                                                                                                                   
