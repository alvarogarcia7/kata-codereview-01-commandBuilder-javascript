function buildCommand(commandNameAndArguments){
	if(!commandNameAndArguments){
		return {};
	}
	var parameters = "";
	if(commandNameAndArguments.length > 0){
		for (var i = 0; i < commandNameAndArguments.length; i++) {
			if(i === 0){
				parameters += commandNameAndArguments[i];
			} else if(i === 1){
				parameters += ":"+commandNameAndArguments[i];
			} else if(i === commandNameAndArguments.length - 1){
				parameters += "-"+commandNameAndArguments[i];
			} else {
				parameters += "-"+commandNameAndArguments[i];
			}
		};
	}
	return "["+parameters+"]";
}