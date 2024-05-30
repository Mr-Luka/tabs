const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll(`[role="tab"]`);
const tabPanels = Array.from(tabs.querySelectorAll(`[role="tabpanel"]`));

function handleTabClick(e) {
    tabPanels.forEach(panel=>{
        panel.hidden = true;
    });
    tabButtons.forEach(tab=>{
        // tab.ariaSelected = false;
        tab.setAttribute('aria-selected', false)
    })
    e.currentTarget.setAttribute('aria-selected', true)
    const {id} = e.currentTarget;
    // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    // tabPanel.hidden = false;
    const tabPanel = tabPanels.find(
        panel=> panel.getAttribute(`aria-labelledby`) === id);
    tabPanel.hidden = false;
}

tabButtons.forEach(button=> button.addEventListener("click", handleTabClick));