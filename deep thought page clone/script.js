document.addEventListener("DOMContentLoaded", () => {
  // Fetch JSON data from file
  fetch("data.json")
    .then((response) => response.json()) // Parse response to JSON
    .then((jsonData) => {
      console.log(jsonData);
      createUpperHeadings(jsonData, "upper-content");
      createAssetComponent(jsonData, "content");
      sidebar_content(jsonData);
      sidebar_tasks(jsonData);
    })
    .catch((error) => console.error("Server issue", error));
  const sidebarBtn = document.getElementById("sidebar-btn");
  const topBtn = document.querySelector(".sidebar .top button");

  // sidebarBtn.addEventListener("click", toggleSidebar);
  topBtn.addEventListener("click", toggleSidebar);
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("collapsed");
}

function createUpperHeadings(jsonData, containerId) {
  const headingsContainer = document.getElementById(containerId);
  // const  = document.getElementById(containerId);
  console.log("heading jsonData:", jsonData);
  const headingContainer = document.createElement("div");
  headingContainer.className = "heading-container";
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit Task";
  const headingTitle = document.createElement("h1");
  headingTitle.textContent = jsonData.title;
  headingContainer.appendChild(headingTitle);
  headingContainer.appendChild(submitButton);
  headingsContainer.appendChild(headingContainer);
  jsonData.tasks.forEach((task) => {
    const taskContainer = document.createElement("div");
    taskContainer.className = "task-container";
    const taskTitle = document.createElement("h1");
    const taskDesc = document.createElement("p");
    taskTitle.textContent = task.task_title;
    taskDesc.textContent = task.task_description;
    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskDesc);
    headingsContainer.appendChild(taskContainer);
  });
}
function createAssetComponent(jsonData, containerId) {
  const mainContainer = document.getElementById(containerId);
  jsonData.tasks.forEach((task) => {
    task.assets.forEach((asset) => {
      const assetContainer = document.createElement("div");
      assetContainer.className = "asset-container";

      const headerDiv = document.createElement("div");
      const heading = document.createElement("h2");
      heading.textContent = asset.asset_title;
      const infoBtn = document.createElement("span");
      infoBtn.className = "info-btn";
      const infoImg = document.createElement("img");
      infoImg.src = "./assets/info.svg";
      infoImg.alt = "";
      infoBtn.appendChild(infoImg);
      headerDiv.appendChild(heading);
      headerDiv.appendChild(infoBtn);
      const article = document.createElement("article");
      const paragraph = document.createElement("p");
      const span = document.createElement("span");
      span.textContent = "Description : ";
      paragraph.appendChild(span);
      paragraph.append(" " + asset.asset_description.replace(/\r?\\n/g, ""));
      article.appendChild(paragraph);

      const assetContent = document.createElement("div");
      assetContent.className = "asset-content";
      //box2
      if (asset.asset_content_type === "threadbuilder") {
        const threadDiv = document.createElement("div");
        threadDiv.className = "thread";

        const threadImg = document.createElement("img");
        threadImg.src = "./assets/Vector.png";
        threadImg.className = "thread-img";
        threadImg.alt = "thread";
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
        subThreadText.textContent = "Sub Thread 1";
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
        subInterceptionText.textContent = "Sub Interception 1";
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

        const buttonSection = document.createElement("div");
        buttonSection.className = "button-section";

        const catelogImg = document.createElement("img");
        catelogImg.src = "./assets/threadcatalog.png";
        catelogImg.alt = "catalog";
        buttonSection.appendChild(catelogImg);

        const selectCatalogButton = document.createElement("button");
        selectCatalogButton.className = "select-button";
        selectCatalogButton.textContent = "Select categ";
        const catalogButtonImg = document.createElement("img");
        catalogButtonImg.src = "./assets/Vector-down.png";
        catalogButtonImg.alt = "";
        selectCatalogButton.appendChild(catalogButtonImg);
        buttonSection.appendChild(selectCatalogButton);

        const selectProcessButton = document.createElement("button");
        selectProcessButton.className = "select-button";
        selectProcessButton.textContent = "Select Process";
        const processButtonImg = document.createElement("img");
        processButtonImg.src = "./asset/Vector-down.png";
        processButtonImg.alt = "";
        selectProcessButton.appendChild(processButtonImg);
        buttonSection.appendChild(selectProcessButton);

        addThreadDiv.appendChild(buttonSection);
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
        summaryInput.placeholder = "Enter text here";
        summaryInput.className = "sub-thread-input";
        summaryInputDiv.appendChild(summaryInput);
        summaryDiv.appendChild(summaryInputDiv);

        addThreadDiv.appendChild(summaryDiv);

        assetContent.appendChild(threadDiv);
        assetContent.appendChild(addThreadDiv);
      }
      // box 3
      else if (
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
          "./assets/arrow-curve-left-right.png",
          "./assets/arrow-curve-left-down.png",
          "./assets/arrow-expand-02.png",
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
          "./assets/Ellipse 197.png",
          "./assets/Ellipse 197.png",
          "./assets/Ellipse 197.png",
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
      }

      // box1
      else if (asset.asset_content_type === "video") {
        // video box is 1
        const iframe = document.createElement("iframe");
        iframe.src = asset.asset_content.trim();
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
  sidebar.innerHTML = "";
  data.tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.textContent = task.task_title;
    const assetList = document.createElement("ul");
    task.assets.forEach((asset) => {
      const assetItem = document.createElement("li");
      assetItem.textContent = asset.asset_title;
      assetList.appendChild(assetItem);
    });
    taskItem.appendChild(assetList);
    sidebar.appendChild(taskItem);
  });
};
let taskCount = 0;
const sidebar_tasks = (data) => {
  const taskCounter = document.querySelector("#sidebar .bottom ");
  data.tasks.forEach((task) => {
    taskCount++;
    const count = document.createElement("div");
    count.className = "total";
    count.textContent = `${taskCount}`;

    taskCounter.appendChild(count);
  });
};
