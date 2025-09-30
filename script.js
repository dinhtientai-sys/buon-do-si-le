function play(playerChoice) {
    const choices = ["Kéo", "Búa", "Bao"];
    const emojis = { "Kéo": "✌️", "Búa": "✊", "Bao": "✋" };
  
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    // đổi tay theo emoji
    document.getElementById("playerHand").textContent = emojis[playerChoice];
    document.getElementById("computerHand").textContent = emojis[computerChoice];
  
    // hiện lựa chọn bot
    document.getElementById("botChoice").textContent = computerChoice;
  
    // xử lý kết quả
    let result = "";
    if (playerChoice === computerChoice) {
      result = "~ DRAW! ~";
    } else if (
      (playerChoice === "Kéo" && computerChoice === "Bao") ||
      (playerChoice === "Búa" && computerChoice === "Kéo") ||
      (playerChoice === "Bao" && computerChoice === "Búa")
    ) {
      result = "~ YOU WIN 🎉 ~";
    } else {
      result = "~ YOU LOSE 😢 ~";
    }
  
    document.getElementById("result").textContent = result;
  }
  