class MyCalendarTwo {
  events: number[][]
  doubleEvent: number[][]

  book(start: number, end: number) {
    for(let [dStart, dEnd] of this.doubleEvent) {
      if(Math.max(start, dStart) < Math.min(end, dEnd)) {
        return false
      }
    }

    for(let [dStart, dEnd] of this.events) {
      if(Math.max(start, dStart) < Math.min(end, dEnd)) {
        this.doubleEvent.push([Math.max(start, dStart), Math.min(end, dEnd)])
      }
    }

    this.events.push([start, end])
    return true
  }
}

