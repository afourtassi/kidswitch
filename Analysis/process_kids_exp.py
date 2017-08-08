import os
import sys
import shutil
import numpy
from optparse import OptionParser
import random
from math import *
import glob
import pprint
import json

ExpN="rawdata_kids_pilot1"
subjN=0
myFiles= glob.glob("../Raw_data/"+ExpN+"/*json")
for f in myFiles:
    file_name=f.split('.')[0]
    cur=open(f,'r')
    cur_json=json.load(cur)
    subjN=subjN+1

#extract info
    #kid_id=file_name
    tri_type=cur_json["data"]["data"]["tri_type"]
    experiment=cur_json["data"]["data"]["experiment"]
    condition=cur_json["data"]["data"]["condition"]
    sound_dist=cur_json["data"]["data"]["sound_val"]
    concept_dist=cur_json["data"]["data"]["concept_val"]
    item=cur_json["data"]["data"]["item"]
    sameDiff=cur_json["data"]["data"]["sameDiff"]
    answer=cur_json["data"]["data"]["answer"]
    correct=cur_json["data"]["data"]["correct"]
    native=cur_json["data"]["brief"]["native"]
    gender=cur_json["data"]["brief"]["gender"]
    age=cur_json["data"]["brief"]["age"]

    trials=cur_json["data"]["data"]["trial"]
    for i in range(len(trials)):
        if concept_dist[i]=='':
	    concept_dist[i]='NA'
	if sound_dist[i]=='':
            sound_dist[i]='NA'
	if sameDiff[i] =='':
	    sameDiff[i]='NA'
	if correct[i]=='':
	    correct[i]='NA'
	if trials[i]=='':
	    trials[i]='NA'

        print 'subject_'+str(subjN), tri_type[i], condition[i], trials[i], sound_dist[i], concept_dist[i], item[i], sameDiff[i], answer[i], correct[i], native[0], gender[0], age[0]

    
