/* Array to hold all ID elements */
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


/*Live Update*/
$("input, textarea").keyup(function(){
     var orderData = new buildOrder();
     console.log(orderData);
});

/* When click Initiate Order */
$('#initiateOrder').click(function(){
    console.log('initiateOrder');
    var orderData = new buildOrder();
    itemProperties = orderData;
    /* submit item to SPlist*/
    createDraftRequest();
    /*
    createListItem(_spPageContextInfo.webAbsoluteUrl,'nightOrderData',itemProperties,function(entity){
        console.log('New task ' + entity.Title + ' has been created');
    }, function(error){
        console.log(JSON.stringify(error));
    });
    */
});

function createDraftRequest(){
    jQuery.noConflict();
    $().SPServices({
        operation: "UpdateListItems",
        async: false,
        batchCmd: "New",
        listName:"nightOrderData",
        valuepairs:[["Title", 'test title']],
        completefunc: function (xData, Status) {
            $(xData.responseXML).SPFilterNode("z:row").each(function(){
                var newId = $(this).attr("ows_ID");
                console.log(newId);   
            });
        }
    });
    
}


/* Create SPList Item */
function createListItem(siteUrl,listName, itemProperties, success, failure) {
    var itemType = getItemTypeForListName(listName);
    itemProperties["__metadata"] = { "type": itemType };
    $.ajax({
        url: siteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items",
        type: "POST",
        contentType: "application/json;odata=verbose",
        data: JSON.stringify(itemProperties),
        headers: {
            "Accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        success: function (data) {
            success(data.d);
        },
        error: function (data) {
            failure(data);
        }
    });
}

/* Get List Item Type metadata */
function getItemTypeForListName(name) {
    return "SP.Data." + name.charAt(0).toUpperCase() + name.split(" ").join("").slice(1) + "ListItem";
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

/* update content with variables */
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
    this.AdminLogConceptSustainment = $("#AdminLogConceptSustainment").val();
    this.adminLogLogistic = $("#adminLogLogistic").val();
    this.AdminLogPersonnel = $("#adminLogpersonnel").val();
    /* Command and Control */
    this.commandControl = $("#commandControl").val();
    this.commandCommunications = $("#commandCommunications").val();


    return JSON.stringify(this);
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
	
    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$.backstretch("resize");
    });
    
    /*
        Form
    */
    $('.f1 fieldset:first').fadeIn('slow');
    
    $('.f1 input[type="text"], .f1 input[type="password"], .f1 textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    // next step
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
    $('.f1 .btn-submit').on('click', function(e) {
    	
        console.log(this.id);
    	// fields validation
    	/*
        $(this).find('input[type="text"], input[type="password"], textarea').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
        */
    	// fields validation
    	//alert('Sent');
    });
    
});
