AD312 User Profile with Immer
A React project demonstrating nested state management using the useImmer hook. This assignment showcases how Immer simplifies immutable updates for deeply nested objects by allowing mutation‑style syntax while preserving immutability under the hood.

📌 Project Overview
This project implements a User Profile Editor using React and the useImmer hook.
Users can update:

Name

Email

Phone

Address

Newsletter subscription

Notification preferences

All updates are reflected in real time in a JSON state viewer, demonstrating Immer’s ability to handle nested state cleanly and efficiently.

🛠️ Technologies Used
React (Vite)

useImmer (from the use-immer package)

JavaScript (ES6+)

📂 Project Setup
Install dependencies:
npm install

Run the development server:
npm run dev

src/
  ├── App.jsx
  ├── UserProfileWithImmer.jsx
  ├── main.jsx
  └── index.css (optional)

🧠 State Structure
The user profile state is initialized with nested objects:
{
  name: "",
  email: "",
  contactDetails: {
    phone: "",
    address: ""
  },
  preferences: {
    newsletter: false,
    notifications: false
  }
}

Immer allows mutation‑style updates like:
updateUserProfile(draft => {
  draft.contactDetails.phone = newPhone;
});

🧩 Features
✔ Update Name & Email
Real‑time updates through controlled inputs.

✔ Update Contact Details
Phone and address fields update nested state cleanly.

✔ Toggle Preferences
Newsletter and notification settings flip boolean values using Immer.

✔ Live JSON State Viewer
Displays the entire userProfile object as formatted JSON.

🧪 Test Cases
Normal Test Cases
Update name and email → JSON updates immediately

Update phone and address → Nested state updates correctly

Toggle newsletter and notifications → Boolean values flip as expected

Edge Test Cases
Empty strings → Inputs clear without errors

Rapid toggle clicking → No crashes or lag

Long address input → UI handles long strings gracefully

🚀 How to Run
Clone the repo

Install dependencies

Run npm run dev

Open the local server in your browser

Interact with the UI and observe state updates

📘 Summary
This project demonstrates:

How to manage nested state in React

How useImmer simplifies immutable updates

How to build a clean UI that reflects state changes instantly
