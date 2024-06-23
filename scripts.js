document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      displayProjectDetails(data);
      displayForms(data.tasks);
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function displayProjectDetails(project) {
  const titleElement = document.querySelector(".title");
  const tasksContainer = document.querySelector(".tasks-container");

  titleElement.textContent = project.title;

  project.tasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");
    taskTitle.textContent = task.task_title;

    const taskDescription = document.createElement("div");
    taskDescription.classList.add("task-description");
    taskDescription.textContent = task.task_description;

    taskElement.appendChild(taskTitle);
    taskElement.appendChild(taskDescription);
    tasksContainer.appendChild(taskElement);
  });
}

function displayForms(tasks) {
  const formsContainer = document.querySelector(".forms");

  tasks.forEach((task) => {
    task.assets.forEach((asset, index) => {
      const formElement = document.createElement("div");
      formElement.classList.add("form");

      const formHeader = document.createElement("div");
      formHeader.classList.add("form-header");

      const formTitle = document.createElement("h2");
      formTitle.textContent = asset.asset_title;

      const infoButton = document.createElement("button");
      infoButton.textContent = "i";

      formHeader.appendChild(formTitle);
      formHeader.appendChild(infoButton);

      const formBody = document.createElement("div");
      formBody.classList.add("form-body");
      if (index === 0) {
        const formDescription = document.createElement("p");
        formDescription.textContent = `Description: ${asset.asset_description}`;

        // Create an iframe for embedding YouTube video
        const videoContainer = document.createElement("div");
        videoContainer.classList.add("video-container");

        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", asset.asset_content); // Replace with your YouTube video link
        iframe.setAttribute("width", "100%");
        iframe.setAttribute("height", "315"); // Adjust height as needed
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", true);

        videoContainer.appendChild(iframe);

        formBody.appendChild(formDescription);
        formBody.appendChild(videoContainer);
      } else if (index === 1) {
        const formDescription = document.createElement("p");
        formDescription.textContent = `Description: ${asset.asset_description}`;

        const threadLabel = document.createElement("label");
        threadLabel.textContent = "Thread";

        const threadDropdown = document.createElement("select");
        ["A", "B", "C", "D"].forEach((thread) => {
          const option = document.createElement("option");
          option.value = thread;
          option.textContent = thread;
          threadDropdown.appendChild(option);
        });

        threadDropdown.addEventListener("change", () => {
          threadLabel.textContent = `Thread ${threadDropdown.value}`;
        });

        const threadContainer = document.createElement("div");
        threadContainer.classList.add("thread-container");
        threadContainer.appendChild(threadLabel);
        threadContainer.appendChild(threadDropdown);

        const formContent = document.createElement("p");
        formContent.textContent = "Thread A";

        const subThreadContainer = document.createElement("div");
        subThreadContainer.classList.add("sub-thread-container");

        const subThreadInput1 = createInput("Sub Thread 1");
        const enterTextInput1 = createInput("Enter text here 1");
        const subThreadInput2 = createInput("Sub Thread 2");
        const enterTextInput2 = createInput("Enter text here 2");

        subThreadContainer.appendChild(subThreadInput1);
        subThreadContainer.appendChild(enterTextInput1);
        subThreadContainer.appendChild(subThreadInput2);
        subThreadContainer.appendChild(enterTextInput2);

        const dropdownContainer = document.createElement("div");
        dropdownContainer.classList.add("dropdown-container");

        const categoryDropdown = createDropdown("Select Category", [
          "Category 1",
          "Category 2",
          "Category 3",
        ]);
        const processDropdown = createDropdown("Select Process", [
          "Process 1",
          "Process 2",
          "Process 3",
        ]);

        dropdownContainer.appendChild(categoryDropdown);
        dropdownContainer.appendChild(processDropdown);

        const addSubThreadButton = document.createElement("button");
        addSubThreadButton.textContent = "+ Sub Thread";
        addSubThreadButton.addEventListener("click", () => {
          const newSubThreadInput1 = createInput(
            `Sub Thread ${
              subThreadContainer.querySelectorAll("input").length / 2 + 1
            }`
          );
          const newEnterTextInput1 = createInput(
            `Enter text here ${
              subThreadContainer.querySelectorAll("input").length / 2 + 1
            }`
          );
          const newSubThreadInput2 = createInput(
            `Sub Thread ${
              subThreadContainer.querySelectorAll("input").length / 2 + 2
            }`
          );
          const newEnterTextInput2 = createInput(
            `Enter text here ${
              subThreadContainer.querySelectorAll("input").length / 2 + 2
            }`
          );
          subThreadContainer.appendChild(newSubThreadInput1);
          subThreadContainer.appendChild(newEnterTextInput1);
          subThreadContainer.appendChild(newSubThreadInput2);
          subThreadContainer.appendChild(newEnterTextInput2);
        });

        const threadSummaryLabel = document.createElement("label");
        threadSummaryLabel.textContent = "Summary for Thread A";

        const threadSummaryInput = createInput("Enter thread summary here");

        formBody.appendChild(formDescription);
        formBody.appendChild(threadContainer);
        formBody.appendChild(formContent);
        formBody.appendChild(subThreadContainer);
        formBody.appendChild(dropdownContainer);
        formBody.appendChild(addSubThreadButton);
        formBody.appendChild(threadSummaryLabel);
        formBody.appendChild(threadSummaryInput);
      } else if (index === 2) {
        const formTitleInput = createInput("Title");
        const formDescription = document.createElement("p");
        formDescription.textContent = `Description: ${asset.asset_description}`;

        const contentEditor = document.createElement("div");
        contentEditor.classList.add("content-editor");

        formBody.appendChild(formTitleInput);
        formBody.appendChild(formDescription);
        formBody.appendChild(contentEditor);

        ClassicEditor.create(contentEditor).catch((error) =>
          console.error("Error initializing CKEditor:", error)
        );
      } else if (index === 3) {
        const introductionDropdown = createDropdown("Introduction", [
          "Introduction 1",
          "Introduction 2",
          "Introduction 3",
        ]);
        const threadDropdown = createDropdown("Thread", ["A", "B", "C", "D"]);
        const introductionContent = document.createElement("p");
        introductionContent.textContent = "Content for selected introduction";
        const introductionSeeMoreButton = document.createElement("button");
        introductionSeeMoreButton.textContent = "See More";
        introductionSeeMoreButton.addEventListener("click", () => {
          alert("Show more content for introduction");
        });

        const threadTitleContent = document.createElement("p");
        threadTitleContent.textContent = "Title content for selected thread";
        const threadTitleSeeMoreButton = document.createElement("button");
        threadTitleSeeMoreButton.textContent = "See More";
        threadTitleSeeMoreButton.addEventListener("click", () => {
          alert("Show more title content for thread");
        });

        const threadContent = document.createElement("p");
        threadContent.textContent = "Content for selected thread";
        const threadSeeMoreButton = document.createElement("button");
        threadSeeMoreButton.textContent = "See More";
        threadSeeMoreButton.addEventListener("click", () => {
          alert("Show more content for thread");
        });

        formBody.appendChild(introductionDropdown);
        formBody.appendChild(introductionContent);
        formBody.appendChild(introductionSeeMoreButton);
        formBody.appendChild(threadDropdown);
        formBody.appendChild(threadTitleContent);
        formBody.appendChild(threadTitleSeeMoreButton);
        formBody.appendChild(threadContent);
        formBody.appendChild(threadSeeMoreButton);
      }

      formElement.appendChild(formHeader);
      formElement.appendChild(formBody);
      formsContainer.appendChild(formElement);
    });
  });
}

function createInput(placeholder) {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = placeholder;
  input.classList.add("form-input");
  return input;
}

function createDropdown(placeholder, options) {
  const select = document.createElement("select");
  select.classList.add("form-select");

  const defaultOption = document.createElement("option");
  defaultOption.textContent = placeholder;
  defaultOption.disabled = true;
  defaultOption.selected = true;
  select.appendChild(defaultOption);

  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = option;
    select.appendChild(optionElement);
  });

  return select;
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      populateSidebar(data.tasks);
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function populateSidebar(tasks) {
  const sidebarContent = document.querySelector(".sidebar-content");

  tasks.forEach((task) => {
    const sidebarItem = document.createElement("div");
    sidebarItem.classList.add("sidebar-item");

    const taskTitle = document.createElement("h2");
    taskTitle.textContent = task.task_title;

    const assetList = document.createElement("ul");

    task.assets.forEach((asset) => {
      const assetItem = document.createElement("li");
      assetItem.textContent = asset.asset_title;
      assetList.appendChild(assetItem);
    });

    sidebarItem.appendChild(taskTitle);
    sidebarItem.appendChild(assetList);
    sidebarContent.appendChild(sidebarItem);
  });
}

const toggleSidebarButton = document.getElementById("toggle-sidebar");
const closeSidebarButton = document.getElementById("close-sidebar");
const sidebar = document.getElementById("sidebar");

toggleSidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

closeSidebarButton.addEventListener("click", () => {
  sidebar.classList.remove("open");
});
