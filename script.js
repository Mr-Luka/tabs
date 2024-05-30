const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll(`[role="tab"]`);
const tabPanels = tabs.querySelectorAll(`[role="tabpanel"]`);

function handleTabClick(e) {
    tabPanels.forEach(panel=>{
        panel.hidden = true;
    });
    tabs.forEach(tab=>{
        tab.hidd
    })
}

tabButtons.forEach(button=> button.addEventListener("click", handleTabClick));