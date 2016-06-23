var resources = function(payload,callback){
  console.log(payload)
  if (payload.channel_id === 'G1KGG7JTT') {
    callback(null, "Drive: https://drive.google.com/open?id=0B_oM8kBUTj-BRFFkRVlFczZPa3M"
                  + "Client Database: https://airtable.com/shrNPTSCLWcnJ94Gv")
  } else {
    callback(null, "No resources for this channel.")
  }
}


// REGISTER COMMAND
resources.command = 'resources'
module.exports = resources