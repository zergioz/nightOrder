<!DOCTYPE html>
<%@ Page Language="C#" %>
<%@ Register tagprefix="SharePoint" namespace="Microsoft.SharePoint.WebControls" assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<html lang="en">

    <head>
        <SharePoint:CssRegistration Name="default" runat="server"/>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>SOCEUR/J33/NightOrders</title>

        <!-- CSS -->
        <link rel="stylesheet" href="assets/css/fonts.css?family=Roboto:400,100,300,500">-->
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="assets/css/form-elements.css">
        <link rel="stylesheet" href="assets/css/style.css">
 
        <!-- Material Design Bootstrap -->
        <link href="assets/css/mdb.min.css" rel="stylesheet">

        <script src="fakeSharePointPage.js"></script>
        <!-- JQuery -->
        <script type="text/javascript" src="assets/js/jquery.min.js"></script>
        <script type="text/javascript" src="assets/js/jquery.SPServices.js"></script>
        <script type="text/javascript" src="assets/js/pnp.min.js"></script>
        <!-- Bootstrap tooltips -->
        <script type="text/javascript" src="assets/js/popper.min.js"></script>
        <!-- MDB core JavaScript -->
        <script type="text/javascript" src="assets/js/mdb.min.js"></script>
        
    </head>

    <body>
    <form id="form1"  runat="server">       
    <SharePoint:FormDigest  ID="FormDigest1" runat="server"></SharePoint:FormDigest>
        <!-- Top menu -->
        <nav class="navbar navbar-inverse navbar-no-bg" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-navbar-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.html">SOCEUR/J33/NightOrders</a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="top-navbar-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <span class="li-text">
                                Sergio F. Rodriguez
                            </span> 
                        </li>
                        <li>
                            <span class="li-text">
                                Sergio F. Rodriguez
                            </span> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</form>
        <!-- Top content -->
        <div class="top-content">
            <div class="container">
                
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 text">
                        <h1>SOCEUR/J33 <strong>NightOrders </strong>Wizard</h1>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-sm-12 form-box">
                        <form role="form" action="" method="post" class="f1">
                            
                            <h3>Start Order</h3>
                            <p>Fill every step to finalize a Night Order</p>
                            <div class="f1-steps">
                                <div class="f1-progress">
                                    <div class="f1-progress-line" data-now-value="14.66" data-number-of-steps="7" style="width: 14.66%;"></div>
                                </div>

                                <div class="f1-step active">
                                    <div class="f1-step-icon">
                                        <i class="fa fa-flag-checkered"></i>
                                    </div>
                                    <p>Initiate Order</p>
                                </div>

                                <div class="f1-step">
                                    <div class="f1-step-icon">
                                        <i class="fa fa-user"></i>
                                    </div>
                                    <p>General</p>
                                </div>
                                <div class="f1-step">
                                    <div class="f1-step-icon">
                                        <i class="fa fa-key"></i>
                                    </div>
                                    <p>Situation</p>
                                </div>
                                <div class="f1-step">
                                    <div class="f1-step-icon">
                                        <i class="fa fa-book"></i>
                                    </div>
                                    <p>Mission</p>
                                </div>
                                <div class="f1-step">
                                    <div class="f1-step-icon">
                                        <i class="fa fa-wrench"></i>
                                    </div>
                                    <p>Execution</p>
                                </div>
                                <div class="f1-step">
                                    <div class="f1-step-icon">
                                        <i class="fa fa-lock"></i>
                                    </div>
                                    <p>Admin/LOG</p>
                                </div>
                                <div class="f1-step">
                                    <div class="f1-step-icon">
                                        <i class="fa fa-globe"></i>
                                    </div>
                                    <p>C2</p>
                                </div>
                                <div class="f1-step">
                                    <div class="f1-step-icon">
                                        <i class="fa fa-paper-plane"></i>
                                    </div>
                                    <p>Release</p>
                                </div>
                            </div>

                            <fieldset>
                                <div class="form-group md-form form-lg">
                                    <h4>This step step will create an order id</h4>
                                    <button type="button" class="btn-block btn-next" id="initiateOrder">Click [HERE] to Start</button>
                                </div>
                            </fieldset>
                            
                            <fieldset>
                                <h4>INITIAL INFORMATION:</h4>
                                <div class="form-group md-form form-lg">
                                    <label for="copyNumber">Copy Number</label>
                                    <input type="text" name="copyNumber" class="form-control form-control-lg"  id="copyNumber">
                               </div>
                               <div class="form-group md-form form-lg">
                                    <label for="issuingHeadquarter">Issuing Headquarters</label>
                                    <input type="text" name="issuingHeadquarter" class="form-control form-control-lg" id="issuingHeadquarter">
                                </div>
                                <div class="form-group md-form form-lg">
                                    <label for="placeIssue">Place of Issue</label>
                                    <input type="text" name="placeIssue" class="form-control form-control-lg" id="placeIssue">
                                </div>
                                <div class="form-group md-form form-lg" >
                                    <label for="effectiveDate">Effective Date</label>
                                    <input type="text" name="effectiveDate" class="form-control form-control-lg" id="effectiveDate">
                                </div>
                                <div class="form-group md-form form-lg">
                                    <label for="operationPlan">Operation Plan</label>
                                    <input type="text" name="operationPlan" class="form-control form-control-lg" id="operationPlan">
                                </div>
                                <div class="form-group md-form form-lg">
                                    <label for="referenceField">Reference</label>
                                    <textarea type="text" size="30" name="referenceField" class="form-control form-control-lg md-textarea" id="referenceField"></textarea>
                                </div>
                                <div class="f1-buttons">
                                    <button type="button" class="btn btn-previous">Previous</button>
                                    <button type="button" class="btn btn-next" id="generalOrder">Next</button>
                                </div>
                            </fieldset>

                            <fieldset>
                                <h4>PROVIDE SITUATION INFORMATION:</h4>
                                <div class="form-group md-form form-lg">
                                    <label for="situationGeneral">General</label>
                                    <textarea type="text" name="situationGeneral" class="form-control form-control-lg md-textarea" id="situationGeneral"></textarea>
                                </div>
                                <div class="form-group md-form form-lg">
                                    <label for="situationAreaOfConcern">Area of Concern</label>
                                    <textarea type="text" name="situationAreaOfConcern" class="form-control form-control-lg md-textarea" id="situationAreaOfConcern"></textarea>
                                </div>
                                <div class="form-group md-form form-lg">
                                    <label for="situationFriendForce">Friendly Forces</label>
                                    <textarea name="situationFriendForce" class="form-control form-control-lg md-textarea" id="situationFriendForce"></textarea>
                                </div>
                                <div class="form-group md-form form-lg">
                                    <label for="situationEnemyForce">Enemy Forces</label>
                                    <textarea name="situationEnemyForce" class="form-control form-control-lg md-textarea" id="situationEnemyForce"></textarea>
                                </div>
                                <div class="f1-buttons">
                                    <button type="button" class="btn btn-previous">Previous</button>
                                    <button type="button" class="btn btn-next" id="situationOrder">Next</button>
                                </div> 
                            </fieldset>

                            <fieldset>
                                <h4>MISSION:</h4>
                                <div class="form-group md-form form-lg">
                                    <label for="missionField">Provide Mission Details</label>
                                    <textarea name="missionField" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="missionField"></textarea>
                                </div>
                                <div class="f1-buttons">
                                    <button type="button" class="btn btn-previous">Previous</button>
                                    <button type="button" class="btn btn-next" id="missionOrder">Next</button>
                                </div>
                            </fieldset>

                            <fieldset>
                               
                                <!-- CONOPS -->
                                <h4>CONCEPT OF OPERATIONS:</h4>
                                <div class="form-group md-form form-lg">
                                    
                                    <ul class="nav nav-justified nav-tabs">
                                        <li class="active"><a data-toggle="tab" href="#conop-menu0">CMD's Intent</a></li>
                                        <li><a data-toggle="tab" href="#conop-menu1">Purpose/End State</a></li>
                                        <li><a data-toggle="tab" href="#conop-menu2">Objectives</a></li>
                                        <li><a data-toggle="tab" href="#conop-menu3">Effects</a></li>
                                        <li><a data-toggle="tab" href="#conop-menu4">General(Phasing)</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div id="conop-menu0" class="tab-pane fade in active">
                                            
                                            <div class="form-group md-form form-lg">     
                                                <label for="commanderIntent">Provide commander's intent</label>
                                                <textarea name="commanderIntent" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="commanderIntent"></textarea>
                                            </div>
                                            
                                        </div>
                                        <div id="conop-menu1" class="tab-pane fade">
                                            
                                            <div class="form-group md-form form-lg">
                                                <label for="purposeState">What is the Purpose and End-State?</label>  
                                                <textarea name="purposeState" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="purposeState"></textarea>
                                            </div>
                                            
                                        </div>
                                        <div id="conop-menu2" class="tab-pane fade">
                                            
                                            <div class="form-group md-form form-lg">
                                                <label for="conopObjective">Whats are the Objectives?</label> 
                                                <textarea name="conopObjective" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="conopObjective"></textarea>
                                            </div>    
                                            
                                        </div>
                                        <div id="conop-menu3" class="tab-pane fade">
                                            
                                            <div class="form-group md-form form-lg">
                                                <label for="conopEffect">What are The Effects?</label>
                                                <textarea name="conopEffect" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="conopEffect"></textarea>
                                            </div>
                                            
                                        </div>
                                        <div id="conop-menu4" class="tab-pane fade">
                                            
                                            <div class="form-group md-form form-lg">
                                                <label for="conopGeneral">conopGeneral (Phasing)</label>
                                                <textarea name="conopGeneral" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="conopGeneral"></textarea>
                                            </div>
                                            
                                        </div>
                                    </div>

                                </div>

                                <!-- TASKS -->
                                <h4>TASKS:</h4>
                                <div class="form-group md-form form-lg">
                                    
                                    <ul class="nav nav-justified  nav-tabs">
                                        <li class="active"><a data-toggle="tab" href="#task-menu0">All</a></li>
                                        <li><a data-toggle="tab" href="#task-menu1">Subordinate Organizations</a></li>
                                        <li><a data-toggle="tab" href="#task-menu2">SOCEUR STAFF</a></li>
                                    </ul>

                                    <div class="tab-content">
                                        <div id="task-menu0" class="tab-pane fade in active">
                                            <p>
                                                <div class="form-group md-form form-lg">
                                                    <label for="taskAll">Tasks for all Organizations and Staff</label>
                                                    <textarea name="commanderIntent" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="taskAll"></textarea>
                                                </div>
                                            </p>
                                        </div>
                                        <div id="task-menu1" class="tab-pane fade">

                                            <div class="form-check form-check-inline">
                                                <div class="form-group md-form form-lg">
                                                    <input type="checkbox" class="form-check-input" id="ALL-check">Show All
                                                    <input type="checkbox" class="form-check-input" id="SFG10-check">1-10 SFG (A)
                                                    <input type="checkbox" class="form-check-input" id="NSWU2-check">NSWU-2
                                                    <input type="checkbox" class="form-check-input" id="SOW352-check">352 SOW
                                                    <input type="checkbox" class="form-check-input" id="JSOACE-check">JSOAC-E
                                                    <input type="checkbox" class="form-check-input" id="TASKFORCE10-check">TF-10
                                                </div>
                                            </div>
                                                                                      
                                            <div class="form-group md-form form-lg" id="SFG10-paragraph">
                                                <label for="SFG10">1st Battalion, 10th Special Forces Group (Airborne)</label>
                                                <textarea name="SFG10" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="SFG10"></textarea>
                                            </div>
                                            <div class="form-group md-form form-lg" id="NSWU2-paragraph">    
                                                <label for="SFG10">Naval Special Warfare Unit TWO (NSWU-2)</label>
                                                <textarea name="NSWU2" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="NSWU2"></textarea>
                                            </div>
                                            <div class="form-group md-form form-lg" id="SOW352-paragraph">
                                                <label for="SOW352">352nd Special Operations Wing</label>
                                                <textarea name="SOW352" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="SOW352"></textarea>
                                            </div>
                                            <div class="form-group md-form form-lg" id="JSOACE-paragraph">    
                                                <label for="SFG10">Joint Special Operations Air Component – Europe (JSOAC-E)</label>
                                                <textarea name="JSOACE" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="JSOACE"></textarea>
                                            </div>
                                            <div class="form-group md-form form-lg" id="TASKFORCE10-paragraph">    
                                                <label for="TASKFORCE10">Task Force 10</label>
                                                <textarea name="TASKFORCE10" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="TASKFORCE10"></textarea>
                                            </div>

                                        </div>
                                        <div id="task-menu2" class="tab-pane fade">
                                            <div class="form-check form-check-inline">
                                                <div class="form-group md-form form-lg">
                                                    <input type="checkbox" class="form-check-input" id="JALL-check" value="JALL-check">Show All
                                                    <input type="checkbox" class="form-check-input" id="HQ-check" value="HQ-CG">HQ
                                                    <input type="checkbox" class="form-check-input" id="CG-check" value="CG-CG">CG
                                                    <input type="checkbox" class="form-check-input" id="J1-check" value="J1-check">J1
                                                    <input type="checkbox" class="form-check-input" id="J2-check" value="J2-check">J2
                                                    <input type="checkbox" class="form-check-input" id="J3-check" value="J3-check">J3
                                                    <input type="checkbox" class="form-check-input" id="J4-check" value="J4-check">J4
                                                    <input type="checkbox" class="form-check-input" id="J5-check" value="J5-check">J5
                                                    <input type="checkbox" class="form-check-input" id="J6-check" value="J6-check">J6
                                                    <input type="checkbox" class="form-check-input" id="J8-check" value="J8-check">J8
                                                    <input type="checkbox" class="form-check-input" id="JX-check" value="Jx-check">JX
                                                    <input type="checkbox" class="form-check-input" id="SPECIALSTAFF-check" value="SPECIALSTAFF-check">Special Staff
                                                    <input type="checkbox" class="form-check-input" id="SSD-check" value="SSD-check">SSD
                                                    <input type="checkbox" class="form-check-input" id="AFSEA-check" value="AFSEA-check">AFSEA
                                                </div>
                                            </div>
                                            
                                            <div class="form-group md-form form-lg" id="CG-paragraph">
                                                <label for="CG">Command Group</label>
                                                <textarea name="CG" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="CG"></textarea>
                                            </div>
                                            <div class="form-group md-form form-lg" id="HQ-paragraph">
                                                <label for="HQ">HQ Command</label>
                                                <textarea name="HQ" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="HQ"></textarea>
                                            </div>
                                            <div class="form-group md-form form-lg" id="J1-paragraph">
                                                <label for="TASKFORCE10">J1 Directorate</label>
                                                <textarea name="J1" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="J1"></textarea>
                                            </div>
                                            <div class="form-group md-form form-lg" id="J2-paragraph">
                                                <label for="J2">J2 Directorate</label>
                                                <textarea name="J2" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="J2"></textarea>
                                            </div>
                                            <div class="form-group md-form form-lg" id="J3-paragraph">
                                                <label for="J3">J3 Directorate</label>
                                                <textarea name="J3" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="J3"></textarea>
                                            </div>
                                            <div class="form-group md-form form-lg" id="J4-paragraph">
                                                <label for="J4">J4 Directorate</label>
                                                <textarea name="J4" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="J4"></textarea>
                                            </div>
                                            <div class="form-group md-form form-lg" id="J5-paragraph">
                                                <label for="J5">J5 Directorate</label>
                                                <textarea name="J5" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="J5"></textarea>
                                            </div>
                                            <div class="form-group md-form form-lg" id="J6-paragraph">
                                                <label for="J6">J6 Directorate</label>
                                                <textarea name="J6" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="J6"></textarea>
                                            </div>
                                            <div class="form-group md-form form-lg" id="J8-paragraph">
                                                <label for="J8">J8 Directorate</label>
                                                <textarea name="J8" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="J8"></textarea>
                                            </div>
                                            <div class="form-group md-form form-lg" id="JX-paragraph">
                                                <label for="JX">JX Directorate</label>
                                                <textarea name="JX" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="JX"></textarea>
                                            </div>
                                            <div class="form-group md-form form-lg" id="SSD-paragraph">
                                                <label for="SSD">Signal Detachment</label>
                                                <textarea name="SSD" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="SSD"></textarea>
                                            </div>
                                            <div class="form-group md-form form-lg" id="AFSEA-paragraph">
                                                <label for="AFSEA">AF SEA</label>
                                                <textarea name="AFSEA" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="AFSEA"></textarea>
                                            </div>
                                            <!-- START: SPECIALSTAFF -->
                                            <div id="SPECIALSTAFF-paragraph">
                                                <div class="form-group md-form form-lg">
                                                    <label for="SPECIALSTAFF-MED">Special Staff: MED</label>
                                                    <textarea name="SpecialStaff-MED" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="SPECIALSTAFF-MED"></textarea>
                                                </div>

                                                <div class="form-group md-form form-lg">
                                                    <label for="SPECIALSTAFF-PAO">Special Staff: PAO</label>
                                                    <textarea name="SpecialStaff-PAO" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="SPECIALSTAFF-PAO"></textarea>
                                                </div>

                                                <div class="form-group md-form form-lg">
                                                    <label for="SPECIALSTAFF-SJA">Special Staff: SJA</label>
                                                    <textarea name="SpecialStaff-SJA" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="SPECIALSTAFF-SJA"></textarea>
                                                </div>

                                                <div class="form-group md-form form-lg">
                                                    <label for="SPECIALSTAFF-OTHER">Special Staff: OTHER</label>
                                                    <textarea name="SpecialStaff-OTHER" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="SPECIALSTAFF-OTHER"></textarea>
                                                </div>
                                            </div>
                                            <!-- END: SPECIALSTAFF -->
                                        </div>
                                    </div>
                                </div>

                                <!-- Coordinating Instructions  -->
                                <h4>COORDINATING INSTRUCTIONS:</h4>
                                <div class="form-group md-form form-lg">
                                    <label for="coordinatingInstructions">Provide Details</label>
                                    <textarea name="coordinatingInstructions" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="coordinatingInstructions"></textarea>
                                </div>
                                <div class="f1-buttons">
                                    <button type="button" class="btn btn-previous">Previous</button>
                                    <button type="button" class="btn btn-next" id="executionOrder">Next</button>
                                </div>
                                <!-- END: Coordinating Instructions --> 

                            </fieldset>

                            <fieldset>
                                <h4>ADMIN AND LOGISTICS:</h4>
                                 <div class="form-group md-form form-lg">
                                    <label for="AdminLogConceptSustainment">Concept of Sustainment</label>
                                    <textarea name="AdminLogConceptSustainment" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="AdminLogConceptSustainment"></textarea>
                                </div>
                                <div class="form-group md-form form-lg">
                                    <label for="adminLogLogistic">Logistics</label>
                                    <textarea name="adminLogLogistic" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="adminLogLogistic"></textarea>
                                </div>
                                <div class="form-group md-form form-lg">
                                    <label for="adminLogpersonnel">Personnel</label>
                                    <textarea name="adminLogpersonnel" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="adminLogpersonnel"></textarea>
                                </div>
                                <div class="f1-buttons">
                                    <button type="button" class="btn btn-previous">Previous</button>
                                    <button type="button" class="btn btn-next" id="adminLogOrder">Next</button>
                                </div>
                            </fieldset>

                             <fieldset>
                                <h4>COMMAND & CONTROL:</h4>
                                 <div class="form-group md-form form-lg">
                                    <label for="commandControl">Command</label>
                                    <textarea name="commandControl" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="commandControl"></textarea>
                                </div>
                                <div class="form-group md-form form-lg">
                                    <label for="commandCommunications">Joint Communication Systems Control</label>
                                    <textarea name="commandCommunications" aria-label="With textarea" class="form-control form-control-lg md-textarea" id="commandCommunications"></textarea>
                                </div>
                                <div class="f1-buttons">
                                    <button type="button" class="btn btn-previous">Previous</button>
                                    <button type="button" class="btn btn-next" id="commandControl">Next</button>
                                </div>
                            </fieldset>

                            <fieldset>
                                <div class="form-group md-form form-lg">
                                    <h4>If the Order was completed. Click below to create the Order <i class="fa fa-file"></i> file to release.</h4>
                                    <button type="button" class="btn btn-block btn-submit" id="release" value="1">Click [HERE] to Release</button>
                                </div>
                            </fieldset>
                        
                        </form>
                    </div>
                </div>
                    
            </div>
        </div>


        <!-- Javascript -->
        <script src="assets/js/jquery-1.11.1.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/js/jquery.backstretch.min.js"></script>
        <script src="assets/js/retina-1.1.0.min.js"></script>
        <script src="assets/js/scripts.js"></script>
        

    </body>

</html>