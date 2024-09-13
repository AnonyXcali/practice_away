class Twitter {
  constructor() {
    this.users = new Map()
    this.tweets = []
  }

  postTweet(userId, tweetId) {
    this.createUserIfNeeded(userId)
    this.tweets.unshift(new Tweet(userId,tweetId))
  }

  getNewsFeed(userId) {
    let result = []
    let index = 0
    let user = this.users.get(userId)
    console.log("user", user)
    while(index<this.tweets.length && result.length <10) {
      if(user.following.has(this.tweets[index].userId)) {
        result.push(this.tweets[index].tweetId)
      }
      index++
    }
    return result
  }

  follow(followerId, followeeId) {
    this.createUserIfNeeded(followerId)
    this.createUserIfNeeded(followeeId)
    this.users.set(followerId, {
      ...this.users.get(followerId),
      following: new Set([...this.users.get(followerId).following, followeeId])
    })
  }

  unfollow(followerId, followeeId) {
    this.createUserIfNeeded(followerId)
    this.createUserIfNeeded(followeeId)
    let follower = this.users.get(followerId)
    follower.following.delete(followeeId)
  }

  createUserIfNeeded(userId) {
    if(!this.users.get(userId)) {
      this.users.set(userId, new UserEntity(userId))
    }
  }
}


class UserEntity {
  constructor(id) {
    this.userId = id
    this.following = new Set()
    this.following.add(id)
  }
}

class Tweet {
  constructor(id, tweetId) {
    this.userId = id
    this.tweetId = tweetId
  }
}