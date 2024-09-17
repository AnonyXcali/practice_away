class _MyCalendarTwo {
  events: EventNode | null

  check(start: number, end: number, oldEvents: Array<EventNode>): boolean {
    let flagCount: number = 2

    for(let i = 0; i < oldEvents.length; i += 1) {
      let eventStart: number = oldEvents[i].start
      let eventEnd: number = oldEvents[i].end
      let flags = (start > eventStart && start < eventEnd)
      || (end > eventStart && end <= eventEnd)
      || eventStart > start && eventEnd < end

      if(flags) {
        flagCount -= 1
        if(flagCount === 0) {
          return false
        }
      }
    }

    return true
  }

  rangeCheck(newEvent: EventNode, oldEvent: EventNode) {
    if(!oldEvent) return false
    
    if(newEvent.start < oldEvent.start) {
      if(this.check(newEvent.start, newEvent.end, oldEvent.similar)) {
        if(!oldEvent.left) {
          oldEvent.left = newEvent
          return true
        }

        if(oldEvent.similar.length < 2) {
          oldEvent.similar.push(newEvent)
          return true
        }
        
        return this.rangeCheck(newEvent, oldEvent.left)
      }
    } else {
      //we would check if the current event starts at the same time
      //this allows for 1 double booking.

      if(newEvent.start === oldEvent.start) {
        //if there is space we can add to events array
        if(oldEvent.similar.length < 2) {
          oldEvent.similar.push(newEvent)
          return true
        }
        return false
      }

      //should I push if there is space?

      if(this.check(newEvent.start, newEvent.end, oldEvent.similar)) {
        if(!oldEvent.right) {
          oldEvent.right = newEvent
          return true
        }

        //what if there is space and we can accomodate it.
        if(oldEvent.similar.length < 2) {
          oldEvent.similar.push(newEvent)
          return true
        }

        return this.rangeCheck(newEvent, oldEvent.right)
      }
    }

    return false
  }
  
  book(start: number, end: number) {
    let event: EventNode = new EventNode(start, end)
    event.pushToSimilar(event)
    if(!this.events) {
      this.events = event
      return true
    }

    return this.rangeCheck(event, this.events)
  }
}

class _EventNode {
  start: number;
  end: number;
  similar: EventNode[];
  left: EventNode | null;
  right: EventNode | null;

  constructor(start: number, end: number) {
    this.start = start
    this.end = end
    this.left = null
    this.right = null
  }

  pushToSimilar(node: EventNode) {
    this.similar.push(node)
  }
}