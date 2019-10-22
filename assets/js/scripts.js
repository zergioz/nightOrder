var orderId;
var orderData;
var elementArray = 
    {
        "ALL-check" : [""],
        "JALL-check" : [""],
        "SFG10-check" : ["#SFG10-paragraph"],
        "NSWU2-check" : ['#NSWU2-paragraph'],
        "SOW352-check" : ['#SOW352-paragraph'],
        "JSOACE-check" : ['#JSOACE-paragraph'],
        "TASKFORCE10-check": ['#TASKFORCE10-paragraph'],
        "CG-check" : ['#CG-paragraph'], 
        "HQ-check":['#HQ-paragraph'], 
        "J1-check":['#J1-paragraph'], 
        "J2-check":['#J2-paragraph'], 
        "J3-check":['#J3-paragraph'], 
        "J4-check":['#J4-paragraph'], 
        "J5-check":['#J5-paragraph'], 
        "J6-check":['#J6-paragraph'], 
        "J8-check":['#J8-paragraph'], 
        "JX-check":['#JX-paragraph'], 
        "SPECIALSTAFF-check":['#SPECIALSTAFF-paragraph'], 
        "SSD-check":['#SSD-paragraph'], 
        "AFSEA-check":['#AFSEA-paragraph']
    };
$pnp.setup({
    sp: {
        headers: {
            Accept: 'application/json;odata=verbose;'
        }
    }
});

/*Live Update*/
$("input, textarea").keyup(function(){
     orderData = new buildOrder();
     console.log(orderData);
});

/* When click Initiate Order */
$('#initiateOrder').click(function(){
    console.log('initiateOrder');
    /* Create Data Set */
    var dataSet = {Title:"order-initiated"};
    /* submit item to SPlist*/
    initiateOrder(dataSet);
});

function initiateOrder(dataSet){
    //INSIDE button click
    var web = new $pnp.Web(_spPageContextInfo.webAbsoluteUrl);
    // Using POST method to create an item as example
    web.getList(`${_spPageContextInfo.webServerRelativeUrl}/Lists/nightOrderData`)
        .items.add(dataSet)
        .then(function (response) {
            orderId = response.data.Id;
            console.log(orderId);
        })
}

/* When click Initiate Order */
$('#generalOrder').click(function(){
    console.log('generalOrder');
    orderData = new buildOrder();
    /* Create Data Set */
    var dataSet =  
        {
            generalCopyNumber: orderData.generalCopyNumber,
            generalEffectiveDate: orderData.generalEffectiveDate,
            generalIssuingHeadquarter: orderData.generalIssuingHeadquarter,
            generalOperationPlan: orderData.generalOperationPlan,
            generalPlaceIssue: orderData.generalPlaceIssue,
            generalReferenceField: orderData.generalReferenceField
        };
    /* submit item to SPlist*/
    putOrder(dataSet);
});

/* Start Steps */
$('#generalOrder').click(function(){
    console.log('generalOrder');
    orderData = new buildOrder();
    /* Create Data Set */
    var dataSet =  
        {
            generalCopyNumber: orderData.generalCopyNumber,
            generalEffectiveDate: orderData.generalEffectiveDate,
            generalIssuingHeadquarter: orderData.generalIssuingHeadquarter,
            generalOperationPlan: orderData.generalOperationPlan,
            generalPlaceIssue: orderData.generalPlaceIssue,
            generalReferenceField: orderData.generalReferenceField
        };
    /* submit item to SPlist*/
    putOrder(dataSet);
});

$('#situationOrder').click(function(){
    console.log('situationOrder');
    orderData = new buildOrder();
    /* Create Data Set */
    var dataSet =  
        {
            situationGeneral: orderData.situationGeneral,
            situationAreaOfConcern: orderData.situationAreaOfConcern,
            situationFriendForce: orderData.situationFriendForce,
            situationEnemyForce: orderData.situationEnemyForce
        };
    /* submit item to SPlist*/
    putOrder(dataSet);
});

$('#missionOrder').click(function(){
    console.log('situationOrder');
    orderData = new buildOrder();
    /* Create Data Set */
    var dataSet =  
        {
            missionField: orderData.missionField
        };
    /* submit item to SPlist*/
    putOrder(dataSet);
});

$('#executionOrder').click(function(){
    console.log('situationOrder');
    orderData = new buildOrder();
    /* Create Data Set */
    var dataSet =  
        {
            conopCommanderIntent: orderData.conopCommanderIntent,
            conopsPurposeState: orderData.conopsPurposeState,
            conopObjective: orderData.conopObjective,
            conopEffect: orderData.conopEffect,
            conopGeneral: orderData.conopGeneral,
            /* Tasks: Org */
            taskOrganizationAll: orderData.taskOrganizationAll,
            taskOrganizationSFG10: orderData.taskOrganizationSFG10,
            taskOrganizationNSWU2: orderData.taskOrganizationNSWU2,
            taskOrganizationSOW352: orderData.taskOrganizationSOW352,
            taskOrganizationJSOACE: orderData.taskOrganizationJSOACE,
            taskOrganizationTASKFORCE10: orderData.taskOrganizationTASKFORCE10,
            /* Tasks: Staff */
            taskStaffHq: orderData.taskStaffHq,
            taskStaffCg: orderData.taskStaffCg,
            taskStaffJ1: orderData.taskStaffJ1,
            taskStaffJ2: orderData.taskStaffJ2,
            taskStaffJ3: orderData.taskStaffJ3,
            taskStaffJ4: orderData.taskStaffJ4,
            taskStaffJ5: orderData.taskStaffJ5,
            taskStaffJ6: orderData.taskStaffJ6,
            taskStaffJ8: orderData.taskStaffJ8,
            taskStaffJx: orderData.taskStaffJx,
            taskStaffMed: orderData.taskStaffMed,
            taskStaffPao: orderData.taskStaffPao,
            taskStaffSja: orderData.taskStaffSja,
            taskStaffOther: orderData.taskStaffOther,
            taskStaffSsd: orderData.taskStaffSsd,
            taskStaffAfSea: orderData.taskStaffAfSea,
            /* Task: Coordinating */
            taskCoordinatingInstructions: orderData.taskCoordinatingInstructions
        };
    /* submit item to SPlist*/
    putOrder(dataSet);
});

$('#adminLogOrder').click(function(){
    console.log('adminLogOrder');
    orderData = new buildOrder();
    /* Create Data Set */
    var dataSet =  
        {
            adminLogConceptSustainment: orderData.adminLogConceptSustainment,
            adminLogLogistic: orderData.adminLogConceptSustainment,
            adminLogPersonnel: orderData.adminLogConceptSustainment
        };
    /* submit item to SPlist*/
    putOrder(dataSet);
});

/* update order*/
function putOrder(dataSet){
    /* DEBUG */
    console.log("function: putOrder for Id: ", orderId);
    //INSIDE button click
    var web = new $pnp.Web(_spPageContextInfo.webAbsoluteUrl);
    // Using POST method to create an item as example
    web.getList(`${_spPageContextInfo.webServerRelativeUrl}/Lists/nightOrderData`)
        .items.getById(orderId).update(dataSet)
        .then(function (response) {
            console.log("response ",response.data);
    })
}

/* Once everyting is loaded: fix bug to display label on top and remove text overlaping */
$(document).ready(function() {
    
    /* Hide input texts */
    $.each(elementArray, function (index, value) {
        $(value[0]).hide();
    });

    /* Make all  inputs and textarea active*/
    var inputList = $(document).find('input, textarea');
    $.each(inputList, function (index, value) {
        $('#'+value.id).val() ? $('label[for='+value.id+']').addClass( "active" ): false;
    });
});

/* Toggle input areas */
$("[id$=check]").change(function(){
    var id  = this.id;
    var  doc = [elementArray[this.id][0]]
    this.checked ? $(doc[0]).slideDown('slow') : $(doc[0]).slideUp('slow');
});

/* Enable Show All options */
$('#ALL-check, #JALL-check').change(function(){
        this.checked ? showAllOrganization(): hideAllOrganizations();
});

/* Hide All */
function hideAllOrganizations(){
    $.each(elementArray, function (index, value) {
        $(value[0]).slideUp('slow');
        $("#"+index).removeAttr('checked');
    }); 
}

/* Show All */
function showAllOrganization(){
    $.each(elementArray, function (index, value) {
        $(value[0]).slideDown('slow');
        $("#"+index).prop('checked', 'checked');
    });    
}

/* Update content with variables */
function buildOrder(){ 
    /* General pane */
    this.generalCopyNumber = $("#copyNumber").val();
    this.generalIssuingHeadquarter = $("#issuingHeadquarter").val();
    this.generalPlaceIssue = $("#placeIssue").val();
    this.generalEffectiveDate = $("#effectiveDate").val();
    this.generalOperationPlan = $("#operationPlan").val();
    this.generalReferenceField = $("#referenceField").val();
    /* Situation pane */
    this.situationGeneral = $("#situationGeneral").val();
    this.situationAreaOfConcern = $("#situationAreaOfConcern").val();
    this.situationFriendForce = $("#situationFriendForce").val();
    this.situationEnemyForce = $("#situationEnemyForce").val();
    /* Mission pane */
    this.missionField = $("#missionField").val();
    /* Concept of Operations */
    this.conopCommanderIntent = $("#commanderIntent").val();
    this.conopsPurposeState = $("#purposeState").val();
    this.conopObjective = $("#conopObjective").val();
    this.conopEffect = $("#conopEffect").val();
    this.conopGeneral = $("#conopGeneral").val();
    /* Tasks: Org */
    this.taskOrganizationAll = $("#taskAll").val();
    this.taskOrganizationSFG10 = $("#SFG10").val();
    this.taskOrganizationNSWU2 = $("#NSWU2").val();
    this.taskOrganizationSOW352 = $("#SOW352").val();
    this.taskOrganizationJSOACE = $("#JSOACE").val();
    this.taskOrganizationTASKFORCE10 = $("#TASKFORCE10").val();
    /* Tasks: Staff */
    this.taskStaffHq = $("#HQ").val();
    this.taskStaffCg = $("#CG").val();
    this.taskStaffJ1 = $("#J1").val();
    this.taskStaffJ2 = $("#J2").val();
    this.taskStaffJ3 = $("#J3").val();
    this.taskStaffJ4 = $("#J4").val();
    this.taskStaffJ5 = $("#J5").val();
    this.taskStaffJ6 = $("#J6").val();
    this.taskStaffJ8 = $("#J8").val();
    this.taskStaffJx = $("#JX").val();
    this.taskStaffMed = $("#SPECIALSTAFF-MED").val();
    this.taskStaffPao = $("#SPECIALSTAFF-PAO").val();
    this.taskStaffSja = $("#SPECIALSTAFF-SJA").val();
    this.taskStaffOther = $("#SPECIALSTAFF-OTHER").val();
    this.taskStaffSsd = $("#SSD").val();
    this.taskStaffAfSea = $("#AFSEA").val();
    /* Task: Coordinating */
    this.taskCoordinatingInstructions = $("#coordinatingInstructions").val();
    /* Admin and Logistics */
    this.adminLogConceptSustainment = $("#AdminLogConceptSustainment").val();
    this.adminLogLogistic = $("#adminLogLogistic").val();
    this.adminLogPersonnel = $("#adminLogpersonnel").val();
    /* Command and Control */
    this.commandControl = $("#commandControl").val();
    this.commandCommunications = $("#commandCommunications").val();
    /* Release Status */
    this.releaseOrder = $("#release").val();

    return this;
};

function scroll_to_class(element_class, removed_height) {
    var scroll_to = $(element_class).offset().top - removed_height;
    if($(window).scrollTop() != scroll_to) {
        $('html, body').stop().animate({scrollTop: scroll_to}, 0);
    }
}

function bar_progress(progress_line_object, direction) {
    var number_of_steps = progress_line_object.data('number-of-steps');
    var now_value = progress_line_object.data('now-value');
    var new_value = 0;
    if(direction == 'right') {
        new_value = now_value + ( 100 / number_of_steps );
    }
    else if(direction == 'left') {
        new_value = now_value - ( 100 / number_of_steps );
    }
    progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
}

$(document).ready(function() {
    
    // Fullscreen background 
    $.backstretch("assets/img/backgrounds/1.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
        $.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
        $.backstretch("resize");
    });
    
    // Form 
    $('.f1 fieldset:first').fadeIn('slow');
    
    $('.f1 input[type="text"], .f1 input[type="password"], .f1 textarea').on('focus', function() {
        $(this).removeClass('input-error');
    });
    
    // Next step
    $('.f1 .btn-next').on('click', function() {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        // navigation steps / progress steps
        var current_active_step = $(this).parents('.f1').find('.f1-step.active');
        var progress_line = $(this).parents('.f1').find('.f1-progress-line');
        
        // fields validation
        parent_fieldset.find('input[type="text"], input[type="password"], textarea').each(function() {
            if( $(this).val() == "" ) {
                $(this).addClass('input-error');
                next_step = false;
            }
            else {
                $(this).removeClass('input-error');
            }
        });
        // fields validation
        if( next_step ) {
            parent_fieldset.fadeOut(400, function() {
                // change icons
                current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                // progress bar
                bar_progress(progress_line, 'right');
                // show next step
                $(this).next().fadeIn();
                // scroll window to beginning of the form
                scroll_to_class( $('.f1'), 20 );
            });
        }
    });
    
    // previous step
    $('.f1 .btn-previous').on('click', function() {
        // navigation steps / progress steps
        var current_active_step = $(this).parents('.f1').find('.f1-step.active');
        var progress_line = $(this).parents('.f1').find('.f1-progress-line');
        
        $(this).parents('fieldset').fadeOut(400, function() {
            // change icons
            current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
            // progress bar
            bar_progress(progress_line, 'left');
            // show previous step
            $(this).prev().fadeIn();
            // scroll window to beginning of the form
            scroll_to_class( $('.f1'), 20 );
        });
    });

    // submit
    $('.f1 .btn-submit').on('click', function(e) {    // submit
        orderData = new buildOrder();
        if(this.id === commandControl){
            /* Create Data Set */
            console.log('commandControl');
            var dataSet = [["commandControl",orderData.commandControl],["commandCommunications",orderData.commandCommunications]];
        }else{
            console.log('release commandControl');
            var dataSet = [["releaseOrder",orderData.releaseOrder]];
        }

        // Submit item to SPlist
        putOrder(dataSet);
        console.log(dataSet);
    });
});
