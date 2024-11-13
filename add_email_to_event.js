// If it's your primary google calendar, use your email as ID
const calendarId = 'c83521122473437fe64839381d0070bd17d0ff7f15b66802a02afd2cb715293b@group.calendar.google.com'
// How to get event ID:
// 1. Open event editor in Calendar Web UI
// 2. Paste here the last part of the URL after "...eventedit/"
const eventId_encoded = 'MjNhYm5ia2kyMzhubDdoZ2tlcGE2czk0cjEgYzgzNTIxMTIyNDczNDM3ZmU2NDgzOTM4MWQwMDcwYmQxN2QwZmY3ZjE1YjY2ODAyYTAyYWZkMmNiNzE1MjkzYkBn'

const eventId = Utilities.newBlob(Utilities.base64Decode(eventId_encoded)).getDataAsString().split(' ')[0]


// Email column number in the form responses Google Sheet
const emailColumnId = 2

function addEmailToEvent(email) {
    var event = Calendar.Events.get(calendarId, eventId);
    if (event.attendees) {
        event.attendees.push({
            email: email
        });
    } else {
        event.attendees = new Array({ email: email });
    }
}

function addEventGuests() {
    var sheet = SpreadsheetApp.getActiveSheet()
    var email = sheet.getDataRange().getCell(sheet.getLastRow(), emailColumnId).getValue();
    addEmailToEvent(email);
}

function test_addEmailToEvent() {
    addEmailToEvent('sometestemail9890@gmail.com');
}