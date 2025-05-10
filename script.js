const teams = [
  {
    name: "Royal Challengers Bangalore",
    logo: "https://www.royalchallengers.com/PRRCB01/public/styles/1061x767_landscape/public/2024-03/RCB%20LOGO%20IMAGE%20%281%29.png?itok=B_OD2eR7",
    color: "#da1c2f",
    captain: "Rajat Patidar"
  },
  {
    name: "Chennai Super Kings",
    logo: "https://static.wixstatic.com/media/0293d4_0be320985f284973a119aaada3d6933f~mv2.jpg/v1/fill/w_980,h_680,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0293d4_0be320985f284973a119aaada3d6933f~mv2.jpg",
    color: "#fdb913",
    captain: "M S Dhoni"
  },
  {
    name: "Mumbai Indians",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iJZ10qdXePf6d62Ch0dhdBuptoxljUhbWQ&s",
    color: "#045093",
    captain: "Hardik Pandya"
  },
  {
    name: "Kolkata Knight Riders",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/800px-Kolkata_Knight_Riders_Logo.svg.png",
    color: "#3b1d62",
    captain: "Ajinkya Rahane"
  },
  {
    name: "Delhi Capitals",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Delhi_Capitals.svg/800px-Delhi_Capitals.svg.png",
    color: "#17449b",
    captain: "Axar Patel"
  },
  {
    name: "Rajasthan Royals",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg/1200px-This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg.png",
    color: "#ea1a84",
    captain: "Sanju Samson"
  },
  {
    name: "Sunrisers Hyderabad",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMKavqOyu2W71gHAX9dU1ZmqUN6s6s4c9-g&s",
    color: "#f26522",
    captain: "Pat Cummins"
  },
  {
    name: "Lucknow Super Giants",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Lucknow_Super_Giants_IPL_Logo.svg/250px-Lucknow_Super_Giants_IPL_Logo.svg.png",
    color: "#0058a1",
    captain: "Rishabh Pant"
  },
  {
    name: "Punjab Kings",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg",
    color: "#d71920",
    captain: "Shreyas Iyer"
  },
  {
    name: "Gujarat Titans",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/1200px-Gujarat_Titans_Logo.svg.png",
    color: "#1c1c1c",
    captain: "Shubman Gill"
  }
];

const container = document.getElementById("team-container");

teams.forEach(team => {
  const card = document.createElement("div");
  card.className = "team-card";
  card.style.backgroundColor = team.color;

  card.innerHTML = `
    <img src="${team.logo}" alt="${team.name} Logo" class="team-logo" />
    <h2>${team.name}</h2>
    <p><strong>Captain:</strong> ${team.captain}</p>
  `;

  container.appendChild(card);
});
