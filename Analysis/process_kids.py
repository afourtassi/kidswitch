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

ExpN="Norming_kids"
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
    condition=cur_json["data"]["data"]["condition"]
    distance=cur_json["data"]["data"]["dist"]
    item=cur_json["data"]["data"]["item"]
    sameDiff=cur_json["data"]["data"]["sameDiff"]
    answer=cur_json["data"]["data"]["answer"]
    native=cur_json["data"]["brief"]["native"]
    gender=cur_json["data"]["brief"]["gender"]
    age=cur_json["data"]["brief"]["age"]

    trials=cur_json["data"]["data"]["tri_number"]
    for i in range(len(trials)):
        if distance[i]=='':
	    distance[i]='NA'
	if item =='':
	    item='NA'
	if distance=='':
	    distance='NA'

        print 'subject_'+str(subjN), tri_type[i], condition[i], distance[i], item[i], sameDiff[i], answer[i], native[0], gender[0], age[0]

    
