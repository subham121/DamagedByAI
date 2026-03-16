const topicData = {
  agentic: {
    kicker: "Autonomous chaos",
    title: "Agentic AI is your new coworker with root access.",
    description:
      "It plans, delegates, retries, and occasionally acts like it skimmed the compliance handbook upside down. Naturally, everyone wants ten of them.",
    score: "73%",
    width: "73%",
  },
  llm: {
    kicker: "Text, but expensive",
    title: "LLMs can summarize your strategy deck and your denial about hallucinations.",
    description:
      "They are useful, weirdly persuasive, and one prompt away from exposing whether your workflow ever had structure in the first place.",
    score: "68%",
    width: "68%",
  },
  genai: {
    kicker: "Creative disturbance",
    title: "GenAI makes content at scale, then invoices your team in review cycles.",
    description:
      "Image, code, audio, and design generation are moving fast, which is great unless your approval process still needs three PDFs and a blessing.",
    score: "81%",
    width: "81%",
  },
};

const topicButtons = document.querySelectorAll(".topic-pill");
const kicker = document.getElementById("topic-kicker");
const title = document.getElementById("topic-title");
const description = document.getElementById("topic-description");
const damageScore = document.getElementById("damage-score");
const meterBar = document.querySelector(".meter-bar");
const newsletterForm = document.getElementById("newsletter-form");
const formNote = document.getElementById("form-note");

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTopic = topicData[button.dataset.topic];
    if (!nextTopic) {
      return;
    }

    topicButtons.forEach((pill) => pill.classList.remove("is-active"));
    button.classList.add("is-active");

    kicker.textContent = nextTopic.kicker;
    title.textContent = nextTopic.title;
    description.textContent = nextTopic.description;
    damageScore.textContent = nextTopic.score;
    meterBar.style.width = nextTopic.width;
  });
});

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent =
    "You are subscribed to the damage report. Brace for tasteful sarcasm and structured concern.";
  newsletterForm.reset();
});
