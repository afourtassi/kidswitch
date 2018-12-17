
// ## Helper functions

// Shows slides. We're using jQuery here - the **$** is the jQuery selector function, which takes as input either a DOM element or a CSS selector string.

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function showSlide(id) {
  // Hide all slides
	$(".slide").hide();
	// Show just the slide we want to show
	$("#"+id).show();
}

// Get a random integer less than n.
//function randomInteger(n) {
//	return Math.floor(Math.random()*n);
//}

//shuffle an array
function shuffleArray(a) {

    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    return a;
}


// Get a random element from an array (e.g., <code>random_element([4,8,7])</code> could return 4, 8, or 7). This is useful for condition randomization.
function randomElement(array) {
  return array[randomInteger(array.length)];
}

var $task = new $('<img>').attr('src','images/task.png').height(300).width(400);



var MyInstruct = {
  
    "obj_inst" :"In this part of the survey, you will rate the similarity between some objects.  As shown in the illustration below, in each trial you will see a test object in the center, and 2 reference objects on each side of the scale. Your task is to determine the degree to which the test object resembles the reference objects by a selecting a value from 1 to 7.",
    
    "obj_inst_prac" : "You will now start a practice session. The purpose of this session is to get you familiarized with the objects and the range of similarities you will encounter later.   We encourage you to develop a consistent way of using the ratings. Moreover, try to use the entire 1-7 scale and spread your judgements out evenly as much as possible.",
    
    "sound_inst" :"In this second and last part of the survey, you will rate the similarity between pairs of random sounds.  In each trial you, will hear two sounds (e.g., 'lif' vs. 'neem') and your task is to determine the degree to which the these sounds are similar or different by a selecting a value from 1 to 7. </br></br> Note that some sounds are not in English, and that we are interested in your <i>subjective</i> similarity rating.",
    
    "sound_inst_prac" : "You will now start a practice session. The purpose of this session is to get you familiarized with the sounds and the range of similarities you will encounter later. We encourage you to develop a consistent way of using the ratings. Moreover, try to use the entire 1-7 scale and spread your judgements out evenly as much as possible.",
    
    "real_inst" :"Now you will start the real session!"
    
    
    
    
    
}
var col = "#ffffff";


var bird = new Ecosystem.Genus('bird', {col2:col, col3:col, col3:col, tar1:1, tar2:0 });
    
var flower = new Ecosystem.Genus('flower', {col2:col, col3:col, col4: col,  tar1:1, tar2:0 });

var fish = new Ecosystem.Genus('fish', {col2:col, col3:col, col4:col, tar1:1, tar2:0 });
    
var bug = new Ecosystem.Genus('bug', {col2:col, col3:col, col4:col, tar1:1, tar2:0 });

var tree = new Ecosystem.Genus('tree', {col2:col, col3:col, col4:col, tar1:1, tar2:0 });


var category_name = ["bird", "tree", "fish", "bug"]
var category = [bird, tree, fish, bug]

//We are going to test the following distance ( normalized with respect to the extremes 0 and 1)

var concept_dist = [0.10, 0.30, 0.60]

var myIndices = []

for (i=0; i < category.length ; i++){
    for (j=0; j < concept_dist.length; j++) {
        myIndices.push([i,j]);    

    }
}

var prac_ind = myIndices

var myTrials=[];

//Instructions 1
myTrials.push(myTrial={
        trial_number: 0,
        trial_type: "obj_inst",

        });

myTrials.push(myTrial={
        trial_number: 0,
        trial_type: "obj_inst_prac",
        });

//Pre-trials
for (i=0; i < prac_ind.length-6; i++){
    myTrial = {
        trial_number: i+1,
        trial_type: "obj_prac",
        category:prac_ind[i][0],
        distance:prac_ind[i][1]
    }
    myTrials.push(myTrial);
}

//Instructions 2
myTrials.push(myTrial={
        trial_number: 0,
        trial_type: "real_inst",
        });


for(k=0; k < 1; k++){
    var rand_ind = shuffleArray(myIndices)
    for (i=0; i < rand_ind.length-6; i++){
        myTrial = {
            trial_number: i+1,
            trial_type: "obj_real",
            category:rand_ind[i][0],
            distance:rand_ind[i][1]
        }
        myTrials.push(myTrial);
    }
}
    
var sounds =[
    ["apa_apa", "apa_apa", "apa", "iden",],
    ["ar_a_X_H_a", "ar_a_H_X_a", "ah3a", "sim"],
    ["aka_ama", "ama_aka", "ama", "med"],
    ["neem_lif", "lif_neem", "lif", "diff"],
    ["ama_ama", "ama_ama", "ama", "iden"],
    ["in_a_d_dd_aa", "in_a_dd_d_aa", "adda", "sim"],
    ["aba_ada", "ada_aba", "ada", "med"],
    ["zem_doof", "doof_zem", "doof", "diff"]
]

sound_trials = []
for(i=0; i<sounds.length; i++) {
    
    sound_trials.push([
        
        $('<audio>').attr('src','sounds/'+sounds[i][0]+'.mp3').attr("preload", "auto"),
        
        $('<audio>').attr('src','sounds/'+sounds[i][1]+'.mp3').attr("preload", "auto"),
        
        sounds[i][2],
        sounds[i][3]
        
                    ])
}

//Instructions 1
myTrials.push(myTrial={
        trial_number: 0,
        trial_type: "sound_inst",

        });

myTrials.push(myTrial={
        trial_number: 0,
        trial_type: "sound_inst_prac",

        });

//Pre-trials
for (i=0; i < sound_trials.length; i++){
    myTrial = {
        trial_number: i+1,
        trial_type: "sound_prac",
        sound:sound_trials[i][0],
        name: sound_trials[i][2],
        distance:sound_trials[i][3]
    }
    
    myTrials.push(myTrial);
}


myTrials.push(myTrial={
        trial_number: 0,
        trial_type: "real_inst",

        });


var indices_s = [0,1,2,3,4,5,6]
    
for (k=0; k < 1; k++) {
    
var rand_ind_s = shuffleArray(indices_s)

for (i=0; i < indices_s.length; i++){
    myTrial = {
        trial_number: i+1,
        trial_type: "sound_real",
        sound:sound_trials[rand_ind_s[i]][0],
        name: sound_trials[rand_ind_s[i]][2],
        distance:sound_trials[rand_ind_s[i]][3]
    }
    
    myTrials.push(myTrial);
}
}

myTrials.push(myTrial={
        trial_number: '',
        trial_type: "briefing",
  
        });
/////////////////////////////////////
//THIS IS WHERE THE EXPERIMENT STARTS
////////////////////////////////////


showSlide("instructions");

// ## The main event

var experiment = {
    
  //Objets to be submitted:
    
  brief:{
    native:[],
    second:[],
    problem:[],
    ifproblem:[],
    comment:[]
  },
  data :{
    tri_number:[],
    tri_type:[],
    cat:[],
    cat_name:[],
    dist: [],  
    rating:[]
  },
    
  // Parameters for this sequence.
  trials: myTrials,
  // Experiment-specific parameters - which keys map to odd/even
  // The function that gets called when the sequence is finished.
  end: function() {
    // Show the finish slide.
    showSlide("finished");
    setTimeout(function() { 
        
        turk.submit(experiment) }, 1500);
  },
    
  // log response:
  log_response: function() {

	var response_logged = false;

	
	//Array of radio buttons
	var radio = document.getElementsByName("judgment");
	
	// Loop through radio buttons
	for (i = 0; i < radio.length; i++) {
	    if (radio[i].checked) {
		experiment.data.rating.push(radio[i].value);
		response_logged = true;		    
	    }
	}
	
	
	if (response_logged) {
	   nextButton_Att.blur();
	    
	    // uncheck radio buttons
	    for (i = 0; i < radio.length; i++) {
		radio[i].checked = false
	    }
	    experiment.next();
	} else {
	    $("#testMessage_att").html('<font color="red">' + 
				   'Please make a response!' + 
				   '</font>');
	}
    },  
    
  // The work horse of the sequence - what to do on every trial.
  next: function() {
    // If the number of remaining trials is 0, we're done, so call the end function.
    if (experiment.trials.length == 0) {
      experiment.end();
      return;
    }
    
    $("#testMessage_att").html(''); 	// clear the test message
    // Get the current trial - <code>shift()</code> removes the first element of the array and returns it.
    var current_trial = experiment.trials.shift();
      
    if (current_trial.trial_type == "sound_inst" || "obj_inst_prac" || "sound_inst_prac" || "real_inst")
        {
            showSlide("instructions2");
   $("#instruct_dyn").html(MyInstruct[current_trial.trial_type])
   
   $('#pic_task').empty();
        }
      
    if (current_trial.trial_type == "obj_inst" )
        {
            showSlide("instructions2");
            $("#instruct_dyn").html(MyInstruct[current_trial.trial_type])
            
            $("#pic_task").html($task);
        }
      
      
      
    if (current_trial.trial_type == "obj_prac" || current_trial.trial_type == "obj_real" ) 
    {   
        var current_category = category[current_trial.category];
        var current_name = category_name[current_trial.category];
        var current_distance = concept_dist[current_trial.distance];
 
      showSlide("stage");
        
    $('#object_test').empty(); 
    $('#obj_0').empty();
    $('#obj_1').empty(); 
    $("#sound_ext0").html("");
    $("#sound_ext1").html("");
        
    // Display the pictures.
        
    current_category.draw('object_test', {prop1:current_distance, 
    prop2:0.5, col1:col, col2:col,col3:col,col4:col, tar1:0, tar2:0, tar3:0}, 1)
    
    current_category.draw('obj_0', {prop1:0, 
    prop2:0.5, col1:col, col2:col,col3:col,col4:col, tar1:0, tar2:0, tar3:0}, 1)
    
    current_category.draw('obj_1', {prop1:1, 
    prop2:0.5, col1:col, col2:col,col3:col,col4:col, tar1:0, tar2:0, tar3:0}, 1)
    
    experiment.data.tri_number.push(current_trial.trial_number);
    experiment.data.tri_type.push(current_trial.trial_type);
    experiment.data.cat.push(current_name);
    experiment.data.dist.push(current_distance);

    }

      if (current_trial.trial_type == "sound_prac" || current_trial.trial_type == "sound_real" ) 
    {   
        var current_sound = current_trial.sound;
        var current_name = current_trial.name;
        var current_distance =current_trial.distance; 
 
      showSlide("stage_sound");
        
    
        
    current_sound.get(0).play();
    $("#sound_instruction").html("Listen carefully!");
        
    current_sound.one('ended', function() {
 
    showSlide("stage");
    $('#object_test').empty(); 
    $('#obj_0').empty();
    $('#obj_1').empty(); 
    $("#sound_ext0").html("Very similar");
    $("#sound_ext1").html("Very different");
        
    experiment.data.tri_number.push(current_trial.trial_number);
    experiment.data.tri_type.push(current_trial.trial_type);
    experiment.data.cat.push(current_name);
    experiment.data.dist.push(current_distance);
        
    });
        
    
    }
      
      else if (current_trial.trial_type == "briefing")
        {
            showSlide("briefing");
            
            $( "#nextButton_brief" ).click(function() {
            experiment.brief.native.push(document.getElementById("native").value);
                
            experiment.brief.second.push(document.getElementById("second").value);
            experiment.brief.problem.push(document.getElementById("problem").value);
            experiment.brief.ifproblem.push(document.getElementById("ifproblem").value);
                
            experiment.brief.comment.push(document.getElementById("comment").value);

                
            });
        
        }


    }
  
}

