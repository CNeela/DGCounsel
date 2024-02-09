import Login from"../page objects/login page.js";
import viewTeamMember from"../page objects/viewTeamMemberPOM.js";

describe('editMemberInfo', ()=>{
  var data; 

  before(() =>{

    cy.visit("http://staging.corp.lauditor.com/login")

    cy.fixture('loginCredentials').then((data1)=>{

      
      Login.setUserName(data1.username)
      Login.setPassword(data1.password)
      Login.clickSubmit();
      Login.verifyLogin();

      cy.fixture('viewMemberdata').then((value)=>{
        data = value;


  });

  });
});
       it('editMemberName',()=>{

        viewTeamMember.groupsIconClick();
        viewTeamMember.viewTeamMemberTabClick();
        viewTeamMember.searchBarViewTM(data.memberDetails.tmName);
        viewTeamMember.actionBtnClick();
        cy.wait(2000);
        viewTeamMember.editMemberInfoClick();
        viewTeamMember.editName(data.memberDetails.changeName);
        //viewTeamMember.editDesignation(data.memberDetails.changeDesignation);
        viewTeamMember.saveBtnEditMemberInfo();
        viewTeamMember.crossBtnEditMemberInfoClick();
        viewTeamMember.teamMemberAssertion(data.memberDetails.nameAssert);

       })

       it('editMemberDesignation',()=>{

        viewTeamMember.groupsIconClick();
        viewTeamMember.viewTeamMemberTabClick();
        viewTeamMember.searchBarViewTM(data.memberDetails1.tmName);
        viewTeamMember.actionBtnClick();
        cy.wait(2000);
        viewTeamMember.editMemberInfoClick();
        viewTeamMember.editDesignation(data.memberDetails1.changeDesignation);
        viewTeamMember.saveBtnEditMemberInfo();
        viewTeamMember.crossBtnEditMemberInfoClick();
        viewTeamMember.designationAssertionInViewTMPage(data.memberDetails1.changeDesignation);
       

       })

       it.only('editMemberEmail',()=>{

        viewTeamMember.groupsIconClick();
        viewTeamMember.viewTeamMemberTabClick();
        viewTeamMember.searchBarViewTM(data.memberDetails2.tmName);
        viewTeamMember.actionBtnClick();
        cy.wait(2000);
        viewTeamMember.editMemberInfoClick();
        viewTeamMember.editEmail(data.memberDetails2.changeEmail);
        viewTeamMember.editConfirmEmail(data.memberDetails2.changeConfirmEmail);
        viewTeamMember.saveBtnEditMemberInfo();
        viewTeamMember.crossBtnEditMemberInfoClick();
        viewTeamMember.emailAssertionInViewTMPage(data.memberDetails2.changeEmail);
       
      

       })


          




          
         })





















/*describe('Create Groups', () => {

    it('create group without team member', () => {
      cy.visit("http://staging.corp.lauditor.com/login")
      cy.title().should('eq','DG Counsel') // title verify
      cy.get('.logomain > img').should('be.visible') // verify logo is visible or not
      .and('exist') //logo is present or not


      cy.get("#id_email").type("corpsuperuser@gmail.com")
      cy.get("#id_email").should('have.value','corpsuperuser@gmail.com') //value check
      cy.get("#id_password").type("Test@123")
      cy.get("#id_password").should('have.value','Test@123')
      cy.get("button[type='submit']").click()

      let expName = "Soundarya SCF SU"

      cy.get("ul[class='menu webmenu'] p[class='custusername']").then( (x) => {

        let actName = x.text()
        expect(actName).to.equal(expName)
        //expect(actName).to.not.equal(expName)

        cy.get("img[src='assets/img/total.svg']").click()
        cy.get(".btn.btn-top[routerlink='/groups/create-member']").click()
        cy.get("input[name='name']").type("Ganesa")
        cy.get("input[name='designation']").type("Lawyer")
        cy.get("select[name='currency']").select('IndianRupee(INR)').should('have.value','IndianRupee(INR)')
        cy.get("input[name='defaultRate']").type("1000")
        cy.get("input[id='exampleInputEmail1']").type("ganesa1070@pursip.com")
        cy.get("input[id='exampleInputEmail2']").type("ganesa1070@pursip.com")






      })

    })
  })
  */