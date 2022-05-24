export const tabs = (tabsContainerQuery, tabsQuery, tabsContentsQuery) => {

    const tabsContainer = document.querySelector(tabsContainerQuery);
    const tabs = document.querySelectorAll(tabsQuery);
    const tabsContents = document.querySelectorAll(tabsContentsQuery);


    const hideTabs = () => {
        tabsContents.forEach(i => {
            i.classList.remove('active');
        });
        tabs.forEach(i => {
            i.classList.remove('active');
        });
    }

    const showTabs = (index = 0) => {
        tabsContents[index].classList.add('active');
        tabs[index].classList.add('active');
    }

    if(tabs.length > 0 && tabsContents.length > 0 && tabsContainer) {
        hideTabs();
        showTabs();

        tabsContainer.addEventListener('click', (e) => {
            
        });
    }

    
}