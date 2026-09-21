/* 读取题库 */

const questions = window.questions;


/* 获取首页元素 */

const homePage = document.getElementById("homePage");
const startButton = document.getElementById("startButton");

const homeCatalogButton =
  document.getElementById("homeCatalogButton");

const homeCatalog =
  document.getElementById("homeCatalog");

const closeHomeCatalog =
  document.getElementById("closeHomeCatalog");

const homeQuestionList =
  document.getElementById("homeQuestionList");

  const aboutProjectButton =
  document.getElementById("aboutProjectButton");

const projectPage =
  document.getElementById("projectPage");

const backFromProject =
  document.getElementById("backFromProject");


/* 获取训练页元素 */

const trainingPage =
  document.getElementById("trainingPage");

const backButton =
  document.getElementById("backButton");

const chatWindow =
  document.querySelector(".chat-window");

const trainingCatalogButton =
  document.getElementById("trainingCatalogButton");

const trainingCatalog =
  document.getElementById("trainingCatalog");

const closeTrainingCatalog =
  document.getElementById("closeTrainingCatalog");

const trainingQuestionList =
  document.getElementById("trainingQuestionList");


/* 获取题目内容元素 */

const contactName =
  document.getElementById("contactName");

const contactRole =
  document.getElementById("contactRole");

const customerMessage =
  document.getElementById("customerMessage");

const levelText =
  document.getElementById("levelText");

const taskText =
  document.getElementById("taskText");

const progressText =
  document.getElementById("progressText");


/* 获取答题元素 */

const replyOptions =
  document.querySelectorAll(".reply-option");

const optionTexts =
  document.querySelectorAll(".option-text");

const submitAnswer =
  document.getElementById("submitAnswer");

const sentMessage =
  document.getElementById("sentMessage");

const sentMessageText =
  document.getElementById("sentMessageText");

const answerFeedback =
  document.getElementById("answerFeedback");

const feedbackTitle =
  document.getElementById("feedbackTitle");

const feedbackText =
  document.getElementById("feedbackText");

const nextButton =
  document.getElementById("nextButton");


/* 获取完整参考回复元素 */

const modelAnswerButton =
  document.getElementById("modelAnswerButton");

const modelAnswerPanel =
  document.getElementById("modelAnswerPanel");

const modelAnswerText =
  document.getElementById("modelAnswerText");

const keyPhraseList =
  document.getElementById("keyPhraseList");


/* 获取结果页元素 */

const resultPage =
  document.getElementById("resultPage");

const resultScore =
  document.getElementById("resultScore");

const resultTotal =
  document.getElementById("resultTotal");

const resultMessage =
  document.getElementById("resultMessage");

const restartButton =
  document.getElementById("restartButton");

const homeButton =
  document.getElementById("homeButton");


/* 当前题目 */

let currentQuestionIndex = 0;


/* 随机排列数组 */

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(
      Math.random() * (i + 1)
    );

    const temporaryItem = array[i];

    array[i] = array[randomIndex];
    array[randomIndex] = temporaryItem;
  }

  return array;
}


/* 创建每道题的独立答题状态 */

function createQuestionStates() {
  return questions.map(function (question) {
    return {
      selectedAnswer: "",
      submitted: false,
      modelOpen: false,

      optionOrder: shuffleArray(
        [...question.options]
      )
    };
  });
}

let questionStates = createQuestionStates();


/* 计算总分 */

function calculateScore() {
  return questionStates.filter(function (state) {
    return (
      state.submitted &&
      state.selectedAnswer === "correct"
    );
  }).length;
}


/* 获取目录状态文字 */

function getStatusText(state) {
  if (state.submitted) {
    if (state.selectedAnswer === "correct") {
      return "回答正确";
    }

    return "回答错误";
  }

  if (state.selectedAnswer) {
    return "已选择，尚未提交";
  }

  return "未作答";
}


/* 获取题目短标题 */

function getQuestionTitle(question) {
  const parts = question.level.split("/");

  if (parts.length > 1) {
    return parts[1].trim();
  }

  return question.level;
}


/* 创建一个目录 */

function renderQuestionList(container) {
  container.innerHTML = "";

  questions.forEach(function (question, index) {
    const state = questionStates[index];

    const button = document.createElement("button");

    button.classList.add("question-link");

    if (index === currentQuestionIndex) {
      button.classList.add("current");
    }

    if (state.submitted) {
      if (state.selectedAnswer === "correct") {
        button.classList.add("correct");
      } else {
        button.classList.add("incorrect");
      }
    }

    const number = document.createElement("span");

    number.classList.add("question-number");

    number.textContent =
      "QUESTION " +
      String(index + 1).padStart(2, "0");

    const title = document.createElement("span");

    title.classList.add("question-title");
    title.textContent = getQuestionTitle(question);

    const status = document.createElement("span");

    status.classList.add("question-status");
    status.textContent = getStatusText(state);

    button.appendChild(number);
    button.appendChild(title);
    button.appendChild(status);

    button.addEventListener("click", function () {
      openQuestion(index);
    });

    container.appendChild(button);
  });
}


/* 同时更新首页和训练页目录 */

function renderCatalogs() {
  renderQuestionList(homeQuestionList);
  renderQuestionList(trainingQuestionList);

  const hasProgress = questionStates.some(function (state) {
    return state.selectedAnswer || state.submitted;
  });

  if (hasProgress) {
    startButton.innerHTML =
      "继续训练 <span>→</span>";
  } else {
    startButton.innerHTML =
      "开始第一关 <span>→</span>";
  }
}


/* 显示完整参考回复 */

function showModelAnswer(question, state) {
  if (!question.modelAnswer) {
    modelAnswerButton.classList.add("hidden");
    modelAnswerPanel.classList.add("hidden");

    return;
  }

  modelAnswerButton.classList.remove("hidden");

  modelAnswerText.innerHTML =
    question.modelAnswer;

  keyPhraseList.innerHTML = "";

  question.keyPhrases.forEach(function (phrase) {
    const listItem = document.createElement("li");

    listItem.textContent = phrase;
    keyPhraseList.appendChild(listItem);
  });

  if (state.modelOpen) {
    modelAnswerPanel.classList.remove("hidden");
    modelAnswerButton.textContent =
      "收起完整参考回复";
  } else {
    modelAnswerPanel.classList.add("hidden");
    modelAnswerButton.textContent =
      "查看完整参考回复";
  }
}


/* 显示指定题目 */

function showQuestion(questionIndex) {
  currentQuestionIndex = questionIndex;

  const question = questions[questionIndex];
  const state = questionStates[questionIndex];

  resultPage.classList.add("hidden");
  chatWindow.classList.remove("hidden");

  levelText.textContent = question.level;

  contactName.textContent =
    question.customerName;

  contactRole.textContent =
    question.customerRole;

  customerMessage.innerHTML =
    question.message;

  taskText.textContent =
    question.task;

  progressText.textContent =
    questionIndex + 1 + " / " + questions.length;


  /* 恢复这道题自己的选项顺序和选择 */

  replyOptions.forEach(function (option, index) {
    const optionData = state.optionOrder[index];

    option.dataset.answer =
      optionData.type;

    optionTexts[index].textContent =
      optionData.text;

    option.classList.remove("selected");

    if (
      optionData.type === state.selectedAnswer
    ) {
      option.classList.add("selected");
    }

    option.disabled = state.submitted;
  });


  /* 恢复提交按钮 */

  if (state.selectedAnswer && !state.submitted) {
    submitAnswer.disabled = false;
  } else {
    submitAnswer.disabled = true;
  }


  /* 恢复已提交状态 */

  if (state.submitted) {
    const selectedOptionData =
      state.optionOrder.find(function (option) {
        return option.type === state.selectedAnswer;
      });

    sentMessageText.textContent =
      selectedOptionData.text;

    sentMessage.classList.remove("hidden");

    const result =
      question.feedback[state.selectedAnswer];

    feedbackTitle.textContent =
      result.title;

    feedbackText.textContent =
      result.text;

    answerFeedback.classList.remove("hidden");

    showModelAnswer(question, state);

    if (
      questionIndex === questions.length - 1
    ) {
      nextButton.innerHTML =
        "查看训练结果 <span>→</span>";
    } else {
      nextButton.innerHTML =
        "进入下一题 <span>→</span>";
    }

    nextButton.classList.remove("hidden");
  } else {
    sentMessage.classList.add("hidden");
    answerFeedback.classList.add("hidden");

    modelAnswerButton.classList.add("hidden");
    modelAnswerPanel.classList.add("hidden");

    nextButton.classList.add("hidden");
  }

  renderCatalogs();
}


/* 打开某一道题 */

function openQuestion(questionIndex) {
  trainingCatalog.classList.add("hidden");
  homeCatalog.classList.add("hidden");

  homePage.classList.add("hidden");
  trainingPage.classList.remove("hidden");

  showQuestion(questionIndex);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* 首页开始或继续训练 */

startButton.addEventListener("click", function () {
  openQuestion(currentQuestionIndex);
});


/* 返回首页，但不清除答题状态 */

backButton.addEventListener("click", function () {
  trainingPage.classList.add("hidden");
  homePage.classList.remove("hidden");

  trainingCatalog.classList.add("hidden");

  renderCatalogs();
});


/* 首页目录开关 */

homeCatalogButton.addEventListener(
  "click",
  function () {
    homeCatalog.classList.toggle("hidden");

    renderCatalogs();
  }
);

closeHomeCatalog.addEventListener(
  "click",
  function () {
    homeCatalog.classList.add("hidden");
  }
);


/* 训练页目录开关 */

trainingCatalogButton.addEventListener(
  "click",
  function () {
    trainingCatalog.classList.remove("hidden");

    renderCatalogs();
  }
);

closeTrainingCatalog.addEventListener(
  "click",
  function () {
    trainingCatalog.classList.add("hidden");
  }
);


/* 点击弹窗背景也可以关闭目录 */

trainingCatalog.addEventListener(
  "click",
  function (event) {
    if (event.target === trainingCatalog) {
      trainingCatalog.classList.add("hidden");
    }
  }
);


/* 选择答案并保存到当前题目状态 */

replyOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    const state =
      questionStates[currentQuestionIndex];

    if (state.submitted) {
      return;
    }

    state.selectedAnswer =
      option.dataset.answer;

    replyOptions.forEach(function (item) {
      item.classList.remove("selected");
    });

    option.classList.add("selected");

    submitAnswer.disabled = false;

    renderCatalogs();
  });
});


/* 提交当前题目 */

submitAnswer.addEventListener(
  "click",
  function () {
    const state =
      questionStates[currentQuestionIndex];

    if (!state.selectedAnswer) {
      return;
    }

    state.submitted = true;

    showQuestion(currentQuestionIndex);
  }
);


/* 展开或收起参考回复 */

modelAnswerButton.addEventListener(
  "click",
  function () {
    const state =
      questionStates[currentQuestionIndex];

    state.modelOpen = !state.modelOpen;

    showQuestion(currentQuestionIndex);
  }
);


/* 下一题或结果页 */

nextButton.addEventListener("click", function () {
  if (
    currentQuestionIndex <
    questions.length - 1
  ) {
    showQuestion(currentQuestionIndex + 1);

    document
      .querySelector(".chat-window")
      .scrollIntoView({
        behavior: "smooth"
      });
  } else {
    showResultPage();
  }
});


/* 显示训练结果 */

function showResultPage() {
  chatWindow.classList.add("hidden");
  resultPage.classList.remove("hidden");

  const score = calculateScore();
  const total = questions.length;

  resultScore.textContent = score;
  resultTotal.textContent = total;

  const percentage = score / total;

  if (percentage === 1) {
    resultMessage.textContent =
      "全部回答正确！你能够识别专业、完整的外贸英文回复。";
  } else if (percentage >= 0.7) {
    resultMessage.textContent =
      "整体表现很好。可以通过目录返回错题，查看完整参考回复。";
  } else if (percentage >= 0.4) {
    resultMessage.textContent =
      "你已经掌握了部分沟通原则，建议通过目录重新练习错误题目。";
  } else {
    resultMessage.textContent =
      "建议重新练习并重点关注语气、信息完整性和商务风险。";
  }

  renderCatalogs();
}


/* 重新开始，清除全部临时状态 */

restartButton.addEventListener(
  "click",
  function () {
    questionStates = createQuestionStates();
    currentQuestionIndex = 0;

    resultPage.classList.add("hidden");
    chatWindow.classList.remove("hidden");

    showQuestion(0);
  }
);


/* 从结果页返回首页 */

homeButton.addEventListener("click", function () {
  resultPage.classList.add("hidden");
  trainingPage.classList.add("hidden");
  homePage.classList.remove("hidden");

  renderCatalogs();
});


/* 第一次打开页面时创建目录 */

renderCatalogs();

aboutProjectButton.addEventListener(
  "click",
  function () {
    homePage.classList.add("hidden");
    projectPage.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
);

backFromProject.addEventListener(
  "click",
  function () {
    projectPage.classList.add("hidden");
    homePage.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
);