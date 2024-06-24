document.addEventListener("DOMContentLoaded", () => {
  // Fetch the JSON data from the file
  fetch("data.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // Use the fetched JSON data
      createAssetComponent(jsonData, "main-content");
      sidebar_content(jsonData);
      sidebar_tasks(jsonData);
    })
    .catch((error) => console.error("Error fetching JSON data:", error));
});
// Add event listener to execute the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  createAssetComponent(jsonData, "main-content");
  sidebar_content(jsonData);
  sidebar_tasks(jsonData);
});

document.getElementById("sidebar-btn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("collapsed");
});
document
  .querySelector(".sidebar .top button")
  .addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("collapsed");
  });

function createAssetComponent(data, containerId) {
  const mainContainer = document.getElementById(containerId);

  data.tasks.forEach((task) => {
    task.assets.forEach((asset) => {
      const assetContainer = document.createElement("div");
      assetContainer.className = "asset-container";

      const headerDiv = document.createElement("div");
      const heading = document.createElement("h2");
      heading.textContent = asset.asset_title;
      const infoBtn = document.createElement("span");
      infoBtn.className = "info-btn";
      const infoImg = document.createElement("img");
      infoImg.src = "./asset/i.png";
      infoImg.alt = "";
      infoBtn.appendChild(infoImg);
      headerDiv.appendChild(heading);
      headerDiv.appendChild(infoBtn);

      const article = document.createElement("article");
      const paragraph = document.createElement("p");
      const span = document.createElement("span");
      span.textContent = "Description:";
      paragraph.appendChild(span);
      paragraph.append(" " + asset.asset_description.replace(/\r?\n|\r/g, " "));
      article.appendChild(paragraph);

      const assetContent = document.createElement("div");
      assetContent.className = "asset-content";

      if (asset.asset_content_type === "threadbuilder") {
        const threadDiv = document.createElement("div");
        threadDiv.className = "thread";

        const threadImg = document.createElement("img");
        threadImg.src = "./asset/Vector.png";
        threadImg.className = "thread-img";
        threadImg.alt = "";
        threadDiv.appendChild(threadImg);

        const threadText = document.createElement("h1");
        threadText.textContent = "Thread A";
        threadText.className = "thread-text";
        threadDiv.appendChild(threadText);

        const addThreadDiv = document.createElement("div");
        addThreadDiv.className = "add-thread";

        const subThreadDiv = document.createElement("div");
        subThreadDiv.className = "sub-thread-div";

        const subThread = document.createElement("div");
        subThread.className = "sub-thread";

        const subThreadText = document.createElement("h1");
        subThreadText.textContent = "Sub thread 1";
        subThreadText.className = "sub-thread-text";
        subThread.appendChild(subThreadText);

        const subThreadInputDiv = document.createElement("div");
        subThreadInputDiv.className = "input-thread";

        const subThreadInput = document.createElement("input");
        subThreadInput.type = "text";
        subThreadInput.placeholder = "Enter Text here";
        subThreadInput.className = "sub-thread-input";
        subThreadInputDiv.appendChild(subThreadInput);
        subThread.appendChild(subThreadInputDiv);

        subThreadDiv.appendChild(subThread);

        const subInterception = document.createElement("div");
        subInterception.className = "sub-interception";

        const subInterceptionText = document.createElement("h1");
        subInterceptionText.textContent = "Sub interception 1";
        subInterceptionText.className = "sub-thread-text";
        subInterception.appendChild(subInterceptionText);

        const subInterceptionInputDiv = document.createElement("div");
        subInterceptionInputDiv.className = "input-thread";

        const subInterceptionInput = document.createElement("input");
        subInterceptionInput.type = "text";

        subInterceptionInput.placeholder = "Enter Text here";
        subInterceptionInput.className = "sub-thread-input";
        subInterceptionInputDiv.appendChild(subInterceptionInput);
        subInterception.appendChild(subInterceptionInputDiv);

        subThreadDiv.appendChild(subInterception);

        addThreadDiv.appendChild(subThreadDiv);

        const buttonsSection = document.createElement("div");
        buttonsSection.className = "buttons-section";

        const catalogImg = document.createElement("img");
        catalogImg.src = "./asset/Group 1588.png";
        catalogImg.alt = "";
        buttonsSection.appendChild(catalogImg);

        const selectCatalogButton = document.createElement("button");
        selectCatalogButton.className = "select-button";
        selectCatalogButton.textContent = "Select categ";
        const catalogButtonImg = document.createElement("img");
        catalogButtonImg.src = "./asset/Vector-down.png";
        catalogButtonImg.alt = "";
        selectCatalogButton.appendChild(catalogButtonImg);
        buttonsSection.appendChild(selectCatalogButton);

        const selectProcessButton = document.createElement("button");
        selectProcessButton.className = "select-button";
        selectProcessButton.textContent = "Select process";
        const processButtonImg = document.createElement("img");
        processButtonImg.src = "./asset/Vector-down.png";
        processButtonImg.alt = "";
        selectProcessButton.appendChild(processButtonImg);
        buttonsSection.appendChild(selectProcessButton);

        addThreadDiv.appendChild(buttonsSection);

        const addSubThreadButton = document.createElement("button");
        addSubThreadButton.className = "add-sub-thread";
        addSubThreadButton.textContent = "+ Sub Thread";
        addThreadDiv.appendChild(addSubThreadButton);

        const summaryDiv = document.createElement("div");
        summaryDiv.className = "summary-of-thread";

        const summaryText = document.createElement("h1");
        summaryText.textContent = "Summary for thread A";
        summaryText.className = "sub-thread-text";
        summaryDiv.appendChild(summaryText);

        const summaryInputDiv = document.createElement("div");
        summaryInputDiv.className = "input-thread";

        const summaryInput = document.createElement("input");
        summaryInput.type = "text";
        summaryInput.placeholder = "Enter Text here";
        summaryInput.className = "sub-thread-input";
        summaryInputDiv.appendChild(summaryInput);
        summaryDiv.appendChild(summaryInputDiv);

        addThreadDiv.appendChild(summaryDiv);

        assetContent.appendChild(threadDiv);
        assetContent.appendChild(addThreadDiv);
      } else if (
        asset.asset_content_type === "article" &&
        asset.asset_type === "input_asset"
      ) {
        assetContent.style.padding = "20px";

        const innerDiv = document.createElement("div");
        innerDiv.style.padding = "20px";
        innerDiv.style.height = "100%";

        const titleParagraph = document.createElement("p");
        titleParagraph.style.fontSize = "16px";
        titleParagraph.style.fontWeight = "600";
        titleParagraph.style.lineHeight = "21.79px";
        titleParagraph.style.padding = "13px 0";
        titleParagraph.textContent = "Title";
        innerDiv.appendChild(titleParagraph);

        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.className = "input";
        innerDiv.appendChild(titleInput);

        const contentParagraph = document.createElement("p");
        contentParagraph.style.fontSize = "16px";
        contentParagraph.style.color = "#000000";
        contentParagraph.style.fontWeight = "600";
        contentParagraph.style.lineHeight = "21.79px";
        contentParagraph.style.padding = "16px 0";
        contentParagraph.textContent = "Content";
        innerDiv.appendChild(contentParagraph);

        const contentValue = document.createElement("div");
        contentValue.className = "content-value";

        const topDiv = document.createElement("div");
        topDiv.className = "top";

        const optionsDiv = document.createElement("div");
        optionsDiv.className = "options";
        const optionButtons = [
          "File",
          "Edit",
          "View",
          "Insert",
          "Format",
          "Tools",
          "Table",
          "Help",
        ];
        optionButtons.forEach((text) => {
          const button = document.createElement("button");
          button.textContent = text;
          optionsDiv.appendChild(button);
        });
        topDiv.appendChild(optionsDiv);

        const editingDiv = document.createElement("div");
        editingDiv.className = "editing";
        const editingImages = [
          "./asset/arrow-curve-left-right.png",
          "./asset/arrow-curve-left-down.png",
          "./asset/arrow-expand-02.png",
        ];
        editingImages.forEach((src) => {
          const img = document.createElement("img");
          img.src = src;
          img.alt = "";
          editingDiv.appendChild(img);
        });

        const paragraphInput = document.createElement("input");
        paragraphInput.type = "text";
        paragraphInput.className = "paragraph";
        paragraphInput.placeholder = "Paragraph";
        editingDiv.appendChild(paragraphInput);

        const buttonsDiv = document.createElement("div");
        buttonsDiv.className = "buttons";
        const buttonImages = [
          "./asset/Ellipse 197.png",
          "./asset/Ellipse 197.png",
          "./asset/Ellipse 197.png",
        ];
        buttonImages.forEach((src) => {
          const img = document.createElement("img");
          img.src = src;
          img.alt = "";
          buttonsDiv.appendChild(img);
        });
        editingDiv.appendChild(buttonsDiv);

        topDiv.appendChild(editingDiv);
        contentValue.appendChild(topDiv);

        const bottomDiv = document.createElement("div");
        bottomDiv.className = "bottom";
        contentValue.appendChild(bottomDiv);

        innerDiv.appendChild(contentValue);
        assetContent.appendChild(innerDiv);

        assetContainer.appendChild(headerDiv);
        assetContainer.appendChild(article);
        assetContainer.appendChild(assetContent);
        mainContainer.appendChild(assetContainer);
      } else if (asset.asset_content_type === "video") {
        // Handle other asset content types (video, article, input_asset) as needed
        const iframe = document.createElement("iframe");
        iframe.src = asset.asset_content.trim();
        iframe.allowFullscreen = true;
        assetContent.appendChild(iframe);
      } else {
        const iframe = document.createElement("iframe");
        iframe.src = asset.asset_content.trim();
        iframe.style.width = "100%";
        iframe.style.height = "450px";
        iframe.allowFullscreen = true;
        assetContent.appendChild(iframe);
      }

      assetContainer.appendChild(headerDiv);
      assetContainer.appendChild(article);
      assetContainer.appendChild(assetContent);
      mainContainer.appendChild(assetContainer);
    });
  });
}
const sidebar_content = (data) => {
  const sidebar = document.querySelector("#sidebar .bottom ul");

  // Clear the existing content (if any)
  sidebar.innerHTML = "";

  // Loop through tasks
  data.tasks.forEach((task) => {
    // Create a list item for the task title
    const taskItem = document.createElement("li");
    taskItem.textContent = task.task_title;

    // Create a nested list for the assets
    const assetList = document.createElement("ul");

    // Loop through assets
    task.assets.forEach((asset) => {
      const assetItem = document.createElement("li");
      assetItem.textContent = asset.asset_title;
      assetList.appendChild(assetItem);
    });

    // Append the asset list to the task item
    taskItem.appendChild(assetList);
    // Append the task item to the sidebar
    sidebar.appendChild(taskItem);
  });
};
let taskCount = 0;
const sidebar_tasks = (data) => {
  const taskCounter = document.querySelector("#sidebar .bottom ");

  // Populate the task list and count the number of tasks
  data.tasks.forEach((task) => {
    taskCount++;
    const count = document.createElement("div");
    count.className = "total";
    count.textContent = `${taskCount}`;

    taskCounter.appendChild(count);
  });
};

// document.addEventListener("DOMContentLoaded", () => {
//   fetch("data.json")
//     .then((response) => response.json())
//     .then((data) => {
//       displayProjectDetails(data);
//       displayForms(data.tasks);
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// });

// function displayProjectDetails(project) {
//   const titleElement = document.querySelector(".title");
//   const tasksContainer = document.querySelector(".tasks-container");

//   titleElement.textContent = project.title;

//   project.tasks.forEach((task) => {
//     const taskElement = document.createElement("div");
//     taskElement.classList.add("task");

//     const taskTitle = document.createElement("div");
//     taskTitle.classList.add("task-title");
//     taskTitle.textContent = task.task_title;

//     const taskDescription = document.createElement("div");
//     taskDescription.classList.add("task-description");
//     taskDescription.textContent = task.task_description;

//     taskElement.appendChild(taskTitle);
//     taskElement.appendChild(taskDescription);
//     tasksContainer.appendChild(taskElement);
//   });
// }

// function displayForms(tasks) {
//   const formsContainer = document.querySelector(".forms");

//   tasks.forEach((task) => {
//     task.assets.forEach((asset, index) => {
//       const formElement = document.createElement("div");
//       formElement.classList.add("form");

//       const formHeader = document.createElement("div");
//       formHeader.classList.add("form-header");

//       const formTitle = document.createElement("h2");
//       formTitle.textContent = asset.asset_title;

//       const infoButton = document.createElement("button");
//       infoButton.textContent = "i";

//       formHeader.appendChild(formTitle);
//       formHeader.appendChild(infoButton);

//       const formBody = document.createElement("div");
//       formBody.classList.add("form-body");
//       if (index === 0) {
//         const formDescription = document.createElement("p");
//         formDescription.textContent = `Description: ${asset.asset_description}`;

//         // Create an iframe for embedding YouTube video
//         const videoContainer = document.createElement("div");
//         videoContainer.classList.add("video-container");

//         const iframe = document.createElement("iframe");
//         iframe.setAttribute("src", asset.asset_content); // Replace with your YouTube video link
//         iframe.setAttribute("width", "100%");
//         iframe.setAttribute("height", "315"); // Adjust height as needed
//         iframe.setAttribute("frameborder", "0");
//         iframe.setAttribute("allowfullscreen", true);

//         videoContainer.appendChild(iframe);

//         formBody.appendChild(formDescription);
//         formBody.appendChild(videoContainer);
//       } else if (index === 1) {
//         const formDescription = document.createElement("p");
//         formDescription.textContent = `Description: ${asset.asset_description}`;

//         const threadLabel = document.createElement("label");
//         threadLabel.textContent = "Thread";

//         const threadDropdown = document.createElement("select");
//         ["A", "B", "C", "D"].forEach((thread) => {
//           const option = document.createElement("option");
//           option.value = thread;
//           option.textContent = thread;
//           threadDropdown.appendChild(option);
//         });

//         threadDropdown.addEventListener("change", () => {
//           threadLabel.textContent = `Thread ${threadDropdown.value}`;
//         });

//         const threadContainer = document.createElement("div");
//         threadContainer.classList.add("thread-container");
//         threadContainer.appendChild(threadDropdown);
//         threadContainer.appendChild(threadLabel);

//         // const formContent = document.createElement("p");
//         // formContent.textContent = "Thread A";

//         const subThreadContainer = document.createElement("div");
//         subThreadContainer.classList.add("sub-thread-container");

//         const subThreadInput1 = createInput("Sub Thread 1");
//         const enterTextInput1 = createInput("Enter text here 1");
//         const subThreadInput2 = createInput("Sub Thread 2");
//         const enterTextInput2 = createInput("Enter text here 2");

//         subThreadContainer.appendChild(subThreadInput1);
//         subThreadContainer.appendChild(enterTextInput1);
//         subThreadContainer.appendChild(subThreadInput2);
//         subThreadContainer.appendChild(enterTextInput2);

//         const dropdownContainer = document.createElement("div");
//         dropdownContainer.classList.add("dropdown-container");

//         const categoryDropdown = createDropdown("Select Category", [
//           "Category 1",
//           "Category 2",
//           "Category 3",
//         ]);
//         const processDropdown = createDropdown("Select Process", [
//           "Process 1",
//           "Process 2",
//           "Process 3",
//         ]);

//         dropdownContainer.appendChild(categoryDropdown);
//         dropdownContainer.appendChild(processDropdown);

//         const addSubThreadButton = document.createElement("button");
//         addSubThreadButton.textContent = "+ Sub Thread";
//         addSubThreadButton.addEventListener("click", () => {
//           const newSubThreadInput1 = createInput(
//             `Sub Thread ${
//               subThreadContainer.querySelectorAll("input").length / 2 + 1
//             }`
//           );
//           const newEnterTextInput1 = createInput(
//             `Enter text here ${
//               subThreadContainer.querySelectorAll("input").length / 2 + 1
//             }`
//           );
//           const newSubThreadInput2 = createInput(
//             `Sub Thread ${
//               subThreadContainer.querySelectorAll("input").length / 2 + 2
//             }`
//           );
//           const newEnterTextInput2 = createInput(
//             `Enter text here ${
//               subThreadContainer.querySelectorAll("input").length / 2 + 2
//             }`
//           );
//           subThreadContainer.appendChild(newSubThreadInput1);
//           subThreadContainer.appendChild(newEnterTextInput1);
//           subThreadContainer.appendChild(newSubThreadInput2);
//           subThreadContainer.appendChild(newEnterTextInput2);
//         });

//         const threadSummaryLabel = document.createElement("label");
//         threadSummaryLabel.textContent = "Summary for Thread A";

//         const threadSummaryInput = createInput("Enter thread summary here");

//         formBody.appendChild(formDescription);
//         formBody.appendChild(threadContainer);
//         // formBody.appendChild(formContent);
//         formBody.appendChild(subThreadContainer);
//         formBody.appendChild(dropdownContainer);
//         formBody.appendChild(addSubThreadButton);
//         formBody.appendChild(threadSummaryLabel);
//         formBody.appendChild(threadSummaryInput);
//       } else if (index === 2) {
//         const formTitleInput = createInput("Title");
//         const formDescription = document.createElement("p");
//         formDescription.textContent = `Description: ${asset.asset_description}`;

//         const contentEditor = document.createElement("div");
//         contentEditor.classList.add("content-editor");

//         formBody.appendChild(formTitleInput);
//         formBody.appendChild(formDescription);
//         formBody.appendChild(contentEditor);

//         ClassicEditor.create(contentEditor).catch((error) =>
//           console.error("Error initializing CKEditor:", error)
//         );
//       } else if (index === 3) {
//         const introductionDropdown = createDropdown("Introduction", [
//           "Introduction 1",
//           "Introduction 2",
//           "Introduction 3",
//         ]);
//         const threadDropdown = createDropdown("Thread", ["A", "B", "C", "D"]);
//         const introductionContent = document.createElement("p");
//         introductionContent.textContent = "Content for selected introduction";
//         const introductionSeeMoreButton = document.createElement("button");
//         introductionSeeMoreButton.textContent = "See More";
//         introductionSeeMoreButton.addEventListener("click", () => {
//           alert("Show more content for introduction");
//         });

//         const threadTitleContent = document.createElement("p");
//         threadTitleContent.textContent = "Title content for selected thread";
//         const threadTitleSeeMoreButton = document.createElement("button");
//         threadTitleSeeMoreButton.textContent = "See More";
//         threadTitleSeeMoreButton.addEventListener("click", () => {
//           alert("Show more title content for thread");
//         });

//         const threadContent = document.createElement("p");
//         threadContent.textContent = "Content for selected thread";
//         const threadSeeMoreButton = document.createElement("button");
//         threadSeeMoreButton.textContent = "See More";
//         threadSeeMoreButton.addEventListener("click", () => {
//           alert("Show more content for thread");
//         });

//         formBody.appendChild(introductionDropdown);
//         formBody.appendChild(introductionContent);
//         formBody.appendChild(introductionSeeMoreButton);
//         formBody.appendChild(threadDropdown);
//         formBody.appendChild(threadTitleContent);
//         formBody.appendChild(threadTitleSeeMoreButton);
//         formBody.appendChild(threadContent);
//         formBody.appendChild(threadSeeMoreButton);
//       }

//       formElement.appendChild(formHeader);
//       formElement.appendChild(formBody);
//       formsContainer.appendChild(formElement);
//     });
//   });
// }

// function createInput(placeholder) {
//   const input = document.createElement("input");
//   input.type = "text";
//   input.placeholder = placeholder;
//   input.classList.add("form-input");
//   return input;
// }

// function createDropdown(placeholder, options) {
//   const select = document.createElement("select");
//   select.classList.add("form-select");

//   const defaultOption = document.createElement("option");
//   defaultOption.textContent = placeholder;
//   defaultOption.disabled = true;
//   defaultOption.selected = true;
//   select.appendChild(defaultOption);

//   options.forEach((option) => {
//     const optionElement = document.createElement("option");
//     optionElement.textContent = option;
//     select.appendChild(optionElement);
//   });

//   return select;
// }

// document.addEventListener("DOMContentLoaded", () => {
//   fetch("data.json")
//     .then((response) => response.json())
//     .then((data) => {
//       populateSidebar(data.tasks);
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// });
// function populateSidebar(tasks) {
//   const sidebarContent = document.querySelector(".sidebar-content");

//   tasks.forEach((task) => {
//     const sidebarItem = document.createElement("div");
//     sidebarItem.classList.add("sidebar-item");

//     const taskTitle = document.createElement("h2");
//     taskTitle.textContent = task.task_title;

//     const assetList = document.createElement("ul");

//     task.assets.forEach((asset) => {
//       const assetItem = document.createElement("li");
//       assetItem.textContent = asset.asset_title;
//       assetList.appendChild(assetItem);
//     });

//     sidebarItem.appendChild(taskTitle);
//     sidebarItem.appendChild(assetList);
//     sidebarContent.appendChild(sidebarItem);
//   });
// }

// document.getElementById("toggleBtn").addEventListener("click", function () {
//   var sidebar = document.getElementById("sidebar");
//   var headerTitle = document.getElementById("header-title");
//   var sidebarContent = document.getElementById("sidebar-content");
//   var shakalaContent = document.getElementById("shakala-content");

//   sidebar.classList.toggle("open");

//   if (sidebar.classList.contains("open")) {
//     this.innerHTML = "&larr;";
//     headerTitle.textContent = "Journey Board";
//     sidebarContent.classList.remove("hidden-content");
//     shakalaContent.classList.add("hidden");
//   } else {
//     this.innerHTML = "&rarr;";
//     headerTitle.textContent = "shakala";
//     sidebarContent.classList.add("hidden-content");
//     shakalaContent.classList.remove("hidden");
//   }
// });

// // const toggleSidebarButton = document.getElementById("toggle-sidebar");
// // const closeSidebarButton = document.getElementById("close-sidebar");
// // const sidebar = document.getElementById("sidebar");

// // toggleSidebarButton.addEventListener("click", () => {
// //   sidebar.classList.toggle("open");
// // });

// closeSidebarButton.addEventListener("click", () => {
//   sidebar.classList.remove("open");
// });
