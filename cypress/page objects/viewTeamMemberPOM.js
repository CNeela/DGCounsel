class viewTeamMember{

    webElements= {
        clickGroupsIcon:()=> cy.get( "img[src='assets/img/total.svg']"),
        viewTeamMembersBtn:()=> cy.xpath("//button[@routerlink='/groups/view-member']"),
        searchBar:()=> cy.xpath("//input[@placeholder='Search Member']"),
        actionBtn:()=>cy.xpath("//button[@data-bs-toggle='dropdown']",),
        editMemberInfo:()=>cy.xpath("//ul[@class='dropdown-menu custom-dropdown show'] //li[1]"),
        nameEditMemberInfo:()=> cy.xpath("//input[@name='name']"),
        designationEditMemberInfo:()=> cy.xpath("//input[@name='designation']"),
        currencyEditMemberInfo:()=>cy.xpath("//select[@name='currency']"),
        defaultRateEditMemberInfo:()=>cy.xpath("//input[@name='defaultRate']"),
        emailEditMemberInfo:()=>cy.xpath("//input[@name='email']"),
        confirmEmailEditMemberInfo:()=>cy.xpath("//input[@name='emailConfirm']"),
        saveBtn:()=> cy.xpath("//button[@type='submit']"),
        cancelBtn:()=> cy.xpath("//button[@type='reset']"),
        crossBtnEditMemberInfo:()=>cy.xpath("//button[@class='btn-close pull-right']"),
        teamMemberAssert: () => cy.xpath("//tr//td[1]"),
        emailAssertion:()=> cy.xpath("//tr//td[1]"),
        designationAssert:()=> cy.xpath("//tr//td[2]"),
        DepartmentsAssert:()=> cy.xpath("//tr//td[3]"),
        defaultRateAssert:()=> cy.xpath("//tr//td[5]"),





    };

    groupsIconClick()
    {
        this.webElements.clickGroupsIcon().click();
    }
    viewTeamMemberTabClick(){
        this.webElements.viewTeamMembersBtn().click();
    }
    actionBtnClick(){
        this.webElements.actionBtn().click();
    }
    searchBarViewTM(tmName){
        this.webElements.searchBar().type(tmName);
    }
    editMemberInfoClick(){
        this.webElements.editMemberInfo().click();
    }
    editName(nameEdit){
        this.webElements.nameEditMemberInfo().clear();
        this.webElements.nameEditMemberInfo().type(nameEdit);
    }
    editDesignation(designationEdit){
        this.webElements.designationEditMemberInfo().clear();
        this.webElements.designationEditMemberInfo().type(designationEdit);
    }
    editCurrency(currencyedit){
        this.webElements.currencyEditMemberInfo().select(currencyedit);
    }
    editDefaultRate(rateEdit){
        this.webElements.defaultRateEditMemberInfo().clear();
        this.webElements.defaultRateEditMemberInfo().type(rateEdit);
    }
    editEmail(emailEdit){
        this.webElements.emailEditMemberInfo().clear();
        this.webElements.emailEditMemberInfo().type(emailEdit);
    }
    editConfirmEmail(confirmEmailEdit){
        this.webElements.confirmEmailEditMemberInfo().clear();
        this.webElements.confirmEmailEditMemberInfo().type(confirmEmailEdit);
    }
    saveBtnEditMemberInfo(){
        this.webElements.saveBtn().click();

    }
    cancelBtnEditMemberInfo(){
        this.webElements.cancelBtn().click();
    }
    teamMemberAssertion(nameAssert){
        this.webElements.teamMemberAssert().should("contain", nameAssert);
     }
    emailAssertionInViewTMPage(emailAssert){
        this.webElements.emailAssertion().should("contain", emailAssert);
      }

      designationAssertionInViewTMPage(designationAssert){
        this.webElements.designationAssert().should("contain", designationAssert);
      }  
    DefaultRateAssertionInViewTMPage(defaultRateAssert){
        this.webElements.defaultRateAssert().should("contain", defaultRateAssert);
      } 
    crossBtnEditMemberInfoClick(){
        this.webElements.crossBtnEditMemberInfo().click();
    }


    

}

module.exports = new viewTeamMember();