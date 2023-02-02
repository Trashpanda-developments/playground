function profileCard(
  profileName,
  fullName,
  address,
  city,
  state,
  zip,
  phone,
  email
) {
  console.log("IGN" + profileName + "Name");
}

function profileCard2({ profileName, fullName }) {
    console.log("IGN" + profileName + "Name" + fullName);
}



profileCard(
  "Salt",
  "Henk Bakker",
  "404 Sample St.",
  "NH",
  "HomeTown",
  "1234AB",
  "123-456-7890",
  "sampleEmail@sampleProvider.null"
);


console.log(person);

let person = {
    address: "404 Sample St.",
    city: "HomeTown",
    zip: "1234AB",
    state: "NH",
    profileName: "Salt",
    phone: "123-456-7890",
    fullName: "Henk Bakker",
    email: "sampleEmail@sampleProvider.null",
};

profileCard(person);
