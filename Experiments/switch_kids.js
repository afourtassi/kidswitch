//////////////////
//Helper functions
///////////////////

// Shows slides. We're using jQuery here - the **$** is the jQuery selector function, which takes as input either a DOM element or a CSS selector string.


function showCurrent(event)
{
    //var duration = event.duration;
    var duration = event.duration;
   
}

function randomInteger(n) {
	return Math.floor(Math.random()*n);
}

function randomElement(array) {
  return array[randomInteger(array.length)];
}

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



////////////////////////////////////////////////
//Instructions for the Task and preTask training
///////////////////////////////////////////////

var MyInstruct = {
  


    "train_sound" :"Now you will be trained to trials on sound difference!",
    
    "refresh" :"<font size=6><b>Refresh!</b></font>",
    
    "PracticeObj":"<font size=6><b>Practice Object discrimination!</b></font>",
    
    "Obj":"<font size=6><b>Real Object discrimination!</b></font>",
    
    "PracticeSnd":"<font size=6><b>Practice Sound discrimination!</b></font>",
    
    "Snd":"<font size=6><b>Real Sound discrimination!</b></font>",
    
    "PracticeWord":"<font size=6><b>Practice Word learning!</b></font>",
    
    "Word":"<font size=6><b>Real Word learning</b></font>",
    
    "Testing":"<font size=6><b>Now testing will begin!</b></font>",
    
    "WordTest":"<font size=6><b>Now Test! </font></b><br><br><font size=4> Next time the test will appear immediately after object presenttion!</font>",
    
    "train_object" :"<font size=6><b>Now you will be trained to trials on object difference!</b></font>",
    
    "sound" :"Next are the real trials on sound difference!",
    
    "object" :"Next are the real trials on object difference!",
    
    
    "learn_pre_inst": "An alien will be naming to his friend a series of two objects from the alien planet.  <br><br> You will now see some training examples.  You sould listen carefully and try to learn the names of the objects. You will later perform a task that tests your knowledge of these words.", 

    
    "again": "Press to listen again",
    
    "newTrial": "Press to start a new trial",
    
    "learn_pre1":"In this example, the alien will be speaking in English. <br><br>Please listen carefully and try to learn the words.",
    
    
    "test_pre1": "This is an example of word knowledge test.<br><br>The alien will name one of the two previously seen objects. You should help the alien's friend decide which of the two objects corresponds to the name.",
    
    
    "learning":"Press to hear the words! <br><br> The test will follow after this presentation!",
    
    "testing":"Press to start the test", 
    
    "end_pre1":"Click Continue for next!",
    
    "example2":"Now you will see an example were objects are ambiguous. <br><br>Pay attention to the alien's words: if the alien uses the same word (e.g., ABA-ABA), it is an indication that both objects belong to the same category. Conversely, it the alien uses different words (ABA-ADA), it is an indication that the objects belong to different categories. <br><br> Please listen carefully and try to learn the unique name (if there is one category) or the two names (if there are two categories).", 
    
    "example3":"Now you will see an example where, not only the objects, but also the sounds are ambiguous (non English sounds). <br><br> Please listen carefully and try to learn the unique name (if you think there is one category) or the two names (if you think there are two categories). <br><br><b>IMPORTANT: to overcome the difficulty that both the objects and the sounds can be ambiguous, you should rely on BOTH the similarity of the objects and the similarity of the sounds to decide if there is one or two categories<b>", 
    
    
    "nonEng":"In the previous examples, we used clear english sounds. Next (and in the real experiment) the sounds will be in an alien language. <br><br> Another thing that makes this new task difficult is the fact that, sometimes, the same word can be pronounced slightly differently.  The difficulty is that you should now decide if the objects are being described by the same word (even when pronounced slightly differently) or if they are being described by different words in the alien language. <br><br> Click Continue to read more instructions!", 
    
    
    
    "learn_pre2": "In this example the alien will NOT be speaking in English, but in an alien language. <br><br>In this langauge, words are very similar (e.g., 'ABA', 'ADA'), and it is sometimes difficult to tell when two words are the same (e.g., 'ABA', 'ABA') and when they are different (e.g., 'ABA', 'ADA'). <br><br> You sould listen carefully and try to learn the names of the objects.", 
    
    "test_pre2": "This is an example of the test. <br><br>If you think the objects were named by different words (e.g., ABA-ADA), then you should pick the correct object. <br><br>If, instead, you think the objects were named by the same word (e.g., ABA-ABA), then it does not matter which object you pick.",
    
    "test_pre3": "This is an example of the test. <br><br> If you think the objects were named by different words, then you should pick the correct object. <br><br> If you think the objects were named by the same word, then it does not matter which object you pick.",
    
    "end_pre2": "<b><font size='5'>If you are ready, click Continue to start the real experiment</font></b>",
    
    "instruct_real": "<b>Now you will start the real experiment!</b> <br><br>Remember that both the objects and the sounds can be ambiguous. The objects are ambiguous because they share features of both prototypes, and the sounds are ambiguous because it is not always clear if the same word is pronouced slightly differently, or if there are two words! <br><br> To overcome this difficulty, remember that you should rely on both the similarity of the sounds, and the similarity of the objects.<br><br><b>IMPORTANT: Every naming situation is different and independent, and the number of words can change from one situation to another depending on both the similarity of the sounds and the similarity of the objects, so do NOT assume there is one or two words based only on the sounds or only on the object!</b>",
    
    "learn_real": "Please listen carefully and try to learn the words!",
    
    "test_real": "Press to hear the test word!",
    
    "end_real": "Press to start a new naming situation!"
    
}


function end_block(block){
return "<b>You have finished "+block+ " out of 4 blocks!</b><br><br> Note that each block is totally independent. Your answers in one block need not be related to your other answers in subsequent blocks.";
}


var scale_inst_eg =  "In the previous example, we used objects whose identity was clear (the prototypes). However, real objects in the alien planet vary in their shapes. Their identity (that is, whether they belong to the category of prototype 1 or the category of prototype 2) can sometimes be ambiguous since they share features from both prototypes. <br><br>Below is an illustration of this variabiliy. Please take a moment to explore it!"

var scale_inst = "Please take a moment to explore the range of variability of the objects!"

///////////////////////
//Preload the stimuli
///////////////////////


var silence = new $('<audio>').attr('src','sounds/mysilence.mp3').attr("preload", "auto");



//var $empty_l = new $('<img>').attr('src','images/empty.jpg').height(50).width(50);

//Preloading the alien picture used for illustration: 

var $alien = new Array();
$alien.push($('<img>').attr('src','images/alien2.png').height(130).width(180));
$alien.push($('<img>').attr('src','images/alien1.png').height(130).width(180));



var us_a_d_b_a = $('<audio>').attr('src','sounds/us_A_d_b_A.mp3').attr("preload", "auto");

var us_a_b_b_a = $('<audio>').attr('src','sounds/us_A_b_b_A.mp3').attr("preload", "auto");

var us_a_b_a = $('<audio>').attr('src','sounds/us_A_b_A.mp3').attr("preload", "auto");


var col = "#ffffff";
var col1 = "#EC7063",
    col2 = "#AF7AC5",
    col3 = "#5499C7",
    col4 = "#48C9B0";

var colors = shuffleArray([col1, col2, col3, col4]);

var bird = new Ecosystem.Genus('bird', {col2:col, col3:col, col3:col, tar1:1, tar2:0 });
    
var flower = new Ecosystem.Genus('flower', {col2:col, col3:col, col4: col,  tar1:1, tar2:0 });

var fish = new Ecosystem.Genus('fish', {col2:col, col3:col, col4:col, tar1:1, tar2:0 });
    
var bug = new Ecosystem.Genus('bug', {col2:col, col3:col, col4:col, tar1:1, tar2:0 });

var CatEx = randomElement(["bird", "flower", "fish", "bug"])



var Concept_pre0 = [{category:CatEx, prop:0, col1:col}, {category:CatEx, prop:1, col1:col}]


var Sound_pre0 = [us_a_d_b_a,
                  us_a_b_b_a, 
                 us_a_b_a]


//Preloading Task stim (0: left, 1: right)
var rando=0;




//Stimuli for discrimination
/////////////////////////////


var category_discrim = shuffleArray(["bird", "flower", "fish", "bug"])
//Concept stimuli

var color ={
    "bird":col1,
    "flower":col2,
    "fish":col3,
    "bug":col4
}


var prop_sim = 0.3
var prop_diff= 1

var ConceptStim_discrim=[
    
                //Trials differents
                  [{category:category_discrim[0], prop:0, col1:col},{category:category_discrim[0], prop:0.99, col1:col}, 'diff'],
                  [{category:category_discrim[1], prop:0, col1:col},{category:category_discrim[1], prop:1, col1:color[category_discrim[1]]}, 'diff'],
                  [{category:category_discrim[2], prop:0, col1:col},{category:category_discrim[2], prop:0.99, col1:col}, 'diff'],
                  [{category:category_discrim[3], prop:0, col1:col},{category:category_discrim[3], prop:1, col1:color[category_discrim[3]]}, 'diff'],
    
                //Trials same
                  [{category:category_discrim[0], prop:0, col1:col},{category:category_discrim[0], prop:0, col1:col}, 'same'],
                  [{category:category_discrim[1], prop:0, col1:col},{category:category_discrim[1], prop:0, col1:col}, 'same'],
                  [{category:category_discrim[2], prop:0, col1:col},{category:category_discrim[2], prop:0, col1:col}, 'same'],
                  [{category:category_discrim[3], prop:0, col1:col},{category:category_discrim[3], prop:0, col1:col}, 'same']
                  ]
    

//sound stimuli
//I should pick in random some

var SoundLabels_discrim=[
    
                //different sounds

                ["ar_a_xx_G_a", "ar_a_G_xx_a", "diff", "ar2"],
                ["us_A_b_d_A", "us_A_d_b_A", "diff", "us"],
    
                //same sounds

                ["ar_a_xx_G_a", "ar_a_G_xx_a", "same", "ar2"],
                ["us_A_b_b_A", "us_A_d_d_A", "same", "us"]
    
                ]

var SoundStim_discrim = new Array()

for(i=0; i< SoundLabels_discrim.length; i++) {
     SoundStim_discrim.push([
         
                     $('<audio>').attr('src','sounds/'+SoundLabels_discrim[i][0]+'.mp3').attr("preload", "auto"),
                     
                     $('<audio>').attr('src','sounds/'+SoundLabels_discrim[i][1]+'.mp3').attr("preload", "auto"),
         
                     SoundLabels_discrim[i][2],
                     SoundLabels_discrim[i][3]                    
                    ])
}



//For each kid, change the mapping between the sound and the 

var category = shuffleArray(["bird", "flower", "fish", "bug"])
//Concept stimuli

//define similar and different proportion



var ConceptStim=[
               
                  [{category:category[0], prop:0, col1:col},{category:category[0], prop:0.5, col1:col}, 'similar'],
                  [{category:category[1], prop:0, col1:col},{category:category[1], prop:0.5, col1:col}, 'similar'],
                  [{category:category[3], prop:0, col1:col},{category:category[3], prop:0.5, col1:col}, 'similar'],
                  [{category:category[2], prop:0, col1:col},{category:category[2], prop:1, col1:col}, 'different'],
                  [{category:category[3], prop:0, col1:col},{category:category[3], prop:1, col1:col}, 'different'],
                  [{category:category[0], prop:0, col1:col},{category:category[0], prop:1, col1:col}, 'different']
                  ]
    

//sound stimuli
//

    
var SoundLabels=[
                ["ar_a_xx_G_a", "ar_a_G_xx_a", "similar"],
                ["us_A_b_d_A", "us_A_d_b_A", "different"],
                ["neem_lif", "lif_neem", "maximal"],
                ["ar_a_xx_G_a", "ar_a_G_xx_a", "similar"],
                ["us_A_b_d_A", "us_A_d_b_A", "different"],
                ["neem_lif", "lif_neem", "maximal"]
                ]

var SoundLabels_test = [
                ["ar_a_xx_a", "ar_a_G_a", "similar"],
                ["us_A_b_A", "us_A_d_A", "different"],
                ["neem", "lif", "maximal"],
                ["ar_a_xx_a", "ar_a_G_a", "similar"],
                ["us_A_b_A", "us_A_d_A", "different"],
                ["neem", "lif", "maximal"]
                ]



var SoundStim = new Array()
var SoundStim_test = new Array()

for(i=0; i< SoundLabels.length; i++) {
    
    SoundStim.push([
                     $('<audio>').attr('src','sounds/'+SoundLabels[i]      [0]+'.mp3').attr("preload", "auto"),
                     
                     $('<audio>').attr('src','sounds/'+SoundLabels[i][1]+'.mp3').attr("preload", "auto"),
        
                     SoundLabels[i][2]  
        
                    ])
}

for(i=0; i< SoundLabels_test.length; i++) {
    
    SoundStim_test.push([
                     $('<audio>').attr('src','sounds/'+SoundLabels_test[i]      [0]+'.mp3').attr("preload", "auto"),
                     
                     $('<audio>').attr('src','sounds/'+SoundLabels_test[i][1]+'.mp3').attr("preload", "auto"),
        
                     SoundLabels_test[i][2]  
        
                    ])
}

//do I need any mapping at this point?

//ok we have 4 conditions:

//Here I only have to randomize the mapping of words-objects for each kid

//for each condition generate a random mapping


// 0 is code for "same" and 1 code for "different"
var myKeyBindings = {"Q": 0, "P": 1};
   

$(".same-key").text("Q");
$(".different-key").text("P");

///////////////////////
//Build trial sequence:
////////////////////////

//Here we separete the sequences fo each condition in order to be able to randomize theur order for each subject
var myTrials=[];


//preTask traning 1
//////////////////


//The final slide for the briefing
myTrials.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "briefing",
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        dist: '',
        condition:''
        });

/*
//Practive trial for objects difference
myTrial = {
        condition: '',
        trial:'',
        trial_type: 'PracticeObj',
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        correct:'',
        sound_val:'',
        concept_val:'',
        experiment:''
    }
    
    myTrials.push(myTrial);


//Same object
myTrial = {
        condition: 'concept',
        trial:'',
        trial_type: "discrim_pre",
        item:Concept_pre0[0].category,
        concept_l:Concept_pre0[0],
        concept_r:Concept_pre0[0],
        sound:silence,
        sameDiff:'same',
        correct:'',
        sound_val:'',
        concept_val:0,
        experiment:'discrim'
    }
    
    myTrials.push(myTrial);

 myTrials.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "newTrial",
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        dist: '',
        condition:''
        
        });
    

//different objects

myTrial = {
        condition: 'concept',
        trial:'',
        trial_type: "discrim_pre",
        item:Concept_pre0[0].category,
        concept_l:Concept_pre0[0],
        concept_r:Concept_pre0[1],
        sound:silence,
        sameDiff:'different',
        correct:'',
        sound_val:'',
        concept_val:1,
        experiment:'discrim'
    }
    
    myTrials.push(myTrial);


myTrial = {
        condition: '',
        trial:'',
        trial_type: 'Obj',
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        correct:'',
        sound_val:'',
        concept_val:'',
        experiment:''
    }
    
    myTrials.push(myTrial);



var randTrials=shuffleArray([0,1,2,3,4,5,6,7])
var ConceptRandom = shuffleArray([0,0,0,0,1,1,1,1])



for (i=0; i<ConceptStim_discrim.length; i++){//iterate over blocks  
    
    
    myTrials.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "newTrial",
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        dist: '',
        condition:''
        
        });
    
       
    myTrial = {
        condition: 'concept',
        trial:randTrials[i],
        trial_type: "discrim",
        item:ConceptStim_discrim[randTrials[i]][0].category,
        concept_l:ConceptStim_discrim[randTrials[i]][ConceptRandom[i]],
        concept_r:ConceptStim_discrim[randTrials[i]][1-ConceptRandom[i]],
        sound:silence,
        sameDiff:ConceptStim_discrim[randTrials[i]][2],
        correct:'',
        sound_val:'',
        concept_val:ConceptStim_discrim[randTrials[i]][1].prop,
        experiment:'discrim'
    }
    
    myTrials.push(myTrial);
        
}



myTrial = {
        condition: '',
        trial:'',
        trial_type: 'PracticeSnd',
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        correct:'',
        sound_val:'',
        concept_val:'',
        experiment:''
    }
    
    myTrials.push(myTrial);

//practice trails for sound difference

//practice same
myTrial = {
        condition: 'sound',
        trial:'',
        trial_type: "discrim_pre",
        item:'',
        concept_l:'empty',
        concept_r:'empty',
        sound:Sound_pre0[0],
        sameDiff:'different',
        correct:'',
        sound_val:'',
        concept_val:'',
        experiment:'discrim'
    }
    
    myTrials.push(myTrial);

 myTrials.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "newTrial",
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        dist: '',
        condition:'discrim'
        
        });
    

//practice different
myTrial = {
        condition: 'sound',
        trial:'',
        trial_type: "discrim_pre",
        item:'',
        concept_l:'empty',
        concept_r:'empty',
        sound:Sound_pre0[1],
        sameDiff:'same',
        correct:'',
        sound_val:'',
        concept_val:'',
        experiment:'discrim'
    }
    
    myTrials.push(myTrial);

myTrial = {
        condition: '',
        trial:'',
        trial_type: 'Snd',
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        correct:'',
        sound_val:'',
        concept_val:'',
        experiment:''
    }
    
    myTrials.push(myTrial);


for (d=0; d<2; d++){
    
var randTrials=shuffleArray([0,1,2,3])
var SoundRandom = shuffleArray([0,0,1,1])



for (i=0; i<SoundStim_discrim.length; i++){//iterate over blocks  
         
        
    myTrials.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "newTrial",
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        dist: '',
        condition:''
        
        });
        
    myTrial = {
        condition: 'sound',
        trial:randTrials[i],
        trial_type: "discrim",
        item:SoundLabels_discrim[randTrials[i]][ConceptRandom[i]],
        concept_l:'empty',
        concept_r:'empty',
        sound:SoundStim_discrim[randTrials[i]][ConceptRandom[i]],
        sameDiff:SoundStim_discrim[randTrials[i]][2],
        correct:'',
        sound_val:SoundStim_discrim[randTrials[i]][3],
        concept_val:'',
        experiment:'discrim'
    }
    
    myTrials.push(myTrial);
    
    
}
    
}
*/


myTrial = {
        condition: '',
        trial:'',
        trial_type: 'PracticeWord',
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        correct:'',
        sound_val:'',
        concept_val:'',
        experiment:''
    }
    
    myTrials.push(myTrial);


//Practice for different

myTrial = {
        condition: 'joint',
        trial:'',
        trial_type: "Train_pre",
        item:'',
        concept_l:Concept_pre0[0],
        concept_r:Concept_pre0[1],
        sound:Sound_pre0[0],
        sameDiff:'',
        correct:'',
        concept_val:'',
        sound_val:'',
        experiment:'word'
    }
    
    myTrials.push(myTrial);


myTrial = {
        condition: '',
        trial:'',
        trial_type: 'WordTest',
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        correct:'',
        sound_val:'',
        concept_val:'',
        experiment:''
    }
    
    myTrials.push(myTrial);

myTrial = {
        condition: 'joint',
        trial:'',
        trial_type: "Test_pre",
        item:'',
        concept_l:Concept_pre0[0],
        concept_r:Concept_pre0[1],
        sound:Sound_pre0[2],
        sameDiff:'',
        correct:'',
        concept_val:'',
        sound_val:'',
        experiment:'word'
    }
    
    myTrials.push(myTrial);


myTrials.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "newTrial",
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        concept_val:'',
        sound_val: '',
        condition:''
        
        });

myTrial = {
        condition: 'joint',
        trial:'',
        trial_type: "Train_pre",
        item:'',
        concept_l:Concept_pre0[0],
        concept_r:Concept_pre0[1],
        sound:Sound_pre0[0],
        sameDiff:'',
        correct:'',
        concept_val:'',
        sound_val:'',
        experiment:'word'
    }
    
    myTrials.push(myTrial);



myTrial = {
        condition: 'joint',
        trial:'',
        trial_type: "Test_pre",
        item:'',
        concept_l:Concept_pre0[1],
        concept_r:Concept_pre0[0],
        sound:Sound_pre0[2],
        sameDiff:'',
        correct:'',
        concept_val:'',
        sound_val:'',
        experiment:'word'
    }
    
    myTrials.push(myTrial);



myTrial = {
        condition: '',
        trial:'',
        trial_type: 'Word',
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        correct:'',
        sound_val:'',
        concept_val:'',
        experiment:''
    }
    
    myTrials.push(myTrial);


//shuffle conditions
cond = shuffleArray([0,1,2,3,4,5])

//Randomize the object-Sound mapping 
var map1 = randomElement([0,1]),
        map2 = randomElement([0,1]),
        map3 = randomElement([0,1]),
        map4 = randomElement([0,1]),
        map5 = randomElement([0,1]),
        map6 = randomElement([0,1]);
    
    var mapping = [map1, map2, map3, map4, map5, map6]
                             
for (i=0; i<6; i++){//iterate over conditions 
    
    var c = cond[i],
        m = mapping[i]
    
    myTrials.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "newTrial",
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        concept_val:'',
        sound_val: '',
        condition:''
        
        });
    
    //iterate over trials (here we have 2 trials)
    /////////////////////
    
    
    //randomize left-right
    var ObjOrder_train = shuffleArray([[0,1],[0,1],[1,0],[1,0]])
    
    //Change: keep the same order in training to make it easier
    var ObjOrder_train_fix = shuffleArray([[0,1],[0,1],[0,1],[0,1]])
    
    
    //iterate over train repititions within a trial
    for (k=0; k<4; k++){
        
        var j=ObjOrder_train_fix[k]

      
    myTrial = {
        condition: c,
        trial:k,
        trial_type: "Train",
        item:ConceptStim[c][0].category,
        concept_l:ConceptStim[c][j[0]],
        concept_r:ConceptStim[c][j[1]],
        sound:SoundStim[c][j[m]],
        sameDiff:'',
        correct:correct,
        concept_val:ConceptStim[c][2],
        sound_val:SoundStim[c][2],
        experiment:'word'
    }
    
    myTrials.push(myTrial);
        
        
    }
    
    myTrial = {
        condition: '',
        trial:'',
        trial_type: 'Testing',
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        correct:'',
        sound_val:'',
        concept_val:'',
        experiment:''
    }
    
    myTrials.push(myTrial);

    
    var ObjOrder_test = shuffleArray([[0,1],[0,1],[1,0],[1,0]])
    
    var SndOrder_test = shuffleArray([0,0,1,1])

        
    //iterate over test questions within a trial 
    for (k=0; k<4; k++){
    
    
     var l=ObjOrder_test[k],
         t=SndOrder_test[k];
    
     //correct answer
        var correct= l[m]==t? 0: 1; 
    
        
   //testing
    myTrial = {
        condition: c,
        trial:1,
        trial_type: "Test",
        item:ConceptStim[c][0].category,
        concept_l:ConceptStim[c][l[0]],
        concept_r:ConceptStim[c][l[1]],
        sound:SoundStim_test[c][t],
        sameDiff:'',
        correct:correct,
        concept_val:ConceptStim[c][2],
        sound_val:SoundStim_test[c][2],
        experiment:'word'
    }
    
    myTrials.push(myTrial);
        
        
    
   }
       
    
    
    //Second block
    
    
    myTrials.push(myTrial={
        trial_number: '',
        trial_order:'',
        trial_type: "refresh",
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        concept_val:'',
        sound_val: '',
        condition:''
        
        });
    
    //randomize left-right
    var ObjOrder_train = shuffleArray([[0,1],[0,1],[1,0],[1,0]])
    
    //Change: keep the same order in training to make it easier
    var ObjOrder_train_fix = shuffleArray([[0,1],[0,1],[0,1],[0,1]])
    
    
    //iterate over train repititions within a trial
    for (k=0; k<2; k++){
        
        var j=ObjOrder_train_fix[k]

      
    myTrial = {
        condition: c,
        trial:k,
        trial_type: "Train",
        item:ConceptStim[c][0].category,
        concept_l:ConceptStim[c][j[0]],
        concept_r:ConceptStim[c][j[1]],
        sound:SoundStim[c][j[m]],
        sameDiff:'',
        correct:correct,
        concept_val:ConceptStim[c][2],
        sound_val:SoundStim[c][2],
        experiment:'word'
    }
    
    myTrials.push(myTrial);
        
        
    }
    
    myTrial = {
        condition: '',
        trial:'',
        trial_type: 'Testing',
        item:'',
        concept_l:'',
        concept_r:'',
        sound:'',
        sameDiff:'',
        correct:'',
        sound_val:'',
        concept_val:'',
        experiment:''
    }
    
    myTrials.push(myTrial);

    
    var ObjOrder_test = shuffleArray([[0,1],[0,1],[1,0],[1,0]])
    
    var SndOrder_test = shuffleArray([0,0,1,1])

        
    //iterate over test questions within a trial 
    for (k=0; k<4; k++){
    
    
     var l=ObjOrder_test[k],
         t=SndOrder_test[k];
    
     //correct answer
        var correct= l[m]==t? 0: 1; 
    
        
   //testing
    myTrial = {
        condition: c,
        trial:2,
        trial_type: "Test",
        item:ConceptStim[c][0].category,
        concept_l:ConceptStim[c][l[0]],
        concept_r:ConceptStim[c][l[1]],
        sound:SoundStim_test[c][t],
        sameDiff:'',
        correct:correct,
        concept_val:ConceptStim[c][2],
        sound_val:SoundStim_test[c][2],
        experiment:'word'
    }
    
    myTrials.push(myTrial);
        
        
    
   }

   
    
}
    


/////////////////////////////////////
//THIS IS WHERE THE EXPERIMENT STARTS
////////////////////////////////////

showSlide("instructions");

// ## The main event

var experiment = {
    
  
  brief:{
    age:[],
    gender:[],
    native:[],
    problem:[],
    ifproblem:[],
    comment:[]
  },
    
  data :{
    condition:[],
    trial:[],  
    tri_type:[],
    item:[],  
    concept_val: [], 
    sound_val:[],
    sameDiff: [],
    answer:[],
    correct:[],
    experiment:[]
      
  },
  // Parameters for this sequence.
  trials: myTrials,
  // Experiment-specific parameters - which keys map to odd/even
  keyBindings: myKeyBindings,
  // The function that gets called when the sequence is finished.
  end: function() {
    // Show the finish slide.
    showSlide("finished");
    setTimeout(function() { 
        
            //Decrement 
            //if (turk.workerId.length > 0){
            //var xmlHttp = null;
            //xmlHttp = new XMLHttpRequest();
            //xmlHttp.open("GET", "https://langcog.stanford.edu/cgi-bin/subject_equalizer/decrementer.php?filename=" + filename + "&to_decrement=" + cond, false);
            //xmlHttp.send(null);
            //}
        turk.submit(experiment) }, 1500);
  },
  // The work horse of the sequence - what to do on every trial.
  next: function() {
    // If the number of remaining trials is 0, we're done, so call the end function.
    if (experiment.trials.length == 0) {
      experiment.end();
      return;
    }
    
    // Get the current trial - <code>shift()</code> removes the first element of the array and returns it.
    var current_trial = experiment.trials.shift();
    
        
    if (current_trial.trial_type == "scale") {
        
        showSlide("Task_instructions");
        
        
        var my_condition=current_trial.conditon
        
        if (my_condition=="example") {
            $("#MyTask").html(scale_inst_eg);
        }
        else {
            $("#MyTask").html(scale_inst);
        }
        
        var categ= current_trial.concept_l;     
        
        var mapToPic = {"fish": fish_continuum,
                        "bug": bug_continuum,
                        "flower": flower_continuum,
                        "bird": bird_continuum}
        
        var my_continuum = mapToPic[categ]
        //$('#continuum').empty()
       
        $('#continuum').html(my_continuum);
        
    }
    
            

 else if (current_trial.trial_type == "briefing")
        {
            showSlide("briefing");
            
            $( "#nextButton_brief" ).click(function() {
            
            experiment.brief.age.push(document.getElementById("age").value);
            experiment.brief.gender.push(document.getElementById("gender").value);
            experiment.brief.native.push(document.getElementById("native").value);

                
            });
        
        }

else if (current_trial.trial_type == "discrim" || current_trial.trial_type == "discrim_pre" ) 
    {
        
        var current_concept_l= current_trial.concept_l;
        var current_concept_r= current_trial.concept_r;      
        var current_sound= current_trial.sound;
      

        
    showSlide("stage_discrim");
      
    
    //The following is how/when the sounds and objects are played/shown
    ///////////////////////////////////////////////////////////////////
   // $("#pic_left").html($empty_l);
    //$("#pic_right").html($empty_r);
    
        
    //play the first sound
    
    current_sound.get(0).play();
        
    $("#instruct_dynamic").html("Listen carefully!"); 
        
        
    current_sound.get(0).ontimeupdate = function() {
      $('#word_left_d').empty();  
      $('#word_right_d').empty();
      if (current_concept_l != 'empty'){
    
      var category_l = current_concept_l.category;
      var prop1 = current_concept_l.prop;
    //var prop2 = 1 - prop1
      var prop2 = 0.5;
      var colo1 =  current_concept_l.col1;
      var col = "#ffffff";
    
      var categ_l = new Ecosystem.Genus(category_l, {col1:colo1, col2:colo1, col3:colo1, col4:colo1, tar1:1, tar2:0 });
        
      categ_l.draw('word_left_d', {prop1:prop1, prop2: prop2, col1:colo1, col2:colo1,col3:colo1,col4:colo1,tar1:0, tar2:0, tar3:0}, 1)
      
        
      showCurrent(this);
        var cur_time = this.currentTime;
        var duration = this.duration;
          
        
        if (cur_time > duration/2 ){
            
          $('#word_left_d').empty();
            
          $('#word_right_d').empty();
        
          var category_r = current_concept_r.category;
          var prop1 = current_concept_r.prop;
          var prop2 = 0.5;
    //var prop2 = 1 - prop1
          var colo1 = current_concept_r.col1;
          var col = "#ffffff";
    
          var categ_r = new Ecosystem.Genus(category_r, {col1:colo1, col2:colo1, col3:colo1, col4:colo1, tar1:1, tar2:0 });
    
          categ_r.draw('word_right_d', { 
                                prop1:prop1, prop2: prop2,
                                col1:colo1, col2:colo1, col3:colo1, col4:colo1,
                                tar1:0, tar2:0, tar3:0}, 0.5);
        
          // $("#pic_right").html(current_concept_r); 
        
         
        }
    }
    };
        
    current_sound.one('ended', function() {

        
    $('#word_right_d').empty();
 

   
    
        
    });
    
   
    
    // Get the current time so we can compute reaction time later.
    var startTime = (new Date()).getTime();
        
    var keyPressHandler_discrim = function(event) {

        var same = $(event.target).closest("div").is("#answer_left_d");
        var different = $(event.target).closest("div").is("#answer_right_d");
        
        if (!(same) && !(different)){
            $(document).one("click", keyPressHandler_discrim);
            
        } else {
            var userAnswer = same? 0: 1;      
        
        experiment.data.condition.push(current_trial.condition);
        experiment.data.trial.push(current_trial.trial);  
        experiment.data.tri_type.push(current_trial.trial_type);
        experiment.data.item.push(current_trial.item);  
        experiment.data.concept_val.push(current_trial.concept_val);
       
        experiment.data.sound_val.push(current_trial.sound_val);
            
        experiment.data.correct.push(current_trial.correct);
        experiment.data.sameDiff.push(current_trial.sameDiff);
        experiment.data.answer.push(userAnswer);
        experiment.data.experiment.push(current_trial.experiment);
                
        // Wait 500 milliseconds before starting the next trial.
        setTimeout(experiment.next, 200);
          
        $('#word_l').empty(); 
        $('#word_r').empty();
        
      }
    };
   
    setTimeout(function(){
    $(document).one("click", keyPressHandler_discrim);
    }, 1500);
    
        
    
        
    }
        
       
 else if (current_trial.trial_type == "Train" || current_trial.trial_type == "Train_pre" ) 
    {
        
        var current_concept_l= current_trial.concept_l;
        var current_concept_r= current_trial.concept_r;      
        var current_sound= current_trial.sound;
      

        
    showSlide("stage");
      
    
    //The following is how/when the sounds and objects are played/shown
    ///////////////////////////////////////////////////////////////////
   // $("#pic_left").html($empty_l);
    //$("#pic_right").html($empty_r);
        
    //$("#pic_alien").html($alien[0]);
        
    //play the first sound
    
    current_sound.get(0).play();
        
    $("#instruct_dynamic").html("Listen carefully!"); 
        
        
    current_sound.get(0).ontimeupdate = function() {
      $('#word_left').empty();  
      $('#word_right').empty();
      
      var category_l = current_concept_l.category;
      var prop1 = current_concept_l.prop;
    //var prop2 = 1 - prop1
      var prop2 = 0.5;
      var colo1 = current_concept_l.col1;
      var col = "#ffffff"
    
      var categ_l = new Ecosystem.Genus(category_l, {col1:colo1, col2:colo1, col3:colo1, tar1:1, tar2:0 });
        
      categ_l.draw('word_left', {prop1:prop1, prop2: prop2,col1:colo1, col2:colo1,col3:colo1,col4:colo1,tar1:0, tar2:0, tar3:0}, 1)
      
       //$("#pic_alien").html($alien[1]);
        
      showCurrent(this);
        var cur_time = this.currentTime;
        var duration = this.duration;
        
        if (cur_time > duration/2 ){
            
          $('#word_left').empty();
          //$("#pic_alien").html($alien[0]);
            
          $('#word_right').empty();
        
          var category_r = current_concept_r.category;
          var prop1 = current_concept_r.prop;
          var prop2 = 0.5
    //var prop2 = 1 - prop1
          var colo1 = current_concept_r.col1;
          var col = "#ffffff"
    
          var categ_r = new Ecosystem.Genus(category_r, {col1:colo1, col2:colo1, col3:colo1, tar1:1, tar2:0 });
    
          categ_r.draw('word_right', { 
                                prop1:prop1, prop2: prop2,
                                col1:colo1, col2:colo1, col3:colo1, col4:colo1,
                                tar1:0, tar2:0, tar3:0}, 0.5);
        
          // $("#pic_right").html(current_concept_r); 
          //$("#pic_alien").html($alien[1]);
         
        }
    
    };
        
    current_sound.one('ended', function() {

        
    $('#word_right').empty();
    //$("#pic_alien").html($alien[0]); 
    //var inst_dyn = ""
    
   // $("#instruct_dynamic").html("Press S for Same or D for different!");  
    
        
    });
    
   
    
    // Get the current time so we can compute reaction time later.
    var startTime = (new Date()).getTime();
        
    /*
    var keyPressHandler_train = function(event) {
        
    var keyCode = event.which;
    
    if (keyCode != 32) {
        // If a key that we don't care about is pressed, re-attach the handler (see the end of this script for more info)
        $(document).one("keydown", keyPressHandler_train);
        
      } else {    
        // Wait 500 milliseconds before starting the next trial.
        setTimeout(experiment.next, 500);
        $('#word_left').empty();
        $('#word_right').empty();
        
      }
    };
    
    */
        
    
     setTimeout(experiment.next, 4000);
    
        
    }
        
       

      
    else if (current_trial.trial_type == "Test" || current_trial.trial_type == "Test_pre" ) 
        
    {
        
        var current_concept_l= current_trial.concept_l;
        var current_concept_r= current_trial.concept_r;
      
        var current_sound= current_trial.sound;
        
        
    showSlide("Testing");
      
        
    //The following is how/when the sounds and objects are played/shown
    ///////////////////////////////////////////////////////////////////
        
    //$("#pic_alienT").html($alien[0]);
        
    //play the first sound
    current_sound.get(0).play();
        
    //while the first sound is playing, show the first object and hide the second object!
    current_sound.on('playing', function() {
        
    $('#word_l').empty(); 
    $('#word_r').empty(); 
        
    var category_l = current_concept_l.category;
    var category_r = current_concept_r.category;
        
    var colo1_l = current_concept_l.col1;
    var colo1_r = current_concept_r.col1;   
        
    var categ_l = new Ecosystem.Genus(category_l, {col1:colo1_l, col2:colo1_l, col3:colo1_l, tar1:1, tar2:0 });
        
    var categ_r = new Ecosystem.Genus(category_r, {col1:colo1_r, col2:colo1_r, col3:colo1_r, tar1:1, tar2:0 });
        
    var prop1_l = current_concept_l.prop;
    var prop2_l = 0.5
    //var prop2_l = 1 - prop1_l
    
    var prop1_r = current_concept_r.prop;
    var prop2_r = 0.5    
    //var prop2_r = 1 - prop1_r
    var col = "#ffffff"
    
    categ_l.draw('word_l', { 
                                prop1:prop1_l, prop2: prop2_l,
                                col1:colo1_l, col2:colo1_l, col3:colo1_l,
                                col4:colo1_l,
                                tar1:0, tar2:0, tar3:0
                                }, 0.5);
        
    categ_r.draw('word_r', { 
                                prop1:prop1_r, prop2: prop2_r,
                                col1:colo1_r, col2:colo1_r, col3:colo1_r,
                                col4:colo1_r,
                                tar1:0, tar2:0, tar3:0
                                }, 0.5);
    
        
   // $("#pic_alienT").html($alien[1]); 
        
    });
    
    //When the first sound ends, hide the first object and play the second sound
    current_sound.on('ended', function() {
        
    //$("#pic").html($empty_l);
    //$("#pic_alienT").html($alien[0]);  
        
    });
 
    // Get the current time so we can compute reaction time later.
    var startTime = (new Date()).getTime();
        
    var keyPressHandler_word = function(event) {
        
    var same = $(event.target).closest("div").is("#word_l");
        var different = $(event.target).closest("div").is("#word_r");
        
        if (!(same) && !(different)){
            $(document).one("click", keyPressHandler_word);
            
        } else {
            var userAnswer = same? 0: 1;      
        
  
        
        experiment.data.condition.push(current_trial.condition);
        experiment.data.trial.push(current_trial.trial);  
        experiment.data.tri_type.push(current_trial.trial_type);
        experiment.data.item.push(current_trial.item);  
        experiment.data.concept_val.push(current_trial.concept_val);
        experiment.data.sound_val.push(current_trial.sound_val);
        experiment.data.answer.push(userAnswer);
        experiment.data.correct.push(current_trial.correct);
        experiment.data.sameDiff.push(current_trial.sameDiff);
        experiment.data.experiment.push(current_trial.experiment);
                
        // Wait 500 milliseconds before starting the next trial.
        setTimeout(experiment.next, 1000);
          
        $('#word_l').empty(); 
        $('#word_r').empty();
        
      }
    };
   
    setTimeout(function(){
    $(document).one("click", keyPressHandler_word);
    }, 500);
    
        
    
    }
      
    else {
          
           showSlide("Task_instructions");
            $("#MyTask").html(MyInstruct
                             [current_trial.trial_type]);
            //$("#continuum").html($empty_l);
          
      }
  }    
    
  }

