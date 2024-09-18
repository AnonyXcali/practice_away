"use strict";
class _MyCalendarTwo {
    check(start, end, oldEvents) {
        let flagCount = 2;
        for (let i = 0; i < oldEvents.length; i += 1) {
            let eventStart = oldEvents[i].start;
            let eventEnd = oldEvents[i].end;
            let flags = (start > eventStart && start < eventEnd)
                || (end > eventStart && end <= eventEnd)
                || eventStart > start && eventEnd < end;
            if (flags) {
                flagCount -= 1;
                if (flagCount === 0) {
                    return false;
                }
            }
        }
        return true;
    }
    rangeCheck(newEvent, oldEvent) {
        if (!oldEvent)
            return false;
        if (newEvent.start < oldEvent.start) {
            if (this.check(newEvent.start, newEvent.end, oldEvent.similar)) {
                if (!oldEvent.left) {
                    oldEvent.left = newEvent;
                    return true;
                }
                if (oldEvent.similar.length < 2) {
                    oldEvent.similar.push(newEvent);
                    return true;
                }
                return this.rangeCheck(newEvent, oldEvent.left);
            }
        }
        else {
            //we would check if the current event starts at the same time
            //this allows for 1 double booking.
            if (newEvent.start === oldEvent.start) {
                //if there is space we can add to events array
                if (oldEvent.similar.length < 2) {
                    oldEvent.similar.push(newEvent);
                    return true;
                }
                return false;
            }
            //should I push if there is space?
            if (this.check(newEvent.start, newEvent.end, oldEvent.similar)) {
                if (!oldEvent.right) {
                    oldEvent.right = newEvent;
                    return true;
                }
                //what if there is space and we can accomodate it.
                if (oldEvent.similar.length < 2) {
                    oldEvent.similar.push(newEvent);
                    return true;
                }
                return this.rangeCheck(newEvent, oldEvent.right);
            }
        }
        return false;
    }
    book(start, end) {
        let event = new EventNode(start, end);
        event.pushToSimilar(event);
        if (!this.events) {
            this.events = event;
            return true;
        }
        return this.rangeCheck(event, this.events);
    }
}
class _EventNode {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.left = null;
        this.right = null;
    }
    pushToSimilar(node) {
        this.similar.push(node);
    }
}
