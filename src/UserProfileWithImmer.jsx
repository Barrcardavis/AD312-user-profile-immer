import { useImmer } from "use-immer";

export default function UserProfileWithImmer() {
  // SECTION 2 — State Initialization
  const [userProfile, updateUserProfile] = useImmer({
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
  });

  // SECTION 3 — State Update Functions
  const updateName = (newName) => {
    updateUserProfile(draft => {
      draft.name = newName;
    });
  };

  const updateEmail = (newEmail) => {
    updateUserProfile(draft => {
      draft.email = newEmail;
    });
  };

  const updateContactDetails = (newPhone, newAddress) => {
    updateUserProfile(draft => {
      draft.contactDetails.phone = newPhone;
      draft.contactDetails.address = newAddress;
    });
  };

  const toggleNewsletterSubscription = () => {
    updateUserProfile(draft => {
      draft.preferences.newsletter = !draft.preferences.newsletter;
    });
  };

  const toggleNotifications = () => {
    updateUserProfile(draft => {
      draft.preferences.notifications = !draft.preferences.notifications;
    });
  };

  // SECTION 4 — UI
  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h2>User Profile With Immer</h2>

      <label>
        Name:
        <input
          type="text"
          value={userProfile.name}
          onChange={(e) => updateName(e.target.value)}
        />
      </label>

      <br /><br />

      <label>
        Email:
        <input
          type="email"
          value={userProfile.email}
          onChange={(e) => updateEmail(e.target.value)}
        />
      </label>

      <br /><br />

      <label>
        Phone:
        <input
          type="text"
          value={userProfile.contactDetails.phone}
          onChange={(e) =>
            updateContactDetails(
              e.target.value,
              userProfile.contactDetails.address
            )
          }
        />
      </label>

      <br /><br />

      <label>
        Address:
        <input
          type="text"
          value={userProfile.contactDetails.address}
          onChange={(e) =>
            updateContactDetails(
              userProfile.contactDetails.phone,
              e.target.value
            )
          }
        />
      </label>

      <br /><br />

      <label>
        <input
          type="checkbox"
          checked={userProfile.preferences.newsletter}
          onChange={toggleNewsletterSubscription}
        />
        Subscribe to Newsletter
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={userProfile.preferences.notifications}
          onChange={toggleNotifications}
        />
        Enable Notifications
      </label>

      <br /><br />

      <h3>Current State:</h3>
      <pre>{JSON.stringify(userProfile, null, 2)}</pre>
    </div>
  );
}
