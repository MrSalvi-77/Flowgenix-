const BASE_URL = "https://ziszdaxwfaisaeytfmpb.supabase.co/functions/v1";

async function saveWhatsApp() {
  const apiKey = document.getElementById("apiKey").value;
  const phoneId = document.getElementById("phoneId").value;

  await fetch(`${BASE_URL}/save-whatsapp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      api_key: apiKey,
      phone_id: phoneId,
      user_id: "test_user"
    })
  });

  alert("Saved ✅");
}

async function sendWhatsApp() {
  const number = document.getElementById("number").value;
  const message = document.getElementById("message").value;

  await fetch(`${BASE_URL}/send-whatsapp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user_id: "test_user",
      to: number,
      message: message
    })
  });

  alert("Sent 🚀");
    }
