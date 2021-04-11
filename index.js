const { ShardingManager } = require('discord.js')
const config = require('./config.json')

const shards = new ShardingManager("./shard.js", {
    token: config.token,
    totalShards: "auto"
})

shards.on("shardCreate", async (shard) => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Shards #${shard.id}`)
})

shards.spawn(shards.totalShards, 10000)