var resources = function(payload,callback){
  console.log(payload)
  if (payload.channel_name === 'project_managets') {
    this.respond("Drive: https://drive.google.com/open?id=0B_oM8kBUTj-BRFFkRVlFczZPa3M"
                  + "Client Database: https://airtable.com/shrNPTSCLWcnJ94Gv")
  } else {
    this.respond("No resources for this channel.")
  }
}


// REGISTER COMMAND
resources.command = 'resources'
module.exports = resources