class sidebarMenuPage{
    elements = {
        menuItemsContainer: () => cy.get('.bm-item-list a'),
        allItemsLink: () => cy.get('#inventory_sidebar_link'),
        aboutLink: () => cy.get('#about_sidebar_link'),
        logoutLink: () => cy.get('#logout_sidebar_link'),
        resetAppLink: () => cy.get('#reset_sidebar_link')
    }
}

module.exports = new sidebarMenuPage()