SOFTWARE REQUIREMENTS SPECIFICATION:                                                                     
                                                                          
Functional Requirements:
Introduction:
                 Functional requirements provide a detailed outline of the operational specifications necessary for the user and admin modules within the project. These requirements ensure a seamless user experience, robust security measures, and efficient administrative functionalities.

User Module Functional Requirements:
Registration:
	Users must register with their personal information, including:
•	Full name
•	Gender
•	Institution-specific email address
•	Department
•	Batch
•	Mobile number
•	Password
•	Registration process should include validation checks to 
                    ensure data accuracy and security.
•	Security measures should prevent unauthorized access 
                    to sensitive user information during registration.





Login:
	User authentication should require the input                                                                  of registered institution
	specific email addresses and associated passwords.
	Validation mechanisms should verify the authenticity   of the  email addresses to ensure they are affiliated with the institution.
	User-friendly error handling should provide clear  feedback for incorrect login attempts.
	Forgot Password functionality should enable users to securely reset their passwords through a multi-step verification process.
Feedback Form:
	Users should be able to submit detailed feedback on companies   they have interacted with during recruitment processes.
	Feedback submission form should include fields for:
	Company name
	Specific date of interaction
	Number of interview rounds
	Job title and description
	Salary package details
	Round-wise feedback, including round number, title,   experience, and any uploaded files.
	Robust security measures should be implemented to protect the confidentiality and integrity of submitted feedback.



Profile Page:
	Users should have access to a profile management page where they can view and update their personal information.
	Profile management features should include:
	Option to upload and change profile picture
	Ability to update personal details such as mobile number and department.
	Option to change password with confirmation prompts for added security.
Company Page Functional Requirements:
Company List Page:-
	Access to the list of company feedbacks should be restricted to users with admin privileges only.
	Unauthorized users attempting to access the company list page should be redirected to a login page or denied access with a notification.
Single Feedback Page:
	Detailed feedback for individual companies should be accessible only to authorized users with admin privileges.
	Feedback page should display comprehensive information about the company, including feedback from multiple users if available.
Admin Module Functional Requirements:
Add Admin Page:
	Admins should have the authority to manage user accounts and administrative privileges.
	Features should include:
	Addition of new admin users with customizable privileges
	Removal of admin users
	Editing or deletion of existing admin profiles

List of Students Page:
	Admins should be able to access and analyze student data based on various parameters such as academic year, department, batch, and gender.
	The list of students page should provide a detailed overview of feedback contributors and their respective counts.

Companies Page:
	Admins must have oversight over company-related activities, including the moderation and deletion of feedback.
	Features should include:
	Access to company feedback threads
	Options to moderate and delete feedback as necessary

Request Accept and Denied Page:
	Admins are responsible for reviewing and processing user requests, including registration approvals or denials.
	Features should include:
	Prompt action on registration requests with clear acceptance or denial mechanisms.
	Notification system to inform users of the status of their requests.





Login Page:
	Secure admin access should be ensured through robust authentication mechanisms, including email and OTP verification.
	Admin login page should include features for:
•	Email and password verification.
•	 Additional layers of security through OTP verification.

Forgot Password:
	Admins should have the ability to securely reset passwords for users through a multi-step verification process.
	Forgot password functionality should include:
•	Secure verification of user identity through email or security questions.
•	Option to set a new password and confirmation prompts for security purposes.

Conclusion:
                  These detailed functional requirements serve as a comprehensive guide for the development of the user and admin modules. By adhering to these specifications, the project aims to deliver a secure, efficient, and user-friendly system that meets the diverse needs of its stakeholders.
