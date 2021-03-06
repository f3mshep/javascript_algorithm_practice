// Your company built an in -house calendar tool called HiCal.You want to add
// a feature to see the times in a day when everyone is available.

// To do this, you’ll need to know when any team is having a meeting.In HiCal,
// a meeting is stored as objects ↴ with integer properties startTime and
// endTime. These integers represent the number of 30 - minute blocks past 9: 00am.

// For example:

// { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
// { startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

// Write a function mergeRanges() that takes an array of multiple meeting time
// ranges and returns an array of condensed ranges.

// For example, given:

// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 5 },
//   { startTime: 4, endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9, endTime: 10 },
// ]

// your function would return:

// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]

function mergeRange(meetings){
  let mergedMeetings = [];
  let index = 1;
  let activeMeeting = meetings[0];
  let currentMeeting;
  meetings.sort((left, right)=> left.startTime - right.startTime);
  while (index < meetings.length){
    currentMeeting = meetings[index];
    if (!canMerge(activeMeeting, currentMeeting)){
      mergedMeetings.push(activeMeeting);
      activeMeeting = currentMeeting;
    }
    else{
      activeMeeting = mergeMeeting(activeMeeting, currentMeeting)
    }
    index ++
  }
  if (canMerge(currentMeeting, activeMeeting)) {
    mergedMeetings.push(mergeMeeting(currentMeeting, activeMeeting));
  }
  return mergedMeetings
};

function canMerge(left, right){
  if(left.endTime == right.startTime){
    return true;
  }
  if(left.startTime >= right.startTime && left.startTime <= right.endTime){
    return true
  }
  if(right.startTime >= left.startTime && right.startTime <= left.endTime){
    return true;
  }
  return false;
}

function mergeMeeting(left, right){
  let newMeeting = {};
  newMeeting.startTime = Math.min(left.startTime, right.startTime)
  newMeeting.endTime = Math.max(right.endTime, left.endTime)
  return newMeeting;
}

console.log(mergeRange([
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
]
))