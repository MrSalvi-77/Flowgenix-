const supabase = supabase.createClient(
  "https://ziszdaxwfaisaeytfmpb.supabase.co",
  "sb_publishable_HEzeMVSsQFHFtqu-vnwEvQ_M5PX5-Gg"
);

const ADMIN_EMAILS = [
  "nathnaelsalvi@gmail.com",
  "mr.salvi379@gmail.com"
];

async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  await supabase.auth.signUp({ email, password });
  alert("Signup successful");
}

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data } = await supabase.auth.signInWithPassword({ email, password });

  if (data.user) {
    showDashboard(data.user);
  }
}

function showDashboard(user) {
  document.getElementById("auth").style.display = "none";
  document.getElementById("dashboard").style.display = "block";

  document.getElementById("userEmail").innerText = user.email;

  if (ADMIN_EMAILS.includes(user.email)) {
    document.getElementById("role").innerText = "Role: SUPER ADMIN 🔥";
  } else {
    document.getElementById("role").innerText = "Role: USER";
  }
}

const BASE_URL = "https://ziszdaxwfaisaeytfmpb.supabase.co/functions/v1";

async function saveWhatsApp() {
  const apiKey = document.getElementById("apiKey").value;
  const phoneId = document.getElementById("phoneId").value;

  await fetch(`${BASE_URL}/save-whatsapp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: apiKey,
      phone_id: phoneId,
      user_id: "dynamic"
    })
  });

  alert("Saved ✅");
}

async function sendWhatsApp() {
  const number = document.getElementById("number").value;
  const message = document.getElementById("message").value;

  await fetch(`${BASE_URL}/send-whatsapp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: "dynamic",
      to: number,
      message: message
    })
  });

  alert("Sent 🚀");
}
