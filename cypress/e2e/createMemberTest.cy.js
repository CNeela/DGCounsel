import Login from"../page objects/login page.js";
import TeamMember from"../page objects/createMemberPOM.js";

describe('AccountCreation', ()=>{
  var data; 
  //var teamMemberCreation;
  before(() =>{

    cy.visit("http://staging.corp.lauditor.com/login")

      cy.fixture('loginCredentials').then((data1)=>{

      const login = new Login();
      login.setUserName(data1.username)
      login.setPassword(data1.password)
      login.clickSubmit();
      login.verifyLogin();

      cy.fixture('createMemberdata').then((value)=>{
        data = value;


  });

  });
});

// Create Member with assign groups
      it('CreateMemberWtihGroups',()=>{


        
           
          var TeamMemberDetails =[
            data.memberDetails.tmName,
            data.memberDetails.desingation,
            data.memberDetails.currencyRate,
            data.memberDetails.defaultRate,
            data.memberDetails.email,
            data.memberDetails.confirmemail,
            data.memberDetails.nameAssert

          ];

          var selectDepts = [
            data.selectDepartments.Dept1,
            data.selectDepartments.Dept2,
          ];

          TeamMember.groupsIconClick();
          cy.wait(2000);
          TeamMember.creatMemberBtnClick();
          cy.wait(2000);
          cy.scrollTo('top');
          cy.wait(2000);
          TeamMember.setTeamMemberName(data.memberDetails.tmName)
          TeamMember.setDesignation(data.memberDetails.desingation)
          TeamMember.setCurrencyRate(data.memberDetails.currencyRate)
          TeamMember.setDefaultRate(data.memberDetails.defaultRate)
          TeamMember.setEmail(data.memberDetails.email)
          TeamMember.setConirmEmail(data.memberDetails.confirmemail)
          TeamMember.clickAssignGroupPlusBtn();
          TeamMember.SelectDepts(selectDepts);
          cy.wait(5000);
          TeamMember.clickSaveBtn();
          cy.wait(5000);
          TeamMember.clickViewChangesBtn();
          cy.wait(2000);
          //teamMemberCreation.clickSearchBar
          TeamMember.teamMemberAssertion(data.memberDetails.nameAssert)
         })
       
        
        
         // Account creation without assigning groups

         it('createMemberWithoutGroups', ()=>{
          
            const teamMemberCreation = new TeamMember();

            var TeamMemberDetails =[
              data.memberDetails1.tmName1,
              data.memberDetails1.desingation1,
              data.memberDetails1.currencyRate1,
              data.memberDetails1.defaultRate1,
              data.memberDetails1.email1,
              data.memberDetails1.confirmemail1,
              data.memberDetails1.nameAssert1
  
            ];
            
            cy.reload();
            teamMemberCreation.groupsIconClick();
            cy.wait(2000);

            teamMemberCreation.creatMemberBtnClick();
            cy.wait(2000);
            cy.scrollTo('top');
            cy.wait(2000);
            teamMemberCreation.setTeamMemberName(data.memberDetails1.tmName1);
            teamMemberCreation.setDesignation(data.memberDetails1.designation1);
            teamMemberCreation.setCurrencyRate(data.memberDetails1.currencyRate1);
            teamMemberCreation.setDefaultRate(data.memberDetails1.defaultRate1);
            teamMemberCreation.setEmail(data.memberDetails1.email1);
            teamMemberCreation.setConirmEmail(data.memberDetails1.confirmemail1);
            teamMemberCreation.clickSaveBtn();
            teamMemberCreation.clickViewChangesBtn();
            cy.wait(2000);
            teamMemberCreation.teamMemberAssertion(data.memberDetails1.nameAssert1);

          })


          //While clicking on back, wheather all team member details that were entered before, still they retain or not
          
          it('filledDetailsShouldRetainClickBack', ()=>{






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